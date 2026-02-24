import React, { useEffect, useRef, useState } from 'react'
import './ParticleHoverBg.css'

const ParticleHoverBg = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.error('Could not get canvas context')
      return
    }
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
        this.baseX = this.x
        this.baseY = this.y
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.baseX = this.x
        this.baseY = this.y
        this.density = (Math.random() * 30) + 1
        this.vx = Math.random() * 0.5 - 0.25
        this.vy = Math.random() * 0.5 - 0.25
        
        // Color variations
        const colors = [
          { r: 172, g: 106, b: 255 }, // Purple
          { r: 7, g: 180, b: 235 },   // Cyan
          { r: 255, g: 107, b: 153 }, // Pink
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.8)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }

      update() {
        // Mouse interaction
        const dx = mouseRef.current.x - this.x
        const dy = mouseRef.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const maxDistance = 150
        const force = (maxDistance - distance) / maxDistance
        const directionX = forceDirectionX * force * this.density
        const directionY = forceDirectionY * force * this.density

        if (distance < maxDistance) {
          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }

        // Add slight floating movement
        this.baseX += this.vx
        this.baseY += this.vy

        // Wrap around screen
        if (this.baseX < 0 || this.baseX > canvas.width) this.vx *= -1
        if (this.baseY < 0 || this.baseY > canvas.height) this.vy *= -1
      }
    }

    // Create particles
    const particleCount = 80
    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle())
    }

    // Mouse move handler (throttled)
    let throttleTimer = false
    const handleMouseMove = (e) => {
      if (throttleTimer) return
      throttleTimer = true
      setTimeout(() => {
        mouseRef.current.x = e.clientX
        mouseRef.current.y = e.clientY
        throttleTimer = false
      }, 16) // ~60fps
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Connect particles (optimized)
    const connect = () => {
      const particles = particlesRef.current
      for (let i = 0; i < particles.length; i++) {
        // Only check next few particles instead of all
        for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = 1 - distance / 100
            ctx.strokeStyle = `rgba(172, 106, 255, ${opacity * 0.15})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop with performance optimization
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      connect()
      
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="particle-hover-bg">
      {/* Gradient background */}
      <div className="gradient-bg"></div>
      
      {/* Circuit patterns */}
      <div className="circuit-overlay"></div>
      
      {/* Central AI Visualization */}
      <div className="ai-face-container">
        <div className="ai-face">
          {/* Left side - Human */}
          <div className="face-half human-side">
            <div className="eye left-eye"></div>
            <div className="face-glow"></div>
          </div>
          
          {/* Right side - Circuit */}
          <div className="face-half circuit-side">
            <div className="eye right-eye circuit-eye">
              <div className="circuit-ring"></div>
              <div className="circuit-ring ring-2"></div>
            </div>
            <div className="circuit-lines">
              <div className="circuit-line"></div>
              <div className="circuit-line"></div>
              <div className="circuit-line"></div>
              <div className="circuit-line"></div>
            </div>
            <div className="circuit-nodes">
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
            </div>
          </div>
          
          {/* Center divider */}
          <div className="face-divider"></div>
        </div>
        
        {/* Tech HUD elements */}
        <div className="hud-element hud-top-left"></div>
        <div className="hud-element hud-top-right"></div>
        <div className="hud-element hud-bottom-left"></div>
        <div className="hud-element hud-bottom-right"></div>
      </div>
      
      {/* Interactive particle canvas */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      {/* Overlay vignette */}
      <div className="vignette-overlay"></div>
    </div>
  )
}

export default ParticleHoverBg
