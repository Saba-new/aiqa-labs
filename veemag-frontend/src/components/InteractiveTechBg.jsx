import React, { useEffect, useRef, useState } from 'react'
import './InteractiveTechBg.css'

const InteractiveTechBg = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      // Normalize mouse position to -1 to 1 range
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2
      
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="interactive-tech-bg" ref={containerRef}>
      {/* Deep background layer - moves slowest */}
      <div 
        className="bg-layer layer-1"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
        }}
      >
        <div className="circuit-pattern"></div>
      </div>

      {/* Middle layer */}
      <div 
        className="bg-layer layer-2"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      >
        {/* Tech nodes */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="tech-node"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Connection lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="connection-line"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 200}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Foreground layer - moves fastest */}
      <div 
        className="bg-layer layer-3"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
        }}
      >
        {/* Floating tech elements */}
        <div className="tech-element element-1">
          <div className="hexagon-container">
            <div className="hexagon"></div>
            <div className="hexagon-glow"></div>
          </div>
        </div>

        <div className="tech-element element-2">
          <div className="circle-scanner">
            <div className="scanner-ring"></div>
            <div className="scanner-ring ring-2"></div>
            <div className="scanner-ring ring-3"></div>
          </div>
        </div>

        <div className="tech-element element-3">
          <div className="data-cube">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>

        {/* Neural network visualization */}
        <div className="neural-network">
          {[...Array(8)].map((_, i) => (
            <div
              key={`neuron-${i}`}
              className="neuron"
              style={{
                left: `${15 + i * 12}%`,
                top: `${30 + Math.sin(i) * 20}%`
              }}
            >
              <div className="neuron-core"></div>
              <div className="neuron-pulse"></div>
            </div>
          ))}
        </div>

        {/* Data streams */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="data-stream"
            style={{
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.8}s`
            }}
          >
            <div className="stream-bit"></div>
            <div className="stream-bit"></div>
            <div className="stream-bit"></div>
          </div>
        ))}
      </div>

      {/* Central focal point */}
      <div 
        className="central-focus"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) scale(${1 + Math.abs(mousePosition.x) * 0.05})`
        }}
      >
        <div className="focus-ring"></div>
        <div className="focus-ring ring-2"></div>
        <div className="focus-ring ring-3"></div>
        <div className="ai-core">
          <div className="core-inner"></div>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="overlay-gradient"></div>
    </div>
  )
}

export default InteractiveTechBg
