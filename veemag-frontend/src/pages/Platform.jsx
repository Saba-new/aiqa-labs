import React from 'react'
import { motion } from 'framer-motion'

const Platform = () => {
  const features = [
    {
      title: 'Real-time Data Acquisition',
      description: 'Connect, capture, and stream data from distributed systems in real-time.',
      icon: '📊'
    },
    {
      title: 'Universal Compatibility',
      description: 'Integrate seamlessly with protocols like BACnet/IP, Modbus TCP, OPC UA.',
      icon: '🔌'
    },
    {
      title: 'Resilient Connectivity',
      description: 'Maintain operations even in low-connectivity environments.',
      icon: '🌐'
    },
    {
      title: 'Bi-Directional Control',
      description: 'Monitor and control your systems from anywhere.',
      icon: '🎮'
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain insights with predictive analytics and simulations.',
      icon: '📈'
    },
    {
      title: 'Cloud Integration',
      description: 'Seamless cloud deployment and scaling capabilities.',
      icon: '☁️'
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
          <div className="text-sm text-secondary mb-4 font-semibold">OUR PLATFORM</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What Makes <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>TwinV</span> Exceptional?
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform seamlessly integrates with any protocol, offering unmatched 
            flexibility and performance for your IoT and Digital Twin solutions.
          </p>
        </motion.div>

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
  )
}

export default Platform
