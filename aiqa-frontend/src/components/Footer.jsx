import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const cols = [
  { h: 'Product', links: [{ l: 'Platform', to: '/platform' }, { l: 'Services', to: '/services' }, { l: 'Industries', to: '/industries' }] },
  { h: 'Company', links: [{ l: 'About', to: '/about' }, { l: 'Careers', to: '/careers' }, { l: 'Contact', to: '/contact' }] },
  { h: 'Legal', links: [{ l: 'Privacy Policy', href: '#' }, { l: 'Terms of Service', href: '#' }, { l: 'Security', href: '#' }] },
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(90deg, #232B5D 0%, #3B46FF 60%, #8B5CF6 100%)', color: '#fff', padding: 0, borderTop: 'none' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '56px clamp(32px,8vw,120px) 32px clamp(32px,8vw,120px)',
        minHeight: 320,
        gap: 32
      }}>
        {/* Left: Headline and CTA */}
        <div style={{ flex: 2, minWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 32 }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 24, fontFamily: 'Inter, sans-serif', color: '#fff', maxWidth: 520 }}>
            Discover how our solutions and products deliver exceptional value.
          </div>
          <a href="#contact" style={{ fontSize: '1.25rem', color: '#fff', textDecoration: 'underline', fontWeight: 500, fontFamily: 'Inter, sans-serif', display: 'inline-flex', alignItems: 'center', gap: 8, width: 'fit-content', borderBottom: '2px solid #fff', paddingBottom: 2, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#3B46FF'}
            onMouseLeave={e => e.currentTarget.style.color = '#fff'}
          >Work with us <span style={{ fontSize: 22, marginLeft: 2 }}>→</span></a>
          <div style={{ fontSize: '0.95rem', color: '#9CA3AF', marginTop: 64 }}>©2026 AIQA . All rights reserved.</div>
        </div>

        {/* Center: Navigation columns */}
        <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, minWidth: 360 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: 8 }}>Services</div>
            <Link to="/services" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: 2 }}>Services</Link>
            <Link to="/industries" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: 2 }}>Industries</Link>
            <Link to="/platform" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: 2 }}>Platform</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: 8 }}>About</div>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: 2 }}>About</Link>
            <Link to="/careers" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: 2 }}>Careers</Link>
            <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: 2 }}>Contact</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: 8 }}>Social</div>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: 2 }}>LinkedIn</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: 2 }}>Facebook</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: 2 }}>Instagram</a>
          </div>
        </div>

        {/* Right: Logo */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', minWidth: 120 }}>
          <img src={Logo} alt="AIQA" style={{ height: 64, width: 'auto', opacity: 0.95, filter: 'drop-shadow(0 2px 16px #0B1120)' }} />
        </div>
      </div>
    </footer>
  )
}
