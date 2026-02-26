import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import starBg from '../assets/starBg.png'
import rectangleLogo from '../assets/content.png'

const About = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '140px 10% 80px', textAlign: 'center', position: 'relative' }}>
        <div className="hero-grid" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="cyber-tag" style={{ marginBottom: 24, display: 'inline-block' }}>About AIQA Labs</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '20px 0 20px', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
            On a mission to unify all{' '}
            <span style={{ background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              IoT solutions
            </span>{' '}
            in one platform.
          </h1>
          <img src={starBg} alt="" style={{ width: '60%', maxWidth: 480, margin: '0 auto', opacity: 0.75, display: 'block' }} />
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ POWER OF SIMPLE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10%' }}>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <motion.div
            className="bento-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 360px' }}
          >
            <div className="section-label">We believe</div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#fff', margin: '16px 0 20px', letterSpacing: '-0.02em' }}>The Power of Simple..</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.97rem', marginBottom: 16 }}>
              At AIQA, we believe that the most impactful solutions are often the simplest.
              In a world filled with complexity, the clarity and efficiency of our platform
              set us apart. We understand that those closest to a challenge are best equipped to solve it.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.97rem', marginBottom: 16 }}>
              Businesses are revolutionizing their operations worldwide with our innovative IoT and digital solutions.
              They are building customized systems for every operational need on a unified platform.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.97rem' }}>
              Our expertise, products, and collaborative approach have positioned us as leaders in delivering
              tailored technology solutions across industries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: '0 0 240px', display: 'flex', alignItems: 'flex-end' }}
          >
            <img src={rectangleLogo} alt="AIQA" style={{ width: '100%', borderRadius: 20, opacity: 0.88, border: '1px solid rgba(255,255,255,0.08)' }} />
          </motion.div>
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
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>Ready to revolutionize your world with IoT?</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Let's make it legendary!</p>
          </div>
          <button className="get-started-button" style={{ whiteSpace: 'nowrap' }} onClick={() => navigate('/contact')}>Get Started</button>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* â”€â”€ OUR STORY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: '80px 10% 100px' }}>
        <motion.div
          className="bento-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '100%' }}
        >
          <div className="section-label">Our Story</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#fff', margin: '16px 0 24px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            We are building the future of IoT solutions. And it's{' '}
            <span style={{ color: '#07B4EB' }}>connected</span>.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.97rem', marginBottom: 16 }}>
            After years of working in IoT and software development, the founders of AIQA realized there was
            a significant gap in the industryâ€”many companies were still using fragmented, outdated systems to
            manage their IoT devices and solutions. While hardware had advanced, the software to manage it hadn't kept pace.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.97rem', marginBottom: 16 }}>
            What the industry needed was an all-in-one, cloud-based platform that could centralize, optimize,
            and transform the way IoT systems are managed. Our vision is to bring the same kind of disruption seen
            in other tech industries, creating seamless, future-proof solutions for businesses.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.97rem' }}>
            Despite global challenges, AIQA has emerged as a leader in the IoT space, empowering companies to
            innovate, automate, and optimize their operations with our platform. Today, AIQA is trusted by a
            range of industries to deliver cutting-edge IoT solutions.
          </p>
        </motion.div>
      </section>
    </>
  )
}

export default About
