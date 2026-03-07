import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import starBg from '../assets/starBg.png'
import groupLogo from '../assets/GroupLogo.png'
import group1 from '../assets/Group1.png'
import group2 from '../assets/Group2.png'
import group3 from '../assets/Group3.png'
import group4 from '../assets/Group4.png'
import group5 from '../assets/Group5.png'
import group6 from '../assets/Group6.png'
import contentImg from '../assets/content.png'
import graphLogo from '../assets/graph.png'
import timerLogo from '../assets/timerLogo.png'

const Platform = () => {
  const navigate = useNavigate()

  const features = [
    { icon: group1, title: 'Real-time Data Acquisition', description: 'Connect, capture, and stream performance data from distributed systems in real-time, ensuring secure and effortless data flow.' },
    { icon: group2, title: 'Universal Compatibility', description: 'Facilitate seamless integration with protocols like BACnet/IP, Modbus TCP, OPC UA, RDM, and Tridium Niagara, enabling smooth communication with your existing systems.' },
    { icon: group3, title: 'Resilient Connectivity', description: 'Maintain uninterrupted operations even in low-connectivity environments, with automatic data synchronization restoring the latest state once connection is re-established.' },
    { icon: group4, title: 'Bi-Directional Control', description: 'Easily execute commands, adjust parameters, and manage system functions remotely with reliable cloud-based bi-directional communication.' },
    { icon: group5, title: 'Data-Driven Decisions', description: 'Consolidate scattered data into a unified platform for advanced analytics, visualizations, and ML-powered insights, empowering smarter enterprise decision-making.' },
    { icon: group6, title: 'Reliable and Efficient', description: 'Discover and securely connect controllers and endpoints with blazing-fast, uninterrupted communication, compatible with both Windows and Linux systems.' },
  ]

  const workflow = [
    {
      step: '01',
      title: 'Integrations',
      subtitle: 'Connect Your Ecosystem',
      description: 'TwinV allows seamless integration with both your existing systems and external platforms, providing out-of-the-box solutions that reduce capital expenditure and simplify IoT project implementation.',
      image: contentImg,
      color: '#8B5CF6',
      position: 'left'
    },
    {
      step: '02',
      title: 'Commissioning',
      subtitle: 'Deploy in Days',
      description: 'What typically takes months is simplified with our platform\'s cloud-based setup, enabling seamless commissioning in just a few days.',
      image: timerLogo,
      color: '#07B4EB',
      position: 'right'
    },
    {
      step: '03',
      title: 'O&M Applications',
      subtitle: 'Optimize Operations',
      description: 'Enhance agility and decision-making in operations and maintenance with real-time insights through our platform\'s comprehensive suite of tools.',
      image: graphLogo,
      color: '#10B981',
      position: 'left'
    }
  ]

  return (
    <>
      {/* HERO */}
      <section style={{ padding: '160px 10% 100px', textAlign: 'center', position: 'relative' }}>
        <div className="hero-grid" />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(7,180,235,0.2) 100%)', borderRadius: 50, padding: '12px 32px', marginBottom: 32, border: '1px solid rgba(139,92,246,0.3)' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              IoT Platform Excellence
            </span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.04em', margin: '0 0 32px', maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
            Your Journey to{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Digital Excellence
              </span>
              <svg style={{ position: 'absolute', bottom: -8, left: 0, width: '100%', height: 12 }} viewBox="0 0 200 12">
                <path d="M0 6 Q50 0, 100 6 T200 6" stroke="url(#gradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#AC6AFF', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#07B4EB', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 700, margin: '0 auto 48px', lineHeight: 1.9, fontSize: '1.15rem' }}>
            From integration to optimization, discover how TwinV transforms your operations through a seamless, three-step process.
          </p>
          
          <button className="get-started-button" onClick={() => navigate('/contact')} style={{ fontSize: '1.1rem', padding: '18px 52px' }}>
            Start Your Journey
          </button>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* WORKFLOW TIMELINE */}
      <section style={{ padding: '120px 10%', position: 'relative' }}>
        {/* Vertical line connecting workflow items */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 120,
          bottom: 120,
          width: 2,
          background: 'linear-gradient(180deg, rgba(139,92,246,0.4) 0%, rgba(7,180,235,0.4) 50%, rgba(16,185,129,0.4) 100%)',
          transform: 'translateX(-50%)',
          zIndex: 0
        }} />

        {workflow.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              display: 'flex',
              gap: 80,
              alignItems: 'center',
              marginBottom: index < workflow.length - 1 ? 120 : 0,
              flexDirection: item.position === 'right' ? 'row-reverse' : 'row',
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Content Side */}
            <div style={{ flex: 1, textAlign: item.position === 'right' ? 'right' : 'left' }}>
              <div style={{ display: 'inline-block', background: `${item.color}22`, borderRadius: 12, padding: '8px 20px', marginBottom: 16, border: `1px solid ${item.color}44` }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: item.color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {item.subtitle}
                </span>
              </div>
              
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#fff', marginBottom: 20, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                <span style={{ color: item.color, fontSize: '0.6em', marginRight: 12, opacity: 0.6 }}>{item.step}</span>
                {item.title}
              </h2>
              
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, fontSize: '1.05rem', maxWidth: 500, margin: item.position === 'right' ? '0 0 0 auto' : '0' }}>
                {item.description}
              </p>
            </div>

            {/* Visual Side */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `radial-gradient(circle, ${item.color}18 0%, rgba(6,6,18,0.8) 70%)`,
                  borderRadius: 24,
                  padding: 60,
                  border: `2px solid ${item.color}33`,
                  position: 'relative',
                  boxShadow: `0 20px 60px ${item.color}22`,
                  maxWidth: 400,
                  width: '100%'
                }}
              >
                {/* Decorative corner accent */}
                <div style={{
                  position: 'absolute',
                  top: -2,
                  left: -2,
                  width: 60,
                  height: 60,
                  border: `3px solid ${item.color}`,
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderTopLeftRadius: 24
                }} />
                
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ 
                    width: index === 0 ? '100%' : 160, 
                    height: 'auto', 
                    objectFit: 'contain', 
                    opacity: 0.95,
                    display: 'block',
                    margin: '0 auto'
                  }} 
                />
                
                {/* Step number indicator */}
                <div style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: `${item.color}33`,
                  border: `2px solid ${item.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: item.color
                }}>
                  {item.step}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      <hr className="neon-divider" style={{ margin: '60px 10%' }} />

      {/* FEATURES - BENTO GRID */}
      <section style={{ padding: '100px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 70 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', margin: '0 0 20px', letterSpacing: '-0.03em' }}>
            Comprehensive Feature Set
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            Everything you need to build, deploy, and scale your IoT operations
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 20,
          gridAutoRows: 'minmax(200px, auto)'
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: 28,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                gridRow: index % 3 === 0 ? 'span 2' : 'span 1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(7,180,235,0.06) 100%)'
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              <div>
                <div style={{ 
                  width: 64, 
                  height: 64, 
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(7,180,235,0.15) 100%)',
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  border: '1px solid rgba(139,92,246,0.2)'
                }}>
                  <img src={feature.icon} alt={feature.title} style={{ width: 40, height: 40, opacity: 0.9 }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>{feature.title}</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '0.95rem' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '80px 10% 100px', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(7,180,235,0.12) 100%)',
            border: '1px solid rgba(139,92,246,0.3)',
            borderRadius: 32,
            padding: '70px 60px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />
          
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: 20, letterSpacing: '-0.02em', position: 'relative', zIndex: 1 }}>
            Ready to Transform Your Operations?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: 40, maxWidth: 600, margin: '0 auto 40px', position: 'relative', zIndex: 1 }}>
            Join industry leaders who trust TwinV for their IoT connectivity needs
          </p>
          <button className="get-started-button" onClick={() => navigate('/contact')} style={{ fontSize: '1.1rem', padding: '18px 52px', position: 'relative', zIndex: 1 }}>
            Get Started Today
          </button>
        </motion.div>
      </section>
    </>
  )
}

export default Platform
