import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

console.log('Testing SMTP configuration...')
console.log('SMTP_HOST:', process.env.SMTP_HOST)
console.log('SMTP_PORT:', process.env.SMTP_PORT)
console.log('SMTP_USER:', process.env.SMTP_USER)
console.log('Has password:', !!process.env.SMTP_PASS)

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

console.log('\nAttempting to send test email...')

const testMail = {
  from: `"AIQA Test" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
  subject: 'Test Email from AIQA Backend',
  html: '<h2>Test successful!</h2><p>Email sending is working correctly.</p>',
}

try {
  const info = await transporter.sendMail(testMail)
  console.log('✓ Email sent successfully!')
  console.log('Message ID:', info.messageId)
  process.exit(0)
} catch (error) {
  console.error('✗ Email failed:')
  console.error('Error:', error.message)
  console.error('Code:', error.code)
  process.exit(1)
}
