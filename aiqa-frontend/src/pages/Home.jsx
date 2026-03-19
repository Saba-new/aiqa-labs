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
    { num: '01', color: '#FB923C', label: 'Protocol Layer', title: 'Flexible Protocol Integration', desc: 'TwinV works with any communication protocol — BACnet/IP, Modbus TCP, OPC UA — connecting diverse IoT devices without ripping out existing infrastructure.', img: content },
    { num: '02', color: '#F472B6', label: 'AI Engine', title: 'AI-Powered Predictions', desc: 'Advanced ML models predict failures before they happen, keeping your operations always running at peak performance.', img: star },
    { num: '03', color: '#818CF8', label: 'Live Data', title: 'Real-Time Insights', desc: 'Live visibility into asset performance. Proactive maintenance before failures occur, enabled by streaming data pipelines.', img: graph },
    { num: '04', color: '#34D399', label: 'Green Tech', title: 'Sustainable Energy Optimization', desc: "Optimize energy consumption and reduce carbon footprint with TwinV's advanced sustainability insights and predictive controls.", img: circleIcon },
  ]

  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="home-hero" style={{ padding: '150px 10% 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />

        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(7rem,22vw,18rem)', fontWeight: 900, letterSpacing: '-0.05em', color: 'rgba(251,146,60,0.03)', userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 0 }}>TWINV</div>

        <motion.h1 {...A(0.15)} className="hero-title" style={{ fontSize: 'clamp(2.4rem,5.5vw,4.8rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 24px', color: '#FFF7ED', maxWidth: 860, fontFamily: "'Space Grotesk',sans-serif", position: 'relative', zIndex: 1 }}>
          Gateway to{' '}
          <span style={{ background: 'linear-gradient(135deg,#FBBF24 0%,#FB923C 40%,#F472B6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>limitless</span>
          {' '}Digital Twin Possibilities
        </motion.h1>

        <motion.p {...A(0.22)} className="hero-desc" style={{ fontSize: 'clamp(1rem,1.8vw,1.15rem)', color: 'rgba(255,225,190,0.52)', maxWidth: 560, lineHeight: 1.75, margin: '0 auto 40px', position: 'relative', zIndex: 1 }}>
          Transform how you manage, simulate, and optimize your digital world. Leverage advanced technology to unlock endless opportunities and step into the future today.
        </motion.p>

        <motion.div {...A(0.3)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <button className="get-started-button" onClick={() => navigate('/contact')}>Get Started</button>
          <button className="btn-ghost" onClick={() => navigate('/platform')}>Explore Platform</button>
        </motion.div>

        <motion.div {...A(0.38)} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.66rem', color: 'rgba(255,225,190,0.22)', letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 40, marginBottom: 14, fontFamily: "'Space Grotesk',sans-serif" }}>Native protocol support</div>
          <div className="protocol-row" style={{ justifyContent: 'center' }}>
            {[{ i: group1, l: 'BACnet/IP' }, { i: group2, l: 'Modbus TCP' }, { i: group3, l: 'OPC UA' }, { i: group4, l: 'MQTT' }, { i: group5, l: 'Tridium Niagara' }, { i: group6, l: 'RDM' }].map(p => (
              <div key={p.l} className="protocol-pill"><img src={p.i} alt={p.l} />{p.l}</div>
            ))}
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div {...A(0.42)} className="stats-strip" style={{ display: 'flex', gap: 0, marginTop: 72, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 48, width: '100%', maxWidth: 720, justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          {[{ v: '9+', s: 'Years', l: 'Experience', d: 'Driving innovation in the tech industry.' }, { v: '10+', s: 'Industries', l: 'Served', d: 'Empowering diverse sectors with technology.' }, { v: '100%', s: 'Client', l: 'Satisfaction', d: 'Delivering excellence in every project.' }].map((s, i) => (
            <React.Fragment key={i}>
              <div style={{ flex: 1, padding: '0 24px', textAlign: 'center' }}>
                <div className="stat-neo-value">{s.v}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,225,190,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6, fontFamily: "'Space Grotesk',sans-serif" }}>{s.s} {s.l}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,225,190,0.22)', marginTop: 7, lineHeight: 1.55 }}>{s.d}</div>
              </div>
              {i < 2 && <div className="stats-divider" style={{ width: 1, background: 'rgba(255,255,255,0.07)', alignSelf: 'stretch' }} />}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <div className="marquee-wrapper"><div className="marquee-track">
        {Array(2).fill(['Digital Twin', 'IoT Integration', 'Real-Time Analytics', 'Predictive Maintenance', 'OPC UA', 'BACnet/IP', 'Modbus TCP', 'MQTT', 'Edge Computing', 'AI-Powered Insights', 'Smart Buildings', 'Energy Optimization']).flat().map((t, i) => (
          <span key={i} className="marquee-tag"><span className="marquee-dot" />{t}</span>
        ))}
      </div></div>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* ── PLATFORM — new: ILLUMINATED SPLIT TILES ─────────── */}
      <section style={{ padding: '90px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 540 }}>
            <div className="section-label">Our Platform</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#FFF7ED', margin: '14px 0 18px', lineHeight: 1.18, letterSpacing: '-0.025em', fontFamily: "'Space Grotesk',sans-serif" }}>
              TwinV is the All-in-One Platform for IoT and Digital Twins
            </h2>
            <p style={{ color: 'rgba(255,225,190,0.48)', lineHeight: 1.72, fontSize: '0.97rem', maxWidth: 480 }}>
              TwinV combines IoT and digital twin technology to deliver real-time insights, predictive analytics, and advanced simulations.
            </p>
          </div>
          <button className="btn-neo" onClick={() => navigate('/platform')}>Step Into the Future</button>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
          {platformFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                border: `1px solid ${f.color}1A`,
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'rgba(18, 15, 24, 0.8)',
                transition: 'border-color 0.3s, transform 0.3s',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${f.color}40`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${f.color}1A`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <img src={f.img} alt="" style={{ width: 40, height: 40, objectFit: 'contain', opacity: 0.9 }} />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 900, color: `${f.color}30`, lineHeight: 1 }}>{f.num}</span>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${f.color}10`, border: `1px solid ${f.color}25`, borderRadius: '100px', padding: '4px 12px', marginBottom: 16 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: f.color }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: f.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>{f.label}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFF7ED', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{f.title}</h3>
                <p style={{ color: 'rgba(255, 225, 190, 0.45)', lineHeight: 1.7, fontSize: '0.9rem', flexGrow: 1 }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section style={{ padding: '90px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 560 }}>
            <div className="section-label">Tailored Smart Solutions</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#FFF7ED', margin: '14px 0 18px', lineHeight: 1.18, letterSpacing: '-0.025em', fontFamily: "'Space Grotesk',sans-serif" }}>
              Comprehensive IoT Solutions for Every Stage of Development
            </h2>
            <p style={{ color: 'rgba(255,225,190,0.48)', lineHeight: 1.72, fontSize: '0.97rem', maxWidth: 480 }}>
              We specialize in delivering end-to-end IoT solutions, combining hardware and software expertise.
            </p>
          </div>
          <button className="btn-neo" onClick={() => navigate('/services')}>Transform with Us</button>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {[
            { num: '01', tag: 'Custom Dev', color: '#FB923C', title: 'Custom software development', desc: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.', icon: (
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#FB923C" strokeWidth="1.5" fill="#FB923C22"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#FB923C" strokeWidth="1.5"/></svg>
            ) },
            { num: '02', tag: 'Advisory', color: '#F472B6', title: 'IT consulting and digital advisory', desc: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.', icon: (
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#F472B6" strokeWidth="1.5" fill="#F472B622"/><path d="M12 12l4-2-2 4-2-2z" stroke="#F472B6" strokeWidth="1.5"/></svg>
            ) },
            { num: '03', tag: 'Transform', color: '#818CF8', title: 'Digital transformation', desc: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.', icon: (
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15,11 9,11" stroke="#818CF8" strokeWidth="1.5" fill="#818CF822"/><rect x="9" y="13" width="6" height="7" rx="1" stroke="#818CF8" strokeWidth="1.5" fill="#818CF822"/></svg>
            ) },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="svc-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => navigate('/services')}
              style={{
                background: 'rgba(18, 15, 24, 0.8)',
                borderRadius: '24px',
                border: `1px solid ${s.color}1A`,
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${s.color}40`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${s.color}1A`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ marginBottom: '20px' }}>{s.icon}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${s.color}10`, border: `1px solid ${s.color}25`, borderRadius: '100px', padding: '4px 12px', marginBottom: 16, alignSelf: 'flex-start' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>{s.tag}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFF7ED', marginBottom: '12px', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ color: 'rgba(255, 225, 190, 0.45)', lineHeight: 1.7, fontSize: '0.9rem', flexGrow: 1 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* ── INDUSTRIES ──────────────────────────────────────── */}
      <section style={{ padding: '90px 10% 100px' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 560 }}>
            <div className="section-label">Industries in Focus</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#FFF7ED', margin: '14px 0 18px', lineHeight: 1.18, letterSpacing: '-0.025em', fontFamily: "'Space Grotesk',sans-serif" }}>
              Accelerate Growth with End-to-End IoT Expertise
            </h2>
          </div>
          <button className="btn-neo" onClick={() => navigate('/industries')}>Unlock Innovation</button>
        </motion.div>

        <div className="industry-list-container" style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, overflow: 'hidden', background: 'rgba(18,15,24,0.35)' }}>
          {[
            { num: '01', title: 'FinTech', color: '#FB923C', tags: ['Finance', 'Banking', 'Payments'] },
            { num: '02', title: 'Real Estate', color: '#F472B6', tags: ['PropTech', 'CRM', 'Analytics'] },
            { num: '03', title: 'Healthcare', color: '#34D399', tags: ['EHR', 'EMR', 'Telemedicine'] },
            { num: '04', title: 'Transport & Mobility', color: '#818CF8', tags: ['TMS', 'WMS', 'Blockchain'] },
            { num: '05', title: 'Software & SaaS', color: '#FB923C', tags: ['SaaS', 'B2B', 'Ecosystems'] },
            { num: '06', title: 'Manufacturing', color: '#22D3EE', tags: ['Industry 4.0', 'IoT', 'ERP'] },
            { num: '07', title: 'Smart Home', color: '#34D399', tags: ['IoT', 'Appliances', 'UX'] },
          ].map((ind, i, arr) => (
            <motion.div key={i} className="industry-list-item-home" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} onClick={() => navigate('/industries')}
              style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '18px 28px', cursor: 'pointer', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', transition: 'background 0.2s', width: '100%' }}
              onMouseEnter={e => e.currentTarget.style.background = `${ind.color}06`}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div className="industry-num" style={{ fontSize: '0.62rem', fontWeight: 700, color: `${ind.color}45`, fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '0.1em', minWidth: 32, flexShrink: 0 }}>{ind.num}</div>
              <div className="industry-divider" style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.04)', margin: '0 20px', flexShrink: 0 }} />
              <div className="industry-title" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.95rem', fontWeight: 700, color: '#FFF7ED' }}>{ind.title}</div>
              <div className="industry-tags" style={{ display: 'flex', gap: 6, flex: 1, flexWrap: 'wrap', padding: '0 20px', justifyContent: 'flex-start' }}>
                {ind.tags.map((t, ti) => <span key={ti} style={{ fontSize: '0.6rem', padding: '3px 9px', borderRadius: 20, background: `${ind.color}10`, border: `1px solid ${ind.color}28`, color: ind.color, fontWeight: 600, fontFamily: "'Space Grotesk',sans-serif", whiteSpace: 'nowrap' }}>{t}</span>)}
              </div>
              <span className="industry-arrow" style={{ color: ind.color, fontSize: '0.95rem', opacity: 0.45, flexShrink: 0 }}>→</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────── */}
      <TestiSpotlight />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ padding: '90px 10% 120px' }}>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="faq-info" style={{ position: 'sticky', top: 120 }}>
            <div className="section-label">FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 800, color: '#FFF7ED', margin: '16px 0 18px', letterSpacing: '-0.025em', lineHeight: 1.18, fontFamily: "'Space Grotesk',sans-serif" }}>Every Question,<br />Answered.</h2>
            <p style={{ color: 'rgba(255,225,190,0.38)', fontSize: '0.9rem', lineHeight: 1.72, maxWidth: 300 }}>Still curious? These are the questions we hear most from new clients and partners.</p>
            <button className="btn-neo" onClick={() => navigate('/contact')} style={{ marginTop: 32 }}>Ask Us Directly</button>
          </motion.div>
          <div className="faq-list">
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
  { quote: "AIQA transformed our operations with their innovative IoT solutions. Their platform is intuitive, efficient, and has significantly boosted our productivity. Highly recommended!", name: 'Jane Doe', title: 'CEO, Tech Innovations', avatar: profile1, color: '#FB923C' },
  { quote: "The team at AIQA delivered beyond our expectations. Their digital twin technology provided real-time insights that were crucial for our decision-making process. A true partner in innovation.", name: 'John Smith', title: 'CTO, Global Enterprises', avatar: profile2, color: '#F472B6' },
  { quote: "Working with AIQA was a game-changer. Their tailored software development and consulting services helped us streamline our processes and achieve remarkable growth. Exceptional service!", name: 'Emily White', title: 'Director, Future Systems', avatar: profile3, color: '#818CF8' },
]

