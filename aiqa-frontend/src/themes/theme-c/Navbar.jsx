import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const navLinks = [
  { to: '/theme-c/platform', label: 'Platform' },
  { to: '/theme-c/services', label: 'Services' },
  { to: '/theme-c/industries', label: 'Industries' },
  { to: '/theme-c/about', label: 'About' },
]

export default function NavbarC() {
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
    setUser(null); navigate('/theme-c')
  }

  return (
    <>
      <nav className={`tc-navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/theme-c" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={Logo} alt="AIQA Labs" className="tc-nav-logo" />
        </Link>

        <div className="tc-nav-links tc-desktop">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={`tc-nav-link${location.pathname === l.to ? ' active' : ''}`}>{l.label}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="tc-desktop">
          {user ? (
            <>
              <span style={{ fontSize: '0.82rem', color: 'rgba(240,237,232,0.4)' }}>{user.name}</span>
              <button className="tc-btn-ghost" onClick={logout}>Logout</button>
            </>
          ) : (
            <button className="tc-btn-primary" onClick={() => navigate('/theme-c/contact')} style={{ padding: '8px 20px', fontSize: '0.82rem' }}>
              Contact
            </button>
          )}
        </div>

        <button className="tc-mobile" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: i === 1 ? 16 : 22, height: 2, background: 'rgba(240,237,232,0.7)', borderRadius: 2, transition: '0.3s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1 }} />
          ))}
        </button>
      </nav>

      <div className="tc-mobile-menu tc-mobile" style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)', opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none', transition: 'all 0.3s ease' }}>
        {navLinks.map(l => (
          <Link key={l.to} to={l.to} className={`tc-mobile-link${location.pathname === l.to ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {user ? (
            <button className="tc-btn-ghost" onClick={() => { logout(); setMenuOpen(false) }} style={{ width: '100%' }}>Logout</button>
          ) : (
            <button className="tc-btn-primary" onClick={() => { navigate('/theme-c/contact'); setMenuOpen(false) }} style={{ width: '100%', justifyContent: 'center' }}>Get in Touch</button>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .tc-desktop { display: none !important; } }
        @media (min-width: 769px) { .tc-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
