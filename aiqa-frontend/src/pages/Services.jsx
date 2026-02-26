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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {overview.map((item, i) => (
            <motion.div
              key={i}
              className="numbered-row"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderBottom: i < overview.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
            >
              <div className="numbered-row-digit">{String(i + 1).padStart(2, '0')}</div>
              <div className="numbered-row-divider" />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#fff', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.48)', lineHeight: 1.72, fontSize: '0.91rem' }}>{item.description}</p>
              </div>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 14 }}>
          {models.map((model, i) => {
            const modelColors = ['#8B5CF6', '#07B4EB', '#10B981', '#F59E0B']
            const modelTextColors = ['#C4B5FD', '#67E8F9', '#6EE7B7', '#FDE68A']
            const mc = modelColors[i % 4]
            const mtc = modelTextColors[i % 4]
            return (
              <motion.div
                key={i}
                className="terminal-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: mc }} />
                  <div className="terminal-dot" style={{ background: 'rgba(255,255,255,0.15)' }} />
                  <div className="terminal-dot" style={{ background: 'rgba(255,255,255,0.08)' }} />
                  <span style={{ marginLeft: 10, fontSize: '0.67rem', fontWeight: 700, color: 'rgba(255,255,255,0.32)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {String(i + 1).padStart(2, '0')} / {model.title}
                  </span>
                </div>
                <div className="terminal-body">
                  <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: mtc, marginBottom: 18 }}>{model.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {model.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                        <svg style={{ marginTop: 3, flexShrink: 0 }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={mc} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
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

export default Services
