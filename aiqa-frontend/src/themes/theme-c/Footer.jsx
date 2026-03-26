import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function FooterC() {
  const cols = [
    { label: 'Product', links: [{ to: '/theme-c/platform', text: 'Platform' }, { to: '/theme-c/services', text: 'Services' }, { to: '/theme-c/industries', text: 'Industries' }] },
    { label: 'Company', links: [{ to: '/theme-c/about', text: 'About' }, { to: '/theme-c/careers', text: 'Careers' }, { to: '/theme-c/contact', text: 'Contact' }] },
    { label: 'Connect', links: [{ href: '#', text: 'LinkedIn' }, { href: '#', text: 'Facebook' }, { href: '#', text: 'Instagram' }] },
  ]

  return (
    <footer className="tc-footer">
      <div className="tc-container">
        <div className="tc-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <img src={Logo} alt="AIQA" style={{ height: 26, opacity: 0.85 }} />
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: 300, marginBottom: 24 }}>
              Discover how our solutions and products deliver exceptional value.
            </p>
            <Link to="/theme-c/contact" style={{ fontSize: '0.875rem', color: 'var(--tc-gold)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Work with us →
            </Link>
          </div>
          {cols.map((col, ci) => (
            <div key={ci}>
              <div className="tc-footer-col-label">{col.label}</div>
              {col.links.map((l, li) => {
                const Tag = l.to ? Link : 'a'
                const props = l.to ? { to: l.to } : { href: l.href }
                return <Tag key={li} {...props} className="tc-footer-link">{l.text}</Tag>
              })}
            </div>
          ))}
        </div>
        <div className="tc-footer-bottom">
          <span className="tc-footer-copy">©2026 AIQA Labs. All rights reserved.</span>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--tc-gold), var(--tc-copper))' }} />
        </div>
      </div>
    </footer>
  )
}
