import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import starBg from '../../assets/starBg.png'
import contentImg from '../../assets/content.png'
import graphLogo from '../../assets/graph.png'
import icon1 from '../../assets/Group1.png'
import icon2 from '../../assets/Group2.png'
import icon3 from '../../assets/Group3.png'
import icon4 from '../../assets/Group4.png'
import icon5 from '../../assets/Group5.png'
import icon6 from '../../assets/Group6.png'
import groupLogo from '../../assets/GroupLogo.png'
import timerLogo from '../../assets/timerLogo.png'

const FEATURES = [
  { icon: icon1, title: 'Real-time Data Acquisition', description: 'Connect, capture, and stream performance data from distributed systems in real-time, ensuring secure and effortless data flow.' },
  { icon: icon2, title: 'Universal Compatibility', description: 'Facilitate seamless integration with protocols like BACnet/IP, Modbus TCP, OPC UA, RDM, and Tridium Niagara.' },
  { icon: icon3, title: 'Resilient Connectivity', description: 'Maintain uninterrupted operations even in low-connectivity environments, with automatic data synchronization.' },
  { icon: icon4, title: 'Bi-Directional Control', description: 'Easily execute commands, adjust parameters, and manage system functions remotely with reliable cloud-based communication.' },
  { icon: icon5, title: 'Data-Driven Decisions', description: 'Consolidate scattered data into a unified platform for advanced analytics, visualizations, and ML-powered insights.' },
  { icon: icon6, title: 'Reliable and Efficient', description: 'Discover and securely connect controllers and endpoints with blazing-fast, uninterrupted communication.' },
]

const COLORS = ['#3B82F6', '#F59E0B', '#10B981', '#06B6D4', '#3B82F6', '#F59E0B']

const CHALLENGES = [
  { num: '01', color: '#3B82F6', title: 'Integrations', desc: 'TwinV allows seamless integration with both your existing systems and external platforms, providing out-of-the-box solutions that reduce capital expenditure and simplify IoT project implementation.', img: contentImg },
  { num: '02', color: '#F59E0B', title: 'Commissioning', desc: "What typically takes months is simplified with our platform's cloud-based setup, enabling seamless commissioning in just a few days.", img: timerLogo },
  { num: '03', color: '#10B981', title: 'O&M Applications', desc: "Enhance agility and decision-making in operations and maintenance with real-time insights through our platform's comprehensive suite of tools.", img: graphLogo },
]

export default function PlatformA() {
  const navigate = useNavigate()

  return (
    <div className="ta">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="ta-hero" style={{ minHeight: '70vh', paddingTop: 120 }}>
        <div className="ta-grid-bg" />
        <div className="ta-scan" />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="ta-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="ta-split">
            <div>
              <div className="ta-label" style={{ marginBottom: 20 }}>Integrate with Existing Tools</div>
              <h1 className="ta-h1" style={{ marginBottom: 24 }}>
                Combine. Connect.<br />
                <span className="ta-gradient">Contribute.</span>
              </h1>
              <p className="ta-body" style={{ maxWidth: 520, marginBottom: 36, fontSize: '1.05rem' }}>
                Seamlessly integrate your existing platform with ours to unlock limitless possibilities. Connect IoT devices, organize data efficiently, and gain actionable insights.
              </p>
              <button className="ta-btn-primary" onClick={() => navigate('/theme-a/contact')}>Try TwinV →</button>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src={starBg} alt="" style={{ width: '80%', maxWidth: 380, opacity: 0.75, filter: 'drop-shadow(0 0 40px rgba(59,130,246,0.3)) hue-rotate(200deg) saturate(0.8)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── WHAT MAKES TWINV EXCEPTIONAL ─────────────────── */}
      <section className="ta-section">
        <div className="ta-container">
          <div className="ta-split" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src={groupLogo} alt="TwinV Platform" style={{ width: '100%', maxWidth: 460, opacity: 0.85, filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.2))' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="ta-label" style={{ marginBottom: 16 }}>Our Platform</div>
              <h2 className="ta-h2" style={{ marginBottom: 24 }}>What Makes TwinV Exceptional?</h2>
              <p className="ta-body" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                Our platform seamlessly integrates with any protocol, connecting diverse assets and systems to fit your unique technology stack. Powered by advanced AI, it analyzes real-time data to uncover patterns, optimize operations, and enable proactive, data-driven decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── FEATURES GRID ────────────────────────────────── */}
      <section className="ta-section" style={{ background: 'var(--ta-bg2)' }}>
        <div className="ta-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56, maxWidth: 700 }}>
            <div className="ta-label" style={{ marginBottom: 16 }}>We believe</div>
            <h2 className="ta-h2">IoT Intelligence that seamlessly fits into your existing stack</h2>
          </motion.div>

          <div className="ta-grid-3" style={{ gap: 16 }}>
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="ta-card" style={{ padding: '28px' }}
              >
                <div className="ta-card-accent" style={{ background: `linear-gradient(90deg, ${COLORS[i]}, transparent)` }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: `${COLORS[i]}15`, border: `1px solid ${COLORS[i]}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={f.icon} alt="" style={{ width: 26, height: 26, objectFit: 'contain', opacity: 0.9 }} />
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.6rem', fontWeight: 700, color: `${COLORS[i]}20` }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="ta-h3" style={{ fontSize: '1.1rem', marginBottom: 10 }}>{f.title}</h3>
                <p className="ta-body" style={{ fontSize: '0.875rem' }}>{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── TWINV IN ACTION ──────────────────────────────── */}
      <section className="ta-section">
        <div className="ta-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: 700, marginBottom: 72 }}>
            <div className="ta-label" style={{ marginBottom: 16 }}>TwinV in Action</div>
            <h2 className="ta-h2" style={{ marginBottom: 20 }}>Solving the 3 Core Challenges of IoT Integration.</h2>
            <p className="ta-body">TwinV simplifies IoT integrations by partnering with top OEMs and hardware manufacturers, reducing capital expenditure. Its cloud-based commissioning setup streamlines the process, cutting time from months to just 3 days.</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {CHALLENGES.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="ta-challenge-row" style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 40, padding: '32px', background: 'var(--ta-surface)', border: '1px solid var(--ta-border)', borderRadius: 10, borderLeft: `3px solid ${c.color}` }}
              >
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', fontWeight: 700, color: c.color, letterSpacing: '0.1em' }}>CHALLENGE {c.num}</span>
                  </div>
                  <h3 className="ta-h3" style={{ fontSize: '1.4rem', marginBottom: 12 }}>{c.title}</h3>
                  <p className="ta-body" style={{ fontSize: '0.9rem', maxWidth: 560 }}>{c.desc}</p>
                </div>
                <div style={{ width: 120, height: 120, borderRadius: 16, background: `${c.color}10`, border: `1px solid ${c.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={c.img} alt={c.title} style={{ width: 64, height: 64, objectFit: 'contain', filter: `drop-shadow(0 0 12px ${c.color}40)` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
