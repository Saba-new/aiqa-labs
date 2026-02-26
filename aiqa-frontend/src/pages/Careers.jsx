import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const ROLES = [
  {
    title: 'Senior IoT Solutions Engineer',
    dept: 'Engineering',
    type: 'Full-time',
    location: 'Chennai, India',
    color: '#AC6AFF',
    desc: 'Design and implement end-to-end IoT architectures — from embedded firmware and edge devices to cloud data pipelines. You will own system design, protocol selection (MQTT, OPC-UA, CoAP), and ensure scalable, reliable deployments for enterprise clients.',
    skills: ['Embedded C / C++', 'MQTT / OPC-UA', 'AWS IoT / Azure IoT', 'Node.js', 'Docker'],
  },
  {
    title: 'AI / ML Engineer',
    dept: 'Data & AI',
    type: 'Full-time',
    location: 'Chennai, India · Remote',
    color: '#10B981',
    desc: 'Build production-grade machine learning models for predictive maintenance, anomaly detection, and NLP extraction. Work with real industrial sensor data, fine-tune transformers, and integrate models into live product pipelines.',
    skills: ['Python', 'PyTorch / TensorFlow', 'MLOps', 'FastAPI', 'Time-series modeling'],
  },
  {
    title: 'Full Stack Product Engineer',
    dept: 'Engineering',
    type: 'Full-time',
    location: 'Chennai, India',
    color: '#07B4EB',
    desc: 'Own features from design to deploy. Work across React frontends and Node/Python backends, build real-time dashboards, integrate with IoT data streams, and ship product increments every sprint.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'REST / GraphQL'],
  },
  {
    title: 'Digital Twin Specialist',
    dept: 'Innovation',
    type: 'Full-time',
    location: 'Chennai, India',
    color: '#F59E0B',
    desc: 'Model physical systems as digital twins for manufacturing and energy clients. Combine simulation, IoT telemetry, and visualization to create real-time virtual counterparts that drive operational decisions.',
    skills: ['Unity / Unreal', '3D modeling', 'IoT integration', 'Python', 'Data visualization'],
  },
  {
    title: 'Product Designer (UI/UX)',
    dept: 'Design',
    type: 'Full-time',
    location: 'Chennai, India · Hybrid',
    color: '#AC6AFF',
    desc: 'Shape the experience of complex industrial and enterprise software products. Translate ambiguous requirements into clean, functional interfaces — dashboards, control panels, data-heavy workflows — that users actually enjoy.',
    skills: ['Figma', 'Design systems', 'Prototyping', 'User research', 'Motion design'],
  },
  {
    title: 'DevOps & Cloud Infrastructure Engineer',
    dept: 'Infrastructure',
    type: 'Full-time',
    location: 'Remote',
    color: '#10B981',
    desc: 'Build and maintain the infrastructure backbone across AWS and Azure for multi-tenant SaaS and IoT platforms. Implement CI/CD pipelines, security hardening, observability stacks, and infrastructure-as-code.',
    skills: ['Terraform', 'Kubernetes', 'AWS / Azure', 'GitHub Actions', 'Prometheus / Grafana'],
  },
]

const PERKS = [
  { icon: '🚀', title: 'Work on Real Products', desc: 'No filler projects. You own a vertical and ship things that go into production for real enterprise clients from day one.' },
  { icon: '🧠', title: 'Deep Domain Learning', desc: "AIQA spans FinTech, Healthcare, Manufacturing, and Smart Home. You'll develop expertise that generic agencies can't offer." },
  { icon: '🌍', title: 'Flexible Work', desc: 'Hybrid and remote-friendly roles. We judge output, not where you sit. Async-first culture with clear ownership.' },
  { icon: '📈', title: 'Fast Growth Track', desc: 'Flat hierarchies, early ownership, and a fast-growing company. If you perform, the path upward is short.' },
  { icon: '🤝', title: 'Collaborative Culture', desc: 'Small, senior teams. No siloed handoffs. Engineers talk to clients, designers ship code, PMs write specs.' },
  { icon: '💰', title: 'Competitive Compensation', desc: 'Market-leading salaries, performance bonuses, and equity participation for senior roles.' },
]

