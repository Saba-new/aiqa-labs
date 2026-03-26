import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const services = [
  { title: 'Custom software development', desc: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.' },
  { title: 'IT consulting and digital advisory', desc: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.' },
  { title: 'Digital transformation', desc: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.' },
]

const models = [
  { title: 'Time and Materials', points: ['Flexibility to adapt to changing requirements', 'Transparent billing based on hours worked', 'Ideal for long-term or evolving projects', 'Regular progress updates and reporting', 'Scales up or down based on needs'] },
  { title: 'Fixed Price', points: ['Set budget with no hidden costs', 'Defined project scope and deliverables', 'Clear timelines and milestones', 'Ideal for projects with clear requirements', 'Regular updates with strict adherence to plan'] },
  { title: 'Managed Team', points: ['AIQA manages the team and operations', 'Reduced overhead and HR costs', 'Access to top talent and expertise', 'Flexibility to scale with business growth', 'Outsource recruitment and management'] },
  { title: 'Managed Product & Service', points: ['End-to-end development and management', 'Continuous deployment and improvement', 'Fully managed operations and support', 'Product lifecycle management', 'Focus on your core business needs'] },
]

const techStack = [
  'IoT Services', 'Performance Testing', 'AI development services', 'IT Infrastructure',
  'Data science services', 'Cybersecurity', 'Machine learning dev', 'UI/UX Design',
  'Blockchain software dev', 'Business Intelligence', 'RPA for Business', 'Big Data',
  'Data analytics services', 'Data Engineering',
]

export default function ServicesC() {
  const navigate = useNavigate()
  return (
    <div className="tc">
      {/* HERO */}
      <section className="tc-hero" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <div className="tc-grain" />
        <div className="tc-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tc-label" style={{ justifyContent: 'center', marginBottom: 24 }}>Our Services</div>
            <h1 className="tc-h1" style={{ marginBottom: 24 }}>
              Solutions for <span className="tc-gradient">Digital Success.</span>
            </h1>
            <p className="tc-body" style={{ maxWidth: 560, margin: '0 auto' }}>
              We provide a wide range of services designed to help you build, scale, and transform your business with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="tc-divider" />

      {/* SERVICE OVERVIEW */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>We do it all</div>
            <h2 className="tc-h2">Service Overview</h2>
          </motion.div>
          <div className="tc-grid-3">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="tc-card" style={{ padding: '40px 32px' }}>
                <div className="tc-card-gold-line" />
                <div style={{ fontFamily: 'serif', fontSize: '3.5rem', fontWeight: 700, color: 'rgba(212,175,55,0.12)', lineHeight: 0.8, marginBottom: 24 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ width: 32, height: 1, background: 'var(--tc-gold)', opacity: 0.4, marginBottom: 20 }} />
                <h3 className="tc-h3" style={{ marginBottom: 14 }}>{s.title}</h3>
                <p className="tc-body" style={{ fontSize: '0.9rem' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION MODELS */}
      <section className="tc-section" style={{ background: 'var(--tc-bg2)', borderTop: '1px solid var(--tc-border)', borderBottom: '1px solid var(--tc-border)' }}>
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>How we work</div>
            <h2 className="tc-h2">Collaboration Models</h2>
          </motion.div>
          <div className="tc-grid-2">
            {models.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="tc-card" style={{ overflow: 'hidden' }}>
                <div className="tc-card-gold-line" />
                <div style={{ padding: '28px 32px', borderBottom: '1px solid var(--tc-border)' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--tc-gold)', marginBottom: 8 }}>Model {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="tc-h3">{m.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: '28px 32px', margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {m.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, borderRadius: '50%', background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', flexShrink: 0, marginTop: 2 }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--tc-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span className="tc-body" style={{ fontSize: '0.875rem' }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>Expertise &amp; Strengths</div>
            <h2 className="tc-h2">Expertise and competencies</h2>
          </motion.div>
          <div className="tc-layout-faq" style={{ alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="tc-body" style={{ fontSize: '1.05rem' }}>
                AIQA offers deep technical expertise across various domains, harnessing the power of advanced technologies like AI, IoT, and blockchain. By combining these technologies, we deliver scalable, robust, and future-proof solutions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {techStack.map((tech, i) => (
                <span key={i} style={{
                  fontSize: '0.8rem', fontWeight: 600, padding: '8px 18px', borderRadius: 4,
                  background: i % 2 === 0 ? 'var(--tc-gold-dim)' : 'var(--tc-surface)',
                  border: `1px solid ${i % 2 === 0 ? 'var(--tc-border2)' : 'var(--tc-border)'}`,
                  color: i % 2 === 0 ? 'var(--tc-gold)' : 'var(--tc-muted)',
                  letterSpacing: '0.02em',
                }}>{tech}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
