import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import star from '../assets/star copy.png'
import content from '../assets/content.png'
import graph from '../assets/graph.png'
import circleIcon from '../assets/circleIcon.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import logo192 from '../assets/logo192.png'
import sparkImg from '../assets/spark-image.png'
import group1 from '../assets/Group1.png'
import group2 from '../assets/Group2.png'
import group3 from '../assets/Group3.png'
import group4 from '../assets/Group4.png'
import group5 from '../assets/Group5.png'
import group6 from '../assets/Group6.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

function Home() {
  const navigate = useNavigate()

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 10% 80px',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* grid overlay */}
        <div className="hero-grid" />

        {/* aurora orbs */}
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />

        {/* editorial depth word — human design signature */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(7rem, 22vw, 18rem)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.013)',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          zIndex: 0,
        }}>TWINV</div>

        {/* cyber badge */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 24 }}>
          <span className="cyber-tag">AIQA Labs — Digital Twin Platform</span>
        </motion.div>

        {/* logo */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 32 }}>
          <img
            src={logo192}
            alt="AIQA"
            width={76}
            style={{ borderRadius: '50%', boxShadow: '0 0 40px rgba(172,106,255,0.35)' }}
          />
        </motion.div>

        {/* headline */}
        <motion.h1
          {...fadeUp(0.15)}
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            margin: '0 0 24px',
            color: '#fff',
            maxWidth: 860,
          }}
        >
          Gateway to{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            limitless
          </span>{' '}
          Digital Twin Possibilities
        </motion.h1>

        {/* subtitle */}
        <motion.p
          {...fadeUp(0.22)}
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 600,
            lineHeight: 1.7,
            margin: '0 auto 40px',
          }}
        >
          Transform how you manage, simulate, and optimize your digital world.
          Leverage advanced technology to unlock endless opportunities and step into the future today.
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <button className="get-started-button" onClick={() => navigate('/contact')}>
            Get Started
          </button>
          <button className="btn-neo" onClick={() => navigate('/platform')}>
            Explore Platform
          </button>
        </motion.div>

        {/* Protocol compatibility pills */}
        <motion.div {...fadeUp(0.38)} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 36, marginBottom: 12 }}>
            Native protocol support
          </div>
          <div className="protocol-row">
            {[
              { icon: group1, label: 'BACnet/IP' },
              { icon: group2, label: 'Modbus TCP' },
              { icon: group3, label: 'OPC UA' },
              { icon: group4, label: 'MQTT' },
              { icon: group5, label: 'Tridium Niagara' },
              { icon: group6, label: 'RDM' },
            ].map((p) => (
              <div key={p.label} className="protocol-pill">
                <img src={p.icon} alt={p.label} />
                {p.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* STATS ROW */}
        <motion.div
          {...fadeUp(0.42)}
          style={{
            display: 'flex',
            gap: 0,
            marginTop: 72,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: 48,
            width: '100%',
            maxWidth: 720,
            justifyContent: 'center',
          }}
        >
          {[
            { value: '9+', sub: 'Years', label: 'Experience', desc: 'Driving innovation in the tech industry.' },
            { value: '10+', sub: 'Industries', label: 'Served', desc: 'Empowering diverse sectors with technology.' },
            { value: '100%', sub: 'Client', label: 'Satisfaction', desc: 'Delivering excellence in every project.' },
          ].map((s, i) => (
            <React.Fragment key={i}>
              <div className="stat-neo" style={{ flex: 1, padding: '0 24px', textAlign: 'center' }}>
                <div className="stat-neo-value">{s.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>
                  {s.sub} {s.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginTop: 6, lineHeight: 1.5 }}>
                  {s.desc}
                </div>
              </div>
              {i < 2 && (
                <div style={{ width: 1, background: 'rgba(255,255,255,0.08)', alignSelf: 'stretch' }} />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* ── MARQUEE STRIP ─────────────────────────────────────────── */}
      <div style={{ padding: '0 0 0', margin: '32px 0' }}>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[
              'Digital Twin', 'IoT Integration', 'Real-Time Analytics', 'Predictive Maintenance',
              'OPC UA', 'BACnet/IP', 'Modbus TCP', 'MQTT', 'Edge Computing',
              'AI-Powered Insights', 'Smart Buildings', 'Energy Optimization',
              'Digital Twin', 'IoT Integration', 'Real-Time Analytics', 'Predictive Maintenance',
              'OPC UA', 'BACnet/IP', 'Modbus TCP', 'MQTT', 'Edge Computing',
              'AI-Powered Insights', 'Smart Buildings', 'Energy Optimization',
            ].map((tag, i) => (
              <span key={i} className="marquee-tag">
                <span className="marquee-dot" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── DIVIDER ───────────────────────────────────────────────── */}
      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* ── PLATFORM ──────────────────────────────────────────────── */}
      <section style={{ padding: '80px 10%' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}
        >
          <div style={{ maxWidth: 600 }}>
            <div className="section-label">Our Platform</div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: '#fff',
                margin: '12px 0 16px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              TwinV is the All-in-One Platform<br />for IoT and Digital Twins
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.97rem', maxWidth: 520 }}>
              TwinV combines IoT and digital twin technology to deliver real-time insights,
              predictive analytics, and advanced simulations. Optimize performance,
              streamline operations, and drive innovation with our all-in-one platform.
            </p>
          </div>
          <button className="btn-neo" onClick={() => navigate('/platform')}>
            Step Into the Future
          </button>
        </motion.div>

        {/* Platform cards — each card has a distinct personality and density */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 14 }}>

          {/* 01 — PROTOCOL: full width, editorial typography left + icon grid right */}
          <motion.div
            className="feat-card"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{
              gridColumn: 'span 12',
              background: 'rgba(255,255,255,0.015)',
              border: '1px solid rgba(139,92,246,0.13)',
              display: 'flex', flexWrap: 'wrap', gap: 0,
            }}
          >
            <div style={{ flex: '1 1 340px', padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '5rem', fontWeight: 900, lineHeight: 0.85, color: 'rgba(139,92,246,0.09)', letterSpacing: '-0.05em', marginBottom: 14, userSelect: 'none' }}>01</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span className="live-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#8B5CF6', color: '#8B5CF6', flexShrink: 0 }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(196,181,253,0.65)', letterSpacing: '0.13em', textTransform: 'uppercase' }}>Protocol Layer</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Flexible Protocol<br />Integration
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.72, fontSize: '0.88rem', maxWidth: 380 }}>
                TwinV works with any communication protocol — BACnet/IP, Modbus TCP, OPC UA —
                connecting diverse IoT devices without ripping out existing infrastructure.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', padding: '36px 44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                {[group1, group2, group3, group4, group5, group6].map((icon, i) => (
                  <div key={i} style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={icon} alt="" style={{ width: 30, height: 30, objectFit: 'contain', opacity: 0.8 }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 02 — AI: narrow, image-first, text footer */}
          <motion.div
            className="feat-card"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              gridColumn: 'span 4',
              background: 'linear-gradient(175deg, rgba(139,92,246,0.18) 0%, rgba(6,6,18,0.97) 56%)',
              border: '1px solid rgba(139,92,246,0.22)',
              minHeight: 340, display: 'flex', flexDirection: 'column',
            }}
          >
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 24px 0' }}>
              <img src={star} alt="" style={{ width: '80%', maxWidth: 160, opacity: 0.92, filter: 'drop-shadow(0 0 36px rgba(139,92,246,0.65))' }} />
            </div>
            <div style={{ padding: '18px 24px 26px', borderTop: '1px solid rgba(139,92,246,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span className="live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#AC6AFF', color: '#AC6AFF', flexShrink: 0 }} />
                <span style={{ fontSize: '0.63rem', fontWeight: 700, color: 'rgba(196,181,253,0.6)', letterSpacing: '0.13em', textTransform: 'uppercase' }}>02 — AI Engine</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', margin: '0 0 6px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>AI-Powered Predictions</h3>
              <p style={{ color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, fontSize: '0.82rem' }}>Advanced ML models predict failures before they happen.</p>
            </div>
          </motion.div>

          {/* 03 — INSIGHTS: wide, graph edge-bleeds right side */}
          <motion.div
            className="feat-card"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}
            style={{
              gridColumn: 'span 8',
              background: 'linear-gradient(140deg, rgba(7,180,235,0.07) 0%, rgba(6,6,18,0.97) 52%)',
              border: '1px solid rgba(7,180,235,0.14)',
              minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <div style={{ padding: '30px 32px 0', maxWidth: 420 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className="live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#07B4EB', color: '#07B4EB', flexShrink: 0 }} />
                <span style={{ fontSize: '0.63rem', fontWeight: 700, color: 'rgba(103,232,249,0.65)', letterSpacing: '0.13em', textTransform: 'uppercase' }}>03 — Live Data</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', fontWeight: 800, color: '#fff', margin: '0 0 10px', letterSpacing: '-0.02em', lineHeight: 1.18 }}>Real-Time<br />Insights</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontSize: '0.88rem' }}>Live visibility into asset performance. Proactive maintenance before failures occur.</p>
            </div>
            <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(90deg, rgba(6,6,18,0.97) 0%, transparent 100%)', zIndex: 1 }} />
              <img src={graph} alt="" style={{ position: 'absolute', right: 0, bottom: 0, height: '100%', maxWidth: '80%', objectFit: 'contain', objectPosition: 'right bottom', opacity: 0.9, filter: 'drop-shadow(0 0 18px rgba(7,180,235,0.35))' }} />
            </div>
          </motion.div>

          {/* 04 — ENERGY: full width, big display number left, circle image right */}
          <motion.div
            className="feat-card"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.18 }}
            style={{
              gridColumn: 'span 12',
              background: 'linear-gradient(120deg, rgba(16,185,129,0.06) 0%, rgba(6,6,18,0.97) 60%)',
              border: '1px solid rgba(16,185,129,0.13)',
              display: 'flex', flexWrap: 'wrap', gap: 0,
            }}
          >
            <div style={{ flex: '1 1 300px', padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '4.5rem', fontWeight: 900, lineHeight: 0.9, color: 'rgba(16,185,129,0.08)', letterSpacing: '-0.05em', marginBottom: 14, userSelect: 'none' }}>04</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span className="live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', color: '#10B981', flexShrink: 0 }} />
                <span style={{ fontSize: '0.63rem', fontWeight: 700, color: 'rgba(110,231,183,0.6)', letterSpacing: '0.13em', textTransform: 'uppercase' }}>Green Tech</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', fontWeight: 800, color: '#fff', margin: '0 0 10px', letterSpacing: '-0.02em', lineHeight: 1.18 }}>Sustainable Energy<br />Optimization</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.72, fontSize: '0.88rem', maxWidth: 400 }}>
                Optimize energy consumption and reduce carbon footprint with TwinV’s advanced sustainability insights and predictive controls.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', padding: '24px 44px' }}>
              <img src={circleIcon} alt="" style={{ width: 180, opacity: 0.88, filter: 'drop-shadow(0 0 40px rgba(16,185,129,0.42))' }} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────── */}
      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <section style={{ padding: '80px 10%' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}
        >
          <div style={{ maxWidth: 600 }}>
            <div className="section-label">Tailored Smart Solutions</div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: '#fff',
                margin: '12px 0 16px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Comprehensive IoT Solutions for Every Stage of Development
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.97rem', maxWidth: 520 }}>
              We specialize in delivering end-to-end IoT solutions, combining hardware and software expertise.
              Whether you're building a product from scratch, modernizing existing systems, or enhancing
              functionality, we provide the innovation and support your business needs to thrive.
            </p>
          </div>
          <button className="btn-neo" onClick={() => navigate('/services')}>
            Transform with Us
          </button>
        </motion.div>

        {/* Services — editorial horizontal list, NOT cards */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.045)' }}>
          {[
            { num: '01', tag: 'Custom Dev',  color: '#8B5CF6', textColor: '#C4B5FD', title: 'Custom software development',       desc: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.',          icon: icon1 },
            { num: '02', tag: 'Advisory',    color: '#07B4EB', textColor: '#67E8F9', title: 'IT consulting and digital advisory', desc: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.',                      icon: icon2 },
            { num: '03', tag: 'Transform',   color: '#10B981', textColor: '#6EE7B7', title: 'Digital transformation',            desc: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.',             icon: icon3 },
          ].map((svc, i) => (
            <motion.div
              key={i}
              className="svc-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              onClick={() => navigate('/services')}
            >
              {/* oversized faded number — editorial anchor */}
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3.8rem', fontWeight: 900, lineHeight: 1, color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.04em', flexShrink: 0, width: 64, userSelect: 'none' }}>
                {svc.num}
              </div>
              {/* colored gradient divider */}
              <div style={{ width: 1, alignSelf: 'stretch', background: `linear-gradient(180deg, transparent, ${svc.color}50, transparent)`, flexShrink: 0 }} />
              {/* content block */}
              <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${svc.color}12`, border: `1px solid ${svc.color}28`, borderRadius: 100, padding: '3px 10px', marginBottom: 10 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: svc.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, color: svc.textColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{svc.tag}</span>
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#fff', marginBottom: 7, lineHeight: 1.25, letterSpacing: '-0.01em' }}>{svc.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.68, fontSize: '0.87rem', maxWidth: 480 }}>{svc.desc}</p>
              </div>
              {/* illustration */}
              <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                <img src={svc.icon} alt="" style={{ width: 88, opacity: 0.7, filter: `drop-shadow(0 0 10px ${svc.color}44)` }} />
              </div>
              {/* arrow */}
              <span style={{ color: svc.color, fontSize: '1.15rem', flexShrink: 0, opacity: 0.65, alignSelf: 'center' }}>→</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────── */}
      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* ── INDUSTRIES ────────────────────────────────────────────── */}
      <section style={{ padding: '80px 10% 100px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}
        >
          <div style={{ maxWidth: 600 }}>
            <div className="section-label">Industries in Focus</div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: '#fff',
                margin: '12px 0 16px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Accelerate Growth with End-to-End IoT Expertise
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.97rem', maxWidth: 520 }}>
              Transform your business faster with our unparalleled IoT expertise. Leveraging deep
              domain knowledge, specialized hardware-software integration, and tailored delivery
              processes, we empower you to innovate, optimize operations, and achieve sustainable growth.
            </p>
          </div>
          <button className="btn-neo" onClick={() => navigate('/industries')}>
            Unlock Innovation
          </button>
        </motion.div>

        {/* Industries — featured hero tile + editorial chip grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 12 }}>

          {/* FinTech — editorial featured tile, tall, left column */}
          <motion.div
            className="ind-hero-tile"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
            onClick={() => navigate('/industries')}
            style={{
              gridColumn: 'span 5', gridRow: 'span 2',
              background: 'rgba(139,92,246,0.07)',
              border: '1px solid rgba(139,92,246,0.18)',
              minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
                <span className="live-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#8B5CF6', color: '#8B5CF6' }} />
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'rgba(196,181,253,0.55)', letterSpacing: '0.13em', textTransform: 'uppercase' }}>Featured Industry</span>
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, color: '#fff', marginBottom: 16 }}>
                Fin<span style={{ background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tech</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem', lineHeight: 1.65, maxWidth: 240 }}>
                Custom financial software for digital payments, banking, and secure transactions.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="rgba(172,106,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
              </svg>
              <span style={{ color: '#AC6AFF', fontSize: '1.4rem', opacity: 0.65 }}>→</span>
            </div>
          </motion.div>

          {/* remaining 6 industries — chip tiles */}
          {[
            { title: 'Real Estate',           span: 7, color: '#07B4EB', desc: 'Modern real estate platforms built with cutting-edge tech.',       icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
            { title: 'Healthcare',            span: 7, color: '#10B981', desc: 'Custom EHR, EMR, ERX, and other medical software solutions.',      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
            { title: 'Transport & Mobility',  span: 4, color: '#F59E0B', desc: 'TMS, WMS, vehicle management and blockchain systems.',            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
            { title: 'Software',              span: 4, color: '#8B5CF6', desc: 'SaaS systems to product ecosystems, any complexity.',             icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
            { title: 'Manufacturing',         span: 4, color: '#07B4EB', desc: 'Optimize production with custom manufacturing software.',         icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M6 20V10l6-6 6 6v10"/><rect x="9" y="14" width="6" height="6"/></svg> },
            { title: 'Smart Home & Appliances', span: 3, color: '#10B981', desc: 'User-centered IoT software for smart home products.',            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
          ].map((ind, i) => (
            <motion.div
              key={i}
              className="ind-chip-tile"
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={() => navigate('/industries')}
              style={{ gridColumn: `span ${ind.span}`, background: `${ind.color}09`, border: `1px solid ${ind.color}20` }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent 10%, ${ind.color} 50%, transparent 90%)` }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9, color: ind.color }}>
                {ind.icon}
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{ind.title}</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.82rem', lineHeight: 1.6, paddingRight: 24 }}>{ind.desc}</p>
              <span style={{ position: 'absolute', bottom: 14, right: 18, color: ind.color, fontSize: '0.9rem', opacity: 0.6 }}>→</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
