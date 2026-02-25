import React from 'react'
import './ParticleHoverBg.css'

const ParticleHoverBg = () => {
  return (
    <div className="particle-hover-bg">
      {/* Dark base */}
      <div className="gradient-bg" />

      {/* Dot grid overlay */}
      <div className="dot-grid" />

      {/* Ambient glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="orb orb-5" />

      {/* Edge vignette */}
      <div className="vignette-overlay" />
    </div>
  )
}

export default ParticleHoverBg
