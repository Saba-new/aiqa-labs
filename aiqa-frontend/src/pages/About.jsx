import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import starBg from '../assets/starBg.png'

const beliefs = [
  { label:'Simple', color:'#FB923C', headline:'The most impactful solutions are often the simplest.', body:'In a world filled with complexity, the clarity and efficiency of our platform set us apart. We build tools that feel right, not just functional.' },
  { label:'Empowering', color:'#F472B6', headline:'Those closest to a challenge are best equipped to solve it.', body:'Our platform empowers teams worldwide to build what they need, without hoops to jump through. Control in the right hands makes all the difference.' },
  { label:'Connected', color:'#818CF8', headline:'Businesses are revolutionizing their operations worldwide.', body:'With our innovative IoT and digital solutions — all unified on a single platform — your entire operation speaks one language.' },
]

const timeline = [
  { year:'Founded', color:'#FB923C', title:'The Gap Identified', body:"After years of working in IoT and software development, the founders of AIQA realized there was a significant gap — many companies were still using fragmented, outdated systems to manage their IoT devices." },
  { year:'Vision',  color:'#F472B6', title:'Cloud-First Platform', body:"What the industry needed was an all-in-one, cloud-based platform that could centralize, optimize, and transform the way IoT systems are managed." },
  { year:'Today',   color:'#818CF8', title:'Industry Leader',    body:"AIQA has emerged as a leader in the IoT space, empowering companies to innovate, automate, and optimize their operations. Trusted by a range of industries worldwide." },
]

