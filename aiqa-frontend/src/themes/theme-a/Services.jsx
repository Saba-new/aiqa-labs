import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'

const SERVICES = [
  { title: 'Custom software development', color: '#3B82F6', desc: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.', icon: icon1 },
  { title: 'IT consulting and digital advisory', color: '#F59E0B', desc: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.', icon: icon2 },
  { title: 'Digital transformation', color: '#10B981', desc: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.', icon: icon3 },
]

const MODELS = [
  { title: 'Time and Materials', points: ['Flexibility to adapt to changing requirements', 'Transparent billing based on hours worked', 'Ideal for long-term or evolving projects', 'Regular progress updates and reporting', 'Scales up or down based on needs'] },
  { title: 'Fixed Price', points: ['Set budget with no hidden costs', 'Defined project scope and deliverables', 'Clear timelines and milestones', 'Ideal for projects with clear requirements', 'Regular updates with strict adherence to plan'] },
  { title: 'Managed Team', points: ['AIQA manages the team and operations', 'Reduced overhead and HR costs', 'Access to top talent and expertise', 'Flexibility to scale with business growth', 'Outsource recruitment and management'] },
  { title: 'Managed Product & Service', points: ['End-to-end development and management', 'Continuous deployment and improvement', 'Fully managed operations and support', 'Product lifecycle management', 'Focus on your core business needs'] },
]

const MODEL_COLORS = ['#3B82F6', '#F59E0B', '#10B981', '#06B6D4']

const TECH = ['IoT Services', 'Performance Testing', 'AI development services', 'IT Infrastructure', 'Data science services', 'Cybersecurity', 'Machine learning dev', 'UI/UX Design', 'Blockchain software dev', 'Business Intelligence', 'RPA for Business', 'Big Data', 'Data analytics services', 'Data Engineering']
const TECH_COLORS = ['#3B82F6', '#F59E0B', '#10B981', '#06B6D4']

export default function ServicesA() {
  const navigate = useNavigate()

  return (
    <div className="ta">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="ta-hero" style={{ minHeight: '60vh', paddingTop: 120 }}>
        <div className="ta-grid-bg" />
        <div className="ta-scan" />
        <div className="ta-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="ta-label" style={{ marginBottom: 20, justifyContent: 'center' }}>Our Services</div>
            <h1 className="ta-h1" style={{ marginBottom: 24 }}>
              Solutions for <span className="ta-gradient">Digital Success.</span>
            </h1>
            <p className="ta-body" style={{ maxWidth: 580, margin: '0 auto', fontSize: '1.05rem' }}>
              We provide a wide range of services designed to help you build, scale, and transform your business with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── SERVICE OVERVIEW ─────────────────────────────── */}
      <section className="ta-section">
        <div className="ta-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="ta-label" style={{ marginBottom: 16 }}>We do it all</div>
            <h2 className="ta-h2">Service Overview</h2>
          </motion.div>

          <div className="ta-grid-3" style={{ gap: 20 }}>
            {SERVICES.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="ta-card" style={{ padding: '36px' }}
              >
                <div className="ta-card-accent" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${s.color}15`, border: `1px solid ${s.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <img src={s.icon} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', fontWeight: 700, color: `${s.color}70` }}>{String(i + 1).padStart(2, '0')}</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${s.color}30, transparent)` }} />
                </div>
                <h3 className="ta-h3" style={{ fontSize: '1.15rem', marginBottom: 12 }}>{s.title}</h3>
                <p className="ta-body" style={{ fontSize: '0.875rem' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── COLLABORATION MODELS ─────────────────────────── */}
      <section className="ta-section" style={{ background: 'var(--ta-bg2)' }}>
        <div className="ta-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="ta-label" style={{ marginBottom: 16 }}>How we work</div>
            <h2 className="ta-h2">Collaboration Models</h2>
          </motion.div>

          <div className="ta-grid-2" style={{ gap: 16 }}>
            {MODELS.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="ta-card" style={{ overflow: 'hidden' }}
              >
                <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--ta-border)', background: `${MODEL_COLORS[i]}08` }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', fontWeight: 700, color: `${MODEL_COLORS[i]}70`, letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>MODEL {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="ta-h3" style={{ fontSize: '1.1rem' }}>{m.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {m.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={MODEL_COLORS[i]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12" /></svg>
                      <span className="ta-body" style={{ fontSize: '0.875rem' }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ta-divider" />

      {/* ── EXPERTISE ────────────────────────────────────── */}
      <section className="ta-section">
        <div className="ta-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="ta-label" style={{ marginBottom: 16 }}>Expertise & Strengths</div>
            <h2 className="ta-h2">Expertise and competencies</h2>
          </motion.div>

          <div className="ta-layout-faq" style={{ alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="ta-body" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                AIQA offers deep technical expertise across various domains, harnessing the power of advanced technologies like AI, IoT, and blockchain. By combining these technologies, we deliver scalable, robust, and future-proof solutions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
            >
              {TECH.map((t, i) => {
                const c = TECH_COLORS[i % 4]
                return (
                  <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 6, background: `${c}10`, border: `1px solid ${c}25`, fontSize: '0.8rem', fontWeight: 600, color: 'rgba(226,232,240,0.8)' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: c, flexShrink: 0 }} />
                    {t}
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
