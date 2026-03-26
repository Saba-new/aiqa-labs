import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function LoginC() {
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
          navigate('/theme-c')
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
    <div className="tc" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px', position: 'relative' }}>
      <div className="tc-grain" />
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
        style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="tc-label" style={{ justifyContent: 'center', marginBottom: 14 }}>Secure Access</div>
          <h1 className="tc-h2" style={{ fontSize: '2.2rem', marginBottom: 10 }}>Welcome Back</h1>
          <p className="tc-body">Sign in to your account</p>
        </div>

        <div className="tc-card" style={{ padding: '40px 36px' }}>
          <div className="tc-card-gold-line" />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'var(--tc-muted)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'var(--tc-muted)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength={6} placeholder="••••••••" />
            </div>
            <button type="submit" disabled={loading} className="tc-btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 8, opacity: loading ? 0.65 : 1 }}>
              {loading ? 'Signing In...' : 'Sign In →'}
            </button>
          </form>
          <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--tc-border)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--tc-muted)' }}>
              Don't have an account?{' '}
              <Link to="/theme-c/register" style={{ color: 'var(--tc-gold)', fontWeight: 600, textDecoration: 'none' }}>Sign Up</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
