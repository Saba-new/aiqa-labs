import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sendContactForm } from '../../api/index.js'

const ROLES = [
  { title: 'Senior IoT Solutions Engineer', dept: 'Engineering', type: 'Full-time', location: 'Chennai, India', desc: 'Design and implement end-to-end IoT architectures — from embedded firmware and edge devices to cloud data pipelines. You will own system design, protocol selection (MQTT, OPC-UA, CoAP), and ensure scalable, reliable deployments for enterprise clients.', skills: ['Embedded C / C++', 'MQTT / OPC-UA', 'AWS IoT / Azure IoT', 'Node.js', 'Docker'] },
  { title: 'AI / ML Engineer', dept: 'Data & AI', type: 'Full-time', location: 'Chennai, India · Remote', desc: 'Build production-grade machine learning models for predictive maintenance, anomaly detection, and NLP extraction. Work with real industrial sensor data, fine-tune transformers, and integrate models into live product pipelines.', skills: ['Python', 'PyTorch / TensorFlow', 'MLOps', 'FastAPI', 'Time-series modeling'] },
  { title: 'Full Stack Product Engineer', dept: 'Engineering', type: 'Full-time', location: 'Chennai, India', desc: 'Own features from design to deploy. Work across React frontends and Node/Python backends, build real-time dashboards, integrate with IoT data streams, and ship product increments every sprint.', skills: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'REST / GraphQL'] },
  { title: 'Digital Twin Specialist', dept: 'Innovation', type: 'Full-time', location: 'Chennai, India', desc: 'Model physical systems as digital twins for manufacturing and energy clients. Combine simulation, IoT telemetry, and visualization to create real-time virtual counterparts that drive operational decisions.', skills: ['Unity / Unreal', '3D modeling', 'IoT integration', 'Python', 'Data visualization'] },
  { title: 'Product Designer (UI/UX)', dept: 'Design', type: 'Full-time', location: 'Chennai, India · Hybrid', desc: 'Shape the experience of complex industrial and enterprise software products. Translate ambiguous requirements into clean, functional interfaces — dashboards, control panels, data-heavy workflows — that users actually enjoy.', skills: ['Figma', 'Design systems', 'Prototyping', 'User research', 'Motion design'] },
  { title: 'DevOps & Cloud Infrastructure Engineer', dept: 'Infrastructure', type: 'Full-time', location: 'Remote', desc: 'Build and maintain the infrastructure backbone across AWS and Azure for multi-tenant SaaS and IoT platforms. Implement CI/CD pipelines, security hardening, observability stacks, and infrastructure-as-code.', skills: ['Terraform', 'Kubernetes', 'AWS / Azure', 'GitHub Actions', 'Prometheus / Grafana'] },
]

const PERK_ICONS = [
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
]

const PERKS = [
  { title: 'Work on Real Products', desc: 'No filler projects. You own a vertical and ship things that go into production for real enterprise clients from day one.' },
  { title: 'Deep Domain Learning', desc: "AIQA spans FinTech, Healthcare, Manufacturing, and Smart Home. You'll develop expertise that generic agencies can't offer." },
  { title: 'Flexible Work', desc: 'Hybrid and remote-friendly roles. We judge output, not where you sit. Async-first culture with clear ownership.' },
  { title: 'Fast Growth Track', desc: 'Flat hierarchies, early ownership, and a fast-growing company. If you perform, the path upward is short.' },
  { title: 'Collaborative Culture', desc: 'Small, senior teams. No siloed handoffs. Engineers talk to clients, designers ship code, PMs write specs.' },
  { title: 'Competitive Compensation', desc: 'Market-leading salaries, performance bonuses, and equity participation for senior roles.' },
]

