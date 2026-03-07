import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const IndustriesDarkNeural = () => {
  const navigate = useNavigate();
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  const industries = [
    {
      id: 1,
      icon: '💳',
      title: 'FinTech',
      desc: 'Banking & Finance',
      details: 'AI-powered fraud detection, algorithmic trading, risk assessment, and personalized financial services.',
      solutions: ['Fraud Detection AI', 'Algorithmic Trading', 'Credit Scoring', 'Robo-Advisors'],
      color: '#00D9FF',
      projects: '50+',
    },
    {
      id: 2,
      icon: '🏥',
      title: 'Healthcare',
      desc: 'Medical & Diagnostics',
      details: 'Predictive diagnostics, patient monitoring, drug discovery, and medical imaging analysis with AI.',
      solutions: ['Diagnostic AI', 'Patient Monitoring', 'Drug Discovery', 'Medical Imaging'],
      color: '#10B981',
      projects: '35+',
    },
    {
      id: 3,
      icon: '🏢',
      title: 'Real Estate',
      desc: 'Property Intelligence',
      details: 'Smart buildings, predictive maintenance, property valuation, and automated facility management.',
      solutions: ['Smart Buildings', 'Predictive Maintenance', 'Property Analysis', 'Energy Optimization'],
      color: '#7C3AED',
      projects: '40+',
    },
    {
      id: 4,
      icon: '🚚',
      title: 'Logistics',
      desc: 'Supply Chain & Transport',
      details: 'Route optimization, fleet management, warehouse automation, and predictive demand forecasting.',
      solutions: ['Route Optimization', 'Fleet Tracking', 'Warehouse Automation', 'Demand Forecasting'],
      color: '#F59E0B',
      projects: '30+',
    },
    {
      id: 5,
      icon: '🏭',
      title: 'Manufacturing',
      desc: 'Industry 4.0',
      details: 'Predictive maintenance, quality control, production optimization, and smart factory solutions.',
      solutions: ['Predictive Maintenance', 'Quality Control AI', 'Production Optimization', 'Digital Twin'],
      color: '#EF4444',
      projects: '45+',
    },
    {
      id: 6,
      icon: '⚡',
      title: 'Energy',
      desc: 'Smart Grid & Renewables',
      details: 'Smart grid management, renewable energy optimization, and predictive energy consumption analytics.',
      solutions: ['Smart Grid', 'Energy Forecasting', 'Load Balancing', 'Renewable Optimization'],
      color: '#8B5CF6',
      projects: '25+',
    },
  ];

  const capabilities = [
    { icon: '🎯', value: '200+', label: 'AI Projects Delivered', color: 'from-cyan-400 to-blue-500' },
    { icon: '🌐', value: '15+', label: 'Industries Served', color: 'from-purple-400 to-pink-500' },
    { icon: '🏆', value: '99.9%', label: 'Client Satisfaction', color: 'from-green-400 to-emerald-500' },
    { icon: '⚡', value: '24/7', label: 'Support & Monitoring', color: 'from-orange-400 to-red-500' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 4,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block mb-6 bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-2">
              <span className="text-cyan-400 font-semibold">🌐 Industry Expertise</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="block mb-2">Transforming</span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Delivering AI-powered solutions across sectors, from finance to healthcare to manufacturing
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
                >
                  <div className="text-4xl mb-2">{cap.icon}</div>
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${cap.color} bg-clip-text text-transparent`}>
                    {cap.value}
                  </div>
                  <div className="text-sm text-gray-400">{cap.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Industries We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Empower</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Deep expertise and proven solutions for every sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndustry(industry.id)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className="group relative cursor-pointer"
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity rounded-3xl"
                  style={{ background: industry.color }}
                />

                {/* Card */}
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      animate={{
                        scale: hoveredIndustry === industry.id ? 1.2 : 1,
                        rotate: hoveredIndustry === industry.id ? 15 : 0,
                      }}
                      className="text-6xl"
                    >
                      {industry.icon}
                    </motion.div>
                    <div
                      className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{
                        background: `${industry.color}20`,
                        color: industry.color,
                      }}
                    >
                      {industry.projects} projects
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-2" style={{ color: industry.color }}>
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{industry.desc}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{industry.details}</p>

                  {/* Solutions Tags */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs text-cyan-400 font-semibold mb-2">KEY SOLUTIONS:</div>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-800/50 border border-slate-700 px-3 py-1 rounded-full text-gray-300"
                        >
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    Explore solutions →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-cyan-500/30 p-12 md:p-16 overflow-hidden relative"
          >
            {/* Floating Orbs */}
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <div className="text-cyan-400 font-semibold mb-4">SUCCESS STORY</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Reducing Manufacturing Defects by <span className="text-cyan-400">87%</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Implemented computer vision AI for a leading automotive manufacturer, detecting defects in real-time 
                and reducing production errors by 87% while increasing throughput by 45%.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">87%</div>
                  <div className="text-sm text-gray-400">Defect Reduction</div>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20">
                  <div className="text-4xl font-bold text-purple-400 mb-2">45%</div>
                  <div className="text-sm text-gray-400">Throughput Increase</div>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-green-500/20">
                  <div className="text-4xl font-bold text-green-400 mb-2">$5M</div>
                  <div className="text-sm text-gray-400">Annual Savings</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-2xl font-bold shadow-2xl"
              >
                View More Case Studies →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Cross-Industry <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-gray-400">Powered by cutting-edge tools and frameworks</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['TensorFlow', 'PyTorch', 'OpenCV', 'Spark', 'Kubernetes', 'Docker', 'AWS', 'Azure', 'MongoDB', 'PostgreSQL', 'Redis', 'Kafka'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <div className="text-lg font-semibold text-white">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Partner with us to bring AI innovation to your sector
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 217, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl"
            >
              Let's Talk →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesDarkNeural;
