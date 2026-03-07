import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    { icon: group1, title: 'Real-time Data Acquisition', description: 'Connect, capture, and stream performance data from distributed systems in real-time, ensuring secure and effortless data flow.' },
    { icon: group2, title: 'Universal Compatibility', description: 'Facilitate seamless integration with protocols like BACnet/IP, Modbus TCP, OPC UA, RDM, and Tridium Niagara, enabling smooth communication with your existing systems.' },
    { icon: group3, title: 'Resilient Connectivity', description: 'Maintain uninterrupted operations even in low-connectivity environments, with automatic data synchronization restoring the latest state once connection is re-established.' },
    { icon: group4, title: 'Bi-Directional Control', description: 'Easily execute commands, adjust parameters, and manage system functions remotely with reliable cloud-based bi-directional communication.' },
    { icon: group5, title: 'Data-Driven Decisions', description: 'Consolidate scattered data into a unified platform for advanced analytics, visualizations, and ML-powered insights, empowering smarter enterprise decision-making.' },
    { icon: group6, title: 'Reliable and Efficient', description: 'Discover and securely connect controllers and endpoints with blazing-fast, uninterrupted communication, compatible with both Windows and Linux systems.' },
  ]

  const coreFeatures = [
    {
      id: 1,
      title: 'Integrations',
      subtitle: 'Seamless Connectivity',
      description: 'TwinV allows seamless integration with both your existing systems and external platforms, providing out-of-the-box solutions that reduce capital expenditure and simplify IoT project implementation.',
      image: contentImg,
      color: '#8B5CF6'
    },
    {
      id: 2,
      title: 'Commissioning',
      subtitle: 'Fast Deployment',
      description: 'What typically takes months is simplified with our platform\'s cloud-based setup, enabling seamless commissioning in just a few days.',
      image: timerLogo,
      color: '#07B4EB'
    },
    {
      id: 3,
      title: 'O&M Applications',
      subtitle: 'Real-Time Insights',
      description: 'Enhance agility and decision-making in operations and maintenance with real-time insights through our platform\'s comprehensive suite of tools.',
      image: graphLogo,
      color: '#10B981'
    }
  ]

  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: '140px 10% 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" />
        
        {/* Floating gradient orbs */}
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(7,180,235,0.12) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
        
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="cyber-tag" style={{ marginBottom: 24, display: 'inline-block' }}>Next-Gen IoT Platform</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', margin: '20px 0 24px', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
            Transform Your Operations with{' '}
            <span style={{ background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 50%, #10B981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Intelligent Connectivity
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 680, margin: '0 auto 42px', lineHeight: 1.8, fontSize: '1.1rem' }}>
            Seamlessly integrate, monitor, and optimize your entire IoT ecosystem with TwinV's powerful platform.
          </p>
          <button className="get-started-button" onClick={() => navigate('/contact')} style={{ fontSize: '1.05rem', padding: '16px 48px' }}>
            Get Started
          </button>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* CORE FEATURES - TABBED INTERFACE */}
      <section style={{ padding: '100px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Core Capabilities</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', margin: '16px 0 24px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Three Pillars of Excellence
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {coreFeatures.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              style={{
                background: activeTab === index ? `linear-gradient(135deg, ${feature.color}22 0%, ${feature.color}11 100%)` : 'rgba(255,255,255,0.02)',
                border: `2px solid ${activeTab === index ? feature.color : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 16,
                padding: '20px 40px',
                color: activeTab === index ? '#fff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                fontSize: '1.05rem',
                fontWeight: 700,
                minWidth: 200,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>
                {String(index + 1).padStart(2, '0')} — {feature.title}
              </span>
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${feature.color}15 0%, transparent 100%)`,
                    zIndex: 0
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              background: `linear-gradient(135deg, ${coreFeatures[activeTab].color}08 0%, rgba(6,6,18,0.6) 100%)`,
              border: `1px solid ${coreFeatures[activeTab].color}33`,
              borderRadius: 24,
              padding: 60,
              display: 'flex',
              gap: 60,
              alignItems: 'center',
              flexWrap: 'wrap',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: `radial-gradient(circle, ${coreFeatures[activeTab].color}15 0%, transparent 70%)`, borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
            
            <div style={{ flex: '1 1 400px', position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: coreFeatures[activeTab].color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, display: 'block' }}>
                {coreFeatures[activeTab].subtitle}
              </span>
              <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#fff', marginBottom: 20, letterSpacing: '-0.02em' }}>
                {coreFeatures[activeTab].title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                {coreFeatures[activeTab].description}
              </p>
            </div>
            
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{
                background: `linear-gradient(135deg, ${coreFeatures[activeTab].color}18 0%, transparent 100%)`,
                borderRadius: 20,
                padding: 40,
                border: `1px solid ${coreFeatures[activeTab].color}22`
              }}>
                <img 
                  src={coreFeatures[activeTab].image} 
                  alt={coreFeatures[activeTab].title} 
                  style={{ width: activeTab === 0 ? 280 : 180, height: 'auto', objectFit: 'contain', opacity: 0.95 }} 
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* FEATURES GRID */}
      <section style={{ padding: '100px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Platform Features</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', margin: '16px 0 24px', letterSpacing: '-0.03em' }}>
            Everything You Need
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(6,6,18,0.8) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: 32,
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(6,6,18,0.9) 100%)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(6,6,18,0.8) 100%)'
              }}
            >
              <img src={feature.icon} alt={feature.title} style={{ width: 56, height: 56, marginBottom: 20, opacity: 0.9 }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>{feature.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.95rem' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Platform
