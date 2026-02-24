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
            On a mission to unify all{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>IoT solutions</span>{' '}
            in one platform.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl mb-8"
        >
          <p className="text-sm text-gray-500 uppercase mb-4">We believe</p>
          <h2 className="text-3xl font-bold mb-6">
            The Power of Simple..
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            At AIQA, we believe that the most impactful solutions are often the simplest. 
            In a world filled with complexity, the clarity and efficiency of our platform 
            set us apart. We understand that those closest to a challenge are 
            best equipped to solve it.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Businesses are revolutionizing their operations worldwide with our 
            innovative IoT and digital solutions. They are building customized 
            systems for every operational need on a unified platform.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our expertise, products, and collaborative approach have 
            positioned us as leaders in delivering tailored technology 
            solutions across industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to revolutionize your world with IoT?</h3>
              <p className="text-gray-400">Let's make it legendary!</p>
            </div>
            <button className="bg-primary hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all glow">
              GET STARTED
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl"
        >
          <h2 className="text-3xl font-bold mb-6">
            We are building the future of IoT solutions. And it's{' '}
            <span className="text-cyan-400">connected</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            After years of working in IoT and software development, the founders of 
            AIQA realized there was a significant gap in the industry—many companies 
            were still using fragmented, outdated systems to manage their IoT devices 
            and solutions. While hardware had advanced, the software to manage 
            it hadn't kept pace.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            What the industry needed was an all-in-one, cloud-based platform that 
            could centralize, optimize, and transform the way IoT systems are managed. 
            Our vision is to bring the same kind of disruption seen in other tech industries, 
            creating seamless, future-proof solutions for businesses.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Despite global challenges, AIQA has emerged as a leader in the IoT space, 
            empowering companies to innovate, automate, and optimize their operations 
            with our platform. Today, AIQA is trusted by a range of industries to deliver 
            cutting-edge IoT solutions.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
