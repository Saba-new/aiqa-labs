import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Industries = () => {
  const navigate = useNavigate()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const industries = [
    {
      name: 'FinTech',
      desc: 'Secure digital payments, banking platforms, and financial transaction systems built for the future.',
      fullDesc: 'Custom financial software solutions including payment gateways, digital wallets, blockchain integration, and compliance systems.',
      color: '#AC6AFF',
      gradient: 'linear-gradient(135deg, rgba(172,106,255,0.15) 0%, rgba(172,106,255,0.03) 100%)',
      icon: '💳'
    },
    {
      name: 'Healthcare',
      desc: 'Advanced EHR, EMR, telemedicine, and patient management systems transforming healthcare delivery.',
      fullDesc: 'HIPAA-compliant healthcare software including electronic health records, appointment scheduling, and medical billing systems.',
      color: '#07B4EB',
      gradient: 'linear-gradient(135deg, rgba(7,180,235,0.15) 0%, rgba(7,180,235,0.03) 100%)',
      icon: '🏥'
    },
    {
      name: 'Real Estate',
      desc: 'Modern property management, CRM, and listing platforms revolutionizing real estate operations.',
      fullDesc: 'Property management software, virtual tours, CRM systems, and marketplace platforms for real estate professionals.',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.03) 100%)',
      icon: '🏢'
    },
    {
      name: 'Transportation',
      desc: 'Fleet management, logistics optimization, and mobility solutions for efficient transport systems.',
      fullDesc: 'TMS, WMS, FMS, route optimization, vehicle tracking, and supply chain management solutions.',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.03) 100%)',
      icon: '🚚'
    },
    {
      name: 'Manufacturing',
      desc: 'Smart factory solutions with IoT integration, predictive maintenance, and production optimization.',
      fullDesc: 'MES, SCADA systems, quality control software, inventory management, and Industry 4.0 solutions.',
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, rgba(239,68,68,0.15) 0%, rgba(239,68,68,0.03) 100%)',
      icon: '🏭'
    },
    {
      name: 'Smart Home',
      desc: 'IoT-powered home automation, energy management, and connected device ecosystems.',
      fullDesc: 'Smart home hubs, voice control systems, energy monitoring, security systems, and appliance integration.',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.03) 100%)',
      icon: '🏠'
    },
  ]

  const capabilities = [
    { title: 'AI & Machine Learning', stat: '50+', label: 'AI Projects', icon: '🤖' },
    { title: 'IoT Solutions', stat: '100+', label: 'Connected Devices', icon: '📡' },
    { title: 'Cloud Infrastructure', stat: '99.9%', label: 'Uptime', icon: '☁️' },
    { title: 'Data Analytics', stat: '1M+', label: 'Data Points', icon: '📊' },
  ]

  return (
    <>
      {/* HERO - DIAGONAL SPLIT DESIGN */}
      <section style={{ padding: '140px 10% 100px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" />
        
        {/* Animated diagonal background elements */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(172,106,255,0.08) 0%, rgba(7,180,235,0.08) 100%)', transform: 'rotate(-15deg)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '50%', height: '120%', background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(245,158,11,0.06) 100%)', transform: 'rotate(20deg)', filter: 'blur(100px)', pointerEvents: 'none' }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(172,106,255,0.2) 0%, rgba(7,180,235,0.2) 100%)', borderRadius: 50, padding: '10px 28px', marginBottom: 28, border: '1px solid rgba(172,106,255,0.3)' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Industry-Focused Innovation
              </span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.06, letterSpacing: '-0.04em', margin: '0 0 28px', maxWidth: 1000 }}>
              Transforming Industries with{' '}
              <span style={{ display: 'block', marginTop: 8 }}>
                <span style={{ background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 50%, #10B981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Next-Gen Solutions
                </span>
              </span>
            </h1>
            
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 680, lineHeight: 1.85, fontSize: '1.15rem', marginBottom: 44 }}>
              From FinTech to Healthcare, Manufacturing to Smart Homes — we deliver cutting-edge technology solutions tailored to your industry's unique challenges.
            </p>
            
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="get-started-button" onClick={() => navigate('/contact')} style={{ fontSize: '1.08rem', padding: '18px 48px' }}>
                Explore Solutions
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '0 16px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#AC6AFF', lineHeight: 1 }}>7+</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>Industries</div>
                </div>
                <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#07B4EB', lineHeight: 1 }}>100+</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>Projects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* INDUSTRIES - MASONRY/BENTO GRID */}
      <section style={{ padding: '100px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 70 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: '#fff', margin: '0 0 20px', letterSpacing: '-0.03em' }}>
            Industries We Empower
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.12rem', maxWidth: 700, margin: '0 auto' }}>
            Domain expertise meets technological innovation across diverse sectors
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20,
          gridAutoRows: 'minmax(200px, auto)'
        }}>
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate('/contact')}
              style={{
                background: hoveredIndex === index ? industry.gradient : 'rgba(255,255,255,0.02)',
                border: `2px solid ${hoveredIndex === index ? industry.color + '55' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 24,
                padding: 32,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                gridRow: index % 3 === 0 ? 'span 2' : 'span 1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index ? `0 20px 60px ${industry.color}22` : 'none'
              }}
            >
              {/* Background pattern */}
              <div style={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                background: `radial-gradient(circle, ${industry.color}15 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: hoveredIndex === index ? 1 : 0.3,
                transition: 'opacity 0.4s'
              }} />
              
              {/* Icon */}
              <div style={{
                fontSize: index % 3 === 0 ? '4rem' : '3rem',
                marginBottom: 20,
                position: 'relative',
                zIndex: 1,
                transition: 'transform 0.4s',
                transform: hoveredIndex === index ? 'scale(1.1) rotate(-5deg)' : 'scale(1)'
              }}>
                {industry.icon}
              </div>
              
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ 
                  fontSize: index % 3 === 0 ? '1.5rem' : '1.25rem', 
                  fontWeight: 800, 
                  color: '#fff', 
                  marginBottom: 12,
                  letterSpacing: '-0.02em'
                }}>
                  {industry.name}
                </h3>
                <p style={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  lineHeight: 1.75, 
                  fontSize: '0.95rem',
                  marginBottom: 16
                }}>
                  {hoveredIndex === index ? industry.fullDesc : industry.desc}
                </p>
                
                {/* Arrow indicator */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: industry.color,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'all 0.3s'
                }}>
                  <span>Explore Solutions</span>
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                </div>
              </div>
              
              {/* Index number */}
              <div style={{
                position: 'absolute',
                bottom: 12,
                right: 20,
                fontSize: '5rem',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.02)',
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none'
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 10%' }} />

      {/* CAPABILITIES - STAT CARDS */}
      <section style={{ padding: '100px 10%' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', margin: '0 0 20px', letterSpacing: '-0.03em' }}>
            Our Core Capabilities
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: 32,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>{cap.icon}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#AC6AFF', marginBottom: 8, lineHeight: 1 }}>
                {cap.stat}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                {cap.label}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                {cap.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '80px 10% 120px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(172,106,255,0.12) 0%, rgba(7,180,235,0.12) 100%)',
            border: '2px solid rgba(172,106,255,0.3)',
            borderRadius: 32,
            padding: '70px 60px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 400, height: 400, background: 'radial-gradient(circle, rgba(172,106,255,0.25) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(100px)' }} />
          
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: 20, letterSpacing: '-0.02em', position: 'relative', zIndex: 1 }}>
            Ready to Transform Your Industry?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: 40, maxWidth: 650, margin: '0 auto 40px', position: 'relative', zIndex: 1 }}>
            Let's build innovative solutions tailored to your industry's unique challenges and opportunities.
          </p>
          <button className="get-started-button" onClick={() => navigate('/contact')} style={{ fontSize: '1.1rem', padding: '18px 52px', position: 'relative', zIndex: 1 }}>
            Start Your Project
          </button>
        </motion.div>
      </section>
    </>
  )
}

export default Industries
