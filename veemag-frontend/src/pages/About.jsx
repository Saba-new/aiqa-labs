import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="relative z-10 min-h-screen pt-32 px-6 pb-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>VEEMAG</span>
          </h1>
          <p className="text-xl text-gray-400">
            On a mission to unify all IoT solutions in one platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Welcome to <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>VEEMAG R&D Ventures</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Step into the forefront of innovation and sustainability at VEEMAG R&D Ventures, 
            where our pioneering spirit knows no bounds. Here, we're not just shaping the future; 
            we're sculpting it with the transformative power of Artificial Intelligence (AI).
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            With a relentless commitment to driving positive change, we're illuminating the path 
            towards a more sustainable world, one groundbreaking discovery at a time. At VEEMAG, 
            we believe that the most impactful solutions are often the simplest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-4">We Believe</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            The Power of Simple. In a world filled with complexity, the clarity and efficiency 
            of our platform set us apart. We understand that those closest to a challenge are 
            best equipped to solve it. That's why we empower teams with intuitive tools that 
            make advanced technology accessible to everyone.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
