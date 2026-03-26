import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const navLinks = [
  { to: '/theme-b/platform', label: 'Platform' },
  { to: '/theme-b/services', label: 'Services' },
  { to: '/theme-b/industries', label: 'Industries' },
  { to: '/theme-b/about', label: 'About' },
]

export default function NavbarB() {
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
    setUser(null); navigate('/theme-b')
  }

  return (
    <>
      <nav className={`tb-navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/theme-b" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={Logo} alt="AIQA Labs" className="tb-nav-logo" />
        </Link>

        <div className="tb-nav-links tb-desktop">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={`tb-nav-link${location.pathname === l.to ? ' active' : ''}`}>{l.label}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="tb-desktop">
          {user ? (
            <>
              <span style={{ fontSize: '0.82rem', color: 'rgba(248,250,252,0.4)' }}>{user.name}</span>
              <button className="tb-btn-ghost" onClick={logout}>Logout</button>
            </>
          ) : (
            <button className="tb-btn-primary" onClick={() => navigate('/theme-b/contact')} style={{ padding: '8px 20px', fontSize: '0.82rem' }}>
              Contact
            </button>
          )}
        </div>

        <button className="tb-mobile" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: i === 1 ? 16 : 22, height: 2, background: 'rgba(248,250,252,0.7)', borderRadius: 2, transition: '0.3s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1 }} />
          ))}
        </button>
      </nav>

      <div className="tb-mobile-menu tb-mobile" style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)', opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none', transition: 'all 0.3s ease' }}>
        {navLinks.map(l => (
          <Link key={l.to} to={l.to} className={`tb-mobile-link${location.pathname === l.to ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {user ? (
            <button className="tb-btn-ghost" onClick={() => { logout(); setMenuOpen(false) }} style={{ width: '100%' }}>Logout</button>
          ) : (
            <button className="tb-btn-primary" onClick={() => { navigate('/theme-b/contact'); setMenuOpen(false) }} style={{ width: '100%', justifyContent: 'center' }}>Get in Touch</button>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .tb-desktop { display: none !important; } }
        @media (min-width: 769px) { .tb-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
