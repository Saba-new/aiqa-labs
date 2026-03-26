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
  { color: '#D4AF37', label: 'Protocol Layer', title: 'Flexible Protocol Integration', desc: 'TwinV works with any communication protocol — BACnet/IP, Modbus TCP, OPC UA — connecting diverse IoT devices without ripping out existing infrastructure.', img: content },
  { color: '#B87333', label: 'AI Engine', title: 'AI-Powered Predictions', desc: 'Advanced ML models predict failures before they happen, keeping your operations always running at peak performance.', img: star },
  { color: '#D4AF37', label: 'Live Data', title: 'Real-Time Insights', desc: 'Live visibility into asset performance. Proactive maintenance before failures occur, enabled by streaming data pipelines.', img: graph },
  { color: '#B87333', label: 'Green Tech', title: 'Sustainable Energy Optimization', desc: "Optimize energy consumption and reduce carbon footprint with TwinV's advanced sustainability insights and predictive controls.", img: circleIcon },
]

const SERVICES = [
  { title: 'Custom software development', desc: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.' },
  { title: 'IT consulting and digital advisory', desc: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.' },
  { title: 'Digital transformation', desc: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.' },
]

const INDUSTRIES = [
  { name: 'FinTech', tags: ['Finance', 'Banking', 'Payments'] },
  { name: 'Real Estate', tags: ['PropTech', 'CRM', 'Analytics'] },
  { name: 'Healthcare', tags: ['EHR', 'EMR', 'Telemedicine'] },
  { name: 'Transport & Mobility', tags: ['TMS', 'WMS', 'Blockchain'] },
  { name: 'Software & SaaS', tags: ['SaaS', 'B2B', 'Ecosystems'] },
  { name: 'Manufacturing', tags: ['Industry 4.0', 'IoT', 'ERP'] },
]

const FAQ = [
  { q: 'What industries does AIQA Labs specialize in?', a: 'We work across FinTech, Healthcare, Real Estate, Transport & Mobility, Manufacturing, Smart Home, and Software/SaaS — with dedicated teams that carry real domain experience in each vertical.' },
  { q: 'How is AIQA different from a standard software agency?', a: "Most agencies execute what you hand them. We start with strategy. Our process begins with understanding your operational problem deeply, then designing the right architecture." },
  { q: 'Can AIQA handle both hardware integration and software development?', a: "Yes. That's one of our core differentiators. We bridge embedded firmware, edge devices, IoT protocols (MQTT, CoAP, OPC-UA), and cloud backends into unified products." },
  { q: 'What does the engagement process look like from day one?', a: 'We start with a no-cost discovery call, move into a scoping document with architecture recommendations, then into a phased delivery plan.' },
  { q: 'Do you offer post-launch support and maintenance?', a: 'Absolutely. We offer tiered SLA-based support plans, proactive monitoring, feature iteration sprints, and on-call engineering for critical systems.' },
  { q: 'What is the typical timeline for a mid-scale project?', a: 'A well-scoped mid-scale product typically ships its first production-ready release in 10–14 weeks.' },
]

export default function HomeC() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="tc">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="tc-hero" style={{ textAlign: 'center' }}>
        <div className="tc-grain" />
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="tc-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="tc-h1" style={{ marginBottom: 28 }}>
              Gateway to{' '}
              <span className="tc-gradient">limitless</span><br />
              Digital Twin Possibilities
            </h1>
            <p className="tc-body" style={{ maxWidth: 580, margin: '0 auto 44px', fontSize: '1.05rem' }}>
              Transform how you manage, simulate, and optimize your digital world. Leverage advanced technology to unlock endless opportunities.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="tc-btn-primary" onClick={() => navigate('/theme-c/contact')}>Get Started</button>
              <button className="tc-btn-secondary" onClick={() => navigate('/theme-c/platform')}>Explore Platform</button>
            </div>
          </motion.div>

          {/* STATS ROW */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="tc-hero-stats" style={{ display: 'flex', gap: 0, marginTop: 80, justifyContent: 'center', borderTop: '1px solid var(--tc-border)', borderBottom: '1px solid var(--tc-border)' }}>
            {[{ val: '9+', label: 'Years' }, { val: '10+', label: 'Industries' }, { val: '100%', label: 'Satisfaction' }].map((s, i) => (
              <div key={i} style={{ flex: 1, padding: '28px 20px', textAlign: 'center', borderRight: i < 2 ? '1px solid var(--tc-border)' : 'none' }}>
                <div className="tc-stat-value" style={{ fontSize: '2.2rem' }}>{s.val}</div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tc-muted)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────── */}
      <div className="tc-marquee-wrap">
        <div className="tc-marquee-track">
          {[...PROTOCOLS, ...PROTOCOLS].map((p, i) => (
            <span key={i} className="tc-marquee-item">
              <img src={p.img} alt={p.label} style={{ width: 20, height: 20, opacity: 0.6 }} />
              {p.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── PLATFORM FEATURES ─────────────────────────────────── */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>Our Platform</div>
            <h2 className="tc-h2" style={{ maxWidth: 600 }}>TwinV — All-in-One IoT Intelligence</h2>
          </motion.div>
          <div className="tc-grid-2">
            {PLATFORM_FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="tc-card" style={{ padding: '36px' }}>
                <div className="tc-card-gold-line" />
                <div className="tc-platform-card-inner" style={{ display: 'flex', gap: 28, alignItems: 'flex-start', width: '100%' }}>
                <div style={{ width: 100, height: 100, borderRadius: 14, background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={f.img} alt="" style={{ width: 68, height: 68, objectFit: 'contain', opacity: 0.85 }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tc-gold)', marginBottom: 8 }}>{f.label}</div>
                  <h3 className="tc-h3" style={{ marginBottom: 10 }}>{f.title}</h3>
                  <p className="tc-body" style={{ fontSize: '0.875rem' }}>{f.desc}</p>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="tc-section" style={{ background: 'var(--tc-bg2)', borderTop: '1px solid var(--tc-border)', borderBottom: '1px solid var(--tc-border)' }}>
        <div className="tc-container">
          <div className="tc-layout-split-2">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="tc-sticky-col">
              <div className="tc-label" style={{ marginBottom: 16 }}>Tailored Smart Solutions</div>
              <h2 className="tc-h2" style={{ marginBottom: 24 }}>End-to-End IoT Expertise</h2>
              <p className="tc-body" style={{ marginBottom: 32 }}>From custom software to full digital transformation — we deliver end-to-end.</p>
              <button className="tc-btn-secondary" onClick={() => navigate('/theme-c/services')}>All Services →</button>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {SERVICES.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="tc-card" style={{ padding: '28px 32px', display: 'flex', alignItems: 'center', gap: 24 }}>
                  <div className="tc-card-gold-line" />
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: 'rgba(212,175,55,0.2)', lineHeight: 1, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div style={{ width: 1, height: 40, background: 'var(--tc-border)', flexShrink: 0 }} />
                  <div>
                    <h3 className="tc-h3" style={{ marginBottom: 6 }}>{s.title}</h3>
                    <p className="tc-body" style={{ fontSize: '0.875rem' }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────── */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="tc-label" style={{ marginBottom: 16 }}>Industries in Focus</div>
              <h2 className="tc-h2">Accelerate Growth Across Sectors</h2>
            </div>
            <button className="tc-btn-ghost" onClick={() => navigate('/theme-c/industries')}>Unlock Innovation →</button>
          </motion.div>
          <div className="tc-grid-3">
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
                className="tc-card" style={{ padding: '28px', cursor: 'pointer' }}
                onClick={() => navigate('/theme-c/industries')}
                whileHover={{ y: -3 }}>
                <div className="tc-card-gold-line" />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tc-gold)' }}>{ind.name}</span>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: 'rgba(212,175,55,0.12)' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {ind.tags.map((t, ti) => (
                    <span key={ti} style={{ fontSize: '0.65rem', padding: '3px 9px', borderRadius: 3, background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', color: 'var(--tc-gold)', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="tc-section">
        <div className="tc-container">
          <div className="tc-layout-faq">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="tc-sticky-col">
              <div className="tc-label" style={{ marginBottom: 16 }}>FAQ</div>
              <h2 className="tc-h2" style={{ marginBottom: 24 }}>Every Question, Answered.</h2>
              <p className="tc-body" style={{ marginBottom: 32 }}>Still curious? These are the questions we hear most from new clients and partners.</p>
              <button className="tc-btn-primary" onClick={() => navigate('/theme-c/contact')}>Ask Us Directly</button>
            </motion.div>
            <div style={{ borderTop: '1px solid var(--tc-border)' }}>
              {FAQ.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  style={{ borderBottom: '1px solid var(--tc-border)' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', color: 'rgba(212,175,55,0.4)', minWidth: 28 }}>{String(i + 1).padStart(2, '0')}</span>
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: openFaq === i ? 'var(--tc-gold)' : 'var(--tc-text)' }}>{item.q}</span>
                    </div>
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }}
                      style={{ color: openFaq === i ? 'var(--tc-gold)' : 'var(--tc-muted)', fontSize: '1.3rem', fontWeight: 300, flexShrink: 0 }}>+</motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                        <p className="tc-body" style={{ padding: '0 0 20px 44px', fontSize: '0.9rem', lineHeight: 1.75 }}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
