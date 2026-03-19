import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const valueProps = [
  { title:'Industry-Specific Innovation', color:'#FB923C', desc:'We deliver cutting-edge solutions that cater to the unique challenges and opportunities of your industry, enhancing efficiency and driving growth.' },
  { title:'End-to-End Transformation',   color:'#F472B6', desc:'From initial consultation to final implementation, we help industries evolve with integrated technology solutions that boost productivity and performance.' },
  { title:'Scalable Solutions for Every Need', color:'#818CF8', desc:"Whether you're optimizing current operations or scaling up for future growth, our tailored solutions are built to adapt and grow with your business needs." },
]

const industries = [
  { name:'FinTech',              color:'#FB923C', tags:['Finance','Banking','Payments'],    desc:'Custom financial software for digital payments, banking, and secure transactions.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg> },
  { name:'Real Estate',          color:'#F472B6', tags:['PropTech','CRM','Analytics'],      desc:'Develop modern real estate solutions using cutting-edge technologies.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name:'Healthcare',           color:'#34D399', tags:['EHR','EMR','Telemedicine'],        desc:'Custom EHR, EMR, ERX, and other medical software solutions.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
  { name:'Transport & Mobility', color:'#818CF8', tags:['TMS','WMS','Blockchain'],          desc:'Custom TMS, WMS, FMS, vehicle management, and blockchain systems.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { name:'Software & SaaS',      color:'#FBBF24', tags:['SaaS','B2B','Ecosystems'],         desc:'Build software of any complexity, from SaaS systems to product ecosystems.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { name:'Manufacturing',        color:'#22D3EE', tags:['Industry 4.0','IoT','ERP'],        desc:'Optimize production with custom manufacturing software solutions.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M6 20V10l6-6 6 6v10"/><rect x="9" y="14" width="6" height="6"/></svg> },
  { name:'Smart Home',           color:'#34D399', tags:['IoT','Appliances','UX'],           desc:'Increase the value of smart home products with user-centered software.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
]

const techStack = [
  'IoT Services','Performance Testing','AI development services','IT Infrastructure',
  'Data science services','Cybersecurity','Machine learning dev','UI/UX Design',
  'Blockchain software dev','Business Intelligence','RPA for Business','Big Data',
  'Data analytics services','Data Engineering',
]

const Industries = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="industries-hero" style={{ padding:'140px 10% 80px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6 }} style={{ position:'relative', zIndex:1 }}>
          <span className="cyber-tag" style={{ marginBottom:24, display:'inline-block' }}>Industries We Serve</span>
          <h1 className="hero-title" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:800, color:'#FFF7ED', lineHeight:1.1, letterSpacing:'-0.03em', margin:'20px auto 24px', maxWidth:840, fontFamily:"'Space Grotesk',sans-serif" }}>
            Tailored Solutions for Every{' '}
            <span style={{ background:'linear-gradient(135deg,#FB923C 0%,#F472B6 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Vertical.</span>
          </h1>
          <p className="hero-desc" style={{ color:'rgba(255,225,190,0.5)', maxWidth:640, margin:'0 auto 40px', lineHeight:1.75, fontSize:'1.1rem' }}>
            We bring deep domain expertise to help diverse sectors navigate digital transformation and achieve operational excellence.
          </p>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── VALUE PROPS — new: LARGE PULL-QUOTE BLOCKS ── */}
      {/* Emphasised large first letter + headline + divider + body, no box border */}
      <section style={{ padding:'90px 10%' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          <div className="section-label">Tailored Excellence</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 0', letterSpacing:'-0.025em', fontFamily:"'Space Grotesk',sans-serif" }}>Expert Solutions for Every Industry.</h2>
        </motion.div>

        <div style={{ display:'flex', flexDirection:'column', gap:0, border:'1px solid rgba(255,255,255,0.06)', borderRadius:20, overflow:'hidden' }}>
          {valueProps.map((item, i) => (
            <motion.div key={i} initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.1 }}
              style={{ display:'flex', gap:0, padding:'36px 40px', borderBottom: i < valueProps.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none', background:'rgba(18,15,24,0.5)', position:'relative', transition:'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = `${item.color}06`}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(18,15,24,0.5)'}
            >
              <div style={{ position:'absolute', left:0, top:0, bottom:0, width:2, background:`linear-gradient(180deg,transparent,${item.color}65,transparent)` }} />

              {/* large pull-quote letter */}
              <div style={{ fontFamily:"'DM Serif Display',Georgia,serif", fontSize:'4.5rem', fontWeight:900, color:`${item.color}22`, lineHeight:1, flexShrink:0, width:72, marginRight:28, userSelect:'none', letterSpacing:'-0.02em' }}>
                {String(i+1).padStart(2,'0')}
              </div>

              <div style={{ flex:1 }}>
                <div style={{ display:'inline-flex', alignItems:'center', gap:5, background:`${item.color}10`, border:`1px solid ${item.color}22`, borderRadius:100, padding:'3px 10px', marginBottom:14 }}>
                  <span style={{ width:5,height:5,borderRadius:'50%',background:item.color }} />
                  <span style={{ fontSize:'0.6rem', fontWeight:700, color:item.color, letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:"'Space Grotesk',sans-serif" }}>Value</span>
                </div>
                <h3 style={{ fontSize:'1.1rem', fontWeight:700, color:'#FFF7ED', marginBottom:12, letterSpacing:'-0.01em', lineHeight:1.3 }}>{item.title}</h3>
                <p style={{ color:'rgba(255,225,190,0.44)', lineHeight:1.72, fontSize:'0.9rem' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── INDUSTRIES GRID — new: COMPACT DARK TAG CARDS (mosaic bricks) ── */}
      {/* Each: colored top cap, icon top-right, big industry name, tags, arrow */}
      <section style={{ padding:'90px 10%' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          <div className="section-label">Industries in Focus</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 0', letterSpacing:'-0.025em', fontFamily:"'Space Grotesk',sans-serif" }}>
            Industries We Serve with <span style={{ color:'#FB923C' }}>Expertise</span>
          </h2>
        </motion.div>

        <div style={{ display:'flex', flexDirection:'column', gap:0, border:'1px solid rgba(255,255,255,0.06)', borderRadius:20, overflow:'hidden' }}>
          {industries.map((industry, i) => (
            <motion.div key={i} initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.4,delay:i*0.05 }}
              onClick={() => navigate('/contact')}
              className="industry-list-item"
              style={{ 
                display:'flex', 
                alignItems:'center', 
                padding:'16px 24px', 
                borderBottom: i < industries.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', 
                background:'rgba(18,15,24,0.6)', 
                cursor:'pointer', 
                transition:'all 0.2s',
                gap: 24
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.paddingLeft = '32px' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(18,15,24,0.6)'; e.currentTarget.style.paddingLeft = '24px' }}
            >
              {/* index + separator */}
              <div style={{ display:'flex', alignItems:'center', gap:16, minWidth:60 }}>
                <span style={{ fontSize:'0.75rem', fontWeight:700, color:`${industry.color}60`, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:'0.05em' }}>{String(i+1).padStart(2,'0')}</span>
                <div style={{ width:1, height:20, background:'rgba(255,255,255,0.08)' }} className="industry-divider" />
              </div>

              {/* name */}
              <h3 style={{ fontSize:'1.05rem', fontWeight:700, color:'#FFF7ED', minWidth:180, margin:0, fontFamily:"'Space Grotesk',sans-serif" }}>{industry.name}</h3>

              {/* tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:10, flex:1, alignItems: 'center' }}>
                {industry.tags.map((t,ti) => (
                  <span key={ti} style={{ 
                    fontSize:'0.65rem', 
                    padding:'4px 12px', 
                    borderRadius:100, 
                    background:`${industry.color}08`, 
                    border:`1px solid ${industry.color}20`, 
                    color:industry.color, 
                    fontWeight:600, 
                    fontFamily:"'Space Grotesk',sans-serif",
                    textTransform:'uppercase',
                    letterSpacing:'0.05em'
                  }}>{t}</span>
                ))}
              </div>

              {/* arrow */}
              <div style={{ color:industry.color, fontSize:'1.1rem', opacity:0.4, transition:'all 0.2s' }} className="arrow-icon">→</div>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section style={{ padding:'60px 10%' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
          style={{ position:'relative', overflow:'hidden', background:'linear-gradient(135deg,rgba(18,10,8,0.97),rgba(22,10,20,0.97))', border:'1px solid rgba(251,146,60,0.18)', borderRadius:20, padding:'44px 48px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:28 }}
        >
          <div style={{ position:'absolute', top:0, left:'20%', right:'20%', height:1, background:'linear-gradient(90deg,transparent,rgba(251,146,60,0.5),rgba(244,114,182,0.3),transparent)' }} />
          <div style={{ position:'absolute', top:-80, right:-40, width:240, height:240, borderRadius:'50%', background:'radial-gradient(circle,rgba(251,146,60,0.1) 0%,transparent 70%)', pointerEvents:'none' }} />
          <div>
            <h3 style={{ fontSize:'1.4rem', fontWeight:700, color:'#FFF7ED', marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>Ready to Build Your Domain-Specific Solution?</h3>
            <p style={{ color:'rgba(255,225,190,0.38)', fontSize:'0.95rem' }}>We specialize in crafting high-quality products tailored to industry standards.</p>
          </div>
          <button className="get-started-button" style={{ whiteSpace:'nowrap' }} onClick={() => navigate('/contact')}>Get Started</button>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── EXPERTISE ───────────────────────────────── */}
      <section style={{ padding:'90px 10% 110px' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          <div className="section-label">Expertise &amp; Strengths</div>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:'#FFF7ED', margin:'14px 0 0', letterSpacing:'-0.025em', fontFamily:"'Space Grotesk',sans-serif" }}>Expertise and competencies</h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:20 }}>
          <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
            style={{ position:'relative', background:'rgba(18,15,24,0.8)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:20, padding:'36px 30px', overflow:'hidden' }}>
            <div style={{ position:'absolute', bottom:-40, right:-40, width:180, height:180, borderRadius:'50%', background:'radial-gradient(circle,rgba(251,146,60,0.07) 0%,transparent 70%)', pointerEvents:'none' }} />
            <h3 style={{ fontSize:'1.2rem', fontWeight:700, color:'#FFF7ED', marginBottom:16, fontFamily:"'Space Grotesk',sans-serif" }}>Technology Excellence</h3>
            <p style={{ color:'rgba(255,225,190,0.48)', lineHeight:1.8, fontSize:'0.95rem' }}>
              AIQA offers deep technical expertise across various domains, harnessing the power of advanced technologies like AI, IoT, and blockchain. By combining these technologies, we deliver scalable, robust, and future-proof solutions tailored to meet the unique needs of industries.
            </p>
          </motion.div>

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
              const ps = [
                { bg:'rgba(251,146,60,0.08)', border:'rgba(251,146,60,0.2)', dot:'#FB923C', text:'rgba(251,180,100,0.9)' },
                { bg:'rgba(244,114,182,0.08)', border:'rgba(244,114,182,0.2)', dot:'#F472B6', text:'rgba(244,150,190,0.9)' },
                { bg:'rgba(129,140,248,0.08)', border:'rgba(129,140,248,0.18)', dot:'#818CF8', text:'rgba(160,170,255,0.85)' },
                { bg:'rgba(52,211,153,0.08)', border:'rgba(52,211,153,0.18)', dot:'#34D399', text:'rgba(52,211,153,0.85)' },
              ]
              const p = ps[i % 4]
              return (
                <div key={i} style={{ display:'inline-flex', alignItems:'center', gap:8, background:p.bg, border:`1px solid ${p.border}`, borderRadius:100, padding:'8px 16px', fontSize:'0.8rem', fontWeight:600, color:p.text, whiteSpace:'nowrap', transition:'all 0.25s', cursor:'default' }}
                  onMouseEnter={e => { e.currentTarget.style.background=p.border; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow=`0 4px 12px ${p.dot}20` }}
                  onMouseLeave={e => { e.currentTarget.style.background=p.bg; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
                >
                  <span style={{ width:6,height:6,borderRadius:'50%',background:p.dot,boxShadow:`0 0 6px ${p.dot}`,flexShrink:0 }} />{tech}
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Industries
