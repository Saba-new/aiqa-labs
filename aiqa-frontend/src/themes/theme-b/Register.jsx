import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function RegisterB() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) { toast.error('Passwords do not match'); return }
    setLoading(true)
    const maxRetries = 3
    let lastError = null
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        if (attempt > 1) toast.info(`Waking up server... Attempt ${attempt}/${maxRetries}`)
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, { name: formData.name, email: formData.email, password: formData.password }, { timeout: 60000 })
        if (response.data.success) {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          toast.success('Registration successful!')
          navigate('/theme-b')
          return
        }
      } catch (error) {
        lastError = error
        if ((error.code === 'ECONNABORTED' || error.message === 'Network Error') && attempt < maxRetries) {
          await new Promise(r => setTimeout(r, 2000 * attempt)); continue
        }
        if (error.response) { toast.error(error.response?.data?.message || 'Registration failed'); break }
      }
    }
    if (lastError && !lastError.response) toast.error('Server is waking up. Please try again in 30 seconds.')
    setLoading(false)
  }

  return (
    <div className="tb" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px', position: 'relative' }}>
      <div className="tb-noise" />
      <div className="tb-orb tb-orb-violet" style={{ width: 500, height: 500, top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="tb-orb tb-orb-teal" style={{ width: 400, height: 400, bottom: '-10%', left: '50%', transform: 'translateX(-50%)' }} />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
        style={{ width: '100%', maxWidth: 440, position: 'relative', zIndex: 1 }}
      >
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="tb-label" style={{ justifyContent: 'center', marginBottom: 14 }}>New Account</div>
          <h1 className="tb-h2" style={{ fontSize: '2.2rem', marginBottom: 10 }}>Create Account</h1>
          <p className="tb-body">Join us and start your journey</p>
        </div>

        <div className="tb-card" style={{ padding: '40px 36px' }}>
          <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(20,184,166,0.4), transparent)' }} />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name', min: 2, max: 50 },
              { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
              { label: 'Password', name: 'password', type: 'password', placeholder: '••••••••', hint: 'Minimum 6 characters' },
              { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: '••••••••' },
            ].map(f => (
              <div key={f.name}>
                <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'rgba(248,250,252,0.5)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{f.label}</label>
                <input type={f.type} name={f.name} value={formData[f.name]} onChange={handleChange} required placeholder={f.placeholder} minLength={f.min} maxLength={f.max} />
                {f.hint && <p style={{ marginTop: 5, fontSize: '0.7rem', color: 'rgba(248,250,252,0.3)' }}>{f.hint}</p>}
              </div>
            ))}
            <button type="submit" disabled={loading} className="tb-btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8, padding: '13px 22px', opacity: loading ? 0.65 : 1 }}>
              {loading ? 'Creating Account...' : 'Create Account →'}
            </button>
          </form>
          <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'rgba(248,250,252,0.4)' }}>
              Already have an account?{' '}
              <Link to="/theme-b/login" style={{ background: 'linear-gradient(135deg, #8B5CF6, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600, textDecoration: 'none' }}>Sign In</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
