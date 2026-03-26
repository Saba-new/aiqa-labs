import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function LoginA() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const maxRetries = 3
    let lastError = null
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        if (attempt > 1) toast.info(`Waking up server... Attempt ${attempt}/${maxRetries}`)
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formData, { timeout: 60000 })
        if (response.data.success) {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          toast.success('Login successful!')
          navigate('/theme-a')
          return
        }
      } catch (error) {
        lastError = error
        if ((error.code === 'ECONNABORTED' || error.message === 'Network Error') && attempt < maxRetries) {
          await new Promise(r => setTimeout(r, 2000 * attempt)); continue
        }
        if (error.response) { toast.error(error.response.data?.message || 'Login failed'); break }
      }
    }
    if (lastError && !lastError.response) toast.error('Server is waking up. Please try again in 30 seconds.')
    setLoading(false)
  }

  return (
    <div className="ta" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px', position: 'relative' }}>
      <div className="ta-grid-bg" />
      <div className="ta-scan" />
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
        style={{ width: '100%', maxWidth: 440, position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="ta-label" style={{ justifyContent: 'center', marginBottom: 14 }}>Secure Access</div>
          <h1 className="ta-h2" style={{ fontSize: '2.2rem', marginBottom: 10 }}>Welcome Back</h1>
          <p className="ta-body">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="ta-card" style={{ padding: '40px 36px' }}>
          <div className="ta-card-accent" />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'rgba(226,232,240,0.5)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'rgba(226,232,240,0.5)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength={6} placeholder="••••••••" />
            </div>
            <button type="submit" disabled={loading} className="ta-btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8, padding: '13px 22px', opacity: loading ? 0.65 : 1 }}>
              {loading ? 'Signing In...' : 'Sign In →'}
            </button>
          </form>

          <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'rgba(226,232,240,0.4)' }}>
              Don't have an account?{' '}
              <Link to="/theme-a/register" style={{ color: 'var(--ta-blue)', fontWeight: 600, textDecoration: 'none' }}>Sign Up</Link>
            </p>
          </div>
        </div>

        {/* Mono footer note */}
        <p style={{ textAlign: 'center', marginTop: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(226,232,240,0.2)', letterSpacing: '0.08em' }}>
          // encrypted · jwt-secured · tls-1.3
        </p>
      </motion.div>
    </div>
  )
}
