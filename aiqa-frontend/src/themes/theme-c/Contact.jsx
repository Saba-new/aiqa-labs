import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { sendContactForm } from '../../api'

const stats = [
  { value: '9+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '10+', label: 'Industries Served' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function ContactC() {
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
    <div className="tc">
      {/* HERO */}
      <section className="tc-hero" style={{ textAlign: 'center', minHeight: '50vh', paddingBottom: 0 }}>
        <div className="tc-grain" />
        <div className="tc-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tc-label" style={{ justifyContent: 'center', marginBottom: 24 }}>Get in Touch</div>
            <h1 className="tc-h1" style={{ marginBottom: 24 }}>
              Start the conversation.<br />
              <span className="tc-gradient">We're ready.</span>
            </h1>
            <p className="tc-body" style={{ maxWidth: 520, margin: '0 auto' }}>
              Whether you have a project in mind, a question about our services, or just want to explore possibilities — we're here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="tc-section" style={{ paddingTop: 40 }}>
        <div className="tc-container">
          <div className="tc-split" style={{ gap: 40, alignItems: 'start' }}>

            {/* LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* STATS */}
              <div className="tc-grid-2" style={{ gap: 14 }}>
                {stats.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="tc-card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                    <div className="tc-card-gold-line" />
                    <div className="tc-stat-value">{s.value}</div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tc-muted)', marginTop: 6 }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* QUOTE */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="tc-card" style={{ padding: '40px 36px' }}>
                <div className="tc-card-gold-line" />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', lineHeight: 0.8, color: 'rgba(212,175,55,0.15)', marginBottom: 16 }}>"</div>
                <p style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.75)', lineHeight: 1.8, fontStyle: 'italic' }}>
                  We're more than a service provider — we're your strategic technology partner, committed to building solutions that genuinely move the needle.
                </p>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--tc-border)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--tc-gold)' }}>AIQA Labs Team</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--tc-lite)', marginTop: 4 }}>On every engagement</div>
                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="tc-card" style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '22px 28px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--tc-gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--tc-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Email us</div>
                  <a href="mailto:info@aiqalabs.com" style={{ color: 'var(--tc-text)', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>info@aiqalabs.com</a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — FORM */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="tc-card" style={{ padding: '44px 36px' }}>
              <div className="tc-card-gold-line" />
              <h2 className="tc-h3" style={{ fontSize: '1.4rem', marginBottom: 8 }}>Send us a message</h2>
              <p className="tc-body" style={{ fontSize: '0.875rem', marginBottom: 32 }}>We usually respond within 1 business day.</p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Jane Doe' },
                  { name: 'email', label: 'Email address *', type: 'email', placeholder: 'jane@company.com' },
                  { name: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+1 234 567 890' },
                ].map(f => (
                  <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--tc-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{f.label}</label>
                    <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange} />
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--tc-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Message *</label>
                  <textarea name="message" rows={5} placeholder="Tell us about your project..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" disabled={submitting} className="tc-btn-primary"
                  style={{ marginTop: 8, width: '100%', justifyContent: 'center', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
