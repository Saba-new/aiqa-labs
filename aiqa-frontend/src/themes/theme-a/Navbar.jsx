import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const navLinks = [
  { to: '/theme-a/platform', label: 'Platform' },
  { to: '/theme-a/services', label: 'Services' },
  { to: '/theme-a/industries', label: 'Industries' },
  { to: '/theme-a/about', label: 'About' },
]

export default function NavbarA() {
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
    setUser(null); navigate('/theme-a')
  }

  return (
    <>
      <nav className={`ta-navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Logo */}
        <Link to="/theme-a" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={Logo} alt="AIQA Labs" className="ta-nav-logo" />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="ta-nav-links ta-desktop">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={`ta-nav-link${location.pathname === l.to ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="ta-desktop">
          {user ? (
            <>
              <span style={{ fontSize: '0.8rem', color: 'rgba(226,232,240,0.4)', fontFamily: "'JetBrains Mono', monospace" }}>{user.name}</span>
              <button className="ta-btn-outline" onClick={logout}>Logout</button>
            </>
          ) : (
            <button className="ta-btn-primary" onClick={() => navigate('/theme-a/contact')} style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
              Contact
            </button>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="ta-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: i === 1 ? 16 : 22, height: 2,
              background: 'rgba(226,232,240,0.7)', borderRadius: 2,
              transition: '0.3s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="ta-mobile-menu ta-mobile" style={{
        transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'all 0.3s ease',
      }}>
        {navLinks.map(l => (
          <Link key={l.to} to={l.to} className={`ta-mobile-link${location.pathname === l.to ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {user ? (
            <button className="ta-btn-outline" onClick={() => { logout(); setMenuOpen(false) }} style={{ width: '100%' }}>Logout</button>
          ) : (
            <button className="ta-btn-primary" onClick={() => { navigate('/theme-a/contact'); setMenuOpen(false) }} style={{ width: '100%', justifyContent: 'center' }}>
              Get in Touch
            </button>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .ta-desktop { display: none !important; } }
        @media (min-width: 769px) { .ta-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
