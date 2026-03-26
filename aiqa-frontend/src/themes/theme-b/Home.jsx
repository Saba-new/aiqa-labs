import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/star copy.png'
import content from '../../assets/content.png'
import graph from '../../assets/graph.png'
import circleIcon from '../../assets/circleIcon.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import group1 from '../../assets/Group1.png'
import group2 from '../../assets/Group2.png'
import group3 from '../../assets/Group3.png'
import group4 from '../../assets/Group4.png'
import group5 from '../../assets/Group5.png'
import group6 from '../../assets/Group6.png'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'

const PROTOCOLS = [
  { img: group1, label: 'BACnet/IP' }, { img: group2, label: 'Modbus TCP' },
  { img: group3, label: 'OPC UA' }, { img: group4, label: 'MQTT' },
  { img: group5, label: 'Tridium Niagara' }, { img: group6, label: 'RDM' },
]

const PLATFORM_FEATURES = [
  { color: '#8B5CF6', label: 'Protocol Layer', title: 'Flexible Protocol Integration', desc: 'TwinV works with any communication protocol — BACnet/IP, Modbus TCP, OPC UA — connecting diverse IoT devices without ripping out existing infrastructure.', img: content },
  { color: '#14B8A6', label: 'AI Engine', title: 'AI-Powered Predictions', desc: 'Advanced ML models predict failures before they happen, keeping your operations always running at peak performance.', img: star },
  { color: '#3B82F6', label: 'Live Data', title: 'Real-Time Insights', desc: 'Live visibility into asset performance. Proactive maintenance before failures occur, enabled by streaming data pipelines.', img: graph },
  { color: '#EC4899', label: 'Green Tech', title: 'Sustainable Energy Optimization', desc: "Optimize energy consumption and reduce carbon footprint with TwinV's advanced sustainability insights and predictive controls.", img: circleIcon },
]

