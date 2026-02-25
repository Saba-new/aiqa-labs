import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Industries = () => {
  const navigate = useNavigate()
  const stats = [
    {
      title: 'Industry-Specific Innovation',
      description: 'We deliver cutting-edge solutions that cater to the unique challenges and opportunities of your industry, enhancing efficiency and driving growth.',
    },
    {
      title: 'End-to-End Transformation',
      description: 'From initial consultation to final implementation, we help industries evolve with integrated technology solutions that boost productivity and performance.',
    },
    {
      title: 'Scalable Solutions for Every Need',
      description: 'Whether you\'re optimizing current operations or scaling up for future growth, our tailored solutions are built to adapt and grow with your business needs.',
    },
  ]

  const industries = [
    { name: 'FinTech', icon: '💰', desc: 'Custom financial software for digital payments and banking.' },
    { name: 'Real Estate', icon: '🏢', desc: 'Develop modern real estate solutions using cutting-edge technologies.' },
    { name: 'Healthcare', icon: '🏥', desc: 'Custom EHR, EMR, ERX, and other medical solutions.' },
    { name: 'Transportation and Mobility', icon: '🚗', desc: 'Custom TMS, WMS, FMS, vehicle management, and blockchain systems.' },
    { name: 'Software', icon: '💻', desc: 'Build software of any complexity, from SaaS systems to product ecosystems.' },
    { name: 'Manufacturing', icon: '🏭', desc: 'Optimize production with custom manufacturing software solutions.' },
    { name: 'Smart Home and Appliances', icon: '🏠', desc: 'Increase the value of smart home products with user-centered software.' },
  ]

  const techStack = [
    'IoT Services', 'Performance Testing', 'AI development services', 'IT Infrastructure',
    'Data science services', 'Cybersecurity', 'Machine learning dev', 'UI/UX Design',
    'Blockchain software dev', 'Business Intelligence', 'RPA for Business', 'Big Data',
    'Data analytics services', 'Data Engineering'
  ]

  return (
    <div className="relative z-10 min-h-screen pt-32 px-6 pb-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Innovative Solutions,{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Tailored for Industries</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Drive innovation and growth with our deep domain expertise, tailored solutions,
            and a dedicated team focused on delivering industry-specific success.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/contact')}
            className="bg-primary hover:bg-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all glow"
          >
            Get Started
          </motion.button>
        </motion.div>

        <div className="mb-20">
          <div className="mb-8">
            <p className="text-sm text-gray-500 uppercase mb-2">Tailored Excellence</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Expert Solutions for Every Industry.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm text-gray-500 uppercase mb-2">Industries in focus</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Industries We Serve with <span className="text-cyan-400">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: '#AC6AFF' }}
                className="glass p-8 rounded-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl mb-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Build Your Domain-Specific Solution?</h3>
              <p className="text-gray-400">We specialize in crafting high-quality products tailored to industry standards and your unique business needs.</p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all glow whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </motion.div>

        <div>
          <div className="mb-8">
            <p className="text-sm text-gray-500 uppercase mb-2">Expertise & Strengths</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Expertise and competencies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Technology Excellence</h3>
              <p className="text-gray-400">
                AIQA offers deep technical expertise across various domains, harnessing
                the power of advanced technologies like AI, IoT, and blockchain.
                By combining these technologies, we deliver scalable, robust,
                and future-proof solutions tailored to meet the unique needs of industries.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 p-3 rounded-lg text-center text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Industries
