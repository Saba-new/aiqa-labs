import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Industries = () => {
  const navigate = useNavigate()

  const valueProps = [
    {
      title: 'Industry-Specific Innovation',
      description: 'We deliver cutting-edge solutions that cater to the unique challenges and opportunities of your industry, enhancing efficiency and driving growth.',
    },
    {
      title: 'End-to-End Transformation',
      description: 'From initial consultation to final implementation, we help industries evolve with integrated technology solutions that boost productivity and performance.',
    },
    {
      title: 'Scalable Solutions for Every Need',
      description: 'Whether you\'re optimizing current operations or scaling up for future growth, our tailored solutions are built to adapt and grow with your business needs.',
    },
  ]

  const industries = [
    {
      name: 'FinTech',
      desc: 'Custom financial software for digital payments, banking, and secure transactions.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AC6AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="16" />
          <line x1="10" y1="14" x2="14" y2="14" />
        </svg>
      ),
    },
    {
      name: 'Real Estate',
      desc: 'Develop modern real estate solutions using cutting-edge technologies.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AC6AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: 'Healthcare',
      desc: 'Custom EHR, EMR, ERX, and other medical software solutions.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AC6AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      name: 'Transportation & Mobility',
      desc: 'Custom TMS, WMS, FMS, vehicle management, and blockchain systems.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AC6AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4l3 5v3h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      name: 'Software',
      desc: 'Build software of any complexity, from SaaS systems to product ecosystems.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AC6AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      name: 'Manufacturing',
      desc: 'Optimize production with custom manufacturing software solutions.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AC6AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20" />
          <path d="M6 20V10l6-6 6 6v10" />
          <rect x="9" y="14" width="6" height="6" />
        </svg>
      ),
    },
    {
      name: 'Smart Home & Appliances',
      desc: 'Increase the value of smart home products with user-centered software.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AC6AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
  ]

  const techStack = [
    'IoT Services', 'Performance Testing', 'AI development services', 'IT Infrastructure',
    'Data science services', 'Cybersecurity', 'Machine learning dev', 'UI/UX Design',
    'Blockchain software dev', 'Business Intelligence', 'RPA for Business', 'Big Data',
    'Data analytics services', 'Data Engineering'
  ]

  return (
    <>
      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '140px 10% 80px', textAlign: 'center', position: 'relative' }}>
        <div className="hero-grid" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="cyber-tag" style={{ marginBottom: 24, display: 'inline-block' }}>Industries in Focus</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '20px 0 20px', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
            Innovative Solutions,{' '}
            <span style={{ background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Tailored for Industries
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Drive innovation and growth with our deep domain expertise, tailored solutions,
            and a dedicated team focused on delivering industry-specific success.
          </p>
          <button className="get-started-button" onClick={() => navigate('/contact')}>Get Started</button>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ VALUE PROPS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 48 }}>
          <div className="section-label">Tailored Excellence</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: '12px 0 0', letterSpacing: '-0.02em' }}>
            Expert Solutions for Every Industry.
          </h2>
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {valueProps.map((item, i) => (
            <motion.div
              key={i}
              className="node-card"
              data-num={`0${i + 1}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="card-num">0{i + 1}</span>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#fff', margin: '10px 0 8px' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.48)', lineHeight: 1.72, fontSize: '0.91rem', maxWidth: 620 }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ INDUSTRIES GRID â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 48 }}>
          <div className="section-label">Industries in Focus</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: '12px 0 0', letterSpacing: '-0.02em' }}>
            Industries We Serve with <span style={{ color: '#07B4EB' }}>Expertise</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 12 }}>
          {industries.map((industry, i) => {
            const accents = [
              { bg: 'rgba(139,92,246,0.07)', border: 'rgba(139,92,246,0.22)', iconBg: 'rgba(139,92,246,0.14)', iconBorder: 'rgba(139,92,246,0.3)', arrow: '#8B5CF6' },
              { bg: 'rgba(7,180,235,0.05)', border: 'rgba(7,180,235,0.18)', iconBg: 'rgba(7,180,235,0.1)', iconBorder: 'rgba(7,180,235,0.25)', arrow: '#07B4EB' },
              { bg: 'rgba(16,185,129,0.05)', border: 'rgba(16,185,129,0.15)', iconBg: 'rgba(16,185,129,0.1)', iconBorder: 'rgba(16,185,129,0.22)', arrow: '#10B981' },
            ]
            const a = accents[i % 3]
            return (
              <motion.div
                key={i}
                className="spotlight-tile"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: i * 0.07 }}
                onClick={() => navigate('/contact')}
                style={{ background: a.bg, border: `1px solid ${a.border}` }}
              >
                {/* Echo number watermark */}
                <div style={{ position: 'absolute', bottom: -10, right: 14, fontSize: '5.5rem', fontWeight: 900, color: 'rgba(255,255,255,0.025)', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ width: 46, height: 46, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: a.iconBg, border: `1px solid ${a.iconBorder}`, marginBottom: 18 }}>
                  {industry.icon}
                </div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>{industry.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.44)', lineHeight: 1.68, fontSize: '0.87rem' }}>{industry.desc}</p>
                <div style={{ position: 'absolute', bottom: 18, right: 22, color: a.arrow, fontSize: '1rem', opacity: 0.65 }}>→</div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ CTA BANNER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '60px 10%' }}>
        <motion.div
          className="bento-card bento-card-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}
        >
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>Ready to Build Your Domain-Specific Solution?</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We specialize in crafting high-quality products tailored to industry standards and your unique business needs.
            </p>
          </div>
          <button className="get-started-button" style={{ whiteSpace: 'nowrap' }} onClick={() => navigate('/contact')}>Get Started</button>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ EXPERTISE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10% 100px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 48 }}>
          <div className="section-label">Expertise &amp; Strengths</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: '12px 0 0', letterSpacing: '-0.02em' }}>
            Expertise and competencies
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
          <motion.div className="bento-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>Technology Excellence</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: '0.95rem' }}>
              AIQA offers deep technical expertise across various domains, harnessing the power of advanced
              technologies like AI, IoT, and blockchain. By combining these technologies, we deliver scalable,
              robust, and future-proof solutions tailored to meet the unique needs of industries.
            </p>
          </motion.div>
          <motion.div className="bento-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {techStack.map((tech, i) => {
                const chipAccent = i % 4 === 0
                  ? { bg: 'rgba(139,92,246,0.09)', border: 'rgba(139,92,246,0.22)', dot: '#8B5CF6', text: 'rgba(196,181,253,0.85)' }
                  : i % 4 === 1
                  ? { bg: 'rgba(7,180,235,0.06)', border: 'rgba(7,180,235,0.2)', dot: '#07B4EB', text: 'rgba(103,232,249,0.8)' }
                  : i % 4 === 2
                  ? { bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.16)', dot: '#10B981', text: 'rgba(110,231,183,0.75)' }
                  : { bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)', dot: 'rgba(255,255,255,0.3)', text: 'rgba(255,255,255,0.52)' }
                return (
                  <div key={i} style={{ background: chipAccent.bg, border: `1px solid ${chipAccent.border}`, borderRadius: 10, padding: '9px 12px', textAlign: 'center', fontSize: '0.8rem', color: chipAccent.text, transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: chipAccent.dot, flexShrink: 0, boxShadow: `0 0 4px ${chipAccent.dot}` }} />
                    {tech}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Industries
