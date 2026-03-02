import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleHoverBg from './components/ParticleHoverBg'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Services from './pages/Services'
import Industries from './pages/Industries'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  // Wake up backend on app load to prevent form submission failures
  useEffect(() => {
    const wakeUpBackend = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/health`, { timeout: 60000 })
        console.log('✅ Backend is awake and ready')
      } catch (error) {
        console.log('⚠️ Backend waking up...', error.message)
      }
    }
    wakeUpBackend()
  }, [])

  return (
    <div className="relative min-h-screen">
      <ParticleHoverBg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  )
}

export default App
