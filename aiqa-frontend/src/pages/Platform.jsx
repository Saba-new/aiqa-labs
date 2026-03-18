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

const accentPalette = ['#FB923C','#F472B6','#818CF8','#34D399','#22D3EE','#FBBF24']

const Platform = () => {
  const navigate = useNavigate()
  const features = [
    { icon:group1, title:'Real-time Data Acquisition', description:'Connect, capture, and stream performance data from distributed systems in real-time, ensuring secure and effortless data flow.' },
    { icon:group2, title:'Universal Compatibility', description:'Facilitate seamless integration with protocols like BACnet/IP, Modbus TCP, OPC UA, RDM, and Tridium Niagara.' },
    { icon:group3, title:'Resilient Connectivity', description:'Maintain uninterrupted operations even in low-connectivity environments, with automatic data synchronization.' },
    { icon:group4, title:'Bi-Directional Control', description:'Easily execute commands, adjust parameters, and manage system functions remotely with reliable cloud-based communication.' },
    { icon:group5, title:'Data-Driven Decisions', description:'Consolidate scattered data into a unified platform for advanced analytics, visualizations, and ML-powered insights.' },
    { icon:group6, title:'Reliable and Efficient', description:'Discover and securely connect controllers and endpoints with blazing-fast, uninterrupted communication.' },
  ]

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="platform-hero" style={{ padding:'140px 10% 80px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6 }} style={{ position:'relative', zIndex:1 }}>
          <span className="cyber-tag" style={{ marginBottom:24, display:'inline-block' }}>Integrate with Existing Tools</span>
          <h1 className="hero-title" style={{ fontSize:'clamp(2.2rem,5vw,4rem)', fontWeight:800, color:'#FFF7ED', lineHeight:1.12, letterSpacing:'-0.025em', margin:'20px auto 22px', maxWidth:780, fontFamily:"'Space Grotesk',sans-serif" }}>
            Combine. Connect.{' '}
            <span style={{ background:'linear-gradient(135deg,#FB923C 0%,#F472B6 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Contribute.</span>
          </h1>
          <p className="hero-desc" style={{ color:'rgba(255,225,190,0.5)', maxWidth:600, margin:'0 auto 36px', lineHeight:1.72, fontSize:'1.02rem' }}>
            Seamlessly integrate your existing platform with ours to unlock limitless possibilities. Connect IoT devices, organize data efficiently, and gain actionable insights.
          </p>
          <button className="get-started-button" onClick={() => navigate('/contact')}>Try TwinV</button>
          <img src={starBg} alt="" className="hero-img" style={{ width:'60%', maxWidth:460, margin:'28px auto 0', opacity:0.35, display:'block', filter:'hue-rotate(330deg) saturate(0.6)' }} />
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── WHAT MAKES TWINV EXCEPTIONAL ─────────────── */}
      <section style={{ padding:'90px 10%' }}>
        <div style={{ display:'flex', gap:56, flexWrap:'wrap', alignItems:'center' }}>
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1 ,x:0 }} viewport={{ once:true }} style={{ flex:'1 1 320px' }}>
            <div className="section-label">Our Platform</div>
            <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 20px', letterSpacing:'-0.025em', lineHeight:1.22, fontFamily:"'Space Grotesk',sans-serif" }}>What Makes TwinV Exceptional?</h2>
            <p style={{ color:'rgba(255,225,190,0.48)', lineHeight:1.8, fontSize:'0.97rem' }}>
              Our platform seamlessly integrates with any protocol, connecting diverse assets and systems to fit your unique technology stack. Powered by advanced AI, it analyzes real-time data to uncover patterns, optimize operations, and enable proactive, data-driven decisions.
            </p>
          </motion.div>
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} style={{ flex:'1 1 280px', display:'flex', justifyContent:'flex-end' }}>
            <img src={groupLogo} alt="TwinV Platform" style={{ width:'100%', maxWidth:400, opacity:0.75 }} />
          </motion.div>
        </div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── FEATURES — new: MOSAIC METRIC TILES ─────────── */}
      {/* Each tile: centered icon circle on top, large glowing number center, title + desc below */}
      <section style={{ padding:'90px 10%' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ textAlign:'center', marginBottom:56 }}>
          <div className="section-label" style={{ justifyContent:'center' }}>We believe</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 0', letterSpacing:'-0.025em', fontFamily:"'Space Grotesk',sans-serif" }}>
            IoT Intelligence that seamlessly fits into your existing stack
          </h2>
        </motion.div>

        <div className="platform-feature-grid" style={{ display:'grid', gap:14 }}>
          {features.map((feature, i) => {
            const ac = accentPalette[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity:0, scale:0.96 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.07 }}
                style={{
                  position:'relative', borderRadius:20, overflow:'hidden',
                  background:'rgba(18,15,24,0.8)', border:`1px solid rgba(255,255,255,0.06)`,
                  padding:'36px 24px 28px', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center',
                  transition:'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${ac}28`; e.currentTarget.style.transform = 'scale(1.02)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                {/* background glow */}
                <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% 0%, ${ac}0D 0%, transparent 65%)`, pointerEvents:'none' }} />

                {/* icon ring */}
                <div style={{ width:60, height:60, borderRadius:'50%', background:`${ac}12`, border:`1.5px solid ${ac}30`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16, position:'relative', zIndex:1 }}>
                  <img src={feature.icon} alt="" style={{ width:28, height:28, objectFit:'contain', opacity:0.85 }} />
                </div>

                {/* metric number */}
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'2.2rem', fontWeight:900, color:`${ac}20`, lineHeight:1, marginBottom:10, position:'relative', zIndex:1, letterSpacing:'-0.04em' }}>
                  {String(i+1).padStart(2,'0')}
                </div>

                <h3 style={{ fontSize:'0.95rem', fontWeight:700, color:'#FFF7ED', marginBottom:10, lineHeight:1.3, position:'relative', zIndex:1 }}>{feature.title}</h3>
                <p style={{ color:'rgba(255,225,190,0.4)', lineHeight:1.65, fontSize:'0.83rem', position:'relative', zIndex:1 }}>{feature.description}</p>

                {/* bottom accent bar */}
                <div style={{ position:'absolute', bottom:0, left:'20%', right:'20%', height:2, background:`linear-gradient(90deg,transparent,${ac}50,transparent)` }} />
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <div style={{ padding:'0 10%', marginBottom:0 }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
          style={{ position:'relative', overflow:'hidden', background:'linear-gradient(135deg,rgba(18,10,8,0.95) 0%,rgba(22,10,20,0.95) 100%)', border:'1px solid rgba(251,146,60,0.18)', borderRadius:20, padding:'52px 56px', display:'flex', gap:48, flexWrap:'wrap' }}
        >
          <div style={{ position:'absolute', top:0, left:'20%', right:'20%', height:1, background:'linear-gradient(90deg,transparent,rgba(251,146,60,0.45),rgba(244,114,182,0.3),transparent)' }} />
          <div style={{ position:'absolute', top:-60, right:60, width:280, height:280, borderRadius:'50%', background:'radial-gradient(circle,rgba(251,146,60,0.1) 0%,transparent 70%)', pointerEvents:'none' }} />
          <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} style={{ flex:1, fontSize:'clamp(1.3rem,2.5vw,1.85rem)', fontWeight:700, color:'#FFF7ED', lineHeight:1.35, minWidth:260, fontFamily:"'Space Grotesk',sans-serif", position:'relative', zIndex:1 }}>
            All the ways TwinV transforms your IoT data into actionable insights.
          </motion.div>
          <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} style={{ flex:1, color:'rgba(255,225,190,0.5)', lineHeight:1.8, fontSize:'0.95rem', minWidth:260, position:'relative', zIndex:1 }}>
            We don't disrupt your systems — we connect them. TwinV seamlessly connects with your IoT devices, sensory platforms, and business applications, transforming them into a unified, data-driven ecosystem.
          </motion.div>
        </motion.div>
      </div>

      <hr className="neon-divider" style={{ margin:'48px 10% 0' }} />

      {/* ── TWINV IN ACTION — new: color-blocked full-width rows ─── */}
      <section style={{ padding:'90px 10% 110px' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ maxWidth:700, marginBottom:56 }}>
          <div className="section-label">TwinV in Action</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 20px', letterSpacing:'-0.025em', lineHeight:1.22, fontFamily:"'Space Grotesk',sans-serif" }}>
            TwinV Addresses the 3 Core Challenges of IoT Integration.
          </h2>
          <p style={{ color:'rgba(255,225,190,0.48)', lineHeight:1.8, fontSize:'0.97rem' }}>
            TwinV simplifies IoT integrations by partnering with top OEMs and hardware manufacturers, reducing capital expenditure. Its cloud-based commissioning setup streamlines the process, cutting time from months to just 3 days.
          </p>
        </motion.div>

        <div className="platform-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {[
            { num: '01', color: '#FB923C', title: 'Integrations', desc: 'TwinV allows seamless integration with both your existing systems and external platforms, providing out-of-the-box solutions that reduce capital expenditure and simplify IoT project implementation.', img: contentImg },
            { num: '02', color: '#F472B6', title: 'Commissioning', desc: "What typically takes months is simplified with our platform's cloud-based setup, enabling seamless commissioning in just a few days.", img: timerLogo },
            { num: '03', color: '#818CF8', title: 'O&M Applications', desc: "Enhance agility and decision-making in operations and maintenance with real-time insights through our platform's comprehensive suite of tools.", img: graphLogo },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(18, 15, 24, 0.8)',
                border: `1px solid ${card.color}1A`,
                borderRadius: '24px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${card.color}40`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${card.color}1A`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ 
                width: '100%', 
                height: '200px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: `linear-gradient(135deg, ${card.color}10, transparent)`,
                borderRadius: '16px',
                marginBottom: '24px'
              }}>
                <img src={card.img} alt={card.title} style={{ width: '200px', height: '150px', objectFit: 'contain', opacity: 0.95 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', fontWeight: 700, color: `${card.color}80`, letterSpacing: '0.14em' }}>{card.num}</span>
                <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${card.color}40, transparent)` }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF7ED', marginBottom: '12px', letterSpacing: '-0.01em', fontFamily: "'Space Grotesk', sans-serif" }}>{card.title}</h3>
              <p style={{ color: 'rgba(255, 225, 190, 0.45)', lineHeight: 1.7, fontSize: '0.92rem', flexGrow: 1 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
  </section>
    </>
  )
}

export default Platform
