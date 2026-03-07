import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomeDarkNeural = () => {
  const navigate = useNavigate();
  const [neurons, setNeurons] = useState([]);

  useEffect(() => {
    const neuronData = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setNeurons(neuronData);
  }, []);

  const solutions = [
    { icon: '🧠', title: 'AI & Machine Learning', desc: 'Neural networks that learn and adapt', color: '#00D9FF' },
    { icon: '⚡', title: 'IoT Integration', desc: 'Connect everything seamlessly', color: '#7C3AED' },
    { icon: '🔮', title: 'Predictive Analytics', desc: 'See the future before it happens', color: '#10B981' },
    { icon: '🛡️', title: 'Cyber Security', desc: 'Military-grade protection', color: '#F59E0B' },
  ];

  const stats = [
    { value: '500+', label: 'AI Models', color: 'from-cyan-400 to-blue-500' },
    { value: '1M+', label: 'Data Points/sec', color: 'from-purple-400 to-pink-500' },
    { value: '99.99%', label: 'Uptime', color: 'from-green-400 to-emerald-500' },
    { value: '50+', label: 'Enterprise Clients', color: 'from-orange-400 to-red-500' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white overflow-hidden">
      {/* Animated Neural Network Background */}
      <div className="fixed inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full">
          {neurons.map((neuron) => (
            <motion.circle
              key={neuron.id}
              cx={`${neuron.x}%`}
              cy={`${neuron.y}%`}
              r="2"
              fill="#00D9FF"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 3, delay: neuron.delay, repeat: Infinity }}
            />
          ))}
          {neurons.slice(0, 40).map((neuron, i) => {
            const next = neurons[(i + 3) % neurons.length];
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${neuron.x}%`}
                y1={`${neuron.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke="#00D9FF"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 5, delay: neuron.delay, repeat: Infinity }}
              />
            );
          })}
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-2">
                <span className="text-cyan-400 font-semibold">⚡ Powered by Advanced AI</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block">The Future of</span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Intelligent Systems
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your business with cutting-edge AI, IoT, and automation solutions designed for the modern enterprise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/platform')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl"
              >
                Explore Platform →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white/5 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Get Started
              </motion.button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                    <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        />
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Intelligent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cutting-edge technology that powers the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
                onClick={() => navigate('/services')}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity rounded-3xl"
                  style={{ background: solution.color }}
                />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all h-full">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    {solution.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: solution.color }}>
                    {solution.title}
                  </h3>
                  <p className="text-gray-400">{solution.desc}</p>
                  <div className="mt-6 text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    Learn more →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Showcase */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-slate-950/80 px-6 py-4 flex items-center gap-2 border-b border-cyan-500/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-cyan-400 font-mono text-sm">aiqa-system@production</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm">
              <div className="space-y-2">
                <div><span className="text-green-400">$</span> <span className="text-white">aiqa deploy --mode=intelligent</span></div>
                <div className="text-cyan-300">→ Initializing AI Platform v3.0...</div>
                <div className="text-green-300">✓ Neural networks activated</div>
                <div className="text-green-300">✓ IoT devices connected: 10,247</div>
                <div className="text-green-300">✓ Predictive models loaded</div>
                <div className="text-green-300">✓ Security protocols enabled</div>
                <div className="text-purple-300 mt-4">⚡ System operational. Ready for innovation.</div>
              </div>

              <div className="mt-8 pt-8 border-t border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose AIQA?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-gray-300 not-font-mono">
                  <div>
                    <div className="text-cyan-400 font-bold mb-2">⚡ Lightning Fast</div>
                    <div className="text-sm">Process millions of data points in real-time with sub-10ms latency</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold mb-2">🔒 Ultra Secure</div>
                    <div className="text-sm">Military-grade encryption with zero-trust architecture</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold mb-2">♾️ Infinite Scale</div>
                    <div className="text-sm">Auto-scaling infrastructure that grows with your needs</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Ready to Build the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Future?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join leading enterprises leveraging AI to transform their operations
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 217, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl"
            >
              Start Your Journey →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeDarkNeural;
