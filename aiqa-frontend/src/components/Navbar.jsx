import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/services', label: 'SERVICES' },
    { path: '/platform', label: 'PROJECTS' },
    { path: '/industries', label: 'TECHNOLOGIES' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold gradient-text">
          AIQA
        </a>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-sm font-medium transition-colors hover:text-primary text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="/contact">
          <button className="bg-primary hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 glow">
            Get Started
          </button>
        </a>
      </div>
    </motion.nav>
  )
}

export default Navbar
