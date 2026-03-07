import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PlatformGlassmorphism = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const platformFeatures = [
    {
      id: 1,
      icon: '⚡',
      title: 'Lightning Fast',
      desc: 'Real-time AI Processing',
      details: 'Process millions of data points per second with our optimized neural network architecture. Sub-millisecond response times guaranteed.',
      gradient: 'from-amber-400 to-orange-500',
      stats: ['< 10ms latency', '1M+ ops/sec', '99.99% uptime'],
    },
    {
      id: 2,
      icon: '🔮',
      title: 'Predictive Intelligence',
      desc: 'Future-Ready Analytics',
      details: 'Advanced machine learning models that forecast trends, detect anomalies, and provide actionable insights before issues arise.',
      gradient: 'from-purple-400 to-pink-500',
      stats: ['94% accuracy', '30-day forecast', 'Real-time alerts'],
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Enterprise Security',
      desc: 'Military-Grade Protection',
      details: 'End-to-end encryption, zero-trust architecture, and AI-powered threat detection keep your data safe 24/7.',
      gradient: 'from-blue-400 to-cyan-500',
      stats: ['256-bit encryption', 'Zero breaches', 'SOC 2 certified'],
    },
    {
      id: 4,
      icon: '♾️',
      title: 'Infinite Scale',
      desc: 'Grows With Your Needs',
      details: 'Cloud-native infrastructure that automatically scales from prototype to production without configuration.',
      gradient: 'from-green-400 to-emerald-500',
      stats: ['Auto-scaling', 'Global CDN', 'Multi-region'],
    },
    {
      id: 5,
      icon: '🎯',
      title: 'Smart Automation',
      desc: 'AI-Driven Workflows',
      details: 'Intelligent automation that learns from your patterns and optimizes operations without manual intervention.',
      gradient: 'from-red-400 to-rose-500',
      stats: ['+340% efficiency', 'Zero-touch ops', 'Self-healing'],
    },
    {
      id: 6,
      icon: '🌐',
      title: 'Universal Integration',
      desc: 'Connect Everything',
      details: 'Seamlessly integrate with 1000+ tools, APIs, and data sources. Pre-built connectors and custom integrations available.',
      gradient: 'from-indigo-400 to-violet-500',
      stats: ['1000+ APIs', 'Custom webhooks', 'Real-time sync'],
    },
  ];

  const capabilities = [
    { label: 'AI Models Trained', value: '500+', color: 'text-purple-400' },
    { label: 'Data Points Analyzed', value: '1B+', color: 'text-cyan-400' },
    { label: 'Processing Speed', value: '10 PB/s', color: 'text-green-400' },
    { label: 'Global Availability', value: '99.99%', color: 'text-amber-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 text-sm font-semibold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ✨ Next-Gen AI Platform
                </span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Intelligence</span>
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Without Limits
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Build, deploy, and scale AI-powered applications with our cutting-edge platform designed for innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl"
              >
                Get Started →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className={`text-3xl font-bold mb-2 ${cap.color}`}>{cap.value}</div>
                  <div className="text-sm text-gray-400">{cap.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive suite of AI tools and features built for modern enterprises
            </p>
          </motion.div>

          {/* Glassmorphic Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`}
                />

                {/* Glass Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredCard === feature.id ? 1.2 : 1,
                      rotate: hoveredCard === feature.id ? 10 : 0,
                    }}
                    className="text-6xl mb-4"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className={`text-sm bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent font-semibold mb-4`}>
                    {feature.desc}
                  </p>

                  {/* Details */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.details}</p>

                  {/* Stats Pills */}
                  <div className="flex flex-wrap gap-2">
                    {feature.stats.map((stat, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-1 rounded-full"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Floating Platform Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* 3D Card Effect */}
            <motion.div
              whileHover={{ rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="inline-block mb-8 text-8xl"
                >
                  🚀
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Deploy in <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Minutes</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  From idea to production in record time. Our platform handles all the complexity so you can focus on building great products.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/50 transition-shadow"
                >
                  Start Free Trial
                </motion.button>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 text-4xl"
              >
                ⚡
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-10 left-10 text-4xl"
              >
                🔮
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlatformGlassmorphism;
