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

  useEffect(() => {
    window.scrollTo(0, 0); setMenuOpen(false)
  }, [location])

  const logout = () => {
    localStorage.removeItem('token'); localStorage.removeItem('user')
    setUser(null); navigate('/')
  }

  return (
    <>
      <nav className="navbar-neo" style={{
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.06)' : 'none',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src={Logo} alt="AIQA Labs" className="navbar-logo" />
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#3B46FF', letterSpacing: '-0.01em' }}>AIQA</span>
        </Link>

        {/* Desktop center links */}
        <div className="desktop-only" style={{ gap: 2, alignItems: 'center' }}>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={`nav-link-neo${location.pathname === l.to ? ' active-link' : ''}`}>{l.label}</Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="desktop-only" style={{ alignItems: 'center', gap: 8 }}>
          {user ? (
            <>
              <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>{user.name}</span>
              <button className="btn-pill-outline" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn-pill-outline" onClick={() => navigate('/contact')}>Contact</button>
              
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-only" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 8 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: 20, height: 2, background: '#374151', borderRadius: 2, transition: 'all 0.25s ease', transformOrigin: 'center',
              ...(menuOpen && i === 0 ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}),
              ...(menuOpen && i === 1 ? { opacity: 0 } : {}),
              ...(menuOpen && i === 2 ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}),
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', top: 64, left: 0, right: 0, background: '#fff',
        borderBottom: '1px solid #E5E7EB', zIndex: 999,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
        opacity: menuOpen ? 1 : 0, transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
        padding: '16px 24px 24px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      }}>
        {navLinks.map(l => (
          <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} style={{
            display: 'block', padding: '13px 0', borderBottom: '1px solid #F3F4F6',
            color: location.pathname === l.to ? '#3B46FF' : '#374151',
            textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem',
          }}>{l.label}</Link>
        ))}
        <button className="btn-pill" onClick={() => { setMenuOpen(false); navigate('/contact') }} style={{ marginTop: 18, width: '100%' }}>Get a demo</button>
      </div>
    </>
  )
}
