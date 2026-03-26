import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function RegisterC() {
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
          navigate('/theme-c')
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
    <div className="tc" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px', position: 'relative' }}>
      <div className="tc-grain" />
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
        style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="tc-label" style={{ justifyContent: 'center', marginBottom: 14 }}>New Account</div>
          <h1 className="tc-h2" style={{ fontSize: '2.2rem', marginBottom: 10 }}>Create Account</h1>
          <p className="tc-body">Join us and start your journey</p>
        </div>

        <div className="tc-card" style={{ padding: '40px 36px' }}>
          <div className="tc-card-gold-line" />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
              { label: 'Password', name: 'password', type: 'password', placeholder: '••••••••', hint: 'Minimum 6 characters' },
              { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: '••••••••' },
            ].map(f => (
              <div key={f.name}>
                <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'var(--tc-muted)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{f.label}</label>
                <input type={f.type} name={f.name} value={formData[f.name]} onChange={handleChange} required placeholder={f.placeholder} minLength={f.name === 'password' ? 6 : undefined} />
                {f.hint && <p style={{ marginTop: 5, fontSize: '0.7rem', color: 'var(--tc-lite)' }}>{f.hint}</p>}
              </div>
            ))}
            <button type="submit" disabled={loading} className="tc-btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 8, opacity: loading ? 0.65 : 1 }}>
              {loading ? 'Creating Account...' : 'Create Account →'}
            </button>
          </form>
          <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--tc-border)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--tc-muted)' }}>
              Already have an account?{' '}
              <Link to="/theme-c/login" style={{ color: 'var(--tc-gold)', fontWeight: 600, textDecoration: 'none' }}>Sign In</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
