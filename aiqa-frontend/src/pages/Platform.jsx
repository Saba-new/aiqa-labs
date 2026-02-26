import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import starBg from '../assets/starBg.png'
import groupLogo from '../assets/GroupLogo.png'
import group1 from '../assets/Group1.png'
import group2 from '../assets/Group2.png'
import group3 from '../assets/Group3.png'
import group4 from '../assets/Group4.png'
import group5 from '../assets/Group5.png'
import group6 from '../assets/Group6.png'
import contentImg from '../assets/content.png'
import graphLogo from '../assets/graph.png'

const Platform = () => {
  const navigate = useNavigate()

  const features = [
    { icon: group1, title: 'Real-time Data Acquisition', description: 'Connect, capture, and stream performance data from distributed systems in real-time, ensuring secure and effortless data flow.' },
    { icon: group2, title: 'Universal Compatibility', description: 'Facilitate seamless integration with protocols like BACnet/IP, Modbus TCP, OPC UA, RDM, and Tridium Niagara, enabling smooth communication with your existing systems.' },
    { icon: group3, title: 'Resilient Connectivity', description: 'Maintain uninterrupted operations even in low-connectivity environments, with automatic data synchronization restoring the latest state once connection is re-established.' },
    { icon: group4, title: 'Bi-Directional Control', description: 'Easily execute commands, adjust parameters, and manage system functions remotely with reliable cloud-based bi-directional communication.' },
    { icon: group5, title: 'Data-Driven Decisions', description: 'Consolidate scattered data into a unified platform for advanced analytics, visualizations, and ML-powered insights, empowering smarter enterprise decision-making.' },
    { icon: group6, title: 'Reliable and Efficient', description: 'Discover and securely connect controllers and endpoints with blazing-fast, uninterrupted communication, compatible with both Windows and Linux systems.' },
  ]

  return (
    <>
      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '140px 10% 80px', textAlign: 'center', position: 'relative' }}>
        <div className="hero-grid" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="cyber-tag" style={{ marginBottom: 24, display: 'inline-block' }}>Integrate with Existing Tools</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '20px 0 20px', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
            Combine. Connect.{' '}
            <span style={{ background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Contribute.
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Seamlessly integrate your existing platform with ours to unlock limitless possibilities.
            Connect IoT devices, organize data efficiently, and gain actionable insights to
            optimize operations and drive innovation.
          </p>
          <button className="get-started-button" onClick={() => navigate('/contact')}>Try TwinV</button>
          <div style={{ marginTop: 40 }}>
            <img src={starBg} alt="" style={{ width: '60%', maxWidth: 480, margin: '0 auto', opacity: 0.75, display: 'block' }} />
          </div>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ WHAT MAKES TWINV EXCEPTIONAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10%' }}>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 320px' }}
          >
            <div className="section-label">Our Platform</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: '12px 0 20px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              What Makes TwinV Exceptional?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.97rem' }}>
              Our platform seamlessly integrates with any protocol, connecting diverse assets and
              systems to fit your unique technology stack. Powered by advanced AI, it analyzes
              real-time data to uncover patterns, optimize operations, and enable proactive,
              data-driven decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'flex-end' }}
          >
            <img src={groupLogo} alt="TwinV Platform" style={{ width: '100%', maxWidth: 400, opacity: 0.9 }} />
          </motion.div>
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ FEATURES GRID â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>We believe</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: '12px 0 0', letterSpacing: '-0.02em' }}>
            IoT Intelligence that seamlessly fits into your existing stack
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 12 }}>
          {features.map((feature, i) => {
            const hudAccents = [
              { iconBg: 'rgba(139,92,246,0.1)', iconBorder: 'rgba(139,92,246,0.18)' },
              { iconBg: 'rgba(7,180,235,0.08)', iconBorder: 'rgba(7,180,235,0.15)' },
              { iconBg: 'rgba(16,185,129,0.08)', iconBorder: 'rgba(16,185,129,0.15)' },
              { iconBg: 'rgba(245,158,11,0.07)', iconBorder: 'rgba(245,158,11,0.14)' },
              { iconBg: 'rgba(139,92,246,0.1)', iconBorder: 'rgba(139,92,246,0.18)' },
              { iconBg: 'rgba(7,180,235,0.08)', iconBorder: 'rgba(7,180,235,0.15)' },
            ]
            const ha = hudAccents[i]
            return (
              <motion.div
                key={i}
                className="hud-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="hud-card-icon" style={{ background: ha.iconBg, borderRight: `1px solid ${ha.iconBorder}` }}>
                  <img src={feature.icon} alt={feature.title} style={{ width: 30, height: 30, objectFit: 'contain', opacity: 0.88 }} />
                </div>
                <div className="hud-card-body">
                  <span className="card-num">0{i + 1}</span>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff', margin: '7px 0 7px' }}>{feature.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.44)', lineHeight: 1.65, fontSize: '0.83rem' }}>{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* â”€â”€ DARK TWINV BANNER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div style={{ backgroundColor: '#000151', padding: '64px 10%', margin: '0' }}>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: 1, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.3, minWidth: 260 }}
          >
            All the ways TwinV transforms your IoT data into actionable insights.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: 1, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.97rem', minWidth: 260 }}
          >
            We don't disrupt your systemsâ€”we connect them into a smarter, data-driven network.
            TwinV seamlessly connects with your IoT devices, sensory platforms, and business
            applications, transforming them into a unified, data-driven ecosystem. Unlock new
            possibilities to optimize operations and drive efficiency.
          </motion.div>
        </div>
      </div>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ TWINV IN ACTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10% 100px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: 700, marginBottom: 48 }}>
          <div className="section-label">TwinV in Action</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: '12px 0 20px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            TwinV Addresses the 3 Core Challenges of IoT Integration.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.97rem' }}>
            TwinV simplifies IoT integrations by partnering with top OEMs and hardware manufacturers,
            reducing capital expenditure. Its cloud-based commissioning setup streamlines the process,
            cutting time from months to just 3 days. With real-time performance insights,
            TwinV's O&amp;M applications boost agility and support faster decision-making.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {/* Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ position: 'relative', overflow: 'hidden', borderRadius: 20, padding: '32px', background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.18)' }}
          >
            <div style={{ position: 'absolute', top: -16, right: -8, fontSize: '6rem', fontWeight: 900, color: 'rgba(139,92,246,0.06)', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>01</div>
            <span className="card-num">01 — INTEGRATIONS</span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', margin: '14px 0 12px' }}>Integrations</h3>
            <p style={{ color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: 20 }}>
              TwinV allows seamless integration with both your existing systems and external platforms,
              providing out-of-the-box solutions that reduce capital expenditure and simplify IoT project implementation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={contentImg} alt="Integrations" style={{ width: '80%', borderRadius: 12, opacity: 0.88 }} />
            </div>
          </motion.div>

          {/* Right column â€” Commissioning + O&M */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <motion.div
              className="terminal-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#07B4EB' }} />
                <div className="terminal-dot" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <div className="terminal-dot" style={{ background: 'rgba(255,255,255,0.08)' }} />
                <span style={{ marginLeft: 10, fontSize: '0.67rem', fontWeight: 700, color: 'rgba(255,255,255,0.32)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>02 / Commissioning</span>
              </div>
              <div className="terminal-body" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#67E8F9', marginBottom: 10 }}>Commissioning</h3>
                  <p style={{ color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, fontSize: '0.88rem' }}>
                    What typically takes months is simplified with our platform's cloud-based setup,
                    enabling seamless commissioning in just a few days.
                  </p>
                </div>
                <img src={graphLogo} alt="Commissioning" style={{ width: 52, height: 52, objectFit: 'contain', opacity: 0.8, flexShrink: 0 }} />
              </div>
            </motion.div>

            <motion.div
              className="terminal-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#8B5CF6' }} />
                <div className="terminal-dot" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <div className="terminal-dot" style={{ background: 'rgba(255,255,255,0.08)' }} />
                <span style={{ marginLeft: 10, fontSize: '0.67rem', fontWeight: 700, color: 'rgba(255,255,255,0.32)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>03 / O&amp;M Applications</span>
              </div>
              <div className="terminal-body" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#C4B5FD', marginBottom: 10 }}>O&amp;M Applications</h3>
                  <p style={{ color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, fontSize: '0.88rem' }}>
                    Enhance agility and decision-making in operations and maintenance with real-time
                    insights through our platform's comprehensive suite of tools.
                  </p>
                </div>
                <img src={graphLogo} alt="Analytics" style={{ width: 52, height: 52, objectFit: 'contain', opacity: 0.8, flexShrink: 0 }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Platform
