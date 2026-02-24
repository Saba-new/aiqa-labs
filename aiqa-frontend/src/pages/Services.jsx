import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const stats = [
    {
      title: 'Custom software development',
      description: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.',
    },
    {
      title: 'IT consulting and digital advisory',
      description: 'We assess, design, and optimize solutions with strategic precision, from concept to delivery.',
    },
    {
      title: 'Digital transformation',
      description: 'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.',
    },
  ]

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
        'AIQA manages the entire product development lifecycle with precision.',
      ],
    },
    {
      title: 'Managed Team',
      description: [
        'Ideal for long-term projects and dynamic requirements.',
        'Scope of work may evolve during the process.',
        'Flexible to adjust to changes in the project scope and workload.',
      ],
    },
    {
      title: 'Managed Product & Service',
      description: [
        'AIQA co-creates and designs products with you, managing the entire lifecycle.',
        'Expert development teams handle everything from concept to delivery.',
        'Specialized services in design, development, QA, and DevOps ensure optimal results.',
      ],
    },
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive Solutions,{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #AC6AFF 0%, #7B68EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Tailored for You</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver end-to-end services, from building platforms to modernizing systems and optimizing performance. 
            Our expertise in hardware, software, and IoT ensures solutions that align with your unique business goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 bg-primary hover:bg-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all glow"
          >
            GET STARTED
          </motion.button>
        </motion.div>

        {/* Smart Solutions Section */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-sm text-gray-500 uppercase mb-2">Tailored Smart Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              A seamless and tailored approach to meet your technology needs.
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

        {/* Service Models Section */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <p className="text-sm text-gray-500 uppercase mb-2">Service Options</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Flexible Collaboration and Engagement <span className="text-cyan-400">Models</span>
            </h2>
          </div>

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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl mb-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Not sure which solution fits your needs?</h3>
              <p className="text-gray-400">Let's find the perfect match together.</p>
            </div>
            <button className="bg-primary hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all glow">
              GET STARTED
            </button>
          </div>
        </motion.div>

        {/* Expertise Section */}
        <div>
          <div className="mb-8">
            <p className="text-sm text-gray-500 uppercase mb-2">Expertise & Strengths</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-cyan-400">Expertise</span> and competencies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Tech-Driven Innovation</h3>
              <p className="text-gray-400">
                Leverage cutting-edge technology to build and optimize your software
                solutions with efficiency and cost-effectiveness.
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

export default Services
