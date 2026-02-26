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
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setDrawerVisible(false)
  }, [location])

  return (
    <nav
      className="navbar-neo"
      style={{ boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.6)' : 'none' }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} alt="AIQA" height={22} style={{ objectFit: 'contain' }} />
      </Link>

      {/* Desktop nav */}
      <div className="desktop-only" style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-link-neo${location.pathname === link.to ? ' active-link' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button
          className="btn-neo desktop-only"
          onClick={() => navigate('/contact')}
        >
          Get Started
        </button>
        <MenuOutlined
          className="mobile-only"
          onClick={() => setDrawerVisible(true)}
          style={{ fontSize: 20, color: '#ffffff', cursor: 'pointer' }}
        />
      </div>

      {/* Mobile drawer */}
      <Drawer
        title={<img src={Logo} alt="AIQA" height={16} />}
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{
          body: { background: '#05050f', padding: '16px 0' },
          header: { background: '#05050f', borderBottom: '1px solid rgba(255,255,255,0.07)' },
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 24px' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setDrawerVisible(false)}
              style={{
                color: location.pathname === link.to ? '#AC6AFF' : 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
                padding: '16px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                textDecoration: 'none',
                fontWeight: 500,
                letterSpacing: '0.03em',
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="get-started-button"
            style={{ marginTop: 28, width: '100%' }}
            onClick={() => { setDrawerVisible(false); navigate('/contact') }}
          >
            Get Started
          </button>
        </div>
      </Drawer>
    </nav>
  )
}

export default Header

