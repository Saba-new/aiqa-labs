import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleHoverBg from './components/ParticleHoverBg'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Services from './pages/Services'
import Industries from './pages/Industries'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#0a0a0a' }}>
      <ParticleHoverBg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  )
}

export default App
