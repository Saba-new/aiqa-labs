import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function FooterA() {
  const cols = [
    { label: 'Product', links: [{ to: '/theme-a/platform', text: 'Platform' }, { to: '/theme-a/services', text: 'Services' }, { to: '/theme-a/industries', text: 'Industries' }] },
    { label: 'Company', links: [{ to: '/theme-a/about', text: 'About' }, { to: '/theme-a/careers', text: 'Careers' }, { to: '/theme-a/contact', text: 'Contact' }] },
    { label: 'Connect', links: [{ href: '#', text: 'LinkedIn' }, { href: '#', text: 'Facebook' }, { href: '#', text: 'Instagram' }] },
  ]

  return (
    <footer className="ta-footer">
      <div className="ta-container">
        <div className="ta-footer-grid">
          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <img src={Logo} alt="AIQA" style={{ height: 26, opacity: 0.85 }} />
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(226,232,240,0.5)', lineHeight: 1.7, maxWidth: 300, marginBottom: 24 }}>
              Discover how our solutions and products deliver exceptional value.
            </p>
            <Link to="/theme-a/contact" style={{ fontSize: '0.875rem', color: '#3B82F6', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Work with us →
            </Link>
          </div>

          {/* Link cols */}
          {cols.map((col, ci) => (
            <div key={ci}>
              <div className="ta-footer-col-label">{col.label}</div>
              {col.links.map((l, li) => {
                const Tag = l.to ? Link : 'a'
                const props = l.to ? { to: l.to } : { href: l.href }
                return <Tag key={li} {...props} className="ta-footer-link">{l.text}</Tag>
              })}
            </div>
          ))}
        </div>

        <div className="ta-footer-bottom">
          <span className="ta-footer-copy">©2026 AIQA Labs. All rights reserved.</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'rgba(59,130,246,0.4)' }}>
            // neural-forge-theme
          </span>
        </div>
      </div>
    </footer>
  )
}
