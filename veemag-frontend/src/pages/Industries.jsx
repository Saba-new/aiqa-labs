import React from 'react'
import { motion } from 'framer-motion'

const Industries = () => {
  const industries = [
    { name: 'FinTech', icon: '💰', desc: 'Banking and financial services transformation' },
    { name: 'Manufacturing', icon: '🏭', desc: 'Optimize production with custom solutions' },
    { name: 'Healthcare', icon: '🏥', desc: 'Digital health and patient care systems' },
    { name: 'Software', icon: '💻', desc: 'Build software of any complexity' },
    { name: 'Retail', icon: '🛍️', desc: 'E-commerce and retail management' },
    { name: 'Energy', icon: '⚡', desc: 'Smart grid and renewable energy' },
  ]

  return (
    <div className="relative z-10 min-h-screen pt-32 px-6 pb-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Industries</span> We Serve
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Drive innovation and growth with our deep domain expertise, 
            tailored solutions for diverse sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: '#AC6AFF' }}
              className="glass p-10 rounded-2xl text-center transition-all duration-300 cursor-pointer"
            >
              <div className="text-6xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
              <p className="text-gray-400">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industries
