import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import starBg from '../assets/starBg.png'
import contentImg from '../assets/content.png'
import graphLogo from '../assets/graph.png'
import icon1 from '../assets/Group1.png'
import icon2 from '../assets/Group2.png'
import icon3 from '../assets/Group3.png'
import icon4 from '../assets/Group4.png'
import icon5 from '../assets/Group5.png'
import icon6 from '../assets/Group6.png'
import groupLogo from '../assets/GroupLogo.png'
import timerLogo from '../assets/timerLogo.png'

const accentPalette = ['#06B6D4','#D946EF','#8B5CF6','#10B981','#0EA5E9','#D946EF']

const Platform = () => {
  const navigate = useNavigate()
  const features = [
    { icon:icon1, title:'Real-time Data Acquisition', description:'Connect, capture, and stream performance data from distributed systems in real-time, ensuring secure and effortless data flow.' },
    { icon:icon2, title:'Universal Compatibility', description:'Facilitate seamless integration with protocols like BACnet/IP, Modbus TCP, OPC UA, RDM, and Tridium Niagara.' },
    { icon:icon3, title:'Resilient Connectivity', description:'Maintain uninterrupted operations even in low-connectivity environments, with automatic data synchronization.' },
    { icon:icon4, title:'Bi-Directional Control', description:'Easily execute commands, adjust parameters, and manage system functions remotely with reliable cloud-based communication.' },
    { icon:icon5, title:'Data-Driven Decisions', description:'Consolidate scattered data into a unified platform for advanced analytics, visualizations, and ML-powered insights.' },
    { icon:icon6, title:'Reliable and Efficient', description:'Discover and securely connect controllers and endpoints with blazing-fast, uninterrupted communication.' },
  ]

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-3" />
        <div className="container split-hero" style={{ position:'relative', zIndex:1 }}>
          <motion.div initial={{ opacity:0,x:-30 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.6 }} className="split-hero-content">
            <span className="section-label" style={{ marginBottom:20 }}>Integrate with Existing Tools</span>
            <h1 className="hero-title heading-xl" style={{ margin:'0 0 24px', maxWidth:780 }}>
              Combine. Connect.<br/>
              <span className="gradient-text">Contribute.</span>
            </h1>
            <p className="hero-desc text-body" style={{ maxWidth:540, marginBottom:'40px' }}>
              Seamlessly integrate your existing platform with ours to unlock limitless possibilities. Connect IoT devices, organize data efficiently, and gain actionable insights.
            </p>
            <button className="btn btn-primary btn-pill-lg" onClick={() => navigate('/contact')}>Try TwinV</button>
          </motion.div>

          <motion.div initial={{ opacity:0,scale:0.95 }} animate={{ opacity:1,scale:1 }} transition={{ duration:0.6, delay:0.2 }} className="split-hero-visual" style={{ alignItems: 'center', justifyContent: 'center', padding: '60px', borderRadius: '50%' }}>
            <img src={starBg} alt="" style={{ width:'80%', maxWidth:400, opacity:0.8, filter:'drop-shadow(0 0 40px rgba(6,182,212,0.4))' }} />
          </motion.div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ── EXCEPTIONAL (SPLIT) ─────────────── */}
      <section className="section">
        <div className="container split-hero" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} className="split-hero-visual" style={{ background: 'transparent', border: 'none' }}>
            <img src={groupLogo} alt="TwinV Platform" style={{ width:'100%', maxWidth:500, opacity:0.9, filter: 'drop-shadow(0 0 30px rgba(217,70,239,0.3))' }} />
          </motion.div>
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1 ,x:0 }} viewport={{ once:true }} className="split-hero-content">
            <div className="section-label">Our Platform</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 24px' }}>What Makes TwinV Exceptional?</h2>
            <p className="text-body">
              Our platform seamlessly integrates with any protocol, connecting diverse assets and systems to fit your unique technology stack. Powered by advanced AI, it analyzes real-time data to uncover patterns, optimize operations, and enable proactive, data-driven decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES (MASONRY GRID) ─────────── */}
      <section className="section" style={{ background: 'rgba(10,6,18,0.5)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:64, maxWidth:800 }}>
            <div className="section-label">We believe</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 0' }}>
              IoT Intelligence that seamlessly fits into your existing stack
            </h2>
          </motion.div>

          <div className="masonry-grid">
            {features.map((feature, i) => {
              const ac = accentPalette[i]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay: (i%3)*0.1 }}
                  className="masonry-item glass-card"
                  style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', padding: '40px 32px' }}
                >
                  <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 100% 0%, ${ac}15 0%, transparent 70%)`, pointerEvents:'none' }} />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 32 }}>
                    <div style={{ width:56, height:56, borderRadius:16, background:`${ac}15`, border:`1px solid ${ac}30`, display:'flex', alignItems:'center', justifyContent:'center', zIndex:1 }}>
                      <img src={feature.icon} alt="" style={{ width:28, height:28, objectFit:'contain', opacity:0.9 }} />
                    </div>
                    <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'3rem', fontWeight:900, color:`${ac}15`, lineHeight:0.8, zIndex:1 }}>
                      {String(i+1).padStart(2,'0')}
                    </div>
                  </div>
                  <h3 className="heading-md" style={{ fontSize:'1.4rem', marginBottom:12, zIndex:1 }}>{feature.title}</h3>
                  <p className="text-body" style={{ fontSize:'0.95rem', zIndex:1 }}>{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TWINV IN ACTION (ZIG-ZAG) ─── */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ maxWidth:700, marginBottom:80 }}>
            <div className="section-label">TwinV in Action</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 20px' }}>
              Solving the 3 Core Challenges of IoT Integration.
            </h2>
            <p className="text-body">
              TwinV simplifies IoT integrations by partnering with top OEMs and hardware manufacturers, reducing capital expenditure. Its cloud-based commissioning setup streamlines the process, cutting time from months to just 3 days.
            </p>
          </motion.div>

          {[
            { num: '01', color: '#06B6D4', title: 'Integrations', desc: 'TwinV allows seamless integration with both your existing systems and external platforms, providing out-of-the-box solutions that reduce capital expenditure and simplify IoT project implementation.', img: contentImg },
            { num: '02', color: '#D946EF', title: 'Commissioning', desc: "What typically takes months is simplified with our platform's cloud-based setup, enabling seamless commissioning in just a few days.", img: timerLogo },
            { num: '03', color: '#8B5CF6', title: 'O&M Applications', desc: "Enhance agility and decision-making in operations and maintenance with real-time insights through our platform's comprehensive suite of tools.", img: graphLogo },
          ].map((card, i) => (
            <div key={i} className="zigzag-row">
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="section-label" style={{ color: card.color }}>Challenge {card.num}</span>
                <h3 className="heading-md" style={{ fontSize: '2rem', margin: '16px 0 20px' }}>{card.title}</h3>
                <p className="text-body" style={{ fontSize: '1.1rem' }}>{card.desc}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card" style={{ padding: 0, overflow: 'hidden', border: `1px solid ${card.color}30` }}>
                <div style={{ width: '100%', padding: '60px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `radial-gradient(circle at center, ${card.color}15 0%, rgba(10,5,20,0.8) 100%)` }}>
                  <img src={card.img} alt={card.title} style={{ width: '60%', maxWidth: '280px', objectFit: 'contain', filter: `drop-shadow(0 0 30px ${card.color}40)` }} />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Platform
