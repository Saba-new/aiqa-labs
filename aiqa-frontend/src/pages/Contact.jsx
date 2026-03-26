import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { sendContactForm } from '../api'

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) { toast.error('Please fill all required fields.'); return }
    setSubmitting(true)
    try {
      await sendContactForm(form)
      toast.success('Message sent! We\'ll be in touch soon.')
      setForm({ name:'', email:'', phone:'', message:'' })
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Something went wrong. Please try again.')
    }
    finally { setSubmitting(false) }
  }

  const stats = [
    { value:'9+',  label:'Years Experience', color: '#06B6D4' },
    { value:'50+', label:'Projects Delivered', color: '#D946EF' },
    { value:'10+', label:'Industries Served', color: '#8B5CF6' },
    { value:'100%',label:'Client Satisfaction', color: '#10B981' },
  ]

  return (
    <>
      <section className="hero-section" style={{ paddingBottom: 0, minHeight: 'auto', paddingTop: '160px' }}>
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" style={{ top: '-10%', left: '10%' }} />
        <div className="aurora-orb aurora-orb-2" style={{ top: '30%', right: '-5%' }} />
        <div className="container" style={{ position:'relative', zIndex:1, textAlign: 'center', marginBottom: '80px' }}>
          <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6 }}>
            <span className="section-label" style={{ marginBottom:20 }}>Get in Touch</span>
            <h1 className="hero-title heading-xl" style={{ margin:'0 auto 24px', maxWidth:800 }}>
              Start the conversation.<br/>
              <span className="gradient-text">We're ready.</span>
            </h1>
            <p className="hero-desc text-body" style={{ maxWidth:600, margin: '0 auto' }}>
              Whether you have a project in mind, a question about our services, or just want to explore possibilities — we're here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ASYMMETRICAL CONTACT LAYOUT ─────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split-hero" style={{ gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'start' }}>
            
            {/* LEFT — Bento Stats & Quote */}
            <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
              
              {/* BENTO STATS */}
              <div className="bento-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {stats.map((s, i) => (
                  <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}
                    className="glass-card" style={{ padding:'32px 24px', textAlign:'center', borderColor: `${s.color}30` }}
                  >
                    <div style={{ position:'absolute', inset:0, background:`radial-gradient(circle at 50% 0%,${s.color}15 0%,transparent 70%)` }} />
                    <div style={{ position:'absolute', top:0, left:'20%', right:'20%', height:2, background:`linear-gradient(90deg,transparent,${s.color}60,transparent)` }} />
                    <div className="stat-neo-value" style={{ fontSize:'2.8rem', background:`linear-gradient(135deg, ${s.color}, #F8FAFC)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{s.value}</div>
                    <div className="stat-label" style={{ fontSize:'0.75rem', color:s.color, marginTop:4, letterSpacing:'0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* QUOTE CARD */}
              <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
                className="glass-card" style={{ padding:'48px 40px', borderColor: 'rgba(6,182,212,0.3)', background: 'linear-gradient(145deg, rgba(6,182,212,0.05) 0%, rgba(10,5,20,0.8) 100%)' }}
              >
                <div style={{ fontFamily:'Georgia,serif', fontSize:'4rem', lineHeight:0.8, color:'rgba(6,182,212,0.2)', marginBottom:16 }}>"</div>
                <p style={{ fontSize:'1.1rem', color:'rgba(248,250,252,0.8)', lineHeight:1.75, fontStyle:'italic' }}>
                  We're more than a service provider — we're your strategic technology partner, committed to building solutions that genuinely move the needle.
                </p>
                <div style={{ marginTop:24, paddingTop:20, borderTop:'1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize:'0.9rem', fontWeight:700, color:'#06B6D4' }}>AIQA Labs Team</div>
                  <div style={{ fontSize:'0.8rem', color:'rgba(248,250,252,0.4)', marginTop:4 }}>On every engagement</div>
                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.3 }}
                className="glass-card" style={{ display:'flex', alignItems:'center', gap:20, padding:'24px 32px' }}
              >
                <div style={{ width:48, height:48, borderRadius:16, background:'rgba(217,70,239,0.15)', border:'1px solid rgba(217,70,239,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div style={{ fontSize:'0.75rem', fontWeight:700, color:'rgba(248,250,252,0.5)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:4, fontFamily:"'Space Grotesk',sans-serif" }}>Email us</div>
                  <a href="mailto:info@aiqalabs.com" style={{ color:'#FFF', textDecoration:'none', fontSize:'1.1rem', fontWeight:600, transition:'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='#D946EF'} onMouseLeave={e => e.currentTarget.style.color='#FFF'}>info@aiqalabs.com</a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — FLOATING CONTACT FORM */}
            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}
              className="glass-card" style={{ padding:'48px 40px', borderColor: 'rgba(217,70,239,0.3)', boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(217,70,239,0.1)' }}
            >
              <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:2, background:'linear-gradient(90deg,transparent,#06B6D4,#D946EF,transparent)' }} />
              
              <h2 className="heading-md" style={{ fontSize:'1.6rem', marginBottom:8 }}>Send us a message</h2>
              <p className="text-body" style={{ marginBottom:32 }}>We usually respond within 1 business day.</p>

              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:20 }}>
                {[
                  { name:'name',    label:'Full Name *',       type:'text',  placeholder:'Jane Doe' },
                  { name:'email',   label:'Email address *',   type:'email', placeholder:'jane@company.com' },
                  { name:'phone',   label:'Phone (optional)',  type:'tel',   placeholder:'+1 234 567 890' },
                ].map(f => (
                  <div key={f.name} style={{ display:'flex', flexDirection:'column', gap:8 }}>
                    <label style={{ fontSize:'0.85rem', fontWeight:600, color:'rgba(248,250,252,0.7)', letterSpacing:'0.04em' }}>{f.label}</label>
                    <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange} />
                  </div>
                ))}
                
                <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                  <label style={{ fontSize:'0.85rem', fontWeight:600, color:'rgba(248,250,252,0.7)', letterSpacing:'0.04em' }}>Message *</label>
                  <textarea name="message" rows={5} placeholder="Tell us about your project or question..." value={form.message} onChange={handleChange} />
                </div>
                
                <button type="submit" disabled={submitting} className="btn-primary btn-pill-lg"
                  style={{ marginTop:16, width:'100%', justifyContent: 'center', opacity:submitting ? 0.6 : 1, cursor:submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
