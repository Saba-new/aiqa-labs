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

const features = [
  { icon: icon1, title: 'Real-time Data Acquisition', desc: 'Connect, capture, and stream performance data from distributed systems in real-time, ensuring secure and effortless data flow.' },
  { icon: icon2, title: 'Universal Compatibility', desc: 'Facilitate seamless integration with protocols like BACnet/IP, Modbus TCP, OPC UA, RDM, and Tridium Niagara.' },
  { icon: icon3, title: 'Resilient Connectivity', desc: 'Maintain uninterrupted operations even in low-connectivity environments, with automatic data synchronization.' },
  { icon: icon4, title: 'Bi-Directional Control', desc: 'Easily execute commands, adjust parameters, and manage system functions remotely with reliable cloud-based communication.' },
  { icon: icon5, title: 'Data-Driven Decisions', desc: 'Consolidate scattered data into a unified platform for advanced analytics, visualizations, and ML-powered insights.' },
  { icon: icon6, title: 'Reliable and Efficient', desc: 'Discover and securely connect controllers and endpoints with blazing-fast, uninterrupted communication.' },
]

const challenges = [
  { num: '01', title: 'Integrations', desc: 'TwinV allows seamless integration with both your existing systems and external platforms, providing out-of-the-box solutions that reduce capital expenditure and simplify IoT project implementation.', img: contentImg },
  { num: '02', title: 'Commissioning', desc: "What typically takes months is simplified with our platform's cloud-based setup, enabling seamless commissioning in just a few days.", img: timerLogo },
  { num: '03', title: 'O&M Applications', desc: "Enhance agility and decision-making in operations and maintenance with real-time insights through our platform's comprehensive suite of tools.", img: graphLogo },
]

export default function PlatformC() {
  const navigate = useNavigate()
  return (
    <div className="tc">
      {/* HERO */}
      <section className="tc-hero" style={{ textAlign: 'center' }}>
        <div className="tc-grain" />
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="tc-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tc-label" style={{ justifyContent: 'center', marginBottom: 24 }}>Integrate with Existing Tools</div>
            <h1 className="tc-h1" style={{ marginBottom: 24 }}>
              Combine. Connect.<br />
              <span className="tc-gradient">Contribute.</span>
            </h1>
            <p className="tc-body" style={{ maxWidth: 560, margin: '0 auto 40px' }}>
              Seamlessly integrate your existing platform with ours to unlock limitless possibilities. Connect IoT devices, organize data efficiently, and gain actionable insights.
            </p>
            <button className="tc-btn-primary" onClick={() => navigate('/theme-c/contact')}>Try TwinV</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ marginTop: 64 }}>
            <img src={starBg} alt="TwinV Platform" style={{ width: '100%', maxWidth: 360, opacity: 0.85, filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.25))' }} />
          </motion.div>
        </div>
      </section>

      <hr className="tc-divider" />

      {/* WHAT MAKES TWINV EXCEPTIONAL */}
      <section className="tc-section">
        <div className="tc-container tc-split">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={groupLogo} alt="TwinV" style={{ width: '100%', maxWidth: 460, opacity: 0.9, filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.15))' }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="tc-label" style={{ marginBottom: 20 }}>Our Platform</div>
            <h2 className="tc-h2" style={{ marginBottom: 24 }}>What Makes TwinV Exceptional?</h2>
            <p className="tc-body">
              Our platform seamlessly integrates with any protocol, connecting diverse assets and systems to fit your unique technology stack. Powered by advanced AI, it analyzes real-time data to uncover patterns, optimize operations, and enable proactive, data-driven decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="tc-section" style={{ background: 'var(--tc-bg2)', borderTop: '1px solid var(--tc-border)', borderBottom: '1px solid var(--tc-border)' }}>
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>We believe</div>
            <h2 className="tc-h2">IoT Intelligence that seamlessly fits into your existing stack</h2>
          </motion.div>
          <div className="tc-grid-3">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}
                className="tc-card" style={{ padding: '36px 28px' }}>
                <div className="tc-card-gold-line" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={f.icon} alt="" style={{ width: 26, height: 26, objectFit: 'contain', opacity: 0.85 }} />
                  </div>
                  <span style={{ fontFamily: 'serif', fontSize: '3rem', fontWeight: 700, color: 'rgba(212,175,55,0.1)', lineHeight: 0.8 }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="tc-h3" style={{ marginBottom: 12 }}>{f.title}</h3>
                <p className="tc-body" style={{ fontSize: '0.9rem' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TWINV IN ACTION */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: 680, marginBottom: 80 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>TwinV in Action</div>
            <h2 className="tc-h2" style={{ marginBottom: 20 }}>Solving the 3 Core Challenges of IoT Integration.</h2>
            <p className="tc-body">TwinV simplifies IoT integrations by partnering with top OEMs and hardware manufacturers, reducing capital expenditure. Its cloud-based commissioning setup streamlines the process, cutting time from months to just 3 days.</p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {challenges.map((c, i) => (
              <div key={i} className="tc-challenge-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', direction: i % 2 === 0 ? 'ltr' : 'rtl' }}>
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ direction: 'ltr' }}>
                  <div className="tc-label" style={{ marginBottom: 16 }}>Challenge {c.num}</div>
                  <h3 className="tc-h2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: 20 }}>{c.title}</h3>
                  <p className="tc-body">{c.desc}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="tc-card" style={{ padding: '52px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', direction: 'ltr' }}>
                  <img src={c.img} alt={c.title} style={{ width: '60%', maxWidth: 260, objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.2))' }} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
