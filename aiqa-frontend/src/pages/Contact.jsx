import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
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
    { value:'9+',  label:'Years Experience' },
    { value:'50+', label:'Projects Delivered' },
    { value:'10+', label:'Industries Served' },
    { value:'100%',label:'Client Satisfaction' },
  ]

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ padding:'140px 10% 80px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div className="hero-grid" />
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6 }} style={{ position:'relative', zIndex:1 }}>
          <span className="cyber-tag" style={{ marginBottom:24, display:'inline-block' }}>Get in Touch</span>
          <h1 style={{ fontSize:'clamp(2.2rem,5vw,4rem)', fontWeight:800, color:'#FFF7ED', lineHeight:1.12, letterSpacing:'-0.025em', margin:'20px auto 22px', maxWidth:780, fontFamily:"'Space Grotesk',sans-serif" }}>
            Start the conversation.{' '}
            <span style={{ background:'linear-gradient(135deg,#FBBF24 0%,#FB923C 40%,#F472B6 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>We're ready.</span>
          </h1>
          <p style={{ color:'rgba(255,225,190,0.5)', maxWidth:520, margin:'0 auto', lineHeight:1.72, fontSize:'1.02rem' }}>
            Whether you have a project in mind, a question about our services, or just want to explore possibilities — we're here.
          </p>
        </motion.div>
      </section>

      <hr className="neon-divider" style={{ margin:'0 10%' }} />

      {/* ── MAIN CONTENT ─────────────────────────────── */}
      <section style={{ padding:'90px 10% 120px' }}>
        <div className="contact-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:48, alignItems:'start' }}>

          {/* LEFT — Stats + info */}
          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>

            {/* STATS — new: 2×2 NUMBERED METRIC BRICKS */}
            <motion.div initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}
              className="contact-stats-grid"
              style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}
            >
              {stats.map((s, i) => {
                const colors = ['#FB923C','#F472B6','#818CF8','#34D399']
                const c = colors[i]
                return (
                  <motion.div key={i} initial={{ opacity:0,scale:0.94 }} whileInView={{ opacity:1,scale:1 }} viewport={{ once:true }} transition={{ duration:0.45,delay:i*0.08 }}
                    style={{ position:'relative', background:'rgba(18,15,24,0.8)', border:`1px solid ${c}18`, borderRadius:16, padding:'24px 20px', overflow:'hidden', textAlign:'center' }}
                  >
                    <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% 0%,${c}0C 0%,transparent 65%)`, pointerEvents:'none' }} />
                    <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:1.5, background:`linear-gradient(90deg,transparent,${c}50,transparent)` }} />
                    <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'2.2rem', fontWeight:900, lineHeight:1, background:`linear-gradient(135deg,${c},${colors[(i+1)%4]})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:8 }}>{s.value}</div>
                    <div style={{ fontSize:'0.72rem', color:'rgba(255,225,190,0.32)', letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:"'Space Grotesk',sans-serif" }}>{s.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* QUOTE CARD — full-width amber glow */}
            <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.3 }}
              style={{ position:'relative', background:'rgba(18,15,24,0.8)', border:'1px solid rgba(251,146,60,0.18)', borderRadius:18, padding:'32px 28px', overflow:'hidden' }}
            >
              <div style={{ position:'absolute', top:-30, right:-20, width:160, height:160, borderRadius:'50%', background:'radial-gradient(circle,rgba(244,114,182,0.1) 0%,transparent 70%)', pointerEvents:'none' }} />
              <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:1.5, background:'linear-gradient(90deg,transparent,rgba(251,146,60,0.4),rgba(244,114,182,0.3),transparent)' }} />
              <div style={{ fontFamily:'Georgia,serif', fontSize:'3.5rem', lineHeight:0.8, color:'rgba(251,146,60,0.15)', marginBottom:12 }}>"</div>
              <p style={{ fontSize:'0.95rem', color:'rgba(255,225,190,0.58)', lineHeight:1.75, fontStyle:'italic' }}>
                We're more than a service provider — we're your strategic technology partner, committed to building solutions that genuinely move the needle.
              </p>
              <div style={{ marginTop:20, paddingTop:16, borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize:'0.78rem', fontWeight:700, color:'#FB923C' }}>AIQA Labs Team</div>
                <div style={{ fontSize:'0.72rem', color:'rgba(255,225,190,0.28)', marginTop:3 }}>On every engagement</div>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.div initial={{ opacity:0,y:12 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.4 }}
              style={{ display:'flex', alignItems:'center', gap:14, padding:'18px 24px', background:'rgba(18,15,24,0.6)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14 }}
            >
              <div style={{ width:40, height:40, borderRadius:12, background:'rgba(251,146,60,0.12)', border:'1px solid rgba(251,146,60,0.22)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div style={{ fontSize:'0.68rem', fontWeight:700, color:'rgba(255,225,190,0.28)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:3, fontFamily:"'Space Grotesk',sans-serif" }}>Email us</div>
                <a href="mailto:info@aiqalabs.com" style={{ color:'#FFF7ED', textDecoration:'none', fontSize:'0.9rem', fontWeight:600, transition:'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='#FB923C'} onMouseLeave={e => e.currentTarget.style.color='#FFF7ED'}>info@aiqalabs.com</a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Contact form */}
          <motion.div initial={{ opacity:0,x:20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}
            style={{ position:'relative', background:'rgba(18,15,24,0.85)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:22, padding:'40px 36px', overflow:'hidden' }}
          >
            <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:1.5, background:'linear-gradient(90deg,transparent,rgba(251,146,60,0.4),rgba(244,114,182,0.25),transparent)' }} />
            <div style={{ position:'absolute', top:-60, right:-30, width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle,rgba(251,146,60,0.07) 0%,transparent 70%)', pointerEvents:'none' }} />

            <h2 style={{ fontSize:'1.4rem', fontWeight:700, color:'#FFF7ED', marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>Send us a message</h2>
            <p style={{ fontSize:'0.85rem', color:'rgba(255,225,190,0.35)', marginBottom:28, lineHeight:1.6 }}>We usually respond within 1 business day.</p>

            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {[
                { name:'name',    label:'Full Name *',       type:'text',  placeholder:'Jane Doe' },
                { name:'email',   label:'Email address *',   type:'email', placeholder:'jane@company.com' },
                { name:'phone',   label:'Phone (optional)',   type:'tel',   placeholder:'+1 234 567 890' },
              ].map(f => (
                <div key={f.name} style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  <label style={{ fontSize:'0.78rem', fontWeight:600, color:'rgba(255,225,190,0.4)', letterSpacing:'0.04em' }}>{f.label}</label>
                  <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange}
                    style={{ padding:'12px 16px', borderRadius:12, fontSize:'0.9rem', transition:'all 0.2s' }} />
                </div>
              ))}
              <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                <label style={{ fontSize:'0.78rem', fontWeight:600, color:'rgba(255,225,190,0.4)', letterSpacing:'0.04em' }}>Message *</label>
                <textarea name="message" rows={5} placeholder="Tell us about your project or question..." value={form.message} onChange={handleChange}
                  style={{ padding:'12px 16px', borderRadius:12, fontSize:'0.9rem', resize:'vertical', transition:'all 0.2s' }} />
              </div>
              <button type="submit" disabled={submitting} className="get-started-button"
                style={{ marginTop:8, width:'100%', fontSize:'0.95rem', padding:'14px', opacity:submitting ? 0.6 : 1, cursor:submitting ? 'not-allowed' : 'pointer' }}>
                {submitting ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default Contact
