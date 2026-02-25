import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import starBg from '../assets/starBg.png'
import groupLogo from '../assets/GroupLogo.png'
import group1 from '../assets/Group1.png'
import group2 from '../assets/Group2.png'
import group3 from '../assets/Group3.png'
import group4 from '../assets/Group4.png'
import group5 from '../assets/Group5.png'
import group6 from '../assets/Group6.png'
import contentImg from '../assets/content.png'
import graphLogo from '../assets/graph.png'

const Platform = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: group1,
      title: 'Real-time Data Acquisition',
      description:
        'Connect, capture, and stream performance data from distributed systems in real-time, ensuring secure and effortless data flow.',
    },
    {
      icon: group2,
      title: 'Universal Compatibility',
      description:
        'Facilitate seamless integration with protocols like BACnet/IP, Modbus TCP, OPC UA, RDM, and Tridium Niagara, enabling smooth communication with your existing systems.',
    },
    {
      icon: group3,
      title: 'Resilient Connectivity',
      description:
        'Maintain uninterrupted operations even in low-connectivity environments, with automatic data synchronization restoring the latest state once connection is re-established.',
    },
    {
      icon: group4,
      title: 'Bi-Directional Control',
      description:
        'Easily execute commands, adjust parameters, and manage system functions remotely with reliable cloud-based bi-directional communication.',
    },
    {
      icon: group5,
      title: 'Data-Driven Decisions',
      description:
        'Consolidate scattered data into a unified platform for advanced analytics, visualizations, and ML-powered insights, empowering smarter enterprise decision-making.',
    },
    {
      icon: group6,
      title: 'Reliable and Efficient',
      description:
        'Discover and securely connect controllers and endpoints with blazing-fast, uninterrupted communication, compatible with both Windows and Linux systems.',
    },
  ]

  return (
    <div className="relative z-10 min-h-screen pt-32 pb-20">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="text-center px-6 mb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">Integrate with Existing Tools</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Combine. Connect.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Contribute.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Seamlessly integrate your existing platform with ours to unlock limitless possibilities.
            Connect IoT devices, organize data efficiently, and gain actionable insights to
            optimize operations and drive innovation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/contact')}
            className="bg-primary hover:bg-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all glow"
          >
            Try Twin V
          </motion.button>
          <div className="mt-10">
            <img src={starBg} alt="" className="w-3/5 mx-auto opacity-80" />
          </div>
        </motion.div>
      </div>

      {/* ── What Makes TwinV Exceptional ─────────────────────────────── */}
      <div className="px-6 md:px-20 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">OUR PLATFORM</p>
            <h2 className="text-4xl font-bold mb-6">What Makes TwinV Exceptional?</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our platform seamlessly integrates with any protocol, connecting diverse assets and
              systems to fit your unique technology stack. Powered by advanced AI, it analyzes
              real-time data to uncover patterns, optimize operations, and enable proactive,
              data-driven decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-end"
          >
            <img src={groupLogo} alt="TwinV Platform" className="w-full max-w-md opacity-90" />
          </motion.div>
        </div>
      </div>

      {/* ── Features Grid ───────────────────────────────────────────── */}
      <div className="px-6 md:px-20 mb-20">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">We believe</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            IoT Intelligence that seamlessly fits into your existing stack
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-2xl transition-all duration-300"
            >
              <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4 object-contain" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Dark TwinV Banner ────────────────────────────────────────── */}
      <div style={{ backgroundColor: '#000151' }} className="py-16 px-6 md:px-20 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-3xl font-bold leading-tight"
          >
            All the ways TwinV transforms your IoT data into actionable insights.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-gray-300 leading-relaxed"
          >
            We don't disrupt your systems—we connect them into a smarter, data-driven network.
            TwinV seamlessly connects with your IoT devices, sensory platforms, and business
            applications, transforming them into a unified, data-driven ecosystem. Unlock new
            possibilities to optimize operations and drive efficiency.
          </motion.div>
        </div>
      </div>

      {/* ── TwinV in Action ─────────────────────────────────────────── */}
      <div className="px-6 md:px-20 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-12"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">TwinV in Action</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            TwinV Addresses the 3 Core Challenges of IoT Integration.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            TwinV simplifies IoT integrations by partnering with top OEMs and hardware manufacturers,
            reducing capital expenditure. Its cloud-based commissioning setup streamlines the process,
            cutting time from months to just 3 days. With real-time performance insights,
            TwinV's O&amp;M applications boost agility and support faster decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Integrations card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Integrations</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              TwinV allows seamless integration with both your existing systems and external platforms,
              providing out-of-the-box solutions that reduce capital expenditure and simplify
              IoT project implementation.
            </p>
            <div className="flex justify-center">
              <img src={contentImg} alt="Integrations" className="w-4/5 rounded-xl opacity-90" />
            </div>
          </motion.div>

          {/* Commissioning + O&M */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl flex gap-6 items-center"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Commissioning</h3>
                <p className="text-gray-400 leading-relaxed">
                  What typically takes months is simplified with our platform's cloud-based setup,
                  enabling seamless commissioning in just a few days.
                </p>
              </div>
              <img src={graphLogo} alt="Commissioning" className="w-16 h-16 object-contain opacity-80" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl flex gap-6 items-center"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">O&amp;M Applications</h3>
                <p className="text-gray-400 leading-relaxed">
                  Enhance agility and decision-making in operations and maintenance with real-time
                  insights through our platform's comprehensive suite of tools.
                </p>
              </div>
              <img src={graphLogo} alt="Analytics" className="w-16 h-16 object-contain opacity-80" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platform
