import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'

const models = [
  { title:'Time and Materials', points:['Flexibility to adapt to changing requirements','Transparent billing based on hours worked','Ideal for long-term or evolving projects','Regular progress updates and reporting','Scales up or down based on needs'] },
  { title:'Fixed Price',         points:['Set budget with no hidden costs','Defined project scope and deliverables','Clear timelines and milestones','Ideal for projects with clear requirements','Regular updates with strict adherence to plan'] },
  { title:'Managed Team',        points:['AIQA manages the team and operations','Reduced overhead and HR costs','Access to top talent and expertise','Flexibility to scale with business growth','Outsource recruitment and management'] },
  { title:'Managed Product & Service', points:['End-to-end development and management','Continuous deployment and improvement','Fully managed operations and support','Product lifecycle management','Focus on your core business needs'] },
]

const services = [
  { title:'Custom software development', color:'#06B6D4', desc:'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.', icon: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#06B6D4" strokeWidth="1.5" fill="#06B6D422"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#06B6D4" strokeWidth="1.5"/></svg>
  ) },
  { title:'IT consulting and digital advisory', color:'#D946EF', desc:'We assess, design, and optimize solutions with strategic precision, from concept to delivery.', icon: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#D946EF" strokeWidth="1.5" fill="#D946EF22"/><path d="M12 12l4-2-2 4-2-2z" stroke="#D946EF" strokeWidth="1.5"/></svg>
  ) },
  { title:'Digital transformation', color:'#8B5CF6', desc:'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.', icon: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15,11 9,11" stroke="#8B5CF6" strokeWidth="1.5" fill="#8B5CF622"/><rect x="9" y="13" width="6" height="7" rx="1" stroke="#8B5CF6" strokeWidth="1.5" fill="#8B5CF622"/></svg>
  ) },
]

const techStack = [
  'IoT Services','Performance Testing','AI development services','IT Infrastructure',
  'Data science services','Cybersecurity','Machine learning dev','UI/UX Design',
  'Blockchain software dev','Business Intelligence','RPA for Business','Big Data',
  'Data analytics services','Data Engineering',
]

const modelColors = ['#06B6D4','#D946EF','#8B5CF6','#10B981']

const Services = () => {
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
            <span className="section-label" style={{ marginBottom:20 }}>Our Services</span>
            <h1 className="hero-title heading-xl" style={{ margin:'0 auto 24px' }}>
              Solutions for{' '}
              <span className="gradient-text">Digital Success.</span>
            </h1>
            <p className="hero-desc text-body" style={{ maxWidth:640, margin: '0 auto' }}>
              We provide a wide range of services designed to help you build, scale, and transform your business with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ── SERVICE OVERVIEW (BENTO) ── */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:64 }}>
            <div className="section-label">We do it all</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 0' }}>Service Overview</h2>
          </motion.div>

          <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.1 }}
                className="bento-item glass-card" style={{ borderColor:`${s.color}30`, padding: '40px' }}
              >
                <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 100% 0%,${s.color}15 0%,transparent 70%)`, pointerEvents:'none' }} />
                <div style={{ color: s.color, marginBottom:32, filter:`drop-shadow(0 0 20px ${s.color}60)` }}>{s.icon}</div>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                  <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'0.75rem', fontWeight:800, color:`${s.color}60` }}>{String(i+1).padStart(2,'0')}</span>
                  <div style={{ flex:1, height:1, background:`linear-gradient(90deg,${s.color}30,transparent)` }} />
                </div>
                <h3 className="heading-md" style={{ fontSize:'1.4rem', marginBottom:12 }}>{s.title}</h3>
                <p className="text-body" style={{ flexGrow: 1 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLABORATION MODELS (MASONRY) ── */}
      <section className="section" style={{ background: 'rgba(10,6,18,0.5)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:64 }}>
            <div className="section-label">How we work</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 0' }}>
              Collaboration Models
            </h2>
          </motion.div>

          <div className="masonry-grid" style={{ columnCount: 2 }}>
            {models.map((model, i) => {
              const mc = modelColors[i % 4]
              return (
                <motion.div key={i} initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.1 }}
                  className="masonry-item glass-card" style={{ padding: 0, overflow: 'hidden', borderColor: `${mc}20`, display: 'inline-block', width: '100%', breakInside: 'avoid', marginBottom: 24 }}
                >
                  <div style={{ background:`linear-gradient(135deg,${mc}15,transparent)`, borderBottom:`1px solid ${mc}20`, padding:'32px', textAlign:'center', position:'relative' }}>
                    <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'0.75rem', fontWeight:800, color:`${mc}80`, letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:8 }}>Model {String(i+1).padStart(2,'0')}</div>
                    <h3 className="heading-md" style={{ fontSize:'1.2rem', color:'#FFF', margin:0 }}>{model.title}</h3>
                  </div>
                  <ul style={{ listStyle:'none', padding:'32px', margin:0, display:'flex', flexDirection:'column', gap:16 }}>
                    {model.points.map((pt, j) => (
                      <li key={j} style={{ display:'flex', alignItems:'flex-start', gap:12 }}>
                        <span style={{ display:'flex', alignItems:'center', justifyContent:'center', width:20, height:20, borderRadius:'50%', background:`${mc}15`, border:`1px solid ${mc}30`, flexShrink:0, marginTop:2 }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={mc} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="text-body" style={{ fontSize:'0.95rem' }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} style={{ marginBottom:64 }}>
            <div className="section-label">Expertise &amp; Strengths</div>
            <h2 className="heading-lg" style={{ margin:'14px 0 0' }}>
              Expertise and competencies
            </h2>
          </motion.div>

          <div style={{ display:'grid', gridTemplateColumns:'minmax(300px, 1fr) 2fr', gap:40, alignItems: 'center' }}>
            <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}>
              <p className="text-body" style={{ fontSize: '1.1rem' }}>
                AIQA offers deep technical expertise across various domains, harnessing the power of advanced technologies like AI, IoT, and blockchain. By combining these technologies, we deliver scalable, robust, and future-proof solutions.
              </p>
            </motion.div>

            <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
              style={{ display:'flex', flexWrap:'wrap', gap:'12px', justifyContent:'flex-start' }}
            >
              {techStack.map((tech, i) => {
                const palettes = [
                  { bg:'rgba(6,182,212,0.1)', border:'rgba(6,182,212,0.3)', dot:'#06B6D4' },
                  { bg:'rgba(217,70,239,0.1)', border:'rgba(217,70,239,0.3)', dot:'#D946EF' },
                  { bg:'rgba(139,92,246,0.1)', border:'rgba(139,92,246,0.3)', dot:'#8B5CF6' },
                  { bg:'rgba(16,185,129,0.1)', border:'rgba(16,185,129,0.3)', dot:'#10B981' },
                ]
                const p = palettes[i % 4]
                return (
                  <div key={i} className="glass-card" style={{ padding:'10px 20px', fontSize:'0.85rem', fontWeight:600, color:'#FFF', border:`1px solid ${p.border}`, background: p.bg, display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 100 }}>
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

export default Services
