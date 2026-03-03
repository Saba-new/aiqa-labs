import React, { useState } from 'react'
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

  return (
    <>
      {/* ══════════ HERO - SPLIT LAYOUT ══════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '60px',
        padding: '120px 8% 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background effects */}
        <div className="hero-grid" style={{ opacity: 0.3 }} />
        <div className="aurora-orb aurora-orb-1" style={{ left: '10%', top: '20%' }} />
        <div className="aurora-orb aurora-orb-2" style={{ right: '15%', bottom: '30%' }} />

        {/* LEFT - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 2 }}
        >
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#AC6AFF',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ width: '30px', height: '2px', background: '#AC6AFF' }} />
            Digital Twin Technology
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#fff',
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            Transform Your Business with
            <span style={{
              display: 'block',
              background: 'linear-gradient(120deg, #AC6AFF 0%, #07B4EB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginTop: '8px'
            }}>
              Intelligent IoT Solutions
            </span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            marginBottom: '40px',
            maxWidth: '540px'
          }}>
            Harness the power of digital twins and IoT integration to optimize operations, 
            predict outcomes, and drive innovation across your entire organization.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="get-started-button" onClick={() => navigate('/contact')}>
              Start Your Journey
            </button>
            <button className="btn-neo" onClick={() => navigate('/platform')}>
              View Platform
            </button>
          </div>

          {/* Protocol badges - Horizontal row */}
          <div style={{ marginTop: '50px' }}>
            <div style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.12em',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              Supported Protocols
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: group1, label: 'BACnet/IP' },
                { icon: group2, label: 'Modbus' },
                { icon: group3, label: 'OPC UA' },
                { icon: group4, label: 'MQTT' },
              ].map((p) => (
                <div key={p.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.7)'
                }}>
                  <img src={p.icon} alt={p.label} style={{ width: '20px', height: '20px' }} />
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '1',
          }}>
            {/* Main visual */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, rgba(172, 106, 255, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'pulse 3s ease-in-out infinite'
            }} />
            <img src={star} alt="Digital Twin" style={{
              width: '70%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 40px rgba(139,92,246,0.7))',
              animation: 'float 6s ease-in-out infinite'
            }} />
            {/* Floating icons */}
            <motion.img
              src={group5}
              alt=""
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: '60px',
                filter: 'drop-shadow(0 0 20px rgba(7,180,235,0.6))'
              }}
            />
            <motion.img
              src={group6}
              alt=""
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '15%',
                left: '8%',
                width: '60px',
                filter: 'drop-shadow(0 0 20px rgba(16,185,129,0.6))'
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* ══════════ STATS BANNER ══════════ */}
      <section style={{
        padding: '0 8%',
        marginBottom: '80px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}>
          {[
            { value: '9+', label: 'Years Experience', desc: 'Driving tech innovation', color: '#AC6AFF' },
            { value: '10+', label: 'Industries Served', desc: 'Diverse sector expertise', color: '#07B4EB' },
            { value: '100%', label: 'Client Satisfaction', desc: 'Excellence in delivery', color: '#10B981' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: `3px solid ${stat.color}`,
                borderRadius: '12px',
                padding: '32px 28px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '100%',
                background: `linear-gradient(180deg, ${stat.color}08 0%, transparent 50%)`,
                pointerEvents: 'none'
              }} />
              <div style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: stat.color,
                marginBottom: '8px',
                position: 'relative'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '6px',
                position: 'relative'
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.5)',
                position: 'relative'
              }}>
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════ PLATFORM - VERTICAL STACK ══════════ */}
      <section style={{ padding: '80px 8%', background: 'rgba(255,255,255,0.01)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
            Our Platform
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            margin: '16px 0',
            letterSpacing: '-0.02em'
          }}>
            TwinV: All-in-One IoT & Digital Twin Platform
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.05rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: 1.7
          }}>
            Real-time insights, predictive analytics, and advanced simulations
            to optimize performance and drive innovation.
          </p>
          <button className="btn-neo" onClick={() => navigate('/platform')}>
            Explore Features
          </button>
        </motion.div>

        {/* Platform features - Vertical stacked cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            {
              num: '01',
              color: '#8B5CF6',
              title: 'Flexible Protocol Integration',
              desc: 'Connect any IoT device through BACnet/IP, Modbus TCP, OPC UA, MQTT without replacing existing infrastructure.',
              icons: [group1, group2, group3, group4, group5, group6],
              image: null
            },
            {
              num: '02',
              color: '#AC6AFF',
              title: 'AI-Powered Predictions',
              desc: 'Advanced machine learning models predict equipment failures before they happen, reducing downtime by up to 70%.',
              icons: null,
              image: star
            },
            {
              num: '03',
              color: '#07B4EB',
              title: 'Real-Time Insights Dashboard',
              desc: 'Live visibility into asset performance with actionable insights. Monitor, analyze, and optimize in real-time.',
              icons: null,
              image: graph
            },
            {
              num: '04',
              color: '#10B981',
              title: 'Sustainable Energy Optimization',
              desc: 'Reduce carbon footprint and optimize energy consumption with AI-driven sustainability insights.',
              icons:null,
              image: circleIcon
            },
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: `4px solid ${feat.color}`,
                borderRadius: '16px',
                padding: '32px',
                flexWrap: i % 2 === 1 ? 'wrap-reverse' : 'wrap'
              }}
            >
              {/* Number badge */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: `${feat.color}15`,
                border: `2px solid ${feat.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                fontWeight: 900,
                color: feat.color,
                flexShrink: 0
              }}>
                {feat.num}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {feat.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7
                }}>
                  {feat.desc}
                </p>
              </div>

              {/* Visual */}
              <div style={{
                width: '120px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {feat.icons ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {feat.icons.map((icon, idx) => (
                      <div key={idx} style={{
                        width: '32px',
                        height: '32px',
                        background: `${feat.color}10`,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <img src={icon} alt="" style={{ width: '20px', opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                ) : feat.image && (
                  <img src={feat.image} alt="" style={{
                    width: '100%',
                    filter: `drop-shadow(0 0 20px ${feat.color}60)`
                  }} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div style={{ padding: '40px 0', margin: '0' }}>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[
              'Digital Twin', 'IoT Integration', 'Real-Time Analytics', 'Predictive Maintenance',
              'OPC UA', 'BACnet/IP', 'Modbus TCP', 'MQTT', 'Edge Computing',
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

      {/* ══════════ SERVICES - 3 COLUMN GRID ══════════ */}
      <section style={{ padding: '80px 8%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
            Our Services
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            margin: '16px 0 20px',
            letterSpacing: '-0.02em'
          }}>
            Comprehensive IoT Solutions
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.05rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            End-to-end expertise combining hardware and software
            for every stage of your digital journey.
          </p>
        </motion.div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px'
        }}>
          {[
            {
              color: '#8B5CF6',
              title: 'Custom Software Development',
              desc: 'Tailored solutions built with domain expertise, technical excellence, and full compliance.',
              icon: icon1,
              tags: ['Full-Stack', 'Cloud Native', 'API Design']
            },
            {
              color: '#07B4EB',
              title: 'IT Consulting & Advisory',
              desc: 'Strategic assessment, architecture design, and optimization from concept to delivery.',
              icon: icon2,
              tags: ['Strategy', 'Architecture', 'Optimization']
            },
            {
              color: '#10B981',
              title: 'Digital Transformation',
              desc: 'Modernize systems, enhance security, automate processes, and reduce IT costs.',
              icon: icon3,
              tags: ['Modernization', 'Automation', 'Security']
            },
          ].map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, borderColor: svc.color }}
              onClick={() => navigate('/services')}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '36px 28px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top gradient bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${svc.color}, transparent)`
              }} />

              {/* Icon */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                background: `${svc.color}12`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <img src={svc.icon} alt="" style={{
                  width: '40px',
                  filter: `drop-shadow(0 0 10px ${svc.color}50)`
                }} />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '12px',
                letterSpacing: '-0.01em'
              }}>
                {svc.title}
              </h3>

              {/* Description */}
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                {svc.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {svc.tags.map((tag, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.7rem',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: `${svc.color}15`,
                    border: `1px solid ${svc.color}30`,
                    color: svc.color,
                    fontWeight: 600
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div style={{
                marginTop: '20px',
                color: svc.color,
                fontSize: '1.5rem',
                fontWeight: 700
              }}>
                →
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button className="btn-neo" onClick={() => navigate('/services')}>
            View All Services
          </button>
        </div>
      </section>

      <hr className="neon-divider" style={{ margin: '0 8%' }} />

      {/* ══════════ INDUSTRIES - TAB ACCORDION ══════════ */}
      <section style={{ padding: '80px 8%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
            Industries We Serve
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            margin: '16px 0 20px',
            letterSpacing: '-0.02em'
          }}>
            End-to-End IoT Expertise Across Sectors
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.05rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Deep domain knowledge and specialized hardware-software integration
            tailored for your industry.
          </p>
        </motion.div>

        {/* Industries tabs */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { id: 0, label: 'FinTech', color: '#AC6AFF' },
              { id: 1, label: 'Healthcare', color: '#10B981' },
              { id: 2, label: 'Real Estate', color: '#07B4EB' },
              { id: 3, label: 'Manufacturing', color: '#F59E0B' },
              { id: 4, label: 'Transport', color: '#8B5CF6' },
              { id: 5, label: 'Smart Home', color: '#10B981' },
              { id: 6, label: 'SaaS', color: '#8B5CF6' },
            ].map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '10px',
                  background: activeIndustry === ind.id ? `${ind.color}20` : 'rgba(255,255,255,0.04)',
                  border: activeIndustry === ind.id ? `2px solid ${ind.color}` : '1px solid rgba(255,255,255,0.1)',
                  color: activeIndustry === ind.id ? ind.color : 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {ind.label}
              </button>
            ))}
          </div>

          {/* Active industry content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '48px',
                minHeight: '300px'
              }}
            >
              {[
                {
                  title: 'FinTech Solutions',
                  desc: 'Custom financial software for digital payments, banking platforms, and secure transaction systems. Built with compliance-first architecture.',
                  tags: ['Digital Payments', 'Banking APIs', 'Blockchain', 'Security'],
                  color: '#AC6AFF'
                },
                {
                  title: 'Healthcare Technology',
                  desc: 'Comprehensive EHR, EMR, ERX, and telemedicine solutions. HIPAA-compliant systems that improve patient care and operational efficiency.',
                  tags: ['EHR/EMR', 'Telemedicine', 'Patient Portal', 'HIPAA Compliant'],
                  color: '#10B981'
                },
                {
                  title: 'PropTech & Real Estate',
                  desc: 'Modern real estate platforms with CRM integration, property management systems, and advanced analytics for better decision-making.',
                  tags: ['Property Management', 'CRM', 'Analytics', 'Marketplace'],
                  color: '#07B4EB'
                },
                {
                  title: 'Manufacturing & Industry 4.0',
                  desc: 'Optimize production with custom manufacturing software, IoT integration, and ERP systems for complete operational visibility.',
                  tags: ['Industry 4.0', 'IoT Integration', 'ERP', 'Quality Control'],
                  color: '#F59E0B'
                },
                {
                  title: 'Transport & Mobility',
                  desc: 'TMS, WMS, fleet management, and blockchain-based logistics solutions for modern transportation challenges.',
                  tags: ['TMS/WMS', 'Fleet Management', 'Blockchain', 'Route Optimization'],
                  color: '#8B5CF6'
                },
                {
                  title: 'Smart Home IoT',
                  desc: 'User-centered IoT software for smart home products, appliances, and connected devices with intuitive interfaces.',
                  tags: ['IoT Devices', 'Smart Appliances', 'Voice Control', 'Mobile Apps'],
                  color: '#10B981'
                },
                {
                  title: 'Software & SaaS',
                  desc: 'Build robust SaaS systems and product ecosystems of any complexity. Scalable, secure, and designed for growth.',
                  tags: ['Multi-tenant SaaS', 'API Platform', 'Microservices', 'DevOps'],
                  color: '#8B5CF6'
                },
              ][activeIndustry] && (
                <>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '16px',
                    letterSpacing: '-0.01em'
                  }}>
                    {[
                      { title: 'FinTech Solutions' },
                      { title: 'Healthcare Technology' },
                      { title: 'PropTech & Real Estate' },
                      { title: 'Manufacturing & Industry 4.0' },
                      { title: 'Transport & Mobility' },
                      { title: 'Smart Home IoT' },
                      { title: 'Software & SaaS' },
                    ][activeIndustry].title}
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.8,
                    marginBottom: '32px',
                    maxWidth: '800px'
                  }}>
                    {[
                      { desc: 'Custom financial software for digital payments, banking platforms, and secure transaction systems. Built with compliance-first architecture.' },
                      { desc: 'Comprehensive EHR, EMR, ERX, and telemedicine solutions. HIPAA-compliant systems that improve patient care and operational efficiency.' },
                      { desc: 'Modern real estate platforms with CRM integration, property management systems, and advanced analytics for better decision-making.' },
                      { desc: 'Optimize production with custom manufacturing software, IoT integration, and ERP systems for complete operational visibility.' },
                      { desc: 'TMS, WMS, fleet management, and blockchain-based logistics solutions for modern transportation challenges.' },
                      { desc: 'User-centered IoT software for smart home products, appliances, and connected devices with intuitive interfaces.' },
                      { desc: 'Build robust SaaS systems and product ecosystems of any complexity. Scalable, secure, and designed for growth.' },
                    ][activeIndustry].desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                    {[
                      { tags: ['Digital Payments', 'Banking APIs', 'Blockchain', 'Security'] },
                      { tags: ['EHR/EMR', 'Telemedicine', 'Patient Portal', 'HIPAA Compliant'] },
                      { tags: ['Property Management', 'CRM', 'Analytics', 'Marketplace'] },
                      { tags: ['Industry 4.0', 'IoT Integration', 'ERP', 'Quality Control'] },
                      { tags: ['TMS/WMS', 'Fleet Management', 'Blockchain', 'Route Optimization'] },
                      { tags: ['IoT Devices', 'Smart Appliances', 'Voice Control', 'Mobile Apps'] },
                      { tags: ['Multi-tenant SaaS', 'API Platform', 'Microservices', 'DevOps'] },
                    ][activeIndustry].tags.map((tag, idx) => (
                      <span key={idx} style={{
                        padding: '8px 18px',
                        borderRadius: '8px',
                        background: `${[
                          { color: '#AC6AFF' },
                          { color: '#10B981' },
                          { color: '#07B4EB' },
                          { color: '#F59E0B' },
                          { color: '#8B5CF6' },
                          { color: '#10B981' },
                          { color: '#8B5CF6' },
                        ][activeIndustry].color}15`,
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
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="btn-neo" onClick={() => navigate('/industries')}>
                    Learn More
                  </button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS - GRID VIEW ══════════ */}
      <section style={{ padding: '80px 8%', background: 'rgba(255,255,255,0.01)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
            Client Testimonials
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            margin: '16px 0',
            letterSpacing: '-0.02em'
          }}>
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {[
            {
              quote: "AIQA transformed our operations with innovative IoT solutions. Their platform is intuitive, efficient, and significantly boosted our productivity.",
              name: 'Jane Doe',
              title: 'CEO, Tech Innovations',
              avatar: profile1,
              color: '#AC6AFF'
            },
            {
              quote: "The team delivered beyond expectations. Their digital twin technology provided crucial real-time insights for our decision-making process.",
              name: 'John Smith',
              title: 'CTO, Global Enterprises',
              avatar: profile2,
              color: '#10B981'
            },
            {
              quote: "Working with AIQA was a game-changer. Their consulting services helped us streamline processes and achieve remarkable growth.",
              name: 'Emily White',
              title: 'Director, Future Systems',
              avatar: profile3,
              color: '#07B4EB'
            },
          ].map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Color accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: '50%',
                height: '2px',
                background: `linear-gradient(90deg, ${test.color}, transparent)`
              }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={test.color}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                marginBottom: '24px',
                minHeight: '100px'
              }}>
                "{test.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <img src={test.avatar} alt={test.name} style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: `2px solid ${test.color}40`,
                  objectFit: 'cover'
                }} />
                <div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '4px'
                  }}>
                    {test.name}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)'
                  }}>
                    {test.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════ FAQ - SIMPLE LIST ══════════ */}
      <section style={{ padding: '80px 8% 100px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
            FAQ
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            margin: '16px 0 20px',
            letterSpacing: '-0.02em'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.05rem',
            maxWidth: '600px',
            margin: '0 auto 30px',
            lineHeight: 1.7
          }}>
            Have questions? We've got answers.
          </p>
          <button className="btn-neo" onClick={() => navigate('/contact')}>
            Ask Us Directly
          </button>
        </motion.div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {[
            {
              q: 'What industries does AIQA Labs specialize in?',
              a: 'We work across FinTech, Healthcare, Real Estate, Transport & Mobility, Manufacturing, Smart Home, and Software/SaaS with dedicated domain expertise in each vertical.',
            },
            {
              q: 'How is AIQA different from a standard software agency?',
              a: 'We start with strategy, not just execution. Our process begins with understanding your operational problem, then designing the right architecture for outcomes, not just deliverables.',
            },
            {
              q: 'Can AIQA handle both hardware integration and software development?',
              a: 'Yes. We bridge embedded firmware, edge devices, IoT protocols (MQTT, CoAP, OPC-UA), and cloud backends into unified products without managing separate vendors.',
            },
            {
              q: 'What does the engagement process look like?',
              a: 'We start with a no-cost discovery call, move into scoping with architecture recommendations, then phased delivery with weekly demos and dedicated point of contact.',
            },
            {
              q: 'Do you offer post-launch support?',
              a: 'Absolutely. We offer tiered SLA-based support, proactive monitoring, feature iteration, and on-call engineering. We're long-term technology partners.',
            },
            {
              q: 'What is the typical timeline for a project?',
              a: 'A well-scoped mid-scale product typically ships in 10–14 weeks using agile sprints with fortnightly reviews for full visibility.',
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 8px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: 16,
          textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: open ? '#fff' : 'rgba(255,255,255,0.7)',
          lineHeight: 1.5,
          transition: 'color 0.25s'
        }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            fontSize: '1.5rem',
            color: open ? '#AC6AFF' : 'rgba(255,255,255,0.3)',
            flexShrink: 0,
            lineHeight: 1,
            fontWeight: 300
          }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="ans"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              padding: '0 8px 24px',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              maxWidth: '700px'
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Home
