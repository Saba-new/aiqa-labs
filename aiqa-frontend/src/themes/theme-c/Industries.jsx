import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const valueProps = [
  { title: 'Industry-Specific Innovation', desc: 'We deliver cutting-edge solutions that cater to the unique challenges and opportunities of your industry, enhancing efficiency and driving growth.' },
  { title: 'End-to-End Transformation', desc: 'From initial consultation to final implementation, we help industries evolve with integrated technology solutions that boost productivity and performance.' },
  { title: 'Scalable Solutions for Every Need', desc: "Whether you're optimizing current operations or scaling up for future growth, our tailored solutions are built to adapt and grow with your business needs." },
]

const industries = [
  { name: 'FinTech', tags: ['Finance', 'Banking', 'Payments'], desc: 'Custom financial software for digital payments, banking, and secure transactions.' },
  { name: 'Real Estate', tags: ['PropTech', 'CRM', 'Analytics'], desc: 'Develop modern real estate solutions using cutting-edge technologies.' },
  { name: 'Healthcare', tags: ['EHR', 'EMR', 'Telemedicine'], desc: 'Custom EHR, EMR, ERX, and other medical software solutions.' },
  { name: 'Transport & Mobility', tags: ['TMS', 'WMS', 'Blockchain'], desc: 'Custom TMS, WMS, FMS, vehicle management, and blockchain systems.' },
  { name: 'Software & SaaS', tags: ['SaaS', 'B2B', 'Ecosystems'], desc: 'Build software of any complexity, from SaaS systems to product ecosystems.' },
  { name: 'Manufacturing', tags: ['Industry 4.0', 'IoT', 'ERP'], desc: 'Optimize production with custom manufacturing software solutions.' },
  { name: 'Smart Home', tags: ['IoT', 'Appliances', 'UX'], desc: 'Increase the value of smart home products with user-centered software.' },
]

const techStack = [
  'IoT Services', 'Performance Testing', 'AI development services', 'IT Infrastructure',
  'Data science services', 'Cybersecurity', 'Machine learning dev', 'UI/UX Design',
  'Blockchain software dev', 'Business Intelligence', 'RPA for Business', 'Big Data',
  'Data analytics services', 'Data Engineering',
]

export default function IndustriesC() {
  const navigate = useNavigate()
  return (
    <div className="tc">
      {/* HERO */}
      <section className="tc-hero" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <div className="tc-grain" />
        <div className="tc-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tc-label" style={{ justifyContent: 'center', marginBottom: 24 }}>Industries We Serve</div>
            <h1 className="tc-h1" style={{ marginBottom: 24 }}>
              Solutions for Every <span className="tc-gradient">Vertical.</span>
            </h1>
            <p className="tc-body" style={{ maxWidth: 560, margin: '0 auto' }}>
              We bring deep domain expertise to help diverse sectors navigate digital transformation and achieve operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="tc-divider" />

      {/* VALUE PROPS */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>Tailored Excellence</div>
            <h2 className="tc-h2">Expert Solutions for Every Industry.</h2>
          </motion.div>
          <div className="tc-grid-3">
            {valueProps.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="tc-card" style={{ padding: '40px 32px' }}>
                <div className="tc-card-gold-line" />
                <div style={{ fontFamily: 'serif', fontSize: '3.5rem', fontWeight: 700, color: 'rgba(212,175,55,0.1)', lineHeight: 0.8, marginBottom: 24 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="tc-h3" style={{ marginBottom: 14 }}>{v.title}</h3>
                <p className="tc-body" style={{ fontSize: '0.9rem' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="tc-section" style={{ background: 'var(--tc-bg2)', borderTop: '1px solid var(--tc-border)', borderBottom: '1px solid var(--tc-border)' }}>
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>Industries in Focus</div>
            <h2 className="tc-h2">Industries We Serve with Expertise</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
                className="tc-card" style={{ padding: '32px', cursor: 'pointer' }}
                onClick={() => navigate('/theme-c/contact')}
                whileHover={{ y: -4 }}>
                <div className="tc-card-gold-line" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tc-gold)' }}>{ind.name}</span>
                  <span style={{ fontFamily: 'serif', fontSize: '1.8rem', fontWeight: 700, color: 'rgba(212,175,55,0.15)', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="tc-body" style={{ fontSize: '0.875rem', marginBottom: 20 }}>{ind.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {ind.tags.map((t, ti) => (
                    <span key={ti} style={{ fontSize: '0.68rem', padding: '3px 10px', borderRadius: 3, background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', color: 'var(--tc-gold)', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* READY TO BUILD CTA */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="tc-card" style={{ padding: '64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
          >
            <div className="tc-card-gold-line" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="tc-label" style={{ justifyContent: 'center', marginBottom: 20 }}>Get Started</div>
              <h2 className="tc-h2" style={{ marginBottom: 16 }}>Ready to Build?</h2>
              <p className="tc-body" style={{ maxWidth: 480, margin: '0 auto 36px' }}>Let's talk about your industry and how we can help you innovate, scale, and lead.</p>
              <button className="tc-btn-primary" onClick={() => navigate('/theme-c/contact')}>Start a Conversation</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>Core Strengths</div>
            <h2 className="tc-h2">Technology Excellence</h2>
          </motion.div>
          <div className="tc-layout-faq" style={{ alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="tc-body" style={{ fontSize: '1.05rem' }}>
                AIQA offers deep technical expertise across various domains, harnessing the power of advanced technologies like AI, IoT, and blockchain. By combining these technologies, we deliver scalable, robust, and future-proof solutions tailored to meet the unique needs of industries.
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
                }}>{tech}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
