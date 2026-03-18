import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer style={{ background: '#05030A', color: '#FFF7ED', padding: 0, borderTop: '1px solid rgba(251,146,60,0.08)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.35), rgba(244,114,182,0.25), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(251,146,60,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="footer-main" style={{
        padding: '64px clamp(32px,8vw,120px) 40px clamp(32px,8vw,120px)',
        minHeight: 320, position: 'relative', zIndex: 1,
      }}>
        <div style={{ flex: 2, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <img src={Logo} alt="AIQA" style={{ height: 28, width: 'auto', opacity: 0.85 }} />

          </div>
          <div style={{ fontSize: '1.3rem', fontWeight: 600, lineHeight: 1.4, color: 'rgba(255,225,190,0.75)', maxWidth: 440 }}>
            Discover how our solutions and products deliver exceptional value.
          </div>
          <a href="/contact" style={{ fontSize: '1rem', color: '#FB923C', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8, width: 'fit-content', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#F472B6'}
            onMouseLeave={e => e.currentTarget.style.color = '#FB923C'}
          >Work with us <span style={{ fontSize: 18 }}>→</span></a>
          <div className="desktop-only" style={{ fontSize: '0.82rem', color: 'rgba(255,225,190,0.2)', marginTop: 40 }}>©2026 AIQA Labs. All rights reserved.</div>
        </div>

        <div className="footer-links-grid" style={{ flex: 3, minWidth: 340 }}>
          {[
            { label: 'Services', links: [{ to: '/services', text: 'Services' }, { to: '/industries', text: 'Industries' }, { to: '/platform', text: 'Platform' }] },
            { label: 'Company', links: [{ to: '/about', text: 'About' }, { to: '/careers', text: 'Careers' }, { to: '/contact', text: 'Contact' }] },
            { label: 'Social', links: [{ href: '#', text: 'LinkedIn' }, { href: '#', text: 'Facebook' }, { href: '#', text: 'Instagram' }] },
          ].map((col, ci) => (
            <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ fontWeight: 700, color: 'rgba(255,225,190,0.35)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>{col.label}</div>
              {col.links.map((l, li) => {
                const Tag = l.to ? Link : 'a'
                const props = l.to ? { to: l.to } : { href: l.href }
                return (
                  <Tag key={li} {...props} style={{ color: 'rgba(255,225,190,0.55)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FFF7ED'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,225,190,0.55)'}
                  >{l.text}</Tag>
                )
              })}
            </div>
          ))}
        </div>

        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', gap: 20 }}>
          <img src={Logo} alt="AIQA" style={{ height: 48, opacity: 0.12, filter: 'brightness(0) invert(1)' }} />
          <div className="mobile-only" style={{ fontSize: '0.82rem', color: 'rgba(255,225,190,0.2)', textAlign: 'center', width: '100%' }}>©2026 AIQA Labs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
