import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sendContactForm } from '../../api/index.js'

const ROLES = [
  { title: 'Senior IoT Solutions Engineer', dept: 'Engineering', type: 'Full-time', location: 'Chennai, India', color: '#8B5CF6',
    desc: 'Design and implement end-to-end IoT architectures — from embedded firmware and edge devices to cloud data pipelines. You will own system design, protocol selection (MQTT, OPC-UA, CoAP), and ensure scalable, reliable deployments for enterprise clients.',
    skills: ['Embedded C / C++', 'MQTT / OPC-UA', 'AWS IoT / Azure IoT', 'Node.js', 'Docker'] },
  { title: 'AI / ML Engineer', dept: 'Data & AI', type: 'Full-time', location: 'Chennai, India · Remote', color: '#14B8A6',
    desc: 'Build production-grade machine learning models for predictive maintenance, anomaly detection, and NLP extraction. Work with real industrial sensor data, fine-tune transformers, and integrate models into live product pipelines.',
    skills: ['Python', 'PyTorch / TensorFlow', 'MLOps', 'FastAPI', 'Time-series modeling'] },
  { title: 'Full Stack Product Engineer', dept: 'Engineering', type: 'Full-time', location: 'Chennai, India', color: '#3B82F6',
    desc: 'Own features from design to deploy. Work across React frontends and Node/Python backends, build real-time dashboards, integrate with IoT data streams, and ship product increments every sprint.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'REST / GraphQL'] },
  { title: 'Digital Twin Specialist', dept: 'Innovation', type: 'Full-time', location: 'Chennai, India', color: '#EC4899',
    desc: 'Model physical systems as digital twins for manufacturing and energy clients. Combine simulation, IoT telemetry, and visualization to create real-time virtual counterparts that drive operational decisions.',
    skills: ['Unity / Unreal', '3D modeling', 'IoT integration', 'Python', 'Data visualization'] },
  { title: 'Product Designer (UI/UX)', dept: 'Design', type: 'Full-time', location: 'Chennai, India · Hybrid', color: '#8B5CF6',
    desc: 'Shape the experience of complex industrial and enterprise software products. Translate ambiguous requirements into clean, functional interfaces — dashboards, control panels, data-heavy workflows — that users actually enjoy.',
    skills: ['Figma', 'Design systems', 'Prototyping', 'User research', 'Motion design'] },
  { title: 'DevOps & Cloud Infrastructure Engineer', dept: 'Infrastructure', type: 'Full-time', location: 'Remote', color: '#14B8A6',
    desc: 'Build and maintain the infrastructure backbone across AWS and Azure for multi-tenant SaaS and IoT platforms. Implement CI/CD pipelines, security hardening, observability stacks, and infrastructure-as-code.',
    skills: ['Terraform', 'Kubernetes', 'AWS / Azure', 'GitHub Actions', 'Prometheus / Grafana'] },
]

const PERK_ICONS = [
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
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
      const res = await sendContactForm({ ...form, subject: `Job Application: ${role}`, message: form.message || '(No cover note provided)' })
      if (res.status === 200) { toast.success('Application submitted!'); onClose() }
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to submit. Please try again.')
    }
    setLoading(false)
  }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      >
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
          onClick={e => e.stopPropagation()}
          className="tb-card"
          style={{ padding: '40px', width: '100%', maxWidth: 480, position: 'relative', boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(139,92,246,0.2)' }}
        >
          <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(20,184,166,0.4), transparent)' }} />
          <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 18, background: 'none', border: 'none', color: 'rgba(248,250,252,0.3)', fontSize: '1.4rem', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,250,252,0.3)'}
          >×</button>

          <div className="tb-label" style={{ marginBottom: 8 }}>Apply Now</div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F8FAFC', marginBottom: 6 }}>{role}</h3>
          <p style={{ fontSize: '0.8rem', color: 'rgba(248,250,252,0.4)', marginBottom: 28 }}>Fill in your details and we'll get back to you within 2 business days.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[{ label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
              { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+91 00000 00000' }].map(f => (
              <div key={f.name}>
                <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'rgba(248,250,252,0.45)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{f.label} <span style={{ color: '#EC4899' }}>*</span></label>
                <input type={f.type} name={f.name} value={form[f.name]} required placeholder={f.placeholder}
                  onChange={e => setForm({ ...form, [e.target.name]: e.target.value })} />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'rgba(248,250,252,0.45)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Cover Note</label>
              <textarea name="message" value={form.message} rows={4} placeholder="Tell us briefly why you're a great fit..."
                onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
            </div>
            <button type="submit" disabled={loading} className="tb-btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px', opacity: loading ? 0.65 : 1 }}>
              {loading ? 'Submitting…' : 'Submit Application →'}
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
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07 }}
      className="tb-card" style={{ background: open ? `linear-gradient(135deg, ${role.color}08, transparent)` : undefined, borderColor: open ? `${role.color}30` : undefined }}
    >
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 18, textAlign: 'left' }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: role.color, flexShrink: 0, boxShadow: `0 0 10px ${role.color}` }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: 6 }}>{role.title}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.68rem', color: role.color, fontWeight: 700, background: `${role.color}12`, border: `1px solid ${role.color}25`, padding: '2px 10px', borderRadius: 100 }}>{role.dept}</span>
            <span style={{ fontSize: '0.68rem', color: 'rgba(248,250,252,0.4)', background: 'rgba(255,255,255,0.04)', padding: '2px 10px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.07)' }}>{role.type}</span>
            <span style={{ fontSize: '0.68rem', color: 'rgba(248,250,252,0.4)' }}>📍 {role.location}</span>
          </div>
        </div>
        <motion.span animate={{ rotate: open ? 45 : 0 }} style={{ color: open ? role.color : 'rgba(248,250,252,0.25)', fontSize: '1.4rem', fontWeight: 300, flexShrink: 0 }}>+</motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}>
            <div style={{ padding: '0 28px 28px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 20 }}>
              <p style={{ color: 'rgba(248,250,252,0.55)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 18 }}>{role.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
                {role.skills.map((s, si) => (
                  <span key={si} style={{ fontSize: '0.68rem', padding: '3px 10px', borderRadius: 100, fontWeight: 600, background: `${role.color}10`, border: `1px solid ${role.color}20`, color: role.color }}>{s}</span>
                ))}
              </div>
              <button onClick={() => onApply(role.title)} className="tb-btn-secondary" style={{ fontSize: '0.82rem' }}>
                Apply for this role →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function CareersB() {
  const navigate = useNavigate()
  const [applyRole, setApplyRole] = useState(null)

  return (
    <div className="tb">
      {/* HERO */}
      <section className="tb-hero" style={{ minHeight: 'auto', padding: '140px 0 90px' }}>
        <div className="tb-noise" />
        <div className="tb-orb tb-orb-violet" style={{ width: 500, height: 500, top: '-10%', right: '-5%' }} />
        <div className="tb-orb tb-orb-teal" style={{ width: 400, height: 400, bottom: '-10%', left: '-5%' }} />
        <div className="tb-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: 760 }}>
            <div className="tb-label" style={{ marginBottom: 20 }}>We're Hiring</div>
            <h1 className="tb-h1" style={{ marginBottom: 22 }}>
              Build the Future of<br />
              <span className="tb-gradient">Intelligent Technology.</span>
            </h1>
            <p className="tb-body" style={{ fontSize: '1.05rem', maxWidth: 560, marginBottom: 36 }}>
              At AIQA Labs, we're a team of engineers, designers, and domain experts building IoT platforms, AI systems, and enterprise software that transforms how industries operate. Join us if you want your work to matter.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="tb-btn-primary" onClick={() => document.getElementById('open-roles-b').scrollIntoView({ behavior: 'smooth' })}>See Open Roles →</button>
              <button className="tb-btn-secondary" onClick={() => navigate('/theme-b/about')}>About AIQA</button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: 48, marginTop: 64, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}
          >
            {[{ val: '9+', label: 'Years of Innovation' }, { val: '10+', label: 'Industries Served' }, { val: '50+', label: 'Products Shipped' }, { val: '100%', label: 'Remote-Friendly Roles' }].map((s, i) => (
              <div key={i}>
                <div className="tb-stat-value" style={{ fontSize: '2rem' }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(248,250,252,0.35)', marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* WHY AIQA */}
      <section className="tb-section" style={{ background: 'var(--tb-bg2)' }}>
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 52 }}>
            <div className="tb-label" style={{ marginBottom: 16 }}>Life at AIQA</div>
            <h2 className="tb-h2">Why Engineers Choose AIQA</h2>
            <p className="tb-body" style={{ maxWidth: 520, marginTop: 12 }}>We're not a body-shop or a consulting mill. We're a product-minded engineering team that ships real, high-complexity software.</p>
          </motion.div>
          <div className="tb-grid-3">
            {PERKS.map((perk, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="tb-card" style={{ padding: '28px 24px' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(20,184,166,0.08))', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#8B5CF6' }}>{PERK_ICONS[i]}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: 10 }}>{perk.title}</div>
                <p className="tb-body" style={{ fontSize: '0.85rem' }}>{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* OPEN ROLES */}
      <section id="open-roles-b" className="tb-section">
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 44 }}>
            <div className="tb-label" style={{ marginBottom: 16 }}>Open Positions</div>
            <h2 className="tb-h2">Current Openings</h2>
            <p className="tb-body" style={{ maxWidth: 480, marginTop: 10 }}>Click any role to see the full description and apply directly.</p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {ROLES.map((role, i) => <RoleCard key={i} role={role} index={i} onApply={setApplyRole} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(20,184,166,0.08))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 24, padding: '48px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}
          >
            <div className="tb-orb tb-orb-violet" style={{ width: 200, height: 200, top: '-50%', right: '-5%' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 className="tb-h3" style={{ marginBottom: 10 }}>Don't see your role listed?</h3>
              <p className="tb-body" style={{ maxWidth: 480 }}>We're always open to exceptional talent. Send us your CV and a note on what you'd like to build.</p>
            </div>
            <button className="tb-btn-primary" onClick={() => setApplyRole('Open Application')} style={{ whiteSpace: 'nowrap', flexShrink: 0, position: 'relative', zIndex: 1 }}>
              Send an open application →
            </button>
          </motion.div>
        </div>
      </section>

      {applyRole && <ApplyModal role={applyRole} onClose={() => setApplyRole(null)} />}
    </div>
  )
}
