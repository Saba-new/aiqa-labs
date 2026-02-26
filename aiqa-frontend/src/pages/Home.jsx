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

        {/* Bento 2×2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 16,
          }}
        >
          {/* Card 1 — wide */}
          <motion.div
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ gridColumn: 'span 2' }}
          >
            <span className="card-num">01 — PROTOCOL</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: '12px 0 10px', letterSpacing: '-0.01em' }}>
              Flexible Protocol Integration
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.93rem', maxWidth: 500 }}>
              TwinV supports seamless integration with any communication protocol, ensuring
              compatibility with diverse IoT devices and enabling future-ready scalability.
            </p>
            {/* Protocol icon row */}
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              {[group1, group2, group3, group4, group5, group6].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 44, height: 44,
                    borderRadius: 12,
                    background: 'rgba(139,92,246,0.08)',
                    border: '1px solid rgba(139,92,246,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <img src={icon} alt="" style={{ width: 26, height: 26, objectFit: 'contain', opacity: 0.8 }} />
                </div>
              ))}
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginLeft: 4 }}>+ more</span>
            </div>
          </motion.div>

          {/* Card 2 — accent */}
          <motion.div
            className="bento-card bento-card-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="card-num">02 — AI</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: '12px 0 10px', letterSpacing: '-0.01em' }}>
              AI-Powered<br />Predictions
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '0.93rem' }}>
              Leverage advanced AI and machine learning to predict potential issues,
              optimize resources, and drive intelligent decision-making.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
              <img src={star} alt="AI" style={{ width: 110, opacity: 0.85 }} />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="card-num">03 — INSIGHTS</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: '12px 0 10px', letterSpacing: '-0.01em' }}>
              Real-Time Insights
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.93rem', maxWidth: 320 }}>
              Gain real-time visibility into asset performance to enable proactive maintenance and boost efficiency.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
              <img src={graph} alt="insights" style={{ maxWidth: 200, opacity: 0.9 }} />
            </div>
          </motion.div>

          {/* Card 4 — accent */}
          <motion.div
            className="bento-card bento-card-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="card-num">04 — SUSTAINABILITY</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: '12px 0 10px', letterSpacing: '-0.01em' }}>
              Sustainable Energy<br />Optimization
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '0.93rem', maxWidth: 320 }}>
              Optimize energy consumption and enhance sustainability with TwinV's advanced insights.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
              <img src={circleIcon} alt="energy" style={{ width: 160, opacity: 0.85 }} />
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

        {/* 3-col bento */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {[
            {
              num: '01',
              title: 'Custom software\ndevelopment',
              desc: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.',
              icon: icon1,
            },
            {
              num: '02',
              title: 'IT consulting and\ndigital advisory',
              desc: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.',
              icon: icon2,
            },
            {
              num: '03',
              title: 'Digital\ntransformation',
              desc: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.',
              icon: icon3,
            },
          ].map((svc, i) => (
            <motion.div
              key={i}
              className="bento-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onClick={() => navigate('/services')}
            >
              <span className="card-num">{svc.num}</span>
              <h3
                style={{
                  fontSize: '1.3rem', fontWeight: 700, color: '#fff',
                  margin: '14px 0 10px', letterSpacing: '-0.01em', whiteSpace: 'pre-line',
                }}
              >
                {svc.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.9rem', flex: 1 }}>
                {svc.desc}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  marginTop: 28,
                }}
              >
                <img src={svc.icon} alt={svc.title} style={{ width: 130, opacity: 0.85 }} />
                <span style={{ color: '#AC6AFF', fontSize: '1.3rem', lineHeight: 1 }}>→</span>
              </div>
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

        {/* 12-col industry grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 12,
          }}
        >
          {[
            { title: 'FinTech', desc: 'Custom financial software for digital payments, banking.', span: 12, accent: false },
            { title: 'Real Estate', desc: 'Develop modern real estate solutions using cutting-edge technologies.', span: 4, accent: false },
            { title: 'Healthcare', desc: 'Custom EHR, EMR, ERX, and other medical solutions.', span: 8, accent: false },
            { title: 'Transportation & Mobility', desc: 'Custom TMS, WMS, FMS, vehicle management, and blockchain systems.', span: 8, accent: true },
            { title: 'Software', desc: 'Build software of any complexity, from SaaS systems to product ecosystems.', span: 4, accent: false },
            { title: 'Manufacturing', desc: 'Optimize production with custom manufacturing software solutions.', span: 6, accent: false },
            { title: 'Smart Home & Appliances', desc: 'Increase the value of smart home products with user-centered software.', span: 6, accent: true },
          ].map((ind, i) => (
            <motion.div
              key={i}
              className={`industry-tile${ind.accent ? ' industry-tile-accent' : ''}`}
              style={{ gridColumn: `span ${ind.span}` }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              onClick={() => navigate('/industries')}
            >
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff', marginBottom: 8 }}>
                {ind.title}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                {ind.desc}
              </div>
              <div className="industry-arrow">→</div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
