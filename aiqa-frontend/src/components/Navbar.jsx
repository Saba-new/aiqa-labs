import React, { useState, useEffect } from 'react'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.png'

const navLinks = [
  { to: '/platform', label: 'Platform' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/about', label: 'About' },
]

function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [location])

  useEffect(() => {
    window.scrollTo(0, 0)
    setDrawerVisible(false)
  }, [location])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  return (
    <nav
      className="navbar-neo"
      style={{ 
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.8), 0 0 60px rgba(0, 217, 255, 0.1)' : 'none',
        background: scrolled ? 'rgba(10, 14, 39, 0.95)' : 'rgba(10, 14, 39, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 217, 255, 0.1)',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img
          src={Logo}
          alt="AIQA"
          className="navbar-logo"
          style={{ filter: 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.3))' }}
        />
      </Link>

      {/* Desktop nav */}
      <div className="desktop-only" style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-link-neo${location.pathname === link.to ? ' active-link' : ''}`}
            style={{
              color: location.pathname === link.to ? '#00D9FF' : 'rgba(255,255,255,0.7)',
              textShadow: location.pathname === link.to ? '0 0 20px rgba(0, 217, 255, 0.5)' : 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              background: location.pathname === link.to ? 'rgba(0, 217, 255, 0.1)' : 'transparent',
              border: location.pathname === link.to ? '1px solid rgba(0, 217, 255, 0.2)' : '1px solid transparent',
              transition: 'all 0.3s ease',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {user ? (
          <>
            <span className="desktop-only" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              Welcome, {user.name}
            </span>
            <button
              className="btn-neo desktop-only"
              onClick={handleLogout}
              style={{
                background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(124, 58, 237, 0.15))',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                color: '#00D9FF',
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="btn-neo desktop-only"
              onClick={() => navigate('/contact')}
              style={{
                background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(124, 58, 237, 0.15))',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                color: '#00D9FF',
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
              }}
            >
              Get Started
            </button>
          </>
        )}
        <MenuOutlined
          className="mobile-only"
          onClick={() => setDrawerVisible(true)}
          style={{ fontSize: 20, color: '#00D9FF', cursor: 'pointer' }}
        />
      </div>

      {/* Mobile drawer */}
      <Drawer
        title={<img src={Logo} alt="AIQA" style={{ height: 14, width: 'auto', display: 'block', filter: 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.3))' }} />}
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{
          body: { background: 'rgba(10, 14, 39, 0.98)', padding: '16px 0' },
          header: { background: 'rgba(10, 14, 39, 0.98)', borderBottom: '1px solid rgba(0, 217, 255, 0.1)' },
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 24px' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setDrawerVisible(false)}
              style={{
                color: location.pathname === link.to ? '#00D9FF' : 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
                padding: '16px 0',
                borderBottom: '1px solid rgba(0, 217, 255, 0.06)',
                textDecoration: 'none',
                fontWeight: 500,
                letterSpacing: '0.03em',
                textShadow: location.pathname === link.to ? '0 0 15px rgba(0, 217, 255, 0.5)' : 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <>
              <div style={{ padding: '16px 0', marginTop: 12, borderTop: '1px solid rgba(0, 217, 255, 0.06)', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                Welcome, {user.name}
              </div>
              <button
                className="get-started-button"
                style={{ 
                  marginTop: 16, 
                  width: '100%',
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(124, 58, 237, 0.15))',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  color: '#00D9FF',
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="get-started-button"
                style={{ 
                  marginTop: 28, 
                  width: '100%',
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(124, 58, 237, 0.15))',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  color: '#00D9FF',
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                }}
                onClick={() => { setDrawerVisible(false); navigate('/contact') }}
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </Drawer>
    </nav>
  )
}

export default Header

