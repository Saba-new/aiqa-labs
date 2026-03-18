import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const models = [
  { title:'Time and Materials', points:['Flexibility to adapt to changing requirements','Transparent billing based on hours worked','Ideal for long-term or evolving projects','Regular progress updates and reporting','Scales up or down based on needs'] },
  { title:'Fixed Price',         points:['Set budget with no hidden costs','Defined project scope and deliverables','Clear timelines and milestones','Ideal for projects with clear requirements','Regular updates with strict adherence to plan'] },
  { title:'Managed Team',        points:['AIQA manages the team and operations','Reduced overhead and HR costs','Access to top talent and expertise','Flexibility to scale with business growth','Outsource recruitment and management'] },
  { title:'Managed Product & Service', points:['End-to-end development and management','Continuous deployment and improvement','Fully managed operations and support','Product lifecycle management','Focus on your core business needs'] },
]

const services = [
  { title:'Custom software development', color:'#FB923C', desc:'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.', icon: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#FB923C" strokeWidth="1.5" fill="#FB923C22"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#FB923C" strokeWidth="1.5"/></svg>
  ) },
  { title:'IT consulting and digital advisory', color:'#F472B6', desc:'We assess, design, and optimize solutions with strategic precision, from concept to delivery.', icon: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#F472B6" strokeWidth="1.5" fill="#F472B622"/><path d="M12 12l4-2-2 4-2-2z" stroke="#F472B6" strokeWidth="1.5"/></svg>
  ) },
  { title:'Digital transformation', color:'#818CF8', desc:'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.', icon: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15,11 9,11" stroke="#818CF8" strokeWidth="1.5" fill="#818CF822"/><rect x="9" y="13" width="6" height="7" rx="1" stroke="#818CF8" strokeWidth="1.5" fill="#818CF822"/></svg>
  ) },
]

const techStack = [
  'IoT Services','Performance Testing','AI development services','IT Infrastructure',
  'Data science services','Cybersecurity','Machine learning dev','UI/UX Design',
  'Blockchain software dev','Business Intelligence','RPA for Business','Big Data',
  'Data analytics services','Data Engineering',
]

const modelColors = ['#FB923C','#F472B6','#818CF8','#34D399']

