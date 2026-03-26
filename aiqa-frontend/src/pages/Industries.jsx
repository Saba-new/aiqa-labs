import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import contentImg from '../assets/content.svg'
import circleIcon from '../assets/circleIcon.svg'

const valueProps = [
  { title:'Industry-Specific Innovation', color:'#06B6D4', desc:'We deliver cutting-edge solutions that cater to the unique challenges and opportunities of your industry, enhancing efficiency and driving growth.' },
  { title:'End-to-End Transformation',   color:'#D946EF', desc:'From initial consultation to final implementation, we help industries evolve with integrated technology solutions that boost productivity and performance.' },
  { title:'Scalable Solutions for Every Need', color:'#8B5CF6', desc:"Whether you're optimizing current operations or scaling up for future growth, our tailored solutions are built to adapt and grow with your business needs." },
]

const industries = [
  { name:'FinTech',              color:'#06B6D4', tags:['Finance','Banking','Payments'],    desc:'Custom financial software for digital payments, banking, and secure transactions.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg> },
  { name:'Real Estate',          color:'#D946EF', tags:['PropTech','CRM','Analytics'],      desc:'Develop modern real estate solutions using cutting-edge technologies.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D946EF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name:'Healthcare',           color:'#10B981', tags:['EHR','EMR','Telemedicine'],        desc:'Custom EHR, EMR, ERX, and other medical software solutions.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
  { name:'Transport & Mobility', color:'#8B5CF6', tags:['TMS','WMS','Blockchain'],          desc:'Custom TMS, WMS, FMS, vehicle management, and blockchain systems.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { name:'Software & SaaS',      color:'#06B6D4', tags:['SaaS','B2B','Ecosystems'],         desc:'Build software of any complexity, from SaaS systems to product ecosystems.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { name:'Manufacturing',        color:'#0EA5E9', tags:['Industry 4.0','IoT','ERP'],        desc:'Optimize production with custom manufacturing software solutions.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M6 20V10l6-6 6 6v10"/><rect x="9" y="14" width="6" height="6"/></svg> },
  { name:'Smart Home',           color:'#10B981', tags:['IoT','Appliances','UX'],           desc:'Increase the value of smart home products with user-centered software.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
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
      {/* ── HERO (SPLIT) ─────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="container split-hero" style={{ position:'relative', zIndex:1 }}>
          <motion.div initial={{ opacity:0,x:-30 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.6 }} className="split-hero-content" style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ marginBottom:20, display:'inline-block' }}>Industries We Serve</span>
            <h1 className="hero-title heading-xl" style={{ margin:'0 auto 24px' }}>
              Solutions for Every <span className="gradient-text">Vertical.</span>
            </h1>
            <p className="hero-desc text-body" style={{ maxWidth:640, margin: '0 auto' }}>
              We bring deep domain expertise to help diverse sectors navigate digital transformation and achieve operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ── VALUE PROPS (BENTO BOX) ── */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:64 }}>
            <div className="section-label">Tailored Excellence</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 0' }}>Expert Solutions for Every Industry.</h2>
          </motion.div>

          <div className="bento-grid">
            {valueProps.map((item, i) => {
              let layoutClass = "bento-item glass-card";
              if (i === 0) layoutClass += " bento-tall";
              if (i === 2) layoutClass += " bento-wide";

              return (
                <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.1 }}
                  className={layoutClass}
                  style={{ padding:'40px', borderColor: `${item.color}30` }}
                >
                  <div style={{ position:'absolute', inset:0, background:`radial-gradient(circle at 0% 0%, ${item.color}15 0%, transparent 60%)`, pointerEvents:'none' }} />
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'4rem', fontWeight:900, color:`${item.color}22`, lineHeight:0.8, marginBottom:24 }}>
                    {String(i+1).padStart(2,'0')}
                  </div>
                  <h3 className="heading-md" style={{ fontSize:'1.4rem', marginBottom:16 }}>{item.title}</h3>
                  <p className="text-body" style={{ flexGrow: 1 }}>{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES (MASONRY GRID) ── */}
      <section className="section" style={{ background: 'rgba(10,6,18,0.5)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:64 }}>
            <div className="section-label">Industries in Focus</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 0' }}>Expertise Across Domains</h2>
          </motion.div>

          <div className="masonry-grid">
            {industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.4,delay:(i%3)*0.1 }}
                onClick={() => navigate('/contact')}
                className="masonry-item glass-card"
                style={{ padding:'32px', cursor:'pointer' }}
                whileHover={{ scale: 1.02, borderColor: `${ind.color}50` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                  <div style={{ padding: 12, borderRadius: 12, background: `${ind.color}15`, color: ind.color }}>{ind.icon}</div>
                  <span style={{ fontSize:'0.85rem', fontWeight:800, color:`${ind.color}40`, fontFamily:"'Space Grotesk',sans-serif" }}>{String(i+1).padStart(2,'0')}</span>
                </div>
                <h3 className="heading-md" style={{ fontSize:'1.4rem', marginBottom:12 }}>{ind.name}</h3>
                <p className="text-body" style={{ fontSize: '0.95rem', marginBottom: 24 }}>{ind.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                  {ind.tags.map((t,ti) => (
                    <span key={ti} style={{ fontSize:'0.7rem', padding:'4px 12px', borderRadius:100, background:`${ind.color}10`, border:`1px solid ${ind.color}30`, color:ind.color, fontWeight:600 }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:64 }}>
            <div className="section-label">Core Strengths</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 0' }}>Technology Excellence</h2>
          </motion.div>

          <div style={{ display:'grid', gridTemplateColumns:'minmax(300px, 1fr) 2fr', gap:40, alignItems: 'center' }}>
            <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}>
              <p className="text-body" style={{ fontSize: '1.1rem' }}>
                AIQA offers deep technical expertise across various domains, harnessing the power of advanced technologies like AI, IoT, and blockchain. By combining these technologies, we deliver scalable, robust, and future-proof solutions tailored to meet the unique needs of industries.
              </p>
            </motion.div>

            <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
              style={{ display:'flex', flexWrap:'wrap', gap:'12px', justifyContent:'flex-start' }}
            >
              {techStack.map((tech, i) => {
                const ps = [
                  { bg:'rgba(6,182,212,0.1)', border:'rgba(6,182,212,0.3)', dot:'#06B6D4', text:'rgba(248,250,252,0.9)' },
                  { bg:'rgba(217,70,239,0.1)', border:'rgba(217,70,239,0.3)', dot:'#D946EF', text:'rgba(248,250,252,0.9)' },
                  { bg:'rgba(139,92,246,0.1)', border:'rgba(139,92,246,0.3)', dot:'#8B5CF6', text:'rgba(248,250,252,0.9)' },
                  { bg:'rgba(16,185,129,0.1)', border:'rgba(16,185,129,0.3)', dot:'#10B981', text:'rgba(248,250,252,0.9)' },
                ]
                const p = ps[i % 4]
                return (
                  <div key={i} className="glass-card" style={{ padding:'10px 20px', fontSize:'0.85rem', fontWeight:600, color:p.text, border:`1px solid ${p.border}`, background: p.bg, display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 100 }}>
                    <span style={{ width:6, height:6, borderRadius:'50%', background:p.dot, flexShrink:0, boxShadow: `0 0 10px ${p.dot}` }} />
                    {tech}
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Industries
