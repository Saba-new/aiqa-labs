import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: 'Time and Materials',
      description: [
        'Ideal for long-term projects and dynamic requirements.',
        'Scope of work may evolve during the process.',
        'Flexible to adjust to changes in the project scope and workload.',
      ],
    },
    {
      title: 'Fixed Price',
      description: [
        'Suitable for clear, well-defined requirements and strict deadlines.',
        'Best for projects with a limited scope.',
        'VEEMAG manages the entire product development lifecycle with precision.',
      ],
    },
    {
      title: 'Managed Team',
      description: [
        'Ideal for long-term projects and dynamic requirements.',
        'Dedicated team working exclusively on your project.',
        'Full control over team composition and workflow.',
      ],
    },
    {
      title: 'Managed Product & Service',
      description: [
        'End-to-end product development and management.',
        'From ideation to deployment and beyond.',
        'Comprehensive support and continuous improvement.',
      ],
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer flexible engagement models tailored to your specific needs, 
            ensuring optimal results for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
              <ul className="space-y-3">
                {service.description.map((desc, i) => (
                  <li key={i} className="flex items-start text-gray-400">
                    <span className="text-secondary mr-2">✓</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
