import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import star from '../assets/star copy.png'
import content from '../assets/content.png'
import graph from '../assets/graph.png'
import circleIcon from '../assets/circleIcon.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import logo192 from '../assets/logo192.png'
import sparkImg from '../assets/spark-image.png'
import group1 from '../assets/Group1.png'
import group2 from '../assets/Group2.png'
import group3 from '../assets/Group3.png'
import group4 from '../assets/Group4.png'
import group5 from '../assets/Group5.png'
import group6 from '../assets/Group6.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import profile3 from '../assets/profile3.png'

function Home() {
  const navigate = useNavigate()
  const [activeIndustry, setActiveIndustry] = useState(0)

  // Auto-rotate industries every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry(prev => (prev + 1) % 7)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ══════════ HERO - CENTERED WITH FLOATING ELEMENTS ══════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 8% 80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Animated grid background */}
        <div className="hero-grid" style={{ opacity: 0.2 }} />
        
        {/* Floating orbs */}
        <div className="aurora-orb" style={{
          left: '5%', top: '15%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(172, 106, 255, 0.3), transparent)'
        }} />
        <div className="aurora-orb" style={{
          right: '10%', bottom: '20%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(7, 180, 235, 0.25), transparent)'
        }} />

        {/* Floating protocol icons */}
        {[
          { img: group1, x: '10%', y: '25%', delay: 0 },
          { img: group2, x: '85%', y: '30%', delay: 0.5 },
          { img: group3, x: '15%', y: '70%', delay: 1 },
          { img: group4, x: '88%', y: '65%', delay: 1.5 },
          { img: group5, x: '50%', y: '15%', delay: 2 },
          { img: group6, x: '50%', y: '85%', delay: 2.5 },
        ].map((icon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              delay: icon.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              left: icon.x,
              top: icon.y,
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(139,92,246,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(139,92,246,0.15)'
            }}
          >
            <img src={icon.img} alt="" style={{ width: '35px', opacity: 0.9 }} />
          </motion.div>
        ))}

        {/* Main content - centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 24px',
              borderRadius: '50px',
              background: 'rgba(172, 106, 255, 0.12)',
              border: '1px solid rgba(172, 106, 255, 0.3)',
              marginBottom: '32px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#AC6AFF',
              letterSpacing: '0.05em'
            }}
          >
            <span style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              background: '#AC6AFF',
              animation: 'pulse 2s infinite'
            }} />
            DIGITAL TWIN INNOVATION
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '28px',
              letterSpacing: '-0.03em'
            }}
          >
            Revolutionize Your
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 50%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Operations with IoT
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.8,
              marginBottom: '48px',
              maxWidth: '700px',
              margin: '0 auto 48px'
            }}
          >
            Unleash the power of digital twins, real-time analytics, and predictive 
            intelligence to transform how you monitor, manage, and optimize your assets.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{ 
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}
          >
            <button 
              className="get-started-button" 
              onClick={() => navigate('/contact')}
              style={{ fontSize: '1.05rem', padding: '16px 40px' }}
            >
              Get Started Free
            </button>
            <button 
              className="btn-neo" 
              onClick={() => navigate('/platform')}
              style={{ fontSize: '1.05rem', padding: '16px 40px' }}
            >
              Explore Platform
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              marginTop: '80px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              opacity: 0.4,
              cursor: 'pointer'
            }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Scroll Down
            </div>
            <div style={{ fontSize: '1.5rem', color: '#AC6AFF' }}>↓</div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ STATS - HORIZONTAL ANIMATED STRIP ══════════ */}
      <section style={{
        padding: '60px 0',
        background: 'linear-gradient(90deg, transparent, rgba(172, 106, 255, 0.05), transparent)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '80px',
          flexWrap: 'wrap',
          padding: '0 8%'
        }}>
          {[
            { icon: '🚀', value: '9+', label: 'Years Excellence', color: '#AC6AFF' },
            { icon: '🏢', value: '10+', label: 'Industries', color: '#07B4EB' },
            { icon: '✨', value: '100%', label: 'Satisfaction', color: '#10B981' },
            { icon: '⚡', value: '24/7', label: 'Support', color: '#F59E0B' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                lineHeight: 1
              }}>
                {stat.icon}
              </div>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: '6px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: 600
                }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════ PLATFORM - ZIGZAG/ALTERNATING LAYOUT ══════════ */}
      <section style={{ padding: '120px 8%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#07B4EB',
            marginBottom: '16px'
          }}>
            TwinV Platform
          </div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            Enterprise-Grade IoT Solutions
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            From protocol integration to AI-powered predictions, everything you need 
            to build the future of connected operations.
          </p>
        </motion.div>

        {/* Zigzag feature cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {[
            {
              direction: 'left',
              color: '#8B5CF6',
              title: 'Universal Protocol Support',
              desc: 'Seamlessly integrate BACnet/IP, Modbus TCP, OPC UA, MQTT, and more. No need to rip-and-replace your existing infrastructure.',
              visual: 'protocols',
              icons: [group1, group2, group3, group4, group5, group6]
            },
            {
              direction: 'right',
              color: '#07B4EB',
              title: 'Predictive Analytics Engine',
              desc: 'AI-driven machine learning models forecast equipment failures before they happen, reducing unplanned downtime by up to 70%.',
              visual: 'chart',
              img: graph
            },
            {
              direction: 'left',
              color: '#10B981',
              title: 'Real-Time Data Visualization',
              desc: 'Live dashboards with actionable insights. Monitor asset performance, track KPIs, and make informed decisions instantly.',
              visual: 'dashboard',
              img: star
            },
            {
              direction: 'right',
              color: '#F59E0B',
              title: 'Energy & Sustainability Intelligence',
              desc: 'Optimize energy consumption, reduce carbon footprint, and achieve sustainability goals with intelligent recommendations.',
              visual: 'energy',
              img: circleIcon
            },
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: feat.direction === 'left' ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                display: 'grid',
                gridTemplateColumns: feat.direction === 'left' ? '1.2fr 1fr' : '1fr 1.2fr',
                gap: '60px',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
              }}
            >
              {/* Content */}
              <div style={{ order: feat.direction === 'left' ? 1 : 2 }}>
                <div style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: feat.color,
                  marginBottom: '16px'
                }}>
                  Feature {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '20px',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2
                }}>
                  {feat.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  marginBottom: '32px'
                }}>
                  {feat.desc}
                </p>
                <button 
                  className="btn-neo" 
                  onClick={() => navigate('/platform')}
                  style={{ borderColor: feat.color, color: feat.color }}
                >
                  Learn More →
                </button>
              </div>

              {/* Visual */}
              <div style={{
                order: feat.direction === 'left' ? 2 : 1,
                position: 'relative'
              }}>
                <div style={{
                  background: `radial-gradient(circle, ${feat.color}15 0%, transparent 70%)`,
                  borderRadius: '24px',
                  border: `1px solid ${feat.color}30`,
                  padding: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '320px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Glow effect */}
                  <div style={{
                    position: 'absolute',
                    inset: '-20%',
                    background: `radial-gradient(circle at 50% 50%, ${feat.color}20, transparent 60%)`,
                    filter: 'blur(40px)',
                    opacity: 0.6
                  }} />

                  {feat.visual === 'protocols' && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '20px',
                      position: 'relative'
                    }}>
                      {feat.icons.map((icon, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '16px',
                            background: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${feat.color}40`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                        >
                          <img src={icon} alt="" style={{ width: '50px', opacity: 0.9 }} />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {feat.img && (
                    <motion.img
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      src={feat.img}
                      alt={feat.title}
                      style={{
                        width: '80%',
                        maxWidth: '280px',
                        filter: `drop-shadow(0 0 30px ${feat.color}80)`,
                        position: 'relative'
                      }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div style={{ padding: '40px 0', background: 'rgba(255,255,255,0.01)' }}>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[
              'Digital Twin', 'IoT Integration', 'Real-Time Analytics', 'Predictive Maintenance',
              'OPC UA', 'BACnet/IP', ' Modbus TCP', 'MQTT', 'Edge Computing',
              'AI-Powered Insights', 'Smart Buildings', 'Energy Optimization',
              'Digital Twin', 'IoT Integration', 'Real-Time Analytics', 'Predictive Maintenance',
            ].map((tag, i) => (
              <span key={i} className="marquee-tag">
                <span className="marquee-dot" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ SERVICES - OFFSET CARD LAYOUT ══════════ */}
      <section style={{ padding: '120px 8%', position: 'relative' }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(172, 106, 255, 0.1), transparent)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px', position: 'relative' }}
        >
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#10B981',
            marginBottom: '16px'
          }}>
            What We Do
          </div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            End-to-End IoT Services
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            From strategy to deployment, we deliver complete solutions that 
            bridge hardware and software seamlessly.
          </p>
        </motion.div>

        {/* Offset service cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {[
            {
              color: '#8B5CF6',
              num: '01',
              title: 'Custom Software Development',
              desc: 'Full-stack development with domain expertise. From concept to production, we build scalable, secure, and compliant solutions.',
              icon: icon1,
              features: ['Cloud Native', 'API-First', 'Microservices', 'CI/CD']
            },
            {
              color: '#07B4EB',
              num: '02',
              title: 'IT Consulting & Strategy',
              desc: 'Strategic technology advisory from assessment to optimization. Architecture design, cloud migration, and digital roadmapping.',
              icon: icon2,
              features: ['Architecture', 'Cloud Strategy', 'DevOps', 'Security']
            },
            {
              color: '#10B981',
              num: '03',
              title: 'Digital Transformation',
              desc: 'Modernize legacy systems, automate workflows, and reduce costs. Complete transformation with minimal disruption.',
              icon: icon3,
              features: ['Modernization', 'Automation', 'Integration', 'Training']
            },
          ].map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ 
                y: -12, 
                boxShadow: `0 20px 60px ${svc.color}30` 
              }}
              onClick={() => navigate('/services')}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                padding: '44px 36px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                marginTop: i % 2 === 1 ? '40px' : '0'
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: `linear-gradient(135deg, ${svc.color}20, transparent)`,
                borderRadius: '0 24px 0 100%'
              }} />

              {/* Number badge */}
              <div style={{
                position: 'absolute',
                top: '28px',
                right: '28px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: `${svc.color}15`,
                border: `2px solid ${svc.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 900,
                color: svc.color
              }}>
                {svc.num}
              </div>

              {/* Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: `${svc.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
                position: 'relative'
              }}>
                <img src={svc.icon} alt="" style={{
                  width: '48px',
                  filter: `drop-shadow(0 0 12px ${svc.color}60)`
                }} />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
                lineHeight: 1.3
              }}>
                {svc.title}
              </h3>

              {/* Description */}
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '28px'
              }}>
                {svc.desc}
              </p>

              {/* Features */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                marginBottom: '20px'
              }}>
                {svc.features.map((feat, idx) => (
                  <div key={idx} style={{
                    fontSize: '0.8rem',
                    color: svc.color,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: svc.color
                    }} />
                    {feat}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: svc.color,
                fontSize: '0.95rem',
                fontWeight: 700
              }}>
                Explore Service <span style={{ fontSize: '1.2rem' }}>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '64px', position: 'relative' }}>
          <button 
            className="get-started-button" 
            onClick={() => navigate('/services')}
            style={{ fontSize: '1.05rem' }}
          >
            View All Services
          </button>
        </div>
      </section>

      {/* ══════════ INDUSTRIES - CAROUSEL SLIDER ══════════ */}
      <section style={{
        padding: '120px 8%',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#F59E0B',
            marginBottom: '16px'
          }}>
            Industries
          </div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            Expertise Across Sectors
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            maxWidth: '650px',
            margin: '0 auto 40px',
            lineHeight: 1.8
          }}>
            Deep domain knowledge and specialized solutions for diverse industries.
          </p>

          {/* Industry selector pills */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '60px'
          }}>
            {[
              { id: 0, label: 'FinTech', icon: '💳', color: '#AC6AFF' },
              { id: 1, label: 'Healthcare', icon: '🏥', color: '#10B981' },
              { id: 2, label: 'Real Estate', icon: '🏢', color: '#07B4EB' },
              { id: 3, label: 'Manufacturing', icon: '🏭', color: '#F59E0B' },
              { id: 4, label: 'Transport', icon: '🚚', color: '#8B5CF6' },
              { id: 5, label: 'Smart Home', icon: '🏠', color: '#10B981' },
              { id: 6, label: 'SaaS', icon: '☁️', color: '#8B5CF6' },
            ].map((ind) => (
              <motion.button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '14px 28px',
                  borderRadius: '50px',
                  background: activeIndustry === ind.id 
                    ? `linear-gradient(135deg, ${ind.color}30, ${ind.color}15)` 
                    : 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  border: activeIndustry === ind.id 
                    ? `2px solid ${ind.color}` 
                    : '1px solid rgba(255,255,255,0.1)',
                  color: activeIndustry === ind.id ? '#fff' : 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: activeIndustry === ind.id ? `0 8px 24px ${ind.color}30` : 'none'
                }}
              >
                <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>{ind.icon}</span>
                {ind.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active industry content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ duration: 0.4 }}
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '28px',
              padding: '56px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '200px',
              background: `linear-gradient(180deg, ${
                [
                  '#AC6AFF',
                  '#10B981',
                  '#07B4EB',
                  '#F59E0B',
                  '#8B5CF6',
                  '#10B981',
                  '#8B5CF6'
                ][activeIndustry]
              }10, transparent)`,
              pointerEvents: 'none'
            }} />

            {[
              {
                icon: '💳',
                title: 'FinTech & Payment Solutions',
                desc: 'Build secure, scalable financial technology platforms. From digital wallets to banking APIs, we deliver compliance-first architecture with cutting-edge security.',
                tags: ['Digital Payments', 'Banking APIs', 'Blockchain', 'PCI Compliance', 'KYC/AML'],
                color: '#AC6AFF'
              },
              {
                icon: '🏥',
                title: 'Healthcare Technology',
                desc: 'Transform patient care with modern EHR, EMR, telemedicine, and practice management systems. HIPAA-compliant solutions that improve outcomes and efficiency.',
                tags: ['EHR/EMR Systems', 'Telemedicine', 'Patient Portals', 'HIPAA Compliance', 'Medical Imaging'],
                color: '#10B981'
              },
              {
                icon: '🏢',
                title: 'PropTech & Real Estate',
                desc: 'Modern real estate platforms with CRM, property management, virtual tours, and advanced analytics. Streamline operations and boost sales.',
                tags: ['Property Management', 'CRM Integration', 'Virtual Tours', 'Market Analytics', 'Tenant Portals'],
                color: '#07B4EB'
              },
              {
                icon: '🏭',
                title: 'Manufacturing & Industry 4.0',
                desc: 'Optimize production with IoT-enabled manufacturing software, ERP systems, and predictive maintenance. Complete visibility across operations.',
                tags: ['Industry 4.0', 'IoT Integration', 'ERP Systems', 'Quality Control', 'Supply Chain'],
                color: '#F59E0B'
              },
              {
                icon: '🚚',
                title: 'Transport & Logistics',
                desc: 'TMS, WMS, fleet management, and blockchain-based supply chain solutions. Optimize routes, reduce costs, and improve delivery times.',
                tags: ['TMS/WMS', 'Fleet Management', 'Route Optimization', 'Blockchain Tracking', 'Last-Mile Delivery'],
                color: '#8B5CF6'
              },
              {
                icon: '🏠',
                title: 'Smart Home & IoT Devices',
                desc: 'User-centered IoT software for smart home products, connected appliances, and voice-enabled devices with intuitive mobile and web interfaces.',
                tags: ['IoT Devices', 'Smart Appliances', 'Voice Control', 'Mobile Apps', 'Home Automation'],
                color: '#10B981'
              },
              {
                icon: '☁️',
                title: 'Software & SaaS Platforms',
                desc: 'Build robust multi-tenant SaaS systems of any complexity. Scalable, secure cloud architecture designed for rapid growth and global reach.',
                tags: ['Multi-tenant SaaS', 'API Platform', 'Microservices', 'DevOps', 'Auto-scaling'],
                color: '#8B5CF6'
              },
            ][activeIndustry] && (
              <>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                  marginBottom: '28px',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    lineHeight: 1,
                    flexShrink: 0
                  }}>
                    {[
                      { icon: '💳' },
                      { icon: '🏥' },
                      { icon: '🏢' },
                      { icon: '🏭' },
                      { icon: '🚚' },
                      { icon: '🏠' },
                      { icon: '☁️' },
                    ][activeIndustry].icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                      fontWeight: 800,
                      color: '#fff',
                      marginBottom: '12px',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2
                    }}>
                      {[
                        { title: 'FinTech & Payment Solutions' },
                        { title: 'Healthcare Technology' },
                        { title: 'PropTech & Real Estate' },
                        { title: 'Manufacturing & Industry 4.0' },
                        { title: 'Transport & Logistics' },
                        { title: 'Smart Home & IoT Devices' },
                        { title: 'Software & SaaS Platforms' },
                      ][activeIndustry].title}
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.8,
                      marginBottom: '0'
                    }}>
                      {[
                        { desc: 'Build secure, scalable financial technology platforms. From digital wallets to banking APIs, we deliver compliance-first architecture with cutting-edge security.' },
                        { desc: 'Transform patient care with modern EHR, EMR, telemedicine, and practice management systems. HIPAA-compliant solutions that improve outcomes and efficiency.' },
                        { desc: 'Modern real estate platforms with CRM, property management, virtual tours, and advanced analytics. Streamline operations and boost sales.' },
                        { desc: 'Optimize production with IoT-enabled manufacturing software, ERP systems, and predictive maintenance. Complete visibility across operations.' },
                        { desc: 'TMS, WMS, fleet management, and blockchain-based supply chain solutions. Optimize routes, reduce costs, and improve delivery times.' },
                        { desc: 'User-centered IoT software for smart home products, connected appliances, and voice-enabled devices with intuitive mobile and web interfaces.' },
                        { desc: 'Build robust multi-tenant SaaS systems of any complexity. Scalable, secure cloud architecture designed for rapid growth and global reach.' },
                      ][activeIndustry].desc}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '36px',
                  position: 'relative'
                }}>
                  {[
                    { tags: ['Digital Payments', 'Banking APIs', 'Blockchain', 'PCI Compliance', 'KYC/AML'] },
                    { tags: ['EHR/EMR Systems', 'Tel emedicine', 'Patient Portals', 'HIPAA Compliance', 'Medical Imaging'] },
                    { tags: ['Property Management', 'CRM Integration', 'Virtual Tours', 'Market Analytics', 'Tenant Portals'] },
                    { tags: ['Industry 4.0', 'IoT Integration', 'ERP Systems', 'Quality Control', 'Supply Chain'] },
                    { tags: ['TMS/WMS', 'Fleet Management', 'Route Optimization', 'Blockchain Tracking', 'Last-Mile Delivery'] },
                    { tags: ['IoT Devices', 'Smart Appliances', 'Voice Control', 'Mobile Apps', 'Home Automation'] },
                    { tags: ['Multi-tenant SaaS', 'API Platform', 'Microservices', 'DevOps', 'Auto-scaling'] },
                  ][activeIndustry].tags.map((tag, idx) => (
                    <span key={idx} style={{
                      padding: '10px 20px',
                      borderRadius: '12px',
                      background: `${[
                        { color: '#AC6AFF' },
                        { color: '#10B981' },
                        { color: '#07B4EB' },
                        { color: '#F59E0B' },
                        { color: '#8B5CF6' },
                        { color: '#10B981' },
                        { color: '#8B5CF6' },
                      ][activeIndustry].color}18`,
                      border: `1px solid ${[
                        { color: '#AC6AFF' },
                        { color: '#10B981' },
                        { color: '#07B4EB' },
                        { color: '#F59E0B' },
                        { color: '#8B5CF6' },
                        { color: '#10B981' },
                        { color: '#8B5CF6' },
                      ][activeIndustry].color}40`,
                      color: [
                        { color: '#AC6AFF' },
                        { color: '#10B981' },
                        { color: '#07B4EB' },
                        { color: '#F59E0B' },
                        { color: '#8B5CF6' },
                        { color: '#10B981' },
                        { color: '#8B5CF6' },
                      ][activeIndustry].color,
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ position: 'relative' }}>
                  <button 
                    className="btn-neo" 
                    onClick={() => navigate('/industries')}
                    style={{
                      borderColor: [
                        { color: '#AC6AFF' },
                        { color: '#10B981' },
                        { color: '#07B4EB' },
                        { color: '#F59E0B' },
                        { color: '#8B5CF6' },
                        { color: '#10B981' },
                        { color: '#8B5CF6' },
                      ][activeIndustry].color,
                      color: [
                        { color: '#AC6AFF' },
                        { color: '#10B981' },
                        { color: '#07B4EB' },
                        { color: '#F59E0B' },
                        { color: '#8B5CF6' },
                        { color: '#10B981' },
                        { color: '#8B5CF6' },
                      ][activeIndustry].color
                    }}
                  >
                    Learn More About This Industry →
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ══════════ TESTIMONIALS - STAGGERED MASONRY ══════════ */}
      <section style={{ padding: '120px 8%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#AC6AFF',
            marginBottom: '16px'
          }}>
            Success Stories
          </div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            Trusted by Leaders
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            Hear from clients who've transformed their operations with our solutions.
          </p>
        </motion.div>

        {/* Staggered testimonial cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {[
            {
              quote: "AIQA's platform transformed our operations completely. The digital twin technology gave us insights we never thought possible. ROI in just 6 months.",
              name: 'Jane Doe',
              title: 'CEO, Tech Innovations Inc.',
              avatar: profile1,
              color: '#AC6AFF',
              rating: 5,
              offset: 0
            },
            {
              quote: "Working with AIQA was seamless. Their team understood our complex requirements and delivered a solution that exceeded expectations.",
              name: 'John Smith',
              title: 'CTO, Global Enterprises',
              avatar: profile2,
              color: '#07B4EB',
              rating: 5,
              offset: 40
            },
            {
              quote: "The consulting services were game-changing. We streamlined processes, reduced costs by 40%, and achieved remarkable growth in record time.",
              name: 'Emily White',
              title: 'Director of Operations, Future Systems',
              avatar: profile3,
              color: '#10B981',
              rating: 5,
              offset: 0
            },
          ].map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ 
                y: -8,
                boxShadow: `0 20px 50px ${test.color}20`
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                padding: '40px 32px',
                position: 'relative',
                overflow: 'hidden',
                marginTop: test.offset,
                transition: 'all 0.4s'
              }}
            >
              {/* Top gradient bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${test.color}, transparent)`
              }} />

              {/* Quote icon */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontSize: '3rem',
                color: `${test.color}20`,
                fontFamily: 'Georgia, serif',
                lineHeight: 1
              }}>
                "
              </div>

              {/* Rating stars */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
                {Array(test.rating).fill(0).map((_, idx) => (
                  <svg key={idx} width="20" height="20" viewBox="0 0 24 24" fill={test.color}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.8,
                marginBottom: '32px',
                minHeight: '120px',
                position: 'relative'
              }}>
                "{test.quote}"
              </p>

              {/* Author info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: `3px solid ${test.color}50`,
                  padding: '3px',
                  background: `linear-gradient(135deg, ${test.color}20, transparent)`
                }}>
                  <img src={test.avatar} alt={test.name} style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }} />
                </div>
                <div>
                  <div style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '4px'
                  }}>
                    {test.name}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.4
                  }}>
                    {test.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════ FAQ - CUSTOM ACCORDION ══════════ */}
      <section style={{
        padding: '120px 8% 140px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#07B4EB',
            marginBottom: '16px'
          }}>
            FAQ
          </div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            Questions? We Have Answers.
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            maxWidth: '650px',
            margin: '0 auto 40px',
            lineHeight: 1.8
          }}>
            Everything you need to know about our platform and services.
          </p>
          <button 
            className="btn-neo" 
            onClick={() => navigate('/contact')}
            style={{ borderColor: '#07B4EB', color: '#07B4EB' }}
          >
            Still Have Questions? Contact Us
          </button>
        </motion.div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {[
            {
              icon: '🏢',
              q: 'What industries does AIQA Labs specialize in?',
              a: 'We serve FinTech, Healthcare, Real Estate, Transport & Mobility, Manufacturing, Smart Home, and SaaS sectors with deep domain expertise and proven track records in each vertical.',
              color: '#AC6AFF'
            },
            {
              icon: '⚡',
              q: 'How is AIQA different from other software agencies?',
              a: 'We start with strategy, not just execution. Our approach begins with understanding your operational challenges, then designing the right architecture for measurable outcomes and long-term success.',
              color: '#07B4EB'
            },
            {
              icon: '🔧',
              q: 'Can AIQA handle both hardware and software development?',
              a: 'Absolutely. We bridge embedded firmware, edge devices, IoT protocols (MQTT, CoAP, OPC-UA), and cloud backends into unified solutions without the need for multiple vendors.',
              color: '#10B981'
            },
            {
              icon: '📋',
              q: 'What does the engagement process look like?',
              a: 'We start with a complimentary discovery call, move into detailed scoping with architecture recommendations, then deliver in agile phases with weekly demos and a dedicated point of contact.',
              color: '#F59E0B'
            },
            {
              icon: '🛠️',
              q: 'Do you offer post-launch support and maintenance?',
              a: 'Yes! We provide tiered SLA-based support, proactive monitoring, feature iterations, and on-call engineering. We are not just vendors - we are long-term technology partners.',
              color: '#8B5CF6'
            },
            {
              icon: '⏱️',
              q: 'What is the typical timeline for a project?',
              a: 'A well-scoped mid-scale product typically launches in 10-14 weeks using agile sprints with fortnightly reviews, giving you full visibility and control throughout development.',
              color: '#AC6AFF'
            },
          ].map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      style={{
        background: open ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        marginBottom: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s'
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '28px 32px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: '20px',
          textAlign: 'left',
          transition: 'all 0.3s'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
          <div style={{
            fontSize: '2rem',
            lineHeight: 1,
            flexShrink: 0
          }}>
            {item.icon}
          </div>
          <span style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: open ? item.color : '#fff',
            lineHeight: 1.5,
            transition: 'color 0.3s'
          }}>
            {item.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: open ? `${item.color}20` : 'rgba(255,255,255,0.05)',
            border: `2px solid ${open ? item.color : 'rgba(255,255,255,0.1)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: open ? item.color : 'rgba(255,255,255,0.4)',
            flexShrink: 0,
            fontWeight: 300,
            lineHeight: 1,
            transition: 'all 0.3s'
          }}
        >
          +
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              padding: '0 32px 32px 96px',
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1rem',
              lineHeight: 1.8
            }}>
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Home
