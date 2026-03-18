import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.png'

const navLinks = [
  { to: '/platform', label: 'Platform' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const u = localStorage.getItem('user')
    if (u) setUser(JSON.parse(u))
  }, [location])

  useEffect(() => { window.scrollTo(0, 0); setMenuOpen(false) }, [location])

  const logout = () => {
    localStorage.removeItem('token'); localStorage.removeItem('user')
    setUser(null); navigate('/')
  }

  return (
    <>
      <nav className="navbar-neo" style={{
        background: scrolled ? 'rgba(8,6,8,0.95)' : 'rgba(8,6,8,0.7)',
        borderBottom: scrolled ? '1px solid rgba(251,146,60,0.1)' : '1px solid rgba(255,255,255,0.05)',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.6)' : 'none',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={Logo} alt="AIQA Labs" className="navbar-logo" style={{ height: 28, width: 'auto', opacity: 0.9 }} />
          
        </Link>

        <div className="desktop-only" style={{ gap: 2, alignItems: 'center' }}>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={`nav-link-neo${location.pathname === l.to ? ' active-link' : ''}`}>{l.label}</Link>
          ))}
        </div>

        <div className="desktop-only" style={{ alignItems: 'center', gap: 8 }}>
          {user ? (
            <>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,225,190,0.45)' }}>{user.name}</span>
              <button className="btn-pill-outline" onClick={logout}>Logout</button>
            </>
          ) : (
            <button className="btn-pill-outline" onClick={() => navigate('/contact')}>Contact</button>
          )}
        </div>

      <button className="mobile-only" onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 6, padding: 8, width: 40, alignItems: 'flex-end' }}>
        <span style={{ display: 'block', width: 24, height: 2, background: 'rgba(255,225,190,0.8)', transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(6px,6px)' : 'none' }} />
        <span style={{ display: 'block', width: 16, height: 2, background: 'rgba(255,225,190,0.8)', transition: '0.3s', opacity: menuOpen ? 0 : 1 }} />
        <span style={{ display: 'block', width: 24, height: 2, background: 'rgba(255,225,190,0.8)', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(6px,-6px)' : 'none' }} />
      </button>
    </nav>

    <div className={`mobile-menu mobile-only`} style={{
      transform: menuOpen ? 'translateY(0)' : 'translateY(-120%)',
      opacity: menuOpen ? 1 : 0,
      pointerEvents: menuOpen ? 'auto' : 'none'
    }}>
      {navLinks.map(l => (
        <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className={`mobile-menu-item${location.pathname === l.to ? ' active' : ''}`}>
          {l.label}
        </Link>
      ))}
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {user ? (
          <>
            <div style={{ color: 'rgba(255,225,190,0.4)', fontSize: '0.8rem', textAlign: 'center' }}>Logged in as {user.name}</div>
            <button className="btn-pill-outline" onClick={() => { logout(); setMenuOpen(false) }} style={{ width: '100%' }}>Logout</button>
          </>
        ) : (
          <>
            <button className="btn-pill" onClick={() => { navigate('/contact'); setMenuOpen(false) }} style={{ width: '100%' }}>Get in touch</button>
          </>
        )}
      </div>
    </div>
    </>
  )
}
