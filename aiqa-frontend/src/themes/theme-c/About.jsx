import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import starBg from '../../assets/starBg.png'
import groupLogo from '../../assets/rectangleLogo.png'

const beliefs = [
  { label: 'Simple', headline: 'The most impactful solutions are often the simplest.', body: 'In a world filled with complexity, the clarity and efficiency of our platform set us apart. We build tools that feel right, not just functional.' },
  { label: 'Empowering', headline: 'Those closest to a challenge are best equipped to solve it.', body: 'Our platform empowers teams worldwide to build what they need, without hoops to jump through. Control in the right hands makes all the difference.' },
  { label: 'Connected', headline: 'Businesses are revolutionizing their operations worldwide.', body: 'With our innovative IoT and digital solutions — all unified on a single platform — your entire operation speaks one language.' },
]

const ValueIcon = ({ type }) => {
  const s = { width: 22, height: 22, strokeWidth: 1.6, stroke: 'var(--tc-gold)', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (type === 'innovation') return <svg viewBox="0 0 24 24" style={s}><path d="M12 2a7 7 0 0 1 7 7c0 3-1.8 5.6-4.5 6.7V18H9.5v-2.3C6.8 14.6 5 12 5 9a7 7 0 0 1 7-7z"/><path d="M9.5 21h5M12 18v3"/></svg>
  if (type === 'reliability') return <svg viewBox="0 0 24 24" style={s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  if (type === 'collab') return <svg viewBox="0 0 24 24" style={s}><circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/><path d="M3 21v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2"/></svg>
  if (type === 'integrity') return <svg viewBox="0 0 24 24" style={s}><path d="M9 12l2 2 4-4"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/></svg>
  if (type === 'excellence') return <svg viewBox="0 0 24 24" style={s}><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
  if (type === 'sustain') return <svg viewBox="0 0 24 24" style={s}><path d="M2 22c0-6 4-10 10-10s10 4 10 10"/><path d="M12 12V2M7 7l5-5 5 5"/></svg>
  return null
}

const values = [
  { type: 'innovation', label: 'Innovation', desc: 'Continuously pushing boundaries of what IoT technology can achieve.' },
  { type: 'reliability', label: 'Reliability', desc: 'Building systems that industries can depend on 24/7/365.' },
  { type: 'collab', label: 'Collaboration', desc: 'Working closely with clients to deliver tailored solutions.' },
  { type: 'integrity', label: 'Integrity', desc: 'Transparent, honest, and ethical in everything we do.' },
  { type: 'excellence', label: 'Excellence', desc: 'Committed to the highest standards of quality and performance.' },
  { type: 'sustain', label: 'Sustainability', desc: 'Designing solutions that are efficient and environmentally responsible.' },
]

export default function AboutC() {
  const navigate = useNavigate()
  return (
    <div className="tc">
      {/* HERO */}
      <section className="tc-hero" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <div className="tc-grain" />
        <div className="tc-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tc-label" style={{ justifyContent: 'center', marginBottom: 24 }}>About AIQA Labs</div>
            <h1 className="tc-h1" style={{ marginBottom: 24 }}>
              On a mission to unify all{' '}
              <span className="tc-gradient">IoT solutions</span>{' '}
              in one platform.
            </h1>
            <img src={starBg} alt="" style={{ width: '55%', maxWidth: 420, margin: '0 auto 36px', opacity: 0.6, display: 'block', filter: 'sepia(0.3) hue-rotate(10deg)' }} />
            <button className="tc-btn-primary" onClick={() => navigate('/theme-c/contact')}>Reach Out</button>
          </motion.div>
        </div>
      </section>

      <hr className="tc-divider" />

      {/* WE BELIEVE */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>We believe</div>
            <h2 className="tc-h2">The Power of Simple.</h2>
          </motion.div>
          <div className="tc-grid-3">
            {beliefs.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="tc-card" style={{ padding: '40px 32px' }}>
                <div className="tc-card-gold-line" />
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', borderRadius: 3, padding: '5px 14px', marginBottom: 28 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--tc-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--tc-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{b.label}</span>
                </div>
                <h3 className="tc-h3" style={{ fontSize: '1.2rem', marginBottom: 16, lineHeight: 1.4 }}>{b.headline}</h3>
                <div style={{ width: 28, height: 1, background: 'var(--tc-gold)', opacity: 0.4, marginBottom: 16 }} />
                <p className="tc-body" style={{ fontSize: '0.9rem' }}>{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tc-section">
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="tc-card" style={{ padding: '64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="tc-card-gold-line" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="tc-h2" style={{ marginBottom: 16 }}>Ready to revolutionize your world with IoT?</h2>
              <p className="tc-body" style={{ maxWidth: 480, margin: '0 auto 36px' }}>Let's connect and explore how AIQA can transform your operations with intelligent IoT solutions.</p>
              <button className="tc-btn-primary" onClick={() => navigate('/theme-c/contact')}>Get in Touch</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="tc-section" style={{ background: 'var(--tc-bg2)', borderTop: '1px solid var(--tc-border)', borderBottom: '1px solid var(--tc-border)' }}>
        <div className="tc-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="tc-label" style={{ marginBottom: 16 }}>Our Story</div>
              <h2 className="tc-h2" style={{ marginBottom: 32 }}>We are building the future of IoT solutions. And it's <span className="tc-gradient">connected</span>.</h2>
              <p className="tc-body" style={{ marginBottom: 20, lineHeight: 1.9 }}>
                After years of working in IoT and software development, the founders of AIQA realized there was a significant gap in the industry — many companies were still using fragmented, outdated systems to manage their IoT devices and solutions. While hardware had advanced, the software to manage it had not kept pace.
              </p>
              <p className="tc-body" style={{ marginBottom: 20, lineHeight: 1.9 }}>
                What the industry needed was an all-in-one, cloud-based platform that could centralize, optimize, and transform the way IoT systems are managed. Our vision is to bring the same kind of disruption seen in other tech industries, creating seamless, future-proof solutions for businesses.
              </p>
              <p className="tc-body" style={{ lineHeight: 1.9 }}>
                Despite global challenges, AIQA has emerged as a leader in the IoT space, empowering companies to innovate, automate, and optimize their operations. Today, AIQA is trusted by a range of industries to deliver cutting-edge IoT solutions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="tc-card" style={{ padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative' }}>
                <div className="tc-card-gold-line" />
                <img src={groupLogo} alt="AIQA Platform" style={{ width: '100%', maxWidth: 300, objectFit: 'contain' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="tc-section" style={{ background: 'var(--tc-bg2)', borderTop: '1px solid var(--tc-border)', borderBottom: '1px solid var(--tc-border)' }}>
        <div className="tc-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <div className="tc-label" style={{ marginBottom: 16 }}>Core Values</div>
            <h2 className="tc-h2">What We Stand For</h2>
          </motion.div>
          <div className="tc-grid-3">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="tc-card" style={{ padding: '32px' }}>
                <div className="tc-card-gold-line" />
                <div style={{ width: 44, height: 44, borderRadius: 4, background: 'var(--tc-gold-dim)', border: '1px solid var(--tc-border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <ValueIcon type={v.type} />
                </div>
                <h3 className="tc-h3" style={{ fontSize: '1rem', marginBottom: 10, color: 'var(--tc-gold)' }}>{v.label}</h3>
                <p className="tc-body" style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