function ApplyModal({ role, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 10, padding: '11px 15px', color: '#fff', fontSize: '0.9rem',
    outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s',
  }
  const focusStyle = (e) => (e.target.style.borderColor = 'rgba(139,92,246,0.55)')
  const blurStyle  = (e) => (e.target.style.borderColor = 'rgba(255,255,255,0.09)')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: `Job Application: ${role}`,
        message: form.message || '(No cover note provided)',
      }
      const res = await axios.post('http://localhost:5000/api/contact', payload, {
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.status === 200) {
        toast.success('Application submitted! We will be in touch.')
        onClose()
      }
    } catch {
      toast.error('Failed to submit. Please try again or email careers@aiqa.co.in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(6,6,18,0.82)', backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
        }}
      >
        {/* modal panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#0d0d1f', border: '1px solid rgba(139,92,246,0.25)',
            borderRadius: 20, padding: '40px 40px 36px', width: '100%', maxWidth: 480,
            position: 'relative', boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
          }}
        >
          {/* top accent */}
          <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)', borderRadius: 1 }} />

          {/* close */}
          <button onClick={onClose} style={{
            position: 'absolute', top: 16, right: 18, background: 'none', border: 'none',
            color: 'rgba(255,255,255,0.3)', fontSize: '1.4rem', cursor: 'pointer',
            lineHeight: 1, padding: 4, transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >×</button>

          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(172,106,255,0.7)', marginBottom: 8 }}>Apply Now</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: 6, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{role}</h3>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginBottom: 28 }}>Fill in your details and we'll get back to you within 2 business days.</p>

          <form onSubmit={handleSubmit}>
            {[{ label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name', required: true },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
              { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+91 00000 00000', required: true },
            ].map(f => (
              <div key={f.name} style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', marginBottom: 6, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {f.label} {f.required && <span style={{ color: '#f87171' }}>*</span>}
                </label>
                <input
                  type={f.type} name={f.name} value={form[f.name]} required={f.required}
                  placeholder={f.placeholder}
                  onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                  style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                />
              </div>
            ))}

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', marginBottom: 6, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Cover Note</label>
              <textarea
                name="message" value={form.message} rows={4}
                placeholder="Tell us briefly why you're a great fit..."
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={focusStyle} onBlur={blurStyle}
              />
            </div>

            <button
              type="submit" disabled={loading}
              className="get-started-button"
              style={{ width: '100%', opacity: loading ? 0.65 : 1, cursor: loading ? 'not-allowed' : 'pointer', justifyContent: 'center' }}
            >
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      style={{
        border: `1px solid ${open ? role.color + '35' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        background: open ? `${role.color}07` : 'rgba(255,255,255,0.02)',
        transition: 'border-color 0.3s, background 0.3s',
        position: 'relative',
      }}
    >
      {/* top accent */}
      {open && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${role.color}60, transparent)` }} />}

      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 20, textAlign: 'left',
        }}
      >
        {/* dept color dot */}
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: role.color, flexShrink: 0, boxShadow: `0 0 8px ${role.color}80` }} />

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1.02rem', fontWeight: 700, color: '#fff', marginBottom: 5 }}>{role.title}</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.72rem', color: role.color, fontWeight: 600, background: `${role.color}15`, border: `1px solid ${role.color}30`, padding: '2px 9px', borderRadius: 20 }}>{role.dept}</span>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)', padding: '2px 9px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)' }}>{role.type}</span>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {role.location}
            </span>
          </div>
        </div>

        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: open ? role.color : 'rgba(255,255,255,0.25)', fontSize: '1.4rem', fontWeight: 300, flexShrink: 0 }}
        >+</motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ padding: '0 28px 28px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 20 }}>{role.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                {role.skills.map((s, si) => (
                  <span key={si} style={{
                    fontSize: '0.71rem', padding: '3px 11px', borderRadius: 20, fontWeight: 600,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.55)',
                  }}>{s}</span>
                ))}
              </div>
              <button
                onClick={() => onApply(role.title)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 22px', borderRadius: 10,
                  background: `${role.color}20`, border: `1px solid ${role.color}45`,
                  color: role.color, fontSize: '0.85rem', fontWeight: 700,
                  cursor: 'pointer', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = `${role.color}30`}
                onMouseLeave={e => e.currentTarget.style.background = `${role.color}20`}
              >
                Apply for this role →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function Careers() {
  const navigate = useNavigate()
  const [applyRole, setApplyRole] = useState(null)

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '140px 10% 90px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-3" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 760 }}
        >
          <div className="section-label" style={{ marginBottom: 20 }}>We're Hiring</div>
          <h1 style={{
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 900, color: '#fff',
            letterSpacing: '-0.03em', lineHeight: 1.05,
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: 24,
          }}>
            Build the Future of<br />
            <span style={{ background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Intelligent Technology.
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.75, maxWidth: 560, marginBottom: 36 }}>
            At AIQA Labs, we're a team of engineers, designers, and domain experts building
            IoT platforms, AI systems, and enterprise software that transforms how industries operate.
            Join us if you want your work to matter.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn-neo" onClick={() => document.getElementById('open-roles').scrollIntoView({ behavior: 'smooth' })}>
              See Open Roles
            </button>
            <button
              onClick={() => navigate('/about')}
              style={{ padding: '12px 24px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: 'rgba(255,255,255,0.6)', fontSize: '0.92rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
            >
              About AIQA
            </button>
          </div>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          style={{ display: 'flex', gap: 40, marginTop: 64, flexWrap: 'wrap' }}
        >
          {[
            { val: '9+', label: 'Years of Innovation' },
            { val: '10+', label: 'Industries Served' },
            { val: '50+', label: 'Products Shipped' },
            { val: '100%', label: 'Remote-Friendly Roles' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', marginTop: 3, letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* ── WHY AIQA ── */}
      <section style={{ padding: '80px 10% 90px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 52 }}
        >
          <div className="section-label">Life at AIQA</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#fff', margin: '14px 0 12px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Why Engineers Choose AIQA
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', maxWidth: 520, lineHeight: 1.7 }}>
            We're not a body-shop or a consulting mill. We're a product-minded engineering team
            that ships real, high-complexity software. Here's what that means for you.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {PERKS.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '28px 24px',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: 14 }}>{perk.icon}</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 10 }}>{perk.title}</div>
              <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.7 }}>{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" style={{ padding: '80px 10% 90px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <div className="section-label">Open Positions</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#fff', margin: '14px 0 12px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Current Openings
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', maxWidth: 480, lineHeight: 1.7 }}>
              Click any role to see the full description and apply directly.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['All', 'Engineering', 'Data & AI', 'Design', 'Infrastructure', 'Innovation'].map((dept, i) => (
              <span key={i} style={{
                fontSize: '0.7rem', padding: '5px 13px', borderRadius: 20, cursor: 'pointer',
                background: i === 0 ? 'rgba(172,106,255,0.15)' : 'rgba(255,255,255,0.04)',
                border: i === 0 ? '1px solid rgba(172,106,255,0.4)' : '1px solid rgba(255,255,255,0.08)',
                color: i === 0 ? '#AC6AFF' : 'rgba(255,255,255,0.45)',
                fontWeight: 600, letterSpacing: '0.04em',
              }}>{dept}</span>
            ))}
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ROLES.map((role, i) => (
            <RoleCard key={i} role={role} index={i} onApply={setApplyRole} />
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '0 10% 110px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(7,180,235,0.08) 100%)',
            border: '1px solid rgba(139,92,246,0.2)',
            borderRadius: 20, padding: '52px 52px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 32, flexWrap: 'wrap', position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(172,106,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div>
            <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>
              Don't see your role listed?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 480 }}>
              We're always open to exceptional talent. Send us your CV and a note on what you'd like
              to build — we'll reach out if there's a match, now or in future.
            </p>
          </div>
          <button
            onClick={() => setApplyRole('Open Application')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 28px', borderRadius: 12,
              background: 'linear-gradient(135deg, #8B5CF6, #07B4EB)',
              color: '#fff', fontSize: '0.95rem', fontWeight: 700,
              border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              boxShadow: '0 0 32px rgba(139,92,246,0.3)',
              transition: 'opacity 0.2s', flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Send an open application →
          </button>
        </motion.div>
      </section>

      {/* Application modal */}
      {applyRole && <ApplyModal role={applyRole} onClose={() => setApplyRole(null)} />}
    </>
  )
}

export default Careers