const Services = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="services-hero" style={{ padding:'140px 10% 80px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6 }} style={{ position:'relative', zIndex:1 }}>
          <span className="cyber-tag" style={{ marginBottom:24, display:'inline-block' }}>Our Services</span>
          <h1 className="hero-title" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:800, color:'#FFF7ED', lineHeight:1.1, letterSpacing:'-0.03em', margin:'20px auto 24px', maxWidth:840, fontFamily:"'Space Grotesk',sans-serif" }}>
            Comprehensive Solutions for{' '}
            <span style={{ background:'linear-gradient(135deg,#FB923C 0%,#F472B6 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Digital Success.</span>
          </h1>
          <p className="hero-desc" style={{ color:'rgba(255,225,190,0.5)', maxWidth:640, margin:'0 auto 40px', lineHeight:1.75, fontSize:'1.1rem' }}>
            We provide a wide range of services designed to help you build, scale, and transform your business with confidence.
          </p>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── SERVICE OVERVIEW — new: ICON-SPOTLIGHT ROW CARDS ── */}
      <section style={{ padding:'90px 10%' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          <div className="section-label">We do it all</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 0', letterSpacing:'-0.025em', fontFamily:"'Space Grotesk',sans-serif" }}>Service Overview</h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:16 }}>
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.09 }}
              style={{ position:'relative', background:'rgba(18,15,24,0.8)', border:`1px solid ${s.color}15`, borderRadius:20, padding:'36px 28px', overflow:'hidden', transition:'all 0.25s', cursor:'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=`${s.color}35`; e.currentTarget.style.transform='translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=`${s.color}15`; e.currentTarget.style.transform='translateY(0)' }}
            >
              {/* ambient top glow */}
              <div style={{ position:'absolute', top:-40, right:-20, width:160, height:160, borderRadius:'50%', background:`radial-gradient(circle,${s.color}18 0%,transparent 70%)`, pointerEvents:'none' }} />

              {/* big emoji icon */}
              <div style={{ fontSize:'2.5rem', marginBottom:20, filter:`drop-shadow(0 0 12px ${s.color}70)` }}>{s.icon}</div>

              {/* tag + index */}
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'0.6rem', fontWeight:700, color:`${s.color}60`, letterSpacing:'0.14em' }}>{String(i+1).padStart(2,'0')}</span>
                <div style={{ flex:1, height:1, background:` linear-gradient(90deg,${s.color}30,transparent)` }} />
                <span style={{ fontSize:'0.6rem', fontWeight:700, color:s.color, background:`${s.color}10`, border:`1px solid ${s.color}22`, borderRadius:100, padding:'2px 9px', letterSpacing:'0.08em', textTransform:'uppercase', fontFamily:"'Space Grotesk',sans-serif" }}>Service</span>
              </div>

              <h3 style={{ fontSize:'1.1rem', fontWeight:700, color:'#FFF7ED', marginBottom:12, lineHeight:1.3, letterSpacing:'-0.015em' }}>{s.title}</h3>
              <p style={{ color:'rgba(255,225,190,0.42)', lineHeight:1.72, fontSize:'0.88rem' }}>{s.desc}</p>

              {/* bottom accent */}
              <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1.5, background:`linear-gradient(90deg,${s.color}50,transparent)` }} />
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── COLLABORATION MODELS — new: LOZENGE-HEADER CARDS ── */}
      {/* Each card: big pill/lozenge at top with title in center, points below */}
      <section style={{ padding:'90px 10%' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          <div className="section-label">How we work</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 0', letterSpacing:'-0.025em', fontFamily:"'Space Grotesk',sans-serif" }}>
            Collaboration <span style={{ color:'#FB923C' }}>Models</span>
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 }}>
          {models.map((model, i) => {
            const mc = modelColors[i % 4]
            return (
              <motion.div key={i} initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.07 }}
                style={{ position:'relative', background:'rgba(18,15,24,0.8)', border:`1px solid ${mc}12`, borderRadius:20, overflow:'hidden', transition:'border-color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${mc}30`}
                onMouseLeave={e => e.currentTarget.style.borderColor = `${mc}12`}
              >
                {/* LOZENGE HEADER BAND */}
                <div style={{ background:`linear-gradient(135deg,${mc}28,${mc}12)`, borderBottom:`1px solid ${mc}20`, padding:'22px 24px 18px', textAlign:'center', position:'relative' }}>
                  <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% 120%,${mc}20 0%,transparent 70%)` }} />
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'0.6rem', fontWeight:700, color:`${mc}80`, letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:6 }}>Model {String(i+1).padStart(2,'0')}</div>
                  <h3 style={{ fontSize:'1rem', fontWeight:700, color:'#FFF7ED', lineHeight:1.25, position:'relative', zIndex:1 }}>{model.title}</h3>
                </div>

                {/* POINTS */}
                <ul style={{ listStyle:'none', padding:'20px 24px 24px', margin:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {model.points.map((pt, j) => (
                    <li key={j} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                      <span style={{ display:'flex', alignItems:'center', justifyContent:'center', width:18, height:18, borderRadius:'50%', background:`${mc}12`, border:`1px solid ${mc}25`, flexShrink:0, marginTop:1 }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={mc} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span style={{ color:'rgba(255,225,190,0.48)', fontSize:'0.85rem', lineHeight:1.65 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── EXPERTISE ───────────────────────────────── */}
      <section style={{ padding:'90px 10% 110px' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          <div className="section-label">Expertise &amp; Strengths</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 0', letterSpacing:'-0.025em', fontFamily:"'Space Grotesk',sans-serif" }}>
            Expertise and competencies
          </h2>
        </motion.div>

        <div className="services-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:32 }}>
          {/* text panel */}
          <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
            style={{ position:'relative', background:'rgba(18,15,24,0.8)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:20, padding:'36px 30px', overflow:'hidden' }}
          >
            <div style={{ position:'absolute', bottom:-40, right:-40, width:180, height:180, borderRadius:'50%', background:'radial-gradient(circle,rgba(251,146,60,0.07) 0%,transparent 70%)', pointerEvents:'none' }} />
            <h3 style={{ fontSize:'1.2rem', fontWeight:700, color:'#FFF7ED', marginBottom:16, fontFamily:"'Space Grotesk',sans-serif" }}>Technology Excellence</h3>
            <p style={{ color:'rgba(255,225,190,0.48)', lineHeight:1.8, fontSize:'0.95rem' }}>
              AIQA offers deep technical expertise across various domains, harnessing the power of advanced technologies like AI, IoT, and blockchain. By combining these technologies, we deliver scalable, robust, and future-proof solutions.
            </p>
          </motion.div>

          {/* pill cloud */}
          <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
            style={{ 
              background:'rgba(18,15,24,0.8)', 
              border:'1px solid rgba(255,255,255,0.07)', 
              borderRadius:20, 
              padding:'32px 28px', 
              display:'flex', 
              flexWrap:'wrap', 
              gap:'12px', 
              justifyContent:'center',
              alignContent:'center'
            }}
          >
            {techStack.map((tech, i) => {
              const palettes = [
                { bg:'rgba(251,146,60,0.08)', border:'rgba(251,146,60,0.2)', dot:'#FB923C', text:'rgba(251,180,100,0.9)' },
                { bg:'rgba(244,114,182,0.08)', border:'rgba(244,114,182,0.2)', dot:'#F472B6', text:'rgba(244,150,190,0.9)' },
                { bg:'rgba(129,140,248,0.08)', border:'rgba(129,140,248,0.18)', dot:'#818CF8', text:'rgba(160,170,255,0.85)' },
                { bg:'rgba(52,211,153,0.08)', border:'rgba(52,211,153,0.18)', dot:'#34D399', text:'rgba(52,211,153,0.85)' },
              ]
              const p = palettes[i % 4]
              return (
                <div key={i} style={{ display:'inline-flex', alignItems:'center', gap:8, background:p.bg, border:`1px solid ${p.border}`, borderRadius:100, padding:'8px 16px', fontSize:'0.8rem', fontWeight:600, color:p.text, whiteSpace:'nowrap', transition:'all 0.25s', cursor:'default' }}
                  onMouseEnter={e => { e.currentTarget.style.background = p.border; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${p.dot}20` }}
                  onMouseLeave={e => { e.currentTarget.style.background = p.bg; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <span style={{ width:6,height:6,borderRadius:'50%',background:p.dot,boxShadow:`0 0 6px ${p.dot}`,flexShrink:0 }} />
                  {tech}
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
