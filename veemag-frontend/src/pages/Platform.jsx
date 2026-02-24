import React from 'react'
import { motion } from 'framer-motion'

const Platform = () => {
  const features = [
    {
      title: 'Real-time Data Acquisition',
      description: 'Connect, capture, and stream performance data from distributed systems in real-time, ensuring secure and effortless data flow.',
      icon: '📡'
    },
    {
      title: 'Universal Compatibility',
      description: 'Facilitate seamless integration with protocols like BACnet/IP, Modbus TCP, OPC UA, RDM, and Tridium Niagara.',
      icon: '🔌'
    },
    {
      title: 'Resilient Connectivity',
      description: 'Maintain uninterrupted operations even in low-connectivity environments with automatic data synchronization.',
      icon: '🌐'
    },
    {
      title: 'Bi-Directional Control',
      description: 'Execute commands, adjust parameters, and manage system functions remotely with reliable cloud-based communication.',
      icon: '🎮'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Consolidate data into a unified platform for advanced analytics, visualizations, and ML-powered insights.',
      icon: '📊'
    },
    {
      title: 'Reliable and Efficient',
      description: 'Discover and securely connect controllers with blazing-fast communication, compatible with Windows and Linux.',
      icon: '⚡'
    },
  ]

  return (
    <div className="relative z-10 min-h-screen pt-32 px-6 pb-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-500 uppercase mb-2">Integrate with Existing Tools</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Combine. Connect. <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Contribute.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Seamlessly integrate your existing platform with ours to unlock limitless possibilities.
            Connect IoT devices, organize data efficiently, and gain actionable insights.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-primary hover:bg-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all glow"
          >
            Try Twin V
          </motion.button>
        </motion.div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase mb-2">We believe</p>
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
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platform
