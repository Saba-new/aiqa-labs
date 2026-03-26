import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const VALUE_PROPS = [
  { title: 'Industry-Specific Innovation', color: '#8B5CF6', desc: 'We deliver cutting-edge solutions that cater to the unique challenges and opportunities of your industry, enhancing efficiency and driving growth.' },
  { title: 'End-to-End Transformation', color: '#14B8A6', desc: 'From initial consultation to final implementation, we help industries evolve with integrated technology solutions that boost productivity and performance.' },
  { title: 'Scalable Solutions for Every Need', color: '#3B82F6', desc: "Whether you're optimizing current operations or scaling up for future growth, our tailored solutions are built to adapt and grow with your business needs." },
]

const INDUSTRIES = [
  { name: 'FinTech', color: '#8B5CF6', tags: ['Finance', 'Banking', 'Payments'] },
  { name: 'Real Estate', color: '#14B8A6', tags: ['PropTech', 'CRM', 'Analytics'] },
  { name: 'Healthcare', color: '#3B82F6', tags: ['EHR', 'EMR', 'Telemedicine'] },
  { name: 'Transport & Mobility', color: '#EC4899', tags: ['TMS', 'WMS', 'Blockchain'] },
  { name: 'Software & SaaS', color: '#8B5CF6', tags: ['SaaS', 'B2B', 'Ecosystems'] },
  { name: 'Manufacturing', color: '#14B8A6', tags: ['Industry 4.0', 'IoT', 'ERP'] },
  { name: 'Smart Home', color: '#3B82F6', tags: ['IoT', 'Appliances', 'UX'] },
]

const TECH = ['IoT Services', 'Performance Testing', 'AI development services', 'IT Infrastructure', 'Data science services', 'Cybersecurity', 'Machine learning dev', 'UI/UX Design', 'Blockchain software dev', 'Business Intelligence', 'RPA for Business', 'Big Data', 'Data analytics services', 'Data Engineering']
const TECH_COLORS = ['#8B5CF6', '#14B8A6', '#3B82F6', '#EC4899']

export default function IndustriesB() {
  const navigate = useNavigate()

  return (
    <div className="tb">
      {/* HERO */}
      <section className="tb-hero" style={{ minHeight: '60vh', paddingTop: 120 }}>
        <div className="tb-noise" />
        <div className="tb-orb tb-orb-violet" style={{ width: 500, height: 500, top: '-10%', right: '-5%' }} />
        <div className="tb-orb tb-orb-teal" style={{ width: 400, height: 400, bottom: '-10%', left: '-5%' }} />
        <div className="tb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tb-label" style={{ marginBottom: 20, justifyContent: 'center' }}>Industries We Serve</div>
            <h1 className="tb-h1" style={{ marginBottom: 24 }}>
              Solutions for Every <span className="tb-gradient">Vertical.</span>
            </h1>
            <p className="tb-body" style={{ maxWidth: 580, margin: '0 auto', fontSize: '1.05rem' }}>
              We bring deep domain expertise to help diverse sectors navigate digital transformation and achieve operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* VALUE PROPS */}
      <section className="tb-section">
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="tb-label" style={{ marginBottom: 16 }}>Tailored Excellence</div>
            <h2 className="tb-h2">Expert Solutions for Every Industry.</h2>
          </motion.div>
          <div className="tb-grid-3" style={{ gap: 20 }}>
            {VALUE_PROPS.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="tb-card" style={{ padding: '32px', background: `linear-gradient(135deg, ${v.color}08, transparent)` }}
              >
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '3rem', fontWeight: 700, color: `${v.color}15`, lineHeight: 0.8, marginBottom: 20 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="tb-h3" style={{ fontSize: '1.1rem', marginBottom: 12 }}>{v.title}</h3>
                <p className="tb-body" style={{ fontSize: '0.875rem' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* INDUSTRIES GRID */}
      <section className="tb-section" style={{ background: 'var(--tb-bg2)' }}>
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="tb-label" style={{ marginBottom: 16 }}>Industries in Focus</div>
            <h2 className="tb-h2">Industries We Serve with Expertise</h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }}
                style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', alignItems: 'center', gap: 24, padding: '20px 24px', background: 'var(--tb-surface)', border: '1px solid var(--tb-border)', borderRadius: 8, cursor: 'pointer', transition: 'all 0.2s', borderLeft: `3px solid ${ind.color}` }}
                onClick={() => navigate('/theme-b/contact')}
                onMouseEnter={e => { e.currentTarget.style.background = `${ind.color}08` }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--tb-surface)' }}
              >
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.65rem', fontWeight: 700, color: `${ind.color}60` }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: 4 }}>{ind.name}</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {ind.tags.map(t => (
                      <span key={t} style={{ fontSize: '0.62rem', padding: '2px 8px', borderRadius: 100, background: `${ind.color}10`, border: `1px solid ${ind.color}25`, color: ind.color, fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <span style={{ color: ind.color, fontSize: '1rem', opacity: 0.5 }}>→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* READY TO BUILD CTA */}
      <section className="tb-section">
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(20,184,166,0.08))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 24, padding: '64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
          >
            <div className="tb-orb tb-orb-violet" style={{ width: 300, height: 300, top: '-50%', left: '50%', transform: 'translateX(-50%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="tb-label" style={{ marginBottom: 20, justifyContent: 'center' }}>Get Started</div>
              <h2 className="tb-h2" style={{ marginBottom: 16 }}>Ready to Build?</h2>
              <p className="tb-body" style={{ maxWidth: 480, margin: '0 auto 36px' }}>Let's talk about your industry and how we can help you innovate, scale, and lead.</p>
              <button className="tb-btn-primary" onClick={() => navigate('/theme-b/contact')} style={{ padding: '14px 32px', fontSize: '1rem' }}>Start a Conversation →</button>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* TECH EXPERTISE */}
      <section className="tb-section">
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="tb-label" style={{ marginBottom: 16 }}>Core Strengths</div>
            <h2 className="tb-h2">Technology Excellence</h2>
          </motion.div>
          <div className="tb-layout-faq" style={{ alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="tb-body" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                AIQA offers deep technical expertise across various domains, harnessing the power of advanced technologies like AI, IoT, and blockchain. By combining these technologies, we deliver scalable, robust, and future-proof solutions tailored to meet the unique needs of industries.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
            >
              {TECH.map((t, i) => {
                const c = TECH_COLORS[i % 4]
                return (
                  <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, background: `${c}10`, border: `1px solid ${c}20`, fontSize: '0.8rem', fontWeight: 600, color: 'rgba(248,250,252,0.8)' }}>
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
