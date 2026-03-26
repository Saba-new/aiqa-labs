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
  { num: '01', color: '#3B82F6', label: 'Protocol Layer', title: 'Flexible Protocol Integration', desc: 'TwinV works with any communication protocol — BACnet/IP, Modbus TCP, OPC UA — connecting diverse IoT devices without ripping out existing infrastructure.', img: content, span: 2 },
  { num: '02', color: '#F59E0B', label: 'AI Engine', title: 'AI-Powered Predictions', desc: 'Advanced ML models predict failures before they happen, keeping your operations always running at peak performance.', img: star, span: 1 },
  { num: '03', color: '#06B6D4', label: 'Live Data', title: 'Real-Time Insights', desc: 'Live visibility into asset performance. Proactive maintenance before failures occur.', img: graph, span: 1 },
  { num: '04', color: '#10B981', label: 'Green Tech', title: 'Sustainable Energy Optimization', desc: "Optimize energy consumption and reduce carbon footprint with TwinV's advanced sustainability insights.", img: circleIcon, span: 2 },
]

const SERVICES = [
  { num: '01', color: '#3B82F6', title: 'Custom software development', desc: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.', img: icon1, tags: ['React', 'Node.js', 'IoT', 'Cloud'] },
  { num: '02', color: '#F59E0B', title: 'IT consulting and digital advisory', desc: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.', img: icon2, tags: ['Strategy', 'Architecture', 'Audit'] },
  { num: '03', color: '#10B981', title: 'Digital transformation', desc: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.', img: icon3, tags: ['Migration', 'Automation', 'DevOps'] },
]

const INDUSTRIES = [
  { num: '01', title: 'FinTech', color: '#3B82F6', tags: ['Finance', 'Banking', 'Payments'], status: 'ACTIVE' },
  { num: '02', title: 'Real Estate', color: '#F59E0B', tags: ['PropTech', 'CRM', 'Analytics'], status: 'ACTIVE' },
  { num: '03', title: 'Healthcare', color: '#10B981', tags: ['EHR', 'EMR', 'Telemedicine'], status: 'ACTIVE' },
  { num: '04', title: 'Transport & Mobility', color: '#06B6D4', tags: ['TMS', 'WMS', 'Blockchain'], status: 'ACTIVE' },
  { num: '05', title: 'Software & SaaS', color: '#3B82F6', tags: ['SaaS', 'B2B', 'Ecosystems'], status: 'ACTIVE' },
  { num: '06', title: 'Manufacturing', color: '#10B981', tags: ['Industry 4.0', 'IoT', 'ERP'], status: 'ACTIVE' },
  { num: '07', title: 'Smart Home', color: '#06B6D4', tags: ['IoT', 'Appliances', 'UX'], status: 'ACTIVE' },
]

const FAQ = [
  { q: 'What industries does AIQA Labs specialize in?', a: 'We work across FinTech, Healthcare, Real Estate, Transport & Mobility, Manufacturing, Smart Home, and Software/SaaS — with dedicated teams that carry real domain experience in each vertical.' },
  { q: 'How is AIQA different from a standard software agency?', a: "Most agencies execute what you hand them. We start with strategy. Our process begins with understanding your operational problem deeply, then designing the right architecture." },
  { q: 'Can AIQA handle both hardware integration and software development?', a: "Yes. That's one of our core differentiators. We bridge embedded firmware, edge devices, IoT protocols (MQTT, CoAP, OPC-UA), and cloud backends into unified products." },
  { q: 'What does the engagement process look like from day one?', a: 'We start with a no-cost discovery call, move into a scoping document with architecture recommendations, then into a phased delivery plan.' },
  { q: 'Do you offer post-launch support and maintenance?', a: 'Absolutely. We offer tiered SLA-based support plans, proactive monitoring, feature iteration sprints, and on-call engineering for critical systems.' },
  { q: 'What is the typical timeline for a mid-scale project?', a: 'A well-scoped mid-scale product typically ships its first production-ready release in 10–14 weeks.' },
]

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }}
      style={{ borderBottom: '1px solid var(--ta-border)' }}
    >
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(59,130,246,0.4)', minWidth: 28 }}>{String(index + 1).padStart(2, '0')}</span>
          <span style={{ fontSize: '0.95rem', fontWeight: 600, color: open ? '#E2E8F0' : 'rgba(226,232,240,0.7)' }}>{item.q}</span>
        </div>
        <motion.span animate={{ rotate: open ? 45 : 0 }} style={{ fontSize: '1.2rem', color: open ? '#3B82F6' : 'rgba(226,232,240,0.25)', fontWeight: 300, flexShrink: 0 }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p style={{ padding: '0 0 20px 44px', color: 'rgba(226,232,240,0.5)', fontSize: '0.9rem', lineHeight: 1.75 }}>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function HomeA() {
  const navigate = useNavigate()

  return (
    <div className="ta">
      {/* ── HERO — split layout with terminal block ── */}
      <section className="ta-hero">
        <div className="ta-grid-bg" />
        <div className="ta-scan" />
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="ta-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="ta-split ta-hero-split" style={{ alignItems: 'center' }}>
            <div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="ta-h1" style={{ marginBottom: 24 }}>
                Gateway to{' '}<span className="ta-gradient">limitless</span><br />Digital Twin Possibilities
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="ta-body" style={{ maxWidth: 520, marginBottom: 36, fontSize: '1.05rem' }}>
                Transform how you manage, simulate, and optimize your digital world. Leverage advanced technology to unlock endless opportunities.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="ta-btn-primary" onClick={() => navigate('/theme-a/contact')}>Get Started →</button>
                <button className="ta-btn-secondary" onClick={() => navigate('/theme-a/platform')}>Explore Platform</button>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="ta-hero-stats" style={{ display: 'flex', gap: 40, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {[{ v: '9+', l: 'Years' }, { v: '10+', l: 'Industries' }, { v: '100%', l: 'Satisfaction' }].map((s, i) => (
                  <div key={i}>
                    <div className="ta-stat-value" style={{ fontSize: '2rem' }}>{s.v}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'rgba(226,232,240,0.35)', marginTop: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Network topology visualization */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="ta-hero-visual" style={{ position: 'relative', width: '100%', maxWidth: 500, height: 400, background: 'var(--ta-surface)', border: '1px solid var(--ta-border)', borderRadius: 12, padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 320" style={{ overflow: 'visible' }}>
                  {/* Central node */}
                  <circle cx="200" cy="160" r="32" fill="rgba(59,130,246,0.15)" stroke="#3B82F6" strokeWidth="2" />
                  <text x="200" y="165" textAnchor="middle" fill="#3B82F6" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="700">CORE</text>
                  
                  {/* Outer nodes */}
                  {[
                    { x: 80, y: 80, label: 'IoT', color: '#10B981' },
                    { x: 320, y: 80, label: 'AI', color: '#F59E0B' },
                    { x: 80, y: 240, label: 'DATA', color: '#06B6D4' },
                    { x: 320, y: 240, label: 'API', color: '#8B5CF6' },
                  ].map((node, i) => (
                    <g key={i}>
                      <line x1="200" y1="160" x2={node.x} y2={node.y} stroke={node.color} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                      <circle cx={node.x} cy={node.y} r="24" fill={`${node.color}15`} stroke={node.color} strokeWidth="2" />
                      <text x={node.x} y={node.y + 4} textAnchor="middle" fill={node.color} fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700">{node.label}</text>
                    </g>
                  ))}
                  
                  {/* Connection indicators */}
                  {[
                    { x: 140, y: 120, size: 3 },
                    { x: 260, y: 120, size: 3 },
                    { x: 140, y: 200, size: 3 },
                    { x: 260, y: 200, size: 3 },
                  ].map((dot, i) => (
                    <circle key={i} cx={dot.x} cy={dot.y} r={dot.size} fill="#3B82F6" opacity="0.6">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
                    </circle>
                  ))}
                </svg>
                
                {/* Status indicator */}
                <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem' }}>
                  <span style={{ color: 'rgba(226,232,240,0.3)' }}>// network status</span>
                  <span style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                    CONNECTED
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROTOCOL MARQUEE ── */}
      <div className="ta-marquee-wrap">
        <div className="ta-marquee-track">
          {PROTOCOLS.map((p, i) => (
            <span key={i} className="ta-marquee-item">
              <img src={p.img} alt={p.label} style={{ width: 20, height: 20, opacity: 0.6 }} />
              {p.label}
            </span>
          ))}
        </div>
      </div>

      <hr className="ta-divider" />

      {/* ── PLATFORM FEATURES — BENTO GRID ── */}
      <section className="ta-section">
        <div className="ta-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
            <div className="ta-label" style={{ marginBottom: 16 }}>Our Platform</div>
            <h2 className="ta-h2">TwinV — All-in-One IoT Intelligence</h2>
          </motion.div>
          <div className="ta-layout-bento">
            {PLATFORM_FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="ta-card" style={{ padding: '36px' }}>
                <div className="ta-card-accent" style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }} />
                <div style={{ width: 120, height: 120, borderRadius: 16, background: `${f.color}15`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <img src={f.img} alt="" style={{ width: 88, height: 88, objectFit: 'contain', opacity: 0.9 }} />
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', fontWeight: 700, color: f.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>{f.label} // {f.num}</div>
                <h3 className="ta-h3" style={{ marginBottom: 10 }}>{f.title}</h3>
                <p className="ta-body" style={{ fontSize: '0.875rem' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── SERVICES — DATA TABLE STYLE ── */}
      <section className="ta-section" style={{ background: 'var(--ta-bg2)' }}>
        <div className="ta-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 40 }}>
            <div className="ta-label" style={{ marginBottom: 16 }}>Tailored Smart Solutions</div>
            <h2 className="ta-h2">End-to-End IoT Expertise</h2>
          </motion.div>
          {/* Table header */}
          <div className="ta-layout-services-header">
            {['#', 'Service', 'Stack', ''].map((h, i) => (
              <span key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', fontWeight: 700, color: 'rgba(226,232,240,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</span>
            ))}
          </div>
          {SERVICES.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="ta-layout-services-row"
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}40`; e.currentTarget.style.background = `${s.color}06` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ta-border)'; e.currentTarget.style.background = 'var(--ta-surface)' }}
              onClick={() => navigate('/theme-a/services')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', fontWeight: 700, color: `${s.color}50` }}>{s.num}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `${s.color}15`, border: `1px solid ${s.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={s.img} alt="" style={{ width: 20, height: 20, objectFit: 'contain', opacity: 0.85 }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#E2E8F0', marginBottom: 3 }}>{s.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(226,232,240,0.45)' }}>{s.desc}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', padding: '2px 7px', borderRadius: 3, background: `${s.color}10`, border: `1px solid ${s.color}20`, color: s.color }}>{t}</span>
                ))}
              </div>
              <span className="ta-svc-arrow" style={{ color: s.color, fontSize: '1rem', opacity: 0.5 }}>→</span>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── INDUSTRIES — NUMBERED LIST ── */}
      <section className="ta-section">
        <div className="ta-container">
          <div className="ta-layout-split-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="ta-sticky-col">
              <div className="ta-label" style={{ marginBottom: 16 }}>Industries in Focus</div>
              <h2 className="ta-h2" style={{ marginBottom: 20 }}>Accelerate Growth Across Sectors</h2>
              <p className="ta-body" style={{ marginBottom: 32 }}>Deep domain expertise across 7 verticals, with dedicated engineering teams for each.</p>
              <button className="ta-btn-secondary" onClick={() => navigate('/theme-a/industries')}>Unlock Innovation →</button>
            </motion.div>
            <div>
              {INDUSTRIES.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '20px 0', borderBottom: '1px solid var(--ta-border)', cursor: 'pointer' }}
                  onClick={() => navigate('/theme-a/industries')}
                  onMouseEnter={e => e.currentTarget.querySelector('.ind-title').style.color = ind.color}
                  onMouseLeave={e => e.currentTarget.querySelector('.ind-title').style.color = '#E2E8F0'}
                >
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', fontWeight: 700, color: `${ind.color}50`, minWidth: 28 }}>{ind.num}</span>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: ind.color, boxShadow: `0 0 8px ${ind.color}`, flexShrink: 0 }} />
                  <span className="ind-title" style={{ flex: 1, fontSize: '1.1rem', fontWeight: 700, color: '#E2E8F0', transition: 'color 0.2s' }}>{ind.title}</span>
                  <div style={{ display: 'flex', gap: 6 }} className="ta-ind-tags">
                    {ind.tags.map(t => (
                      <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', padding: '2px 7px', borderRadius: 3, background: `${ind.color}10`, border: `1px solid ${ind.color}20`, color: ind.color }}>{t}</span>
                    ))}
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#10B981', padding: '2px 8px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 3 }}>{ind.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── FAQ — borderless list ── */}
      <section className="ta-section">
        <div className="ta-container">
          <div className="ta-layout-faq">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="ta-sticky-col">
              <div className="ta-label" style={{ marginBottom: 16 }}>FAQ</div>
              <h2 className="ta-h2" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: 16 }}>Every Question,<br />Answered.</h2>
              <p className="ta-body" style={{ marginBottom: 32 }}>Still curious? These are the questions we hear most from new clients and partners.</p>
              <button className="ta-btn-primary" onClick={() => navigate('/theme-a/contact')}>Ask Us Directly</button>
            </motion.div>
            <div style={{ borderTop: '1px solid var(--ta-border)' }}>
              {FAQ.map((item, i) => <FaqItem key={i} item={item} index={i} />)}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  )
}
