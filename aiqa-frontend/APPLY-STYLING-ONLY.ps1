# Apply Dark Neural Styling to Existing Content
# This script adds the visual styling without changing your content

Write-Host "Applying Dark Neural styling to your existing content..." -ForegroundColor Cyan
Write-Host ""

$basePath = "c:\Users\SABARISH\Desktop\Intern\aiqa-frontend\src"

# Create new Navbar with Dark Neural styling
$navbarContent = @'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo192 from '../assets/logo192.png'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { path: '/', label: 'Home' },
    { path: '/platform', label: 'Platform' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(10, 14, 39, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 217, 255, 0.1)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '16px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src={logo192} alt="AIQA" style={{ height: '40px', width: 'auto' }} />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #AC6AFF 0%, #07B4EB 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.02em',
          }}>AIQA</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-nav">
          {links.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: '8px 16px',
                  color: isActive ? '#00D9FF' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  background: isActive ? 'rgba(0, 217, 255, 0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(0, 217, 255, 0.2)' : '1px solid transparent',
                  transition: 'all 0.3s',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid rgba(0, 217, 255, 0.2)',
            color: '#00D9FF',
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'rgba(10, 14, 39, 0.95)',
            backdropFilter: 'blur(20px)',
            padding: '20px 5%',
            borderTop: '1px solid rgba(0, 217, 255, 0.1)',
          }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '12px 16px',
                color: location.pathname === link.path ? '#00D9FF' : 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
                marginBottom: '8px',
                background: location.pathname === link.path ? 'rgba(0, 217, 255, 0.1)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
'@

Write-Host "Updating Navbar with Dark Neural styling..." -ForegroundColor Yellow
$navbarContent | Out-File -FilePath "$basePath\components\Navbar.jsx" -Encoding UTF8 -Force
Write-Host "  Navbar updated successfully" -ForegroundColor Green

Write-Host ""
Write-Host "Styling applied!" -ForegroundColor Green
Write-Host "Your content is the same, just styled with the Dark Neural theme." -ForegroundColor Cyan
Write-Host "Refresh your browser to see the changes." -ForegroundColor Yellow
Write-Host ""