const About = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="about-hero" style={{ padding:'140px 10% 80px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6 }} style={{ position:'relative', zIndex:1 }}>
          <span className="cyber-tag" style={{ marginBottom:24, display:'inline-block' }}>About AIQA Labs</span>
          <h1 className="hero-title" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:800, color:'#FFF7ED', lineHeight:1.1, letterSpacing:'-0.03em', margin:'20px auto 24px', maxWidth:840, fontFamily:"'Space Grotesk',sans-serif" }}>
            Pioneering the Future of{' '}
            <span style={{ background:'linear-gradient(135deg,#FB923C 0%,#F472B6 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Innovation.</span>
          </h1>
          <p className="hero-desc" style={{ color:'rgba(255,225,190,0.5)', maxWidth:640, margin:'0 auto 40px', lineHeight:1.75, fontSize:'1.1rem' }}>
            We are a team of dedicated experts committed to delivering exceptional value through cutting-edge technology and strategic excellence.
          </p>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── WE BELIEVE — new: VERTICAL PILLAR CARDS (narrow, tall, centered) ── */}
      <section style={{ padding:'90px 10%' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          <div className="section-label">We believe</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 0', letterSpacing:'-0.025em', fontFamily:"'Space Grotesk',sans-serif" }}>
            The Power of Simple..
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 }}>
          {beliefs.map((b, i) => (
            <motion.div key={i} initial={{ opacity:0,y:28 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.55,delay:i*0.1 }}
              style={{ position:'relative', background:'rgba(18,15,24,0.8)', border:`1px solid ${b.color}15`, borderRadius:20, padding:'40px 28px 32px', textAlign:'center', overflow:'hidden', transition:'border-color 0.25s,transform 0.25s', display:'flex', flexDirection:'column', alignItems:'center' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${b.color}35`; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${b.color}15`; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* top glow cap */}
              <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:2, background:`linear-gradient(90deg,transparent,${b.color}60,transparent)` }} />

              {/* large quote mark */}
              <div style={{ fontFamily:'Georgia,Times,serif', fontSize:'4.5rem', lineHeight:1, color:`${b.color}15`, userSelect:'none', marginBottom:4, marginTop:-8 }}>"</div>

              {/* label badge */}
              <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:`${b.color}12`, border:`1.5px solid ${b.color}30`, borderRadius:100, padding:'5px 16px', marginBottom:24 }}>
                <span style={{ width:5,height:5,borderRadius:'50%',background:b.color }} />
                <span style={{ fontSize:'0.68rem', fontWeight:700, color:b.color, letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:"'Space Grotesk',sans-serif" }}>{b.label}</span>
              </div>

              <h3 style={{ fontSize:'1.05rem', fontWeight:700, color:'#FFF7ED', lineHeight:1.35, marginBottom:16, letterSpacing:'-0.01em' }}>{b.headline}</h3>
              <div style={{ width:28, height:1.5, background:`${b.color}40`, borderRadius:1, marginBottom:16 }} />
              <p style={{ color:'rgba(255,225,190,0.4)', lineHeight:1.72, fontSize:'0.87rem' }}>{b.body}</p>

              {/* bottom glow pool */}
              <div style={{ position:'absolute', bottom:-30, left:'50%', transform:'translateX(-50%)', width:140, height:80, borderRadius:'50%', background:`radial-gradient(ellipse,${b.color}12 0%,transparent 70%)`, pointerEvents:'none' }} />
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section style={{ padding:'60px 10%' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
          style={{ position:'relative', overflow:'hidden', background:'linear-gradient(135deg,rgba(18,10,8,0.97),rgba(24,8,18,0.97))', border:'1px solid rgba(251,146,60,0.18)', borderRadius:20, padding:'44px 52px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:28 }}
        >
          <div style={{ position:'absolute', top:0, left:'20%', right:'20%', height:1, background:'linear-gradient(90deg,transparent,rgba(251,146,60,0.5),rgba(244,114,182,0.3),transparent)' }} />
          <div style={{ position:'absolute', top:-80, right:-40, width:240, height:240, borderRadius:'50%', background:'radial-gradient(circle,rgba(251,146,60,0.1) 0%,transparent 70%)', pointerEvents:'none' }} />
          <div>
            <h3 style={{ fontSize:'1.4rem', fontWeight:700, color:'#FFF7ED', marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>Ready to revolutionize your world with IoT?</h3>
            <p style={{ color:'rgba(255,225,190,0.38)', fontSize:'0.95rem' }}>Let's make it legendary!</p>
          </div>
          <button className="get-started-button" style={{ whiteSpace:'nowrap' }} onClick={() => navigate('/contact')}>Get Started</button>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── OUR STORY — new: HORIZONTAL MAGAZINE STEPS ── */}
      <section style={{ padding:'90px 10% 110px' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:56 }}>
          <div className="section-label">Our Story</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 0', letterSpacing:'-0.025em', fontFamily:"'Space Grotesk',sans-serif" }}>
            We are building the future of IoT solutions. And it's{' '}
            <span style={{ background:'linear-gradient(90deg,#FB923C,#F472B6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>connected</span>.
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:0, border:'1px solid rgba(255,255,255,0.06)', borderRadius:20, overflow:'hidden' }}>
          {timeline.map((entry, i, arr) => (
            <motion.div key={i} initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.55,delay:i*0.12 }}
              style={{ padding:'40px 32px', borderRight: i < arr.length-1 ? '1px solid rgba(255,255,255,0.06)' : 'none', position:'relative', background:'rgba(18,15,24,0.5)', transition:'background 0.25s' }}
              onMouseEnter={e => e.currentTarget.style.background = `${entry.color}06`}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(18,15,24,0.5)'}
            >
              {/* top line accent */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${entry.color}70,transparent)` }} />

              {/* year badge */}
              <div style={{ display:'inline-flex', alignItems:'center', gap:5, background:`${entry.color}10`, border:`1px solid ${entry.color}25`, borderRadius:100, padding:'4px 12px', marginBottom:20 }}>
                <span style={{ width:5,height:5,borderRadius:'50%',background:entry.color,boxShadow:`0 0 6px ${entry.color}` }} />
                <span style={{ fontSize:'0.65rem', fontWeight:700, color:entry.color, letterSpacing:'0.12em', textTransform:'uppercase', fontFamily:"'Space Grotesk',sans-serif" }}>{entry.year}</span>
              </div>

              {/* step number watermark */}
              <div style={{ position:'absolute', bottom:-8, right:20, fontFamily:"'Space Grotesk',sans-serif", fontSize:'5rem', fontWeight:900, color:`${entry.color}08`, lineHeight:1, userSelect:'none', pointerEvents:'none' }}>{String(i+1).padStart(2,'0')}</div>

              <h3 style={{ fontSize:'1.1rem', fontWeight:700, color:'#FFF7ED', marginBottom:14, letterSpacing:'-0.01em' }}>{entry.title}</h3>
              <p style={{ color:'rgba(255,225,190,0.42)', lineHeight:1.78, fontSize:'0.9rem' }}>{entry.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