function TestiSpotlight() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const t = TESTIMONIALS[active]
  const go = (next) => { setDir(next > active ? 1 : -1); setActive(next) }
  return (
    <section style={{ padding: '90px 10% 100px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 500, background: `radial-gradient(ellipse,${t.color}07 0%,transparent 70%)`, pointerEvents: 'none', transition: 'background 0.6s' }} />
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Client Voices</div>
        <h2 style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', fontWeight: 800, color: '#FFF7ED', margin: '16px 0 0', letterSpacing: '-0.025em', fontFamily: "'Space Grotesk',sans-serif" }}>Trusted by Teams Building the Future</h2>
      </motion.div>
      <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -24, left: 0, fontFamily: 'Georgia,serif', fontSize: '9rem', lineHeight: 1, color: `${t.color}07`, userSelect: 'none', pointerEvents: 'none', fontWeight: 900 }}>"</div>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div key={active} initial={{ opacity: 0, x: dir * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -40 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: 'rgba(18,15,24,0.8)', border: `1px solid ${t.color}1A`, borderRadius: 24, padding: '52px 56px 44px', position: 'relative', overflow: 'hidden', backdropFilter: 'blur(12px)' }}
          >
            <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg,transparent,${t.color}55,transparent)` }} />
            <div style={{ display: 'flex', gap: 5, marginBottom: 28 }}>
              {[1, 2, 3, 4, 5].map(s => <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={t.color}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>)}
            </div>
            <p style={{ fontSize: 'clamp(1.05rem,2vw,1.2rem)', color: 'rgba(255,225,190,0.75)', lineHeight: 1.82, marginBottom: 40 }}>{t.quote}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28 }}>
              <img src={t.avatar} alt={t.name} style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', boxShadow: `0 0 18px ${t.color}22` }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF7ED', fontFamily: "'Space Grotesk',sans-serif" }}>{t.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,225,190,0.32)', marginTop: 3 }}>{t.title}</div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, background: `${t.color}10`, border: `1px solid ${t.color}28`, color: t.color, fontFamily: "'Space Grotesk',sans-serif" }}>Verified Client</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 36 }}>
          <button onClick={() => go((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)', color: 'rgba(255,225,190,0.4)', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.color = t.color }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = 'rgba(255,225,190,0.4)' }}>←</button>
          <div style={{ display: 'flex', gap: 8 }}>
            {TESTIMONIALS.map((_, i) => <button key={i} onClick={() => go(i)} style={{ width: i === active ? 24 : 7, height: 7, borderRadius: 4, border: 'none', cursor: 'pointer', background: i === active ? t.color : 'rgba(255,255,255,0.14)', transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)', padding: 0 }} />)}
          </div>
          <button onClick={() => go((active + 1) % TESTIMONIALS.length)} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)', color: 'rgba(255,225,190,0.4)', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.color = t.color }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = 'rgba(255,225,190,0.4)' }}>→</button>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 4px', background: 'none', border: 'none', cursor: 'pointer', gap: 16, textAlign: 'left' }}>
        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: open ? '#FFF7ED' : 'rgba(255,225,190,0.58)', lineHeight: 1.4, transition: 'color 0.25s' }}>{item.q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} style={{ fontSize: '1.4rem', color: open ? '#FB923C' : 'rgba(255,225,190,0.2)', flexShrink: 0, lineHeight: 1, fontWeight: 300 }}>+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && <motion.div key="ans" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <p style={{ padding: '0 4px 22px', color: 'rgba(255,225,190,0.38)', fontSize: '0.88rem', lineHeight: 1.78, maxWidth: 580 }}>{item.a}</p>
        </motion.div>}
      </AnimatePresence>
    </motion.div>
  )
}

export default Home
