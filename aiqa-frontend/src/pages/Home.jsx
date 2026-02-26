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
import logo192 from '../assets/logo192.png'
import sparkImg from '../assets/spark-image.png'
import group1 from '../assets/Group1.png'
import group2 from '../assets/Group2.png'
import group3 from '../assets/Group3.png'
import group4 from '../assets/Group4.png'
import group5 from '../assets/Group5.png'
import group6 from '../assets/Group6.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import profile3 from '../assets/profile3.png'

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

        {/* Industries — sector scanner horizontal strips */}
        <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, overflow: 'hidden', background: 'rgba(255,255,255,0.012)' }}>
          {[
            { num: '01', title: 'FinTech',              color: '#AC6AFF', tags: ['Finance', 'Banking', 'Payments'],     desc: 'Custom financial software for digital payments, banking, and secure transactions.' },
            { num: '02', title: 'Real Estate',          color: '#07B4EB', tags: ['PropTech', 'CRM', 'Analytics'],       desc: 'Modern real estate platforms built with cutting-edge technology.' },
            { num: '03', title: 'Healthcare',           color: '#10B981', tags: ['EHR', 'EMR', 'Telemedicine'],         desc: 'Custom EHR, EMR, ERX, and other medical software solutions.' },
            { num: '04', title: 'Transport & Mobility', color: '#F59E0B', tags: ['TMS', 'WMS', 'Blockchain'],           desc: 'TMS, WMS, vehicle management and blockchain systems.' },
            { num: '05', title: 'Software & SaaS',      color: '#8B5CF6', tags: ['SaaS', 'B2B', 'Ecosystems'],          desc: 'SaaS systems to product ecosystems, any complexity.' },
            { num: '06', title: 'Manufacturing',        color: '#07B4EB', tags: ['Industry 4.0', 'IoT', 'ERP'],         desc: 'Optimize production with custom manufacturing software.' },
            { num: '07', title: 'Smart Home',           color: '#10B981', tags: ['IoT', 'Appliances', 'UX'],            desc: 'User-centered IoT software for smart home products.' },
          ].map((ind, i, arr) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover="hov"
              onClick={() => navigate('/industries')}
              style={{
                position: 'relative', display: 'flex', alignItems: 'center', gap: 0,
                padding: '20px 28px', cursor: 'pointer', overflow: 'hidden',
                borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.045)' : 'none',
              }}
            >
              {/* hover bg wash */}
              <motion.div
                variants={{ hov: { opacity: 1 }, initial: { opacity: 0 } }} initial={{ opacity: 0 }}
                style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${ind.color}10 0%, transparent 65%)`, pointerEvents: 'none' }}
              />
              {/* left accent bar */}
              <motion.div
                variants={{ hov: { scaleY: 1, opacity: 1 }, initial: { scaleY: 0, opacity: 0 } }} initial={{ scaleY: 0, opacity: 0 }}
                style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(180deg, transparent, ${ind.color}, transparent)`, transformOrigin: 'center', borderRadius: 2 }}
              />

              {/* index number */}
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', fontWeight: 700,
                color: `${ind.color}60`, letterSpacing: '0.1em', minWidth: 36, userSelect: 'none',
              }}>{ind.num}</div>

              {/* vertical divider */}
              <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.06)', margin: '0 24px', flexShrink: 0 }} />

              {/* title */}
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 700,
                color: '#fff', letterSpacing: '-0.015em', flex: '0 0 200px',
              }}>{ind.title}</div>

              {/* tag pills */}
              <div style={{ display: 'flex', gap: 6, flex: '0 0 280px', flexWrap: 'wrap', padding: '0 24px' }}>
                {ind.tags.map((t, ti) => (
                  <span key={ti} style={{
                    fontSize: '0.62rem', padding: '3px 10px', borderRadius: 20,
                    background: `${ind.color}14`, border: `1px solid ${ind.color}35`,
                    color: ind.color, fontWeight: 600, letterSpacing: '0.06em', whiteSpace: 'nowrap',
                  }}>{t}</span>
                ))}
              </div>

              {/* description */}
              <div style={{ flex: 1, fontSize: '0.81rem', color: 'rgba(255,255,255,0.33)', lineHeight: 1.6 }}>{ind.desc}</div>

              {/* arrow */}
              <motion.span
                variants={{ hov: { x: 5, opacity: 1 }, initial: { x: 0, opacity: 0.35 } }} initial={{ x: 0, opacity: 0.35 }}
                style={{ color: ind.color, fontSize: '1rem', marginLeft: 16, flexShrink: 0 }}
              >→</motion.span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <TestiSpotlight />

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 10% 110px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>

          {/* left — sticky label */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
            style={{ position: 'sticky', top: 120 }}
          >
            <div className="section-label">FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '14px 0 18px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Every Question,<br />Answered.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 300 }}>
              Still curious? These are the questions we hear most from new clients and partners.
            </p>
            <button
              className="btn-neo"
              onClick={() => navigate('/contact')}
              style={{ marginTop: 32 }}
            >
              Ask Us Directly
            </button>
          </motion.div>

          {/* right — accordion */}
          <div>
            {[
              {
                q: 'What industries does AIQA Labs specialize in?',
                a: 'We work across FinTech, Healthcare, Real Estate, Transport & Mobility, Manufacturing, Smart Home, and Software/SaaS — with dedicated teams that carry real domain experience in each vertical, not just generic development capability.',
              },
              {
                q: 'How is AIQA different from a standard software agency?',
                a: 'Most agencies execute what you hand them. We start with strategy. Our process begins with understanding your operational problem deeply, then designing the right architecture — whether that\'s an IoT stack, an AI-driven workflow, or a cloud-native platform. We own outcomes, not just deliverables.',
              },
              {
                q: 'Can AIQA handle both hardware integration and software development?',
                a: 'Yes. That\'s actually one of our core differentiators. We bridge embedded firmware, edge devices, IoT protocols (MQTT, CoAP, OPC-UA), and cloud backends into unified products — without the friction of managing separate vendors.',
              },
              {
                q: 'What does the engagement process look like from day one?',
                a: 'We start with a no-cost discovery call, move into a scoping document with architecture recommendations, then into a phased delivery plan. You get weekly demos, a shared project board, and a dedicated point of contact throughout.',
              },
              {
                q: 'Do you offer post-launch support and maintenance?',
                a: 'Absolutely. We offer tiered SLA-based support plans, proactive monitoring, feature iteration sprints, and on-call engineering for critical systems. Most of our clients treat us as a long-term technology partner, not a one-off vendor.',
              },
              {
                q: 'What is the typical timeline for a mid-scale project?',
                a: 'A well-scoped mid-scale product typically ships its first production-ready release in 10–14 weeks. We use agile sprints with fortnightly review gates so you maintain full visibility and control over scope and timelines throughout.',
              },
              {
                q: 'Is AI actually embedded into your solutions or just a marketing label?',
                a: 'It\'s embedded. Depending on the use case, we deploy predictive maintenance models, NLP-driven data extraction, computer vision for defect detection, or recommendation engines — always purpose-built for your data, not off-the-shelf wrappers.',
              },
            ].map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const TESTIMONIALS = [
  { quote: "AIQA transformed our operations with their innovative IoT solutions. Their platform is intuitive, efficient, and has significantly boosted our productivity. Highly recommended!", name: 'Jane Doe', title: 'CEO, Tech Innovations', avatar: profile1, color: '#AC6AFF' },
  { quote: "The team at AIQA delivered beyond our expectations. Their digital twin technology provided real-time insights that were crucial for our decision-making process. A true partner in innovation.", name: 'John Smith', title: 'CTO, Global Enterprises', avatar: profile2, color: '#10B981' },
  { quote: "Working with AIQA was a game-changer. Their tailored software development and consulting services helped us streamline our processes and achieve remarkable growth. Exceptional service!", name: 'Emily White', title: 'Director, Future Systems', avatar: profile3, color: '#07B4EB' },
]

function TestiSpotlight() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const t = TESTIMONIALS[active]

  const go = (next) => {
    setDir(next > active ? 1 : -1)
    setActive(next)
  }
  const prev = () => go((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => go((active + 1) % TESTIMONIALS.length)

  return (
    <section style={{ padding: '90px 10% 100px', position: 'relative', overflow: 'hidden' }}>
      {/* ambient glow behind active card */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 500,
        background: `radial-gradient(ellipse, ${t.color}0D 0%, transparent 70%)`,
        pointerEvents: 'none', transition: 'background 0.6s ease',
      }} />

      {/* header */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 64 }}
      >
        <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Client Voices</div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#fff', margin: '14px 0 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Trusted by Teams Building the Future
        </h2>
      </motion.div>

      {/* spotlight card */}
      <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>

        {/* large decorative quote marks — background */}
        <div style={{
          position: 'absolute', top: -24, left: 0,
          fontFamily: 'Georgia, serif', fontSize: '9rem', lineHeight: 1,
          color: `${t.color}10`, userSelect: 'none', pointerEvents: 'none',
          transition: 'color 0.5s ease', fontWeight: 900,
        }}>"</div>

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: `1px solid ${t.color}28`,
              borderRadius: 24,
              padding: '52px 56px 44px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* top colored accent */}
            <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${t.color}70, transparent)` }} />
            {/* inner corner shimmer */}
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: `radial-gradient(circle, ${t.color}0F 0%, transparent 70%)`, pointerEvents: 'none' }} />

            {/* stars */}
            <div style={{ display: 'flex', gap: 5, marginBottom: 28 }}>
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={t.color} stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            {/* quote */}
            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.8,
              fontWeight: 400,
              letterSpacing: '0.005em',
              marginBottom: 40,
            }}>
              {t.quote}
            </p>

            {/* author row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 28 }}>
              <img src={t.avatar} alt={t.name} style={{
                width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', flexShrink: 0,
                border: `2px solid ${t.color}50`,
                boxShadow: `0 0 18px ${t.color}28`,
              }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{t.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.38)', marginTop: 3 }}>{t.title}</div>
              </div>
              {/* colored tag pill */}
              <div style={{ marginLeft: 'auto' }}>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '4px 12px', borderRadius: 20,
                  background: `${t.color}15`, border: `1px solid ${t.color}35`, color: t.color,
                }}>Verified Client</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* navigation row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 36 }}>
          {/* prev */}
          <button onClick={prev} style={{
            width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)',
            fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', lineHeight: 1,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.color = t.color }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
          >←</button>

          {/* dots */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {TESTIMONIALS.map((item, i) => (
              <button key={i} onClick={() => go(i)} style={{
                width: i === active ? 24 : 7,
                height: 7, borderRadius: 4, border: 'none', cursor: 'pointer',
                background: i === active ? t.color : 'rgba(255,255,255,0.18)',
                transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                padding: 0,
              }} />
            ))}
          </div>

          {/* next */}
          <button onClick={next} style={{
            width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)',
            fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', lineHeight: 1,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.color = t.color }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
          >→</button>
        </div>

        {/* thumbnail strip */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 28 }}>
          {TESTIMONIALS.map((item, i) => (
            <button key={i} onClick={() => go(i)} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              opacity: i === active ? 1 : 0.35,
              transition: 'opacity 0.3s, transform 0.3s',
              transform: i === active ? 'scale(1.12)' : 'scale(1)',
            }}>
              <img src={item.avatar} alt={item.name} style={{
                width: 36, height: 36, borderRadius: '50%', objectFit: 'cover',
                border: i === active ? `2px solid ${item.color}` : '2px solid transparent',
                boxShadow: i === active ? `0 0 12px ${item.color}50` : 'none',
                transition: 'all 0.3s',
              }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '22px 4px', background: 'none', border: 'none', cursor: 'pointer', gap: 16, textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '0.97rem', fontWeight: 600, color: open ? '#fff' : 'rgba(255,255,255,0.7)', lineHeight: 1.4, transition: 'color 0.25s' }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ fontSize: '1.4rem', color: open ? '#AC6AFF' : 'rgba(255,255,255,0.25)', flexShrink: 0, lineHeight: 1, fontWeight: 300 }}
        >+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="ans"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ padding: '0 4px 22px', color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: 1.75, maxWidth: 580 }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Home
