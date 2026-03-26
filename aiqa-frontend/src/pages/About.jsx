import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const beliefs = [
  { label:'Simple', color:'#06B6D4', headline:'The most impactful solutions are often the simplest.', body:'In a world filled with complexity, the clarity and efficiency of our platform set us apart. We build tools that feel right, not just functional.' },
  { label:'Empowering', color:'#D946EF', headline:'Those closest to a challenge are best equipped to solve it.', body:'Our platform empowers teams worldwide to build what they need, without hoops to jump through. Control in the right hands makes all the difference.' },
  { label:'Connected', color:'#8B5CF6', headline:'Businesses are revolutionizing their operations worldwide.', body:'With our innovative IoT and digital solutions — all unified on a single platform — your entire operation speaks one language.' },
]

const timeline = [
  { year:'Founded', color:'#06B6D4', title:'The Gap Identified', body:"After years of working in IoT and software development, the founders of AIQA realized there was a significant gap — many companies were still using fragmented, outdated systems to manage their IoT devices." },
  { year:'Vision',  color:'#D946EF', title:'Cloud-First Platform', body:"What the industry needed was an all-in-one, cloud-based platform that could centralize, optimize, and transform the way IoT systems are managed." },
  { year:'Today',   color:'#8B5CF6', title:'Industry Leader',    body:"AIQA has emerged as a leader in the IoT space, empowering companies to innovate, automate, and optimize their operations. Trusted by a range of industries worldwide." },
]

const About = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* ── HERO (SPLIT) ─────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-3" />
        <div className="container split-hero" style={{ position:'relative', zIndex:1 }}>
          <motion.div initial={{ opacity:0,x:-30 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.6 }} className="split-hero-content" style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ marginBottom:20, display:'inline-block' }}>About AIQA Labs</span>
            <h1 className="hero-title heading-xl" style={{ margin:'0 auto 24px' }}>
              Pioneering the Future of <span className="gradient-text">Innovation.</span>
            </h1>
            <p className="hero-desc text-body" style={{ maxWidth:640, margin: '0 auto' }}>
              We are a team of dedicated experts committed to delivering exceptional value through cutting-edge technology and strategic excellence.
            </p>
            <div style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center' }}>
              <button className="btn-primary btn-pill-lg" onClick={() => navigate('/contact')}>Reach Out</button>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ── WE BELIEVE (BENTO GRID) ── */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:64 }}>
            <div className="section-label">We believe</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 0' }}>
              The Power of Simple.
            </h2>
          </motion.div>

          <div className="bento-grid">
            {beliefs.map((b, i) => {
              let layoutClass = "bento-item glass-card";
              if (i === 0) layoutClass += " bento-tall";
              if (i === 2) layoutClass += " bento-wide";

              return (
                <motion.div key={i} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.1 }}
                  className={layoutClass} style={{ padding:'40px', borderColor: `${b.color}20` }}
                >
                  <div style={{ position:'absolute', inset:0, background:`radial-gradient(circle at 100% 100%, ${b.color}15 0%, transparent 60%)`, pointerEvents:'none' }} />
                  
                  <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:`${b.color}15`, border:`1px solid ${b.color}30`, borderRadius:100, padding:'6px 16px', marginBottom:32 }}>
                    <span style={{ width:6, height:6, borderRadius:'50%', background:b.color, boxShadow: `0 0 10px ${b.color}` }} />
                    <span style={{ fontSize:'0.75rem', fontWeight:800, color:b.color, letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:"'Space Grotesk',sans-serif" }}>{b.label}</span>
                  </div>

                  <h3 className="heading-md" style={{ fontSize:'1.6rem', marginBottom:16 }}>{b.headline}</h3>
                  <div style={{ width:40, height:2, background:`${b.color}50`, borderRadius:2, marginBottom:20 }} />
                  <p className="text-body" style={{ flexGrow: 1 }}>{b.body}</p>
                  
                  <div style={{ position: 'absolute', bottom: -20, right: 10, fontSize: '8rem', fontFamily: 'Georgia, serif', color: `${b.color}10`, lineHeight: 1 }}>"</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── OUR STORY (ZIG-ZAG TIMELINE) ── */}
      <section className="section" style={{ background: 'rgba(10,6,18,0.5)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:80, maxWidth: 800 }}>
            <div className="section-label">Our Story</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 0' }}>
              Building the future of software solutions. <br/>And it's <span style={{ color: '#06B6D4' }}>connected</span>.
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {timeline.map((entry, i) => (
              <div key={i} className="zigzag-row" style={{ alignItems: 'center' }}>
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:`${entry.color}10`, border:`1px solid ${entry.color}30`, borderRadius:100, padding:'6px 16px', marginBottom:24 }}>
                    <span style={{ fontSize:'0.75rem', fontWeight:800, color:entry.color, letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:"'Space Grotesk',sans-serif" }}>{entry.year}</span>
                  </div>
                  <h3 className="heading-md" style={{ fontSize: '2rem', marginBottom: '20px' }}>{entry.title}</h3>
                  <p className="text-body" style={{ fontSize: '1.1rem' }}>{entry.body}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card" style={{ padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: `${entry.color}30`, background: `radial-gradient(circle at center, ${entry.color}15 0%, rgba(10,5,20,0.8) 100%)` }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '8rem', fontWeight: 900, color: `${entry.color}30`, lineHeight: 1 }}>{String(i+1).padStart(2,'0')}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
