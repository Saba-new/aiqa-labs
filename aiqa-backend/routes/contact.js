import express from 'express'
import { Resend } from 'resend'
import { body, validationResult } from 'express-validator'
import rateLimit from 'express-rate-limit'

const router = express.Router()
// Lazy-load Resend to ensure env vars are loaded first
let resend = null
const getResend = () => {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

// Rate limit for contact form — 20 submissions per 15 min per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Too many messages sent. Please try again in 15 minutes.' },
})

// ── Validation rules ──────────────────────────────────────────────────────
const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required.')
    .isLength({ max: 100 }).withMessage('Name must be under 100 characters.'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Please enter a valid email address.')
    .normalizeEmail(),
  body('phone')
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isLength({ max: 20 }).withMessage('Phone must be under 20 characters.'),
  body('subject')
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isLength({ max: 200 }).withMessage('Subject must be under 200 characters.'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required.')
    .isLength({ min: 2, max: 2000 }).withMessage('Message must be under 2000 characters.'),
]

// ── GET /api/contact/test - Test SMTP configuration ──────────────────────
router.get('/test', async (req, res) => {
  try {
    const config = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASS,
      receiver: process.env.CONTACT_RECEIVER_EMAIL
    }
    
    if (!config.host || !config.user || !config.hasPassword) {
      return res.status(500).json({ 
        error: 'SMTP not configured',
        config: { ...config, hasPassword: config.hasPassword }
      })
    }
    
    res.json({ success: true, message: 'SMTP appears configured', config })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── POST /api/contact ─────────────────────────────────────────────────────
router.post('/', contactLimiter, validateContact, async (req, res) => {
  // Check validation errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const { name, email, phone, message } = req.body
  const subject = req.body.subject || 'Website Enquiry'

  // Log the submission
  console.log('Contact Form Submission:', {
    name,
    email,
    phone: phone || '(not provided)',
    subject,
    message: message.substring(0, 100) + '...',
    timestamp: new Date().toISOString()
  })

  // Check if Resend is configured
  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️ RESEND_API_KEY not configured - skipping email sending')
    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been received! We will contact you soon.' 
    })
  }

  console.log('✓ Resend configured, preparing to send emails...')

  // Send response immediately - don't wait for email
  res.status(200).json({ 
    success: true, 
    message: 'Your message has been sent successfully!' 
  })

  // Send emails asynchronously using Resend (reliable HTTP API)
  console.log('Sending emails via Resend to:', {
    team: process.env.CONTACT_RECEIVER_EMAIL || 'k.sabarish2005@gmail.com',
    customer: email
  })
  
  const startTime = Date.now()
  
  Promise.all([
    // Email to team
    getResend().emails.send({
      from: 'AIQA Contact <onboarding@resend.dev>',  // Resend verified domain
      to: process.env.CONTACT_RECEIVER_EMAIL || 'k.sabarish2005@gmail.com',
      reply_to: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #AC6AFF;">New Contact Form Submission</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:8px; font-weight:bold; width:100px;">Name</td><td style="padding:8px;">${name}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px; font-weight:bold;">Phone</td><td style="padding:8px;">${phone}</td></tr>` : ''}
            <tr><td style="padding:8px; font-weight:bold;">Subject</td><td style="padding:8px;">${subject}</td></tr>
            <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Message</td>
                <td style="padding:8px; white-space:pre-wrap;">${message}</td></tr>
          </table>
          <hr style="margin-top:24px; border-color:#eee;" />
          <p style="font-size:12px; color:#888;">Sent from aiqa-labs.com contact form</p>
        </div>
      `,
    }),
    // Auto-reply to customer
    getResend().emails.send({
      from: 'AIQA Labs <onboarding@resend.dev>',
      to: email,
      subject: 'We received your message — AIQA Labs',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #AC6AFF;">Thanks for reaching out, ${name}!</h2>
          <p>We've received your message and will get back to you within 1-2 business days.</p>
          <blockquote style="border-left: 3px solid #AC6AFF; padding-left: 16px; color: #555;">
            <strong>Your message:</strong><br/>
            <em>${message}</em>
          </blockquote>
          <p style="margin-top:24px;">Best regards,<br/><strong>The AIQA Labs Team</strong></p>
        </div>
      `,
    })
  ])
  .then((results) => {
    const duration = Date.now() - startTime
    console.log(`✓ Both emails sent successfully in ${duration}ms`)
    console.log('Email IDs:', results.map(r => r.data?.id))
  })
  .catch(err => {
    const duration = Date.now() - startTime
    console.error(`✗ Email failed after ${duration}ms:`, {
      error: err.message,
      name: err.name,
      statusCode: err.statusCode
    })
    
    // Log form data so you don't lose it
    console.log('📋 Form data (email failed):', {
      from: email,
      name,
      phone: phone || 'N/A',
      subject,
      messagePreview: message.substring(0, 100)
    })
  })
})

export default router
