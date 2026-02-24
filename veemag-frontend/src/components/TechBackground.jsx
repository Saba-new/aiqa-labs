import React from 'react'
import './TechBackground.css'

const TechBackground = () => {
  return (
    <div className="tech-background">
      {/* Animated Grid */}
      <div className="grid-overlay"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="shapes-container">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>

      {/* Hexagon Pattern */}
      <div className="hexagon-pattern">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="hexagon" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>

      {/* Glowing Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Scanning Lines */}
      <div className="scan-line scan-line-1"></div>
      <div className="scan-line scan-line-2"></div>

      {/* Gradient Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
    </div>
  )
}

export default TechBackground