function ApplyModal({ role, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await sendContactForm({ ...form, subject: `Job Application: ${role}`, message: form.message || '(No cover note provided)' })
      toast.success('Application submitted successfully!')
      onClose()
    } catch {
      toast.error('Failed to submit. Please try again.')
    }
    setLoading(false)
  }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
        style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
          onClick={e => e.stopPropagation()}
          style={{ background: 'var(--tc-bg2)', border: '1px solid var(--tc-border2)', borderRadius: 8, padding: '40px', width: '100%', maxWidth: 460, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, var(--tc-gold), transparent)' }} />
          <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 18, background: 'none', border: 'none', color: 'var(--tc-muted)', fontSize: '1.4rem', cursor: 'pointer', lineHeight: 1 }}>×</button>
          <div className="tc-label" style={{ marginBottom: 8 }}>Apply Now</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--tc-text)', marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>{role}</h3>
          <p className="tc-body" style={{ fontSize: '0.8rem', marginBottom: 28 }}>Fill in your details and we'll get back to you within 2 business days.</p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[{ label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
              { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+91 00000 00000' }].map(f => (
              <div key={f.name}>
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--tc-muted)', marginBottom: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{f.label}</label>
                <input type={f.type} name={f.name} value={form[f.name]} placeholder={f.placeholder} required onChange={e => setForm({ ...form, [e.target.name]: e.target.value })} />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--tc-muted)', marginBottom: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Cover Note</label>
              <textarea name="message" value={form.message} rows={4} placeholder="Tell us briefly why you're a great fit..." onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
            </div>
            <button type="submit" disabled={loading} className="tc-btn-primary" style={{ marginTop: 8, width: '100%', justifyContent: 'center', opacity: loading ? 0.6 : 1 }}>
              {loading ? 'Submitting…' : 'Submit Application'}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function RoleCard({ role, index, onApply }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}
      style={{ border: `1px solid ${open ? 'var(--tc-border2)' : 'var(--tc-border)'}`, borderRadius: 6, overflow: 'hidden', background: open ? 'var(--tc-surface)' : 'transparent', transition: 'all 0.3s', position: 'relative' }}>
      {open && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--tc-gold), transparent)' }} />}
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 18, textAlign: 'left' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tc-gold)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--tc-text)', marginBottom: 5 }}>{role.title}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.68rem', color: 'var(--tc-gold)', fontWeight: 600, background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', padding: '2px 9px', borderRadius: 3 }}>{role.dept}</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--tc-muted)', background: 'var(--tc-surface)', padding: '2px 9px', borderRadius: 3, border: '1px solid var(--tc-border)' }}>{role.type}</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--tc-muted)' }}>📍 {role.location}</span>
          </div>
        </div>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          style={{ color: open ? 'var(--tc-gold)' : 'var(--tc-muted)', fontSize: '1.4rem', fontWeight: 300, flexShrink: 0 }}>+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}>
            <div style={{ padding: '0 28px 28px', borderTop: '1px solid var(--tc-border)', paddingTop: 20 }}>
              <p className="tc-body" style={{ fontSize: '0.875rem', marginBottom: 18 }}>{role.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
                {role.skills.map((s, si) => (
                  <span key={si} style={{ fontSize: '0.68rem', padding: '3px 10px', borderRadius: 3, background: 'var(--tc-surface2)', border: '1px solid var(--tc-border)', color: 'var(--tc-muted)', fontWeight: 600 }}>{s}</span>
                ))}
              </div>
              <button onClick={() => onApply(role.title)} className="tc-btn-secondary" style={{ fontSize: '0.82rem', padding: '9px 20px' }}>
                Apply for this role →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function CareersC() {
  const navigate = useNavigate()
  const [applyRole, setApplyRole] = useState(null)

  return (
    <div className="tc">
      {/* HERO */}
      <section className="tc-hero" style={{ minHeight: '65vh', alignItems: 'flex-start', paddingTop: 160 }}>
        <div className="tc-grain" />
        <div className="tc-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: 720 }}>
            <div className="tc-label" style={{ marginBottom: 24 }}>We're Hiring</div>
            <h1 className="tc-h1" style={{ marginBottom: 24 }}>
              Build the Future of<br />
              <span className="tc-gradient">Intelligent Technology.</span>
            </h1>
            <p className="tc-body" style={{ maxWidth: 540, marginBottom: 36, fontSize: '1.05rem' }}>
              At AIQA Labs, we're a team of engineers, designers, and domain experts building IoT platforms, AI systems, and enterprise software that transforms how industries operate.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="tc-btn-primary" onClick={() => document.getElementById('tc-open-roles').scrollIntoView({ behavior: 'smooth' })}>See Open Roles</button>
              <button className="tc-btn-secondary" onClick={() => navigate('/theme-c/about')}>About AIQA</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
            {[{ val: '9+', label: 'Years of Innovation' }, { val: '10+', label: 'Industries Served' }, { val: '50+', label: 'Products Shipped' }, { val: '100%', label: 'Remote-Friendly Roles' }].map((s, i) => (
              <div key={i}>
                <div className="tc-stat-value" style={{ fontSize: '2rem' }}>{s.val}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--tc-muted)', marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="tc-divider" />

      {/* WHY AIQA */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>Life at AIQA</div>
            <h2 className="tc-h2">Why Engineers Choose AIQA</h2>
          </motion.div>
          <div className="tc-grid-3">
            {PERKS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="tc-card" style={{ padding: '28px 24px' }}>
                <div className="tc-card-gold-line" />
                <div style={{ width: 40, height: 40, borderRadius: 6, background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: 'var(--tc-gold)' }}>{PERK_ICONS[i]}</div>
                <h3 className="tc-h3" style={{ fontSize: '1rem', marginBottom: 10 }}>{p.title}</h3>
                <p className="tc-body" style={{ fontSize: '0.85rem' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="tc-divider" />

      {/* OPEN ROLES */}
      <section id="tc-open-roles" className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>Open Positions</div>
            <h2 className="tc-h2">Current Openings</h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {ROLES.map((role, i) => <RoleCard key={i} role={role} index={i} onApply={setApplyRole} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tc-section" style={{ paddingTop: 0 }}>
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="tc-card" style={{ padding: '48px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <div className="tc-card-gold-line" />
            <div>
              <h3 className="tc-h2" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', marginBottom: 10 }}>Don't see your role listed?</h3>
              <p className="tc-body" style={{ maxWidth: 460 }}>We're always open to exceptional talent. Send us your CV and a note on what you'd like to build.</p>
            </div>
            <button className="tc-btn-primary" onClick={() => setApplyRole('Open Application')} style={{ flexShrink: 0 }}>
              Send an open application →
            </button>
          </motion.div>
        </div>
      </section>

      {applyRole && <ApplyModal role={applyRole} onClose={() => setApplyRole(null)} />}
    </div>
  )
}
