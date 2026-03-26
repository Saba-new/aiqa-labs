import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HexBackground from './components/HexBackground'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Services from './pages/Services'
import Industries from './pages/Industries'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Login from './pages/Login'
import Register from './pages/Register'

// Theme A — Neural Forge
import NavbarA from './themes/theme-a/Navbar'
import FooterA from './themes/theme-a/Footer'
import HomeA from './themes/theme-a/Home'
import PlatformA from './themes/theme-a/Platform'
import ServicesA from './themes/theme-a/Services'
import IndustriesA from './themes/theme-a/Industries'
import AboutA from './themes/theme-a/About'
import ContactA from './themes/theme-a/Contact'
import CareersA from './themes/theme-a/Careers'
import LoginA from './themes/theme-a/Login'
import RegisterA from './themes/theme-a/Register'
import './themes/theme-a/theme-a.css'

// Theme B — Quantum Gradient
import NavbarB from './themes/theme-b/Navbar'
import FooterB from './themes/theme-b/Footer'
import HomeB from './themes/theme-b/Home'
import PlatformB from './themes/theme-b/Platform'
import ServicesB from './themes/theme-b/Services'
import IndustriesB from './themes/theme-b/Industries'
import AboutB from './themes/theme-b/About'
import ContactB from './themes/theme-b/Contact'
import CareersB from './themes/theme-b/Careers'
import LoginB from './themes/theme-b/Login'
import RegisterB from './themes/theme-b/Register'
import './themes/theme-b/theme-b.css'

// Theme C — Carbon Precision
import NavbarC from './themes/theme-c/Navbar'
import FooterC from './themes/theme-c/Footer'
import HomeC from './themes/theme-c/Home'
import PlatformC from './themes/theme-c/Platform'
import ServicesC from './themes/theme-c/Services'
import IndustriesC from './themes/theme-c/Industries'
import AboutC from './themes/theme-c/About'
import ContactC from './themes/theme-c/Contact'
import CareersC from './themes/theme-c/Careers'
import LoginC from './themes/theme-c/Login'
import RegisterC from './themes/theme-c/Register'
import './themes/theme-c/theme-c.css'

function App() {
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
    <>
      {/* ── DEFAULT THEME ── */}
      <Routes>
        <Route path="/*" element={
          <div style={{ position: 'relative', minHeight: '100vh' }}>
            <HexBackground />
            <Navbar />
            <div style={{ position: 'relative', zIndex: 1 }}>
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
            </div>
            <Footer />
          </div>
        } />

        {/* ── THEME A — Neural Forge ── */}
        <Route path="/theme-a/*" element={
          <div style={{ position: 'relative', minHeight: '100vh' }}>
            <NavbarA />
            <div style={{ paddingTop: 64 }}>
              <Routes>
                <Route path="/" element={<HomeA />} />
                <Route path="/platform" element={<PlatformA />} />
                <Route path="/services" element={<ServicesA />} />
                <Route path="/industries" element={<IndustriesA />} />
                <Route path="/about" element={<AboutA />} />
                <Route path="/contact" element={<ContactA />} />
                <Route path="/careers" element={<CareersA />} />
                <Route path="/login" element={<LoginA />} />
                <Route path="/register" element={<RegisterA />} />
              </Routes>
            </div>
            <FooterA />
          </div>
        } />

        {/* ── THEME B — Quantum Gradient ── */}
        <Route path="/theme-b/*" element={
          <div style={{ position: 'relative', minHeight: '100vh' }}>
            <NavbarB />
            <div style={{ paddingTop: 64 }}>
              <Routes>
                <Route path="/" element={<HomeB />} />
                <Route path="/platform" element={<PlatformB />} />
                <Route path="/services" element={<ServicesB />} />
                <Route path="/industries" element={<IndustriesB />} />
                <Route path="/about" element={<AboutB />} />
                <Route path="/contact" element={<ContactB />} />
                <Route path="/careers" element={<CareersB />} />
                <Route path="/login" element={<LoginB />} />
                <Route path="/register" element={<RegisterB />} />
              </Routes>
            </div>
            <FooterB />
          </div>
        } />

        {/* ── THEME C — Carbon Precision ── */}
        <Route path="/theme-c/*" element={
          <div className="tc" style={{ position: 'relative', minHeight: '100vh' }}>
            <NavbarC />
            <div style={{ paddingTop: 64 }}>
              <Routes>
                <Route path="/" element={<HomeC />} />
                <Route path="/platform" element={<PlatformC />} />
                <Route path="/services" element={<ServicesC />} />
                <Route path="/industries" element={<IndustriesC />} />
                <Route path="/about" element={<AboutC />} />
                <Route path="/contact" element={<ContactC />} />
                <Route path="/careers" element={<CareersC />} />
                <Route path="/login" element={<LoginC />} />
                <Route path="/register" element={<RegisterC />} />
              </Routes>
            </div>
            <FooterC />
          </div>
        } />
      </Routes>

      <ToastContainer theme="dark" toastStyle={{ background: '#0D0F16', border: '1px solid rgba(245,158,11,0.2)', color: '#E8EAF0' }} />
    </>
  )
}

export default App
