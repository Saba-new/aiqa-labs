import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleHoverBg from './components/ParticleHoverBg'
import Home from './pages/Home'

function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#0a0a0a' }}>
      <ParticleHoverBg />
      <Navbar />
      <Home />
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  )
}

export default App
