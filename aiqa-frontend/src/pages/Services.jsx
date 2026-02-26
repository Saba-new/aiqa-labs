import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  const overview = [
    {
      title: 'Custom software development',
      description: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.',
    },
    {
      title: 'IT consulting and digital advisory',
      description: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.',
    },
    {
      title: 'Digital transformation',
      description: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.',
    },
  ]

  const models = [
    {
      title: 'Time and Materials',
      points: [
        'Ideal for long-term projects and dynamic requirements.',
        'Scope of work may evolve during the process.',
        'Flexible to adjust to changes in the project scope and workload.',
      ],
    },
    {
      title: 'Fixed Price',
      points: [
        'Suitable for clear, well-defined requirements and strict deadlines.',
        'Best for projects with a limited scope.',
        'AIQA manages the entire product development lifecycle with precision.',
      ],
    },
    {
      title: 'Managed Team',
      points: [
        'Ideal for long-term projects and dynamic requirements.',
        'Scope of work may evolve during the process.',
        'Flexible to adjust to changes in the project scope and workload.',
      ],
    },
    {
      title: 'Managed Product & Service',
      points: [
        'AIQA co-creates and designs products with you, managing the entire lifecycle.',
        'Expert development teams handle everything from concept to delivery.',
        'Specialized services in design, development, QA, and DevOps ensure optimal results.',
      ],
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
          <span className="cyber-tag" style={{ marginBottom: 24, display: 'inline-block' }}>Tailored Smart Solutions</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '20px 0 20px', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
            Comprehensive Solutions,{' '}
            <span style={{ background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Tailored for You
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7, fontSize: '1.05rem' }}>
            We deliver end-to-end services, from building platforms to modernizing systems and optimizing performance.
            Our expertise in hardware, software, and IoT ensures solutions that align with your unique business goals.
          </p>
          <button className="get-started-button" onClick={() => navigate('/contact')}>Get Started</button>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ SMART SOLUTIONS OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
          <div className="section-label">Tailored Smart Solutions</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: '12px 0 0', letterSpacing: '-0.02em' }}>
            A seamless and tailored approach to meet your technology needs.
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {overview.map((item, i) => (
            <motion.div key={i} className="bento-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <span className="card-num">0{i + 1}</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', margin: '14px 0 10px' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.91rem' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ SERVICE MODELS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48, textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Service Options</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: '12px 0 0', letterSpacing: '-0.02em' }}>
            Our Flexible Collaboration and Engagement{' '}
            <span style={{ color: '#07B4EB' }}>Models</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {models.map((model, i) => (
            <motion.div
              key={i}
              className={`bento-card${i % 2 === 1 ? ' bento-card-accent' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="card-num">0{i + 1}</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#AC6AFF', margin: '14px 0 16px' }}>{model.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {model.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    <svg style={{ marginTop: 2, flexShrink: 0 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#07B4EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}
        >
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>Not sure which solution fits your needs?</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Let's find the perfect match together.</p>
          </div>
          <button className="get-started-button" style={{ whiteSpace: 'nowrap' }} onClick={() => navigate('/contact')}>Get Started</button>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ EXPERTISE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10% 100px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
          <div className="section-label">Expertise &amp; Strengths</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: '12px 0 0', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#07B4EB' }}>Expertise</span> and competencies
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
          <motion.div className="bento-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>Tech-Driven Innovation</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontSize: '0.95rem' }}>
              Leverage cutting-edge technology to build and optimize your software solutions with efficiency and cost-effectiveness.
            </p>
          </motion.div>
          <motion.div className="bento-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {techStack.map((tech, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '10px 12px', textAlign: 'center', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
