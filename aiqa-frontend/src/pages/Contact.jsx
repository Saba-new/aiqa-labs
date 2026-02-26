import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sendContactForm } from '../api/index.js'
import contactLogo from '../assets/contactLogo.png'
import quoteIcon from '../assets/designIcon.png'

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await sendContactForm(formData)
      if (response.status === 200) {
        toast.success('Details submitted successfully.')
        setFormData({ name: '', email: '', phone: '', message: '' })
      }
    } catch (error) {
      toast.error('Failed to submit the details. Please try again later.')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    { value: '9+', unit: 'Years', label: 'Experience', desc: 'Driving innovation in the tech industry.' },
    { value: '10+', unit: 'Industries', label: 'Served', desc: 'Empowering diverse sectors with technology.' },
  ]

  return (
    <>
      <section style={{ padding: '140px 10% 100px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />

        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ position: 'relative', zIndex: 1, marginBottom: 52 }}>
          <img src={contactLogo} alt="AIQA" style={{ height: 28, cursor: 'pointer', objectFit: 'contain' }} onClick={() => navigate('/')} />
        </motion.div>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', position: 'relative', zIndex: 1, alignItems: 'flex-start' }}>

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ flex: '1 1 320px' }}>
            <span className="cyber-tag" style={{ marginBottom: 24, display: 'inline-block' }}>Let's Connect</span>
            <h1 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
              Experience the full potential{' '}
              <span style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #07B4EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                of our platform.
              </span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.97rem', marginBottom: 36 }}>
              Schedule your personalized demo and unlock new possibilities with AIQA.
            </p>

            <div style={{ display: 'flex', gap: 0, marginBottom: 32, border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ flex: 1, padding: '20px 22px', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', background: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, background: 'linear-gradient(135deg,#fff 30%,#C4B5FD 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{s.unit} {s.label}</div>
                  <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.3)', marginTop: 5, lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <motion.div className="bento-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} style={{ maxWidth: 400 }}>
              <img src={quoteIcon} alt="" style={{ width: 34, marginBottom: 14, opacity: 0.75 }} />
              <blockquote style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontStyle: 'italic', fontSize: '0.9rem', marginBottom: 14 }}>
                "Built it, mastered it, and launched it seamlessly. This platform redefines simplicity and empowers everyone to excel."
              </blockquote>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.76rem', letterSpacing: '0.04em' }}>— A Satisfied Customer</div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="bento-card" style={{ flex: '1 1 360px', padding: 36 }}>
            <div className="section-label" style={{ marginBottom: 6 }}>Contact Form</div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: 28, lineHeight: 1.3 }}>
              <span style={{ background: 'linear-gradient(135deg,#8B5CF6,#07B4EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span>{' '}
              now to simplify and supercharge your business operations!
            </h2>

            <form onSubmit={handleSubmit}>
              {[
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your full name', required: true },
                { label: 'Business Email', name: 'email', type: 'email', placeholder: 'Enter Business Email', required: true },
                { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter Phone Number', required: true },
              ].map((field) => (
                <div key={field.name} style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 7, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {field.label}{field.required && <span style={{ color: '#f87171', marginLeft: 2 }}>*</span>}
                  </label>
                  <input
                    type={field.type} name={field.name} value={formData[field.name]}
                    onChange={handleChange} required={field.required} placeholder={field.placeholder}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 10, padding: '11px 15px', color: '#fff', fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(139,92,246,0.55)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.09)')}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 7, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} rows={4}
                  placeholder="Tell us about your project..."
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 10, padding: '11px 15px', color: '#fff', fontSize: '0.9rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(139,92,246,0.55)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.09)')}
                />
              </div>

              <button
                type="submit" disabled={loading} className="get-started-button"
                style={{ width: '100%', opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>

            <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <a href="mailto:contact@aiqa.co.in"
                style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.76rem', display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#8B5CF6')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contact@aiqa.co.in
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default Contact