const SERVICES = [
  { title: 'Custom software development', desc: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.', img: icon1, color: '#8B5CF6' },
  { title: 'IT consulting and digital advisory', desc: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.', img: icon2, color: '#14B8A6' },
  { title: 'Digital transformation', desc: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.', img: icon3, color: '#3B82F6' },
]

const INDUSTRIES = [
  { title: 'FinTech', color: '#8B5CF6', tags: ['Finance', 'Banking', 'Payments'] },
  { title: 'Real Estate', color: '#14B8A6', tags: ['PropTech', 'CRM', 'Analytics'] },
  { title: 'Healthcare', color: '#3B82F6', tags: ['EHR', 'EMR', 'Telemedicine'] },
  { title: 'Transport & Mobility', color: '#EC4899', tags: ['TMS', 'WMS', 'Blockchain'] },
  { title: 'Software & SaaS', color: '#8B5CF6', tags: ['SaaS', 'B2B', 'Ecosystems'] },
  { title: 'Manufacturing', color: '#14B8A6', tags: ['Industry 4.0', 'IoT', 'ERP'] },
  { title: 'Smart Home', color: '#3B82F6', tags: ['IoT', 'Appliances', 'UX'] },
]

const FAQ = [
  { q: 'What industries does AIQA Labs specialize in?', a: 'We work across FinTech, Healthcare, Real Estate, Transport & Mobility, Manufacturing, Smart Home, and Software/SaaS — with dedicated teams that carry real domain experience in each vertical.' },
  { q: 'How is AIQA different from a standard software agency?', a: "Most agencies execute what you hand them. We start with strategy. Our process begins with understanding your operational problem deeply, then designing the right architecture." },
  { q: 'Can AIQA handle both hardware integration and software development?', a: "Yes. That's one of our core differentiators. We bridge embedded firmware, edge devices, IoT protocols (MQTT, CoAP, OPC-UA), and cloud backends into unified products." },
  { q: 'What does the engagement process look like from day one?', a: 'We start with a no-cost discovery call, move into a scoping document with architecture recommendations, then into a phased delivery plan.' },
  { q: 'Do you offer post-launch support and maintenance?', a: 'Absolutely. We offer tiered SLA-based support plans, proactive monitoring, feature iteration sprints, and on-call engineering for critical systems.' },
  { q: 'What is the typical timeline for a mid-scale project?', a: 'A well-scoped mid-scale product typically ships its first production-ready release in 10–14 weeks.' },
]

export default function HomeB() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="tb">
      {/* ── HERO ── */}
      <section className="tb-hero" style={{ textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="tb-noise" />
        <div className="tb-orb tb-orb-violet" style={{ width: 700, height: 700, top: '-20%', left: '-10%' }} />
        <div className="tb-orb tb-orb-teal" style={{ width: 600, height: 600, bottom: '-15%', right: '-10%' }} />
        <div className="tb-orb tb-orb-pink" style={{ width: 400, height: 400, top: '30%', right: '20%' }} />

        <div className="tb-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <h1 className="tb-h1" style={{ marginBottom: 28, maxWidth: 800, margin: '0 auto 28px' }}>
              Gateway to{' '}<span className="tb-gradient">limitless</span><br />Digital Twin Possibilities
            </h1>

            <p className="tb-body" style={{ maxWidth: 560, margin: '0 auto 48px', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Transform how you manage, simulate, and optimize your digital world. Leverage advanced technology to unlock endless opportunities and step into the future today.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72 }}>
              <button className="tb-btn-primary" onClick={() => navigate('/theme-b/contact')} style={{ padding: '14px 32px', fontSize: '0.95rem' }}>Get Started →</button>
              <button className="tb-btn-secondary" onClick={() => navigate('/theme-b/platform')} style={{ padding: '14px 32px', fontSize: '0.95rem' }}>Explore Platform</button>
            </div>

            {/* Stats row — centered */}
            <div style={{ display: 'inline-flex', gap: 0, border: '1px solid rgba(139,92,246,0.2)', borderRadius: 16, overflow: 'hidden', backdropFilter: 'blur(12px)', background: 'rgba(139,92,246,0.05)' }} className="tb-hero-stats">
              {[{ v: '9+', l: 'Years' }, { v: '50+', l: 'Projects' }, { v: '10+', l: 'Industries' }, { v: '100%', l: 'Satisfaction' }].map((s, i) => (
                <div key={i} style={{ padding: '20px 36px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(139,92,246,0.15)' : 'none' }}>
                  <div className="tb-stat-value" style={{ fontSize: '1.8rem' }}>{s.v}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(248,250,252,0.4)', marginTop: 4, letterSpacing: '0.08em' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROTOCOL MARQUEE ── */}
      <div className="tb-marquee-wrap">
        <div className="tb-marquee-track">
          {PROTOCOLS.map((p, i) => (
            <span key={i} className="tb-marquee-item">
              <img src={p.img} alt={p.label} style={{ width: 20, height: 20, opacity: 0.5 }} />
              {p.label}
            </span>
          ))}
        </div>
      </div>

      <hr className="tb-divider" />

      {/* ── PLATFORM FEATURES — NUMBERED LIST ── */}
      <section className="tb-section">
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 72 }}>
            <div className="tb-label" style={{ marginBottom: 16 }}>Our Platform</div>
            <h2 className="tb-h2" style={{ maxWidth: 600 }}>TwinV — All-in-One IoT Intelligence</h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {PLATFORM_FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`tb-layout-platform-row${i % 2 !== 0 ? ' reverse' : ''}`}
              >
                {/* Index */}
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '3.5rem', fontWeight: 800, lineHeight: 1, background: `linear-gradient(135deg, ${f.color}40, ${f.color}10)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                {/* Content */}
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${f.color}12`, border: `1px solid ${f.color}25`, borderRadius: 100, padding: '4px 12px', marginBottom: 14 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: f.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: f.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>{f.label}</span>
                  </div>
                  <h3 className="tb-h3" style={{ marginBottom: 10 }}>{f.title}</h3>
                  <p className="tb-body" style={{ maxWidth: 560 }}>{f.desc}</p>
                </div>
                {/* Icon box */}
                <div className="tb-platform-icon-box" style={{ width: 220, height: 220, borderRadius: 28, background: `${f.color}12`, border: `1px solid ${f.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, backdropFilter: 'blur(12px)' }}>
                  <img src={f.img} alt={f.title} style={{ width: 140, height: 140, objectFit: 'contain', opacity: 1 }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* ── SERVICES ── */}
      <section className="tb-section" style={{ background: 'var(--tb-bg2)' }}>
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="tb-label" style={{ marginBottom: 16 }}>Tailored Smart Solutions</div>
            <h2 className="tb-h2">End-to-End IoT Expertise</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {SERVICES.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="tb-card" style={{ padding: '36px', cursor: 'pointer' }}
                onClick={() => navigate('/theme-b/services')}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}50`; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--tb-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}15`, border: `1px solid ${s.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <img src={s.img} alt="" style={{ width: 26, height: 26, objectFit: 'contain', opacity: 0.9 }} />
                </div>
                <h3 className="tb-h3" style={{ marginBottom: 12, fontSize: '1.05rem' }}>{s.title}</h3>
                <p className="tb-body" style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>{s.desc}</p>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 6, color: s.color, fontSize: '0.85rem', fontWeight: 600 }}>
                  Learn more <span>→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* ── INDUSTRIES ── */}
      <section className="tb-section">
        <div className="tb-container">
          <div className="tb-layout-split-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="tb-sticky-col">
              <div className="tb-label" style={{ marginBottom: 16 }}>Industries in Focus</div>
              <h2 className="tb-h2" style={{ marginBottom: 20 }}>Accelerate Growth Across Sectors</h2>
              <p className="tb-body" style={{ marginBottom: 32 }}>Deep domain expertise across 7 verticals, with dedicated engineering teams for each.</p>
           <button className="tb-btn-secondary" onClick={() => navigate('/theme-b/industries')}>Unlock Innovation →</button>
            </motion.div>
            <div>
              {INDUSTRIES.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 0', borderBottom: '1px solid var(--tb-border)', cursor: 'pointer', transition: 'all 0.2s' }}
                  onClick={() => navigate('/theme-b/industries')}
                  onMouseEnter={e => { e.currentTarget.style.paddingLeft = '8px' }}
                  onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0' }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: ind.color, boxShadow: `0 0 10px ${ind.color}`, flexShrink: 0 }} />
                 <span style={{ flex: 1, fontSize: '1.05rem', fontWeight: 700, color: '#F8FAFC' }}>{ind.title}</span>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }} className="tb-ind-tags">
                    {ind.tags.map(t => (
                      <span key={t} style={{ fontSize: '0.62rem', padding: '3px 9px', borderRadius: 100, background: `${ind.color}15`, border: `1px solid ${ind.color}30`, color: ind.color, fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* ── FAQ ── */}
      <section className="tb-section">
        <div className="tb-container">
          <div className="tb-layout-faq">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="tb-sticky-col">
              <div className="tb-label" style={{ marginBottom: 16 }}>FAQ</div>
              <h2 className="tb-h2" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: 16 }}>Every Question,<br />Answered.</h2>
              <p className="tb-body" style={{ marginBottom: 32 }}>Still curious? These are the questions we hear most from new clients and partners.</p>
              <button className="tb-btn-primary" onClick={() => navigate('/theme-b/contact')}>Ask Us Directly</button>
            </motion.div>
            <div style={{ borderTop: '1px solid var(--tb-border)' }}>
              {FAQ.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  style={{ borderBottom: '1px solid var(--tb-border)' }}
                >
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                  >
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: openFaq === i ? '#F8FAFC' : 'rgba(248,250,252,0.65)' }}>{item.q}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} style={{ fontSize: '1.3rem', color: openFaq === i ? '#8B5CF6' : 'rgba(248,250,252,0.25)', fontWeight: 300, flexShrink: 0 }}>+</motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                        <p style={{ padding: '0 0 20px', color: 'rgba(248,250,252,0.5)', fontSize: '0.9rem', lineHeight: 1.75 }}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes tb-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes tb-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  )
}
