import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  const stats = [
    { value: '9+', label: 'Years', title: 'Experience', desc: 'Driving innovation in tech industry' },
    { value: '10+', label: 'Industries', title: 'Served', desc: 'Empowering diverse sectors with technology' },
    { value: '100%', label: 'Client', title: 'Satisfaction', desc: 'Delivering excellence in every project' },
  ]

  const features = [
    {
      title: 'Seamless Integration',
      description: 'With smart automation and top-notch security, perfect solution for teams looking to work smarter.',
      icon: '🔗'
    },
    {
      title: 'Smart Automation',
      description: 'Automate complex workflows and boost productivity with AI-powered intelligent automation tools.',
      icon: '⚡'
    },
    {
      title: 'Top-notch Security',
      description: 'Enterprise-grade security measures to protect your valuable data and maintain compliance.',
      icon: '🔒'
    },
  ]

  return (
    <div className="relative min-h-screen">{/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Explore the Possibilities of{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AI Power
            </span>{' '}
            with VEEMAG
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            AI Application for seamless collaboration
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all glow hover:scale-105"
              style={{ textTransform: 'uppercase' }}
            >
              GET STARTED
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-8 text-center transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl font-bold mb-2" style={{ 
                  background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="text-xl font-semibold mb-2">{stat.title}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Why Choose <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>VEEMAG</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, borderColor: '#AC6AFF' }}
                className="glass p-8 rounded-2xl hover:border-primary transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to <span style={{ 
                background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>VEEMAG R&D Ventures</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Step into the forefront of innovation and sustainability at VEEMAG R&D Ventures, 
              where our pioneering spirit knows no bounds. Here, we're not just shaping the future; 
              we're sculpting it with the transformative power of Artificial Intelligence (AI). 
              With a relentless commitment to driving positive change, we're illuminating the path 
              towards a more sustainable world, one groundbreaking discovery at a time.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home
