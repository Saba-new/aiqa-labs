import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { sendContactForm } from '../../api'

const STATS = [
  { value: '9+', label: 'Years Experience', color: '#3B82F6' },
  { value: '50+', label: 'Projects Delivered', color: '#F59E0B' },
  { value: '10+', label: 'Industries Served', color: '#10B981' },
  { value: '100%', label: 'Client Satisfaction', color: '#06B6D4' },
]

export default function ContactA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) { toast.error('Please fill all required fields.'); return }
    setSubmitting(true)
    try {
      await sendContactForm(form)
      toast.success("Message sent! We'll be in touch soon.")
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally { setSubmitting(false) }
  }

  return (
    <div className="ta">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="ta-hero" style={{ minHeight: '50vh', paddingTop: 120 }}>
        <div className="ta-grid-bg" />
        <div className="ta-scan" />
        <div className="ta-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="ta-label" style={{ marginBottom: 20, justifyContent: 'center' }}>Get in Touch</div>
            <h1 className="ta-h1" style={{ marginBottom: 20 }}>
              Start the conversation.<br />
              <span className="ta-gradient">We're ready.</span>
            </h1>
            <p className="ta-body" style={{ maxWidth: 560, margin: '0 auto', fontSize: '1.05rem' }}>
              Whether you have a project in mind, a question about our services, or just want to explore possibilities — we're here.
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── CONTACT LAYOUT ───────────────────────────────── */}
      <section className="ta-section">
        <div className="ta-container">
          <div className="ta-split" style={{ gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'start' }}>

            {/* LEFT — Stats + info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="ta-grid-2" style={{ gap: 16 }}>
                {STATS.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="ta-card" style={{ padding: '24px', textAlign: 'center' }}
                  >
                    <div className="ta-card-accent" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.2rem', fontWeight: 900, background: `linear-gradient(135deg, ${s.color}, #E2E8F0)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="ta-card" style={{ padding: '32px', borderLeft: '3px solid #3B82F6' }}
              >
                <p style={{ fontSize: '1rem', color: 'rgba(226,232,240,0.75)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 20 }}>
                  "We're more than a service provider — we're your strategic technology partner, committed to building solutions that genuinely move the needle."
                </p>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#3B82F6' }}>// AIQA Labs Team</div>
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="ta-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'rgba(226,232,240,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Email us</div>
                  <a href="mailto:info@aiqalabs.com" style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>info@aiqalabs.com</a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="ta-card" style={{ padding: '36px' }}
            >
              <div className="ta-card-accent" />
              <h2 className="ta-h3" style={{ fontSize: '1.4rem', marginBottom: 6 }}>Send us a message</h2>
              <p className="ta-body" style={{ fontSize: '0.875rem', marginBottom: 28 }}>We usually respond within 1 business day.</p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Jane Doe' },
                  { name: 'email', label: 'Email address *', type: 'email', placeholder: 'jane@company.com' },
                  { name: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+1 234 567 890' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', fontWeight: 700, color: 'rgba(226,232,240,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{f.label}</label>
                    <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', fontWeight: 700, color: 'rgba(226,232,240,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Message *</label>
                  <textarea name="message" rows={5} placeholder="Tell us about your project..." value={form.message} onChange={handleChange} style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" disabled={submitting} className="ta-btn-primary" style={{ marginTop: 8, justifyContent: 'center', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
