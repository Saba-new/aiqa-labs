import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function FooterB() {
  const cols = [
    { label: 'Product', links: [{ to: '/theme-b/platform', text: 'Platform' }, { to: '/theme-b/services', text: 'Services' }, { to: '/theme-b/industries', text: 'Industries' }] },
    { label: 'Company', links: [{ to: '/theme-b/about', text: 'About' }, { to: '/theme-b/careers', text: 'Careers' }, { to: '/theme-b/contact', text: 'Contact' }] },
    { label: 'Connect', links: [{ href: '#', text: 'LinkedIn' }, { href: '#', text: 'Facebook' }, { href: '#', text: 'Instagram' }] },
  ]

  return (
    <footer className="tb-footer">
      <div className="tb-container">
        <div className="tb-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <img src={Logo} alt="AIQA" style={{ height: 26, opacity: 0.85 }} />
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(248,250,252,0.45)', lineHeight: 1.7, maxWidth: 300, marginBottom: 24 }}>
              Discover how our solutions and products deliver exceptional value.
            </p>
            <Link to="/theme-b/contact" style={{ fontSize: '0.875rem', background: 'linear-gradient(135deg, #8B5CF6, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Work with us →
            </Link>
          </div>
          {cols.map((col, ci) => (
            <div key={ci}>
              <div className="tb-footer-col-label">{col.label}</div>
              {col.links.map((l, li) => {
                const Tag = l.to ? Link : 'a'
                const props = l.to ? { to: l.to } : { href: l.href }
                return <Tag key={li} {...props} className="tb-footer-link">{l.text}</Tag>
              })}
            </div>
          ))}
        </div>
        <div className="tb-footer-bottom">
          <span className="tb-footer-copy">©2026 AIQA Labs. All rights reserved.</span>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, #8B5CF6, #14B8A6)' }} />
        </div>
      </div>
    </footer>
  )
}
