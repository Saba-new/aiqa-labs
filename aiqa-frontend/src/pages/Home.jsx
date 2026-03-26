import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import star from '../assets/star copy.png'
import content from '../assets/content.png'
import graph from '../assets/graph.png'
import circleIcon from '../assets/circleIcon.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import group1 from '../assets/Group1.png'
import group2 from '../assets/Group2.png'
import group3 from '../assets/Group3.png'
import group4 from '../assets/Group4.png'
import group5 from '../assets/Group5.png'
import group6 from '../assets/Group6.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import profile3 from '../assets/profile3.png'

const A = (d = 0) => ({ initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } })

function Home() {
  const navigate = useNavigate()

  const platformFeatures = [
    { num: '01', color: '#06B6D4', label: 'Protocol Layer', title: 'Flexible Protocol Integration', desc: 'TwinV works with any communication protocol — BACnet/IP, Modbus TCP, OPC UA — connecting diverse IoT devices without ripping out existing infrastructure.', img: content },
    { num: '02', color: '#D946EF', label: 'AI Engine', title: 'AI-Powered Predictions', desc: 'Advanced ML models predict failures before they happen, keeping your operations always running at peak performance.', img: star },
    { num: '03', color: '#8B5CF6', label: 'Live Data', title: 'Real-Time Insights', desc: 'Live visibility into asset performance. Proactive maintenance before failures occur, enabled by streaming data pipelines.', img: graph },
    { num: '04', color: '#10B981', label: 'Green Tech', title: 'Sustainable Energy Optimization', desc: "Optimize energy consumption and reduce carbon footprint with TwinV's advanced sustainability insights and predictive controls.", img: circleIcon },
  ]

  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />

        <div className="container split-hero" style={{ position: 'relative', zIndex: 1 }}>
          <div className="split-hero-content">
            <motion.h1 {...A(0.15)} className="hero-title heading-xl" style={{ marginBottom: '24px', maxWidth: 860 }}>
              Gateway to{' '}
              <span className="gradient-text">limitless</span>
              <br/>Digital Twin Possibilities
            </motion.h1>

            <motion.p {...A(0.22)} className="text-body" style={{ maxWidth: 560, marginBottom: '40px' }}>
              Transform how you manage, simulate, and optimize your digital world. Leverage advanced technology to unlock endless opportunities and step into the future today.
            </motion.p>

            <motion.div {...A(0.3)} className="flex-center" style={{ gap: 14, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-pill-lg" onClick={() => navigate('/contact')}>Get Started</button>
              <button className="btn btn-secondary" onClick={() => navigate('/platform')}>Explore Platform</button>
            </motion.div>
          </div>

          <motion.div {...A(0.4)} className="split-hero-visual" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
            <img src={star} alt="AIQA TwinV" className="hero-img" style={{ width: '80%', maxWidth: '500px', opacity: 0.6, filter: 'drop-shadow(0 0 50px rgba(6,182,212,0.3)) hue-rotate(330deg) saturate(0.6)' }} />
          </motion.div>
        </div>
      </section>

      {/* ── LOGO MARQUEE ─────────────────────────────────────────── */}
      <div className="marquee-wrapper"><div className="marquee-track">
        {Array(2).fill([
          { i: group1, l: 'BACnet/IP' }, { i: group2, l: 'Modbus TCP' }, { i: group3, l: 'OPC UA' }, 
          { i: group4, l: 'MQTT' }, { i: group5, l: 'Tridium Niagara' }, { i: group6, l: 'RDM' }
        ]).flat().map((p, i) => (
          <span key={i} className="marquee-tag" style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 24px' }}>
            <img src={p.i} alt={p.l} style={{ width:24, height:24, opacity:0.7 }} />
            {p.l}
          </span>
        ))}
      </div></div>

      <hr className="neon-divider" />

      {/* ── PLATFORM (BENTO BOX) ────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-col-center" style={{ marginBottom: 64 }}>
            <div className="section-label">Our Platform</div>
            <h2 className="heading-lg" style={{ margin: '14px 0 18px', maxWidth: 700 }}>
              TwinV is the All-in-One Platform for IoT
            </h2>
          </motion.div>

          <div className="bento-grid">
            {platformFeatures.map((f, i) => {
              let layoutClass = "bento-item glass-card";
              if (i === 0) layoutClass += " bento-tall";
              if (i === 3) layoutClass += " bento-wide";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={layoutClass}
                  style={{ borderColor: `rgba(255,255,255,0.07)` }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <img src={f.img} alt="" style={{ width: 44, height: 44, objectFit: 'contain', opacity: 0.9, background: `${f.color}20`, padding: 8, borderRadius: 12 }} />
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 900, color: `${f.color}30`, marginLeft: 'auto', lineHeight: 1 }}>{f.num}</span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: f.color, boxShadow: `0 0 10px ${f.color}` }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: f.color, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>{f.label}</span>
                  </div>
                  <h3 className="heading-md" style={{ fontSize: '1.4rem', margin: '0 0 16px' }}>{f.title}</h3>
                  <p className="text-body" style={{ fontSize: '1rem', flexGrow: 1 }}>{f.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES (ZIG-ZAG) ──────────────────────────────── */}
      <section className="section" style={{ background: 'rgba(10,6,18,0.5)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-col-center" style={{ marginBottom: 80 }}>
            <div className="section-label">Tailored Smart Solutions</div>
            <h2 className="heading-lg" style={{ margin: '14px 0 18px', maxWidth: 700 }}>
              End-to-End IoT Expertise
            </h2>
          </motion.div>

          {[
            { num: '01', tag: 'Custom Dev', color: '#06B6D4', title: 'Custom software development', desc: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.', icon: <img src={icon1} alt="Custom Dev" style={{ width: '48px', height: '48px', objectFit:'contain' }} /> },
            { num: '02', tag: 'Advisory', color: '#D946EF', title: 'IT consulting and digital advisory', desc: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.', icon: <img src={icon2} alt="Advisory" style={{ width: '48px', height: '48px', objectFit:'contain' }} /> },
            { num: '03', tag: 'Transform', color: '#8B5CF6', title: 'Digital transformation', desc: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.', icon: <img src={icon3} alt="Transform" style={{ width: '48px', height: '48px', objectFit:'contain' }} /> },
          ].map((s, i) => (
            <div key={i} className="zigzag-row">
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: `${s.color}15`, border: `1px solid ${s.color}30`, borderRadius: 100, marginBottom: 24 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, boxShadow: `0 0 10px ${s.color}` }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>{s.num} — {s.tag}</span>
                </div>
                <h3 className="heading-md" style={{ marginBottom: '20px' }}>{s.title}</h3>
                <p className="text-body" style={{ fontSize: '1.05rem', maxWidth: 480 }}>{s.desc}</p>
                <div style={{ marginTop: 32 }}>
                  <button className="btn-ghost" style={{ borderColor: s.color, color: s.color }} onClick={() => navigate('/services')}>Learn More →</button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card" style={{ padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `radial-gradient(circle at center, ${s.color}15 0%, rgba(15,10,25,0.7) 100%)` }}>
                <div style={{ transform: 'scale(1.5)', filter: `drop-shadow(0 0 20px ${s.color}40)` }}>{s.icon}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES (MASONRY) ────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <div style={{ maxWidth: 560 }}>
              <div className="section-label">Industries in Focus</div>
              <h2 className="heading-lg" style={{ margin: '14px 0', lineHeight: 1.1 }}>
                Accelerate Growth
              </h2>
            </div>
            <button className="btn-neo" onClick={() => navigate('/industries')}>Unlock Innovation</button>
          </motion.div>

          <div className="masonry-grid">
            {[
              { num: '01', title: 'FinTech', color: '#06B6D4', tags: ['Finance', 'Banking', 'Payments'] },
              { num: '02', title: 'Real Estate', color: '#D946EF', tags: ['PropTech', 'CRM', 'Analytics'] },
              { num: '03', title: 'Healthcare', color: '#10B981', tags: ['EHR', 'EMR', 'Telemedicine'] },
              { num: '04', title: 'Transport & Mobility', color: '#8B5CF6', tags: ['TMS', 'WMS', 'Blockchain'] },
              { num: '05', title: 'Software & SaaS', color: '#06B6D4', tags: ['SaaS', 'B2B', 'Ecosystems'] },
              { num: '06', title: 'Manufacturing', color: '#10B981', tags: ['Industry 4.0', 'IoT', 'ERP'] },
              { num: '07', title: 'Smart Home', color: '#06B6D4', tags: ['IoT', 'Appliances', 'UX'] },
            ].map((ind, i) => (
              <motion.div key={i} className="masonry-item glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 3) * 0.1 }} onClick={() => navigate('/industries')} style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, padding: '24px', fontSize: '2.5rem', fontWeight: 900, color: `${ind.color}15`, fontFamily: "'Space Grotesk',sans-serif", lineHeight: 0.8 }}>{ind.num}</div>
                <h3 className="heading-md" style={{ fontSize: '1.4rem', marginBottom: 24, color: '#FFF' }}>{ind.title}</h3>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {ind.tags.map(t => <span key={t} style={{ fontSize: '0.7rem', padding: '4px 10px', borderRadius: 100, background: `${ind.color}15`, border: `1px solid ${ind.color}30`, color: ind.color, fontWeight: 600, fontFamily: "'Space Grotesk',sans-serif" }}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (MARQUEE) ─────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Voices</div>
          <h2 className="heading-lg" style={{ margin: '14px 0 0' }}>Trusted by Teams Building the Future</h2>
        </div>
        
        <div className="marquee-wrapper" style={{ border: 'none', background: 'transparent' }}>
          <div className="marquee-track" style={{ animationDuration: '40s', gap: 32 }}>
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="glass-card" style={{ width: 450, padding: 40, whiteSpace: 'normal', flexShrink: 0 }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
                  {[1, 2, 3, 4, 5].map(s => <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={t.color}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>)}
                </div>
                <p style={{ fontSize: '1.05rem', color: 'rgba(248,250,252,0.8)', lineHeight: 1.7, marginBottom: 32 }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <img src={t.avatar} alt={t.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', boxShadow: `0 0 15px ${t.color}40` }} />
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', fontFamily: "'Space Grotesk',sans-serif" }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(248,250,252,0.5)', marginTop: 4 }}>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ padding: '100px 5%' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: 80, alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: 'sticky', top: 120 }}>
            <div className="section-label">FAQ</div>
            <h2 className="heading-lg" style={{ margin: '16px 0 24px' }}>Every Question,<br />Answered.</h2>
            <p className="text-body" style={{ marginBottom: 40 }}>Still curious? These are the questions we hear most from new clients and partners.</p>
            <button className="btn-neo" onClick={() => navigate('/contact')}>Ask Us Directly</button>
          </motion.div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'What industries does AIQA Labs specialize in?', a: 'We work across FinTech, Healthcare, Real Estate, Transport & Mobility, Manufacturing, Smart Home, and Software/SaaS — with dedicated teams that carry real domain experience in each vertical.' },
              { q: 'How is AIQA different from a standard software agency?', a: "Most agencies execute what you hand them. We start with strategy. Our process begins with understanding your operational problem deeply, then designing the right architecture." },
              { q: 'Can AIQA handle both hardware integration and software development?', a: "Yes. That's one of our core differentiators. We bridge embedded firmware, edge devices, IoT protocols (MQTT, CoAP, OPC-UA), and cloud backends into unified products." },
              { q: 'What does the engagement process look like from day one?', a: 'We start with a no-cost discovery call, move into a scoping document with architecture recommendations, then into a phased delivery plan.' },
              { q: 'Do you offer post-launch support and maintenance?', a: 'Absolutely. We offer tiered SLA-based support plans, proactive monitoring, feature iteration sprints, and on-call engineering for critical systems.' },
              { q: 'What is the typical timeline for a mid-scale project?', a: 'A well-scoped mid-scale product typically ships its first production-ready release in 10–14 weeks.' },
              { q: 'Is AI actually embedded into your solutions or just a marketing label?', a: "It's embedded. Depending on the use case, we deploy predictive maintenance models, NLP-driven data extraction, computer vision, or recommendation engines." },
            ].map((item, i) => <FaqItem key={i} item={item} index={i} />)}
          </div>
        </div>
      </section>
    </div>
  )
}

const TESTIMONIALS = [
  { quote: "AIQA transformed our operations with their innovative IoT solutions. Their platform is intuitive, efficient, and has significantly boosted our productivity. Highly recommended!", name: 'Jane Doe', title: 'CEO, Tech Innovations', avatar: profile1, color: '#06B6D4' },
  { quote: "The team at AIQA delivered beyond our expectations. Their digital twin technology provided real-time insights that were crucial for our decision-making process. A true partner in innovation.", name: 'John Smith', title: 'CTO, Global Enterprises', avatar: profile2, color: '#D946EF' },
  { quote: "Working with AIQA was a game-changer. Their tailored software development and consulting services helped us streamline our processes and achieve remarkable growth. Exceptional service!", name: 'Emily White', title: 'Director, Future Systems', avatar: profile3, color: '#8B5CF6' },
]

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="glass-card" style={{ padding: '0 24px', borderRadius: 16 }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontSize: '1.05rem', fontWeight: 600, color: open ? '#FFF' : 'var(--text)', transition: 'color 0.2s' }}>{item.q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} style={{ fontSize: '1.5rem', color: open ? '#D946EF' : 'var(--muted)', fontWeight: 300 }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
          <p style={{ paddingBottom: '24px', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.a}</p>
        </motion.div>}
      </AnimatePresence>
    </motion.div>
  )
}

export default Home
