import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import starBg from '../../assets/starBg.png'
import groupLogo from '../../assets/rectangleLogo.png'

const BELIEFS = [
  { label: 'Simple', color: '#8B5CF6', headline: 'The most impactful solutions are often the simplest.', body: 'In a world filled with complexity, the clarity and efficiency of our platform set us apart. We build tools that feel right, not just functional.' },
  { label: 'Empowering', color: '#14B8A6', headline: 'Those closest to a challenge are best equipped to solve it.', body: 'Our platform empowers teams worldwide to build what they need, without hoops to jump through. Control in the right hands makes all the difference.' },
  { label: 'Connected', color: '#3B82F6', headline: 'Businesses are revolutionizing their operations worldwide.', body: 'With our innovative IoT and digital solutions — all unified on a single platform — your entire operation speaks one language.' },
]

const ValueIcon = ({ type, color }) => {
  const s = { width: 22, height: 22, strokeWidth: 1.8, stroke: color, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (type === 'innovation') return <svg viewBox="0 0 24 24" style={s}><path d="M12 2a7 7 0 0 1 7 7c0 3-1.8 5.6-4.5 6.7V18H9.5v-2.3C6.8 14.6 5 12 5 9a7 7 0 0 1 7-7z"/><path d="M9.5 21h5M12 18v3"/></svg>
  if (type === 'reliability') return <svg viewBox="0 0 24 24" style={s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  if (type === 'collab') return <svg viewBox="0 0 24 24" style={s}><circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/><path d="M3 21v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2"/></svg>
  if (type === 'integrity') return <svg viewBox="0 0 24 24" style={s}><path d="M9 12l2 2 4-4"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/></svg>
  if (type === 'excellence') return <svg viewBox="0 0 24 24" style={s}><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
  if (type === 'sustain') return <svg viewBox="0 0 24 24" style={s}><path d="M2 22c0-6 4-10 10-10s10 4 10 10"/><path d="M12 12V2M7 7l5-5 5 5"/></svg>
  return null
}

const VALUES = [
  { type: 'innovation', label: 'Innovation', desc: 'Continuously pushing boundaries of what IoT technology can achieve.', color: '#8B5CF6' },
  { type: 'reliability', label: 'Reliability', desc: 'Building systems that industries can depend on 24/7/365.', color: '#14B8A6' },
  { type: 'collab', label: 'Collaboration', desc: 'Working closely with clients to deliver tailored solutions.', color: '#3B82F6' },
  { type: 'integrity', label: 'Integrity', desc: 'Transparent, honest, and ethical in everything we do.', color: '#8B5CF6' },
  { type: 'excellence', label: 'Excellence', desc: 'Committed to the highest standards of quality and performance.', color: '#14B8A6' },
  { type: 'sustain', label: 'Sustainability', desc: 'Designing solutions that are efficient and environmentally responsible.', color: '#3B82F6' },
]

export default function AboutB() {
  const navigate = useNavigate()

  return (
    <div className="tb">
      {/* HERO */}
      <section className="tb-hero" style={{ minHeight: '60vh', paddingTop: 120, textAlign: 'center' }}>
        <div className="tb-noise" />
        <div className="tb-orb tb-orb-violet" style={{ width: 500, height: 500, top: '-10%', right: '-5%' }} />
        <div className="tb-orb tb-orb-teal" style={{ width: 400, height: 400, bottom: '-10%', left: '-5%' }} />
        <div className="tb-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tb-label" style={{ marginBottom: 20, justifyContent: 'center' }}>About AIQA Labs</div>
            <h1 className="tb-h1" style={{ marginBottom: 24 }}>
              On a mission to unify all{' '}
              <span className="tb-gradient">IoT solutions</span>{' '}
              in one platform.
            </h1>
            <img src={starBg} alt="" style={{ width: '55%', maxWidth: 420, margin: '0 auto 36px', opacity: 0.65, display: 'block' }} />
            <button className="tb-btn-primary" onClick={() => navigate('/theme-b/contact')}>Reach Out</button>
          </motion.div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* WE BELIEVE */}
      <section className="tb-section">
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="tb-label" style={{ marginBottom: 16 }}>We believe</div>
            <h2 className="tb-h2">The Power of Simple.</h2>
          </motion.div>
          <div className="tb-grid-3" style={{ gap: 20 }}>
            {BELIEFS.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="tb-card" style={{ padding: '36px', background: `linear-gradient(135deg, ${b.color}08, transparent)` }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${b.color}12`, border: `1px solid ${b.color}25`, borderRadius: 100, padding: '4px 12px', marginBottom: 20 }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: b.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{b.label}</span>
                </div>
                <h3 className="tb-h3" style={{ fontSize: '1.1rem', marginBottom: 12 }}>{b.headline}</h3>
                <div style={{ width: 32, height: 2, background: `linear-gradient(90deg, ${b.color}, transparent)`, borderRadius: 2, marginBottom: 16 }} />
                <p className="tb-body" style={{ fontSize: '0.875rem' }}>{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* CTA */}
      <section className="tb-section">
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(20,184,166,0.08))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 24, padding: '64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="tb-orb tb-orb-violet" style={{ width: 300, height: 300, top: '-50%', left: '50%', transform: 'translateX(-50%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="tb-h2" style={{ marginBottom: 16 }}>Ready to revolutionize your world with IoT?</h2>
              <p className="tb-body" style={{ maxWidth: 480, margin: '0 auto 36px' }}>Let's connect and explore how AIQA can transform your operations with intelligent IoT solutions.</p>
              <button className="tb-btn-primary" onClick={() => navigate('/theme-b/contact')} style={{ padding: '14px 32px', fontSize: '1rem' }}>Get in Touch</button>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* OUR STORY */}
      <section className="tb-section" style={{ background: 'var(--tb-bg2)' }}>
        <div className="tb-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="tb-label" style={{ marginBottom: 16 }}>Our Story</div>
              <h2 className="tb-h2" style={{ marginBottom: 32 }}>We are building the future of IoT solutions. And it's <span className="tb-gradient">connected</span>.</h2>
              <p className="tb-body" style={{ marginBottom: 20, lineHeight: 1.9 }}>
                After years of working in IoT and software development, the founders of AIQA realized there was a significant gap in the industry — many companies were still using fragmented, outdated systems to manage their IoT devices and solutions. While hardware had advanced, the software to manage it had not kept pace.
              </p>
              <p className="tb-body" style={{ marginBottom: 20, lineHeight: 1.9 }}>
                What the industry needed was an all-in-one, cloud-based platform that could centralize, optimize, and transform the way IoT systems are managed. Our vision is to bring the same kind of disruption seen in other tech industries, creating seamless, future-proof solutions for businesses.
              </p>
              <p className="tb-body" style={{ lineHeight: 1.9 }}>
                Despite global challenges, AIQA has emerged as a leader in the IoT space, empowering companies to innovate, automate, and optimize their operations. Today, AIQA is trusted by a range of industries to deliver cutting-edge IoT solutions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="tb-card" style={{ padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(20,184,166,0.05))' }}>
                <img src={groupLogo} alt="AIQA Platform" style={{ width: '100%', maxWidth: 320, objectFit: 'contain' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="tb-divider" />

      {/* VALUES */}
      <section className="tb-section" style={{ background: 'var(--tb-bg2)' }}>
        <div className="tb-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div className="tb-label" style={{ marginBottom: 16 }}>Core Values</div>
            <h2 className="tb-h2">What We Stand For</h2>
          </motion.div>
          <div className="tb-grid-3" style={{ gap: 20 }}>
            {VALUES.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="tb-card" style={{ padding: '28px 32px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${v.color}12`, border: `1px solid ${v.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <ValueIcon type={v.type} color={v.color} />
                </div>
                <h3 className="tb-h3" style={{ fontSize: '1rem', marginBottom: 8 }}>{v.label}</h3>
                <p className="tb-body" style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
