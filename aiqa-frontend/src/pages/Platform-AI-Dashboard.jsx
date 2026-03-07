import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PlatformAIDashboard = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [neurons, setNeurons] = useState([]);

  // Generate neural network nodes
  useEffect(() => {
    const neuronData = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setNeurons(neuronData);
  }, []);

  const aiFeatures = [
    {
      id: 1,
      title: 'Neural Processing',
      subtitle: 'Deep Learning Core',
      description: 'Advanced neural networks process data in real-time, learning and adapting to optimize performance automatically.',
      metrics: { accuracy: '99.8%', speed: '< 10ms', scale: '1M+ ops/s' },
      color: '#00D9FF',
      icon: '🧠',
    },
    {
      id: 2,
      title: 'Intelligent Automation',
      subtitle: 'AI-Powered Workflows',
      description: 'Autonomous systems that monitor, predict, and respond to changes without human intervention.',
      metrics: { efficiency: '+340%', uptime: '99.99%', savings: '$2M/yr' },
      color: '#7C3AED',
      icon: '🤖',
    },
    {
      id: 3,
      title: 'Predictive Analytics',
      subtitle: 'Future Insights',
      description: 'Machine learning algorithms forecast trends and anomalies before they happen, giving you the edge.',
      metrics: { forecast: '30 days', accuracy: '94%', alerts: 'Real-time' },
      color: '#10B981',
      icon: '📊',
    },
  ];

  const techStack = [
    { name: 'TensorFlow', level: 95 },
    { name: 'PyTorch', level: 92 },
    { name: 'Neural Networks', level: 98 },
    { name: 'Computer Vision', level: 89 },
    { name: 'NLP', level: 91 },
    { name: 'Reinforcement Learning', level: 87 },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white overflow-hidden">
      {/* Neural Network Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full">
          {neurons.map((neuron, i) => (
            <motion.circle
              key={neuron.id}
              cx={`${neuron.x}%`}
              cy={`${neuron.y}%`}
              r="2"
              fill="#00D9FF"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                delay: neuron.delay,
                repeat: Infinity,
              }}
            />
          ))}
          {neurons.slice(0, 30).map((neuron, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${neuron.x}%`}
              y1={`${neuron.y}%`}
              x2={`${neurons[(i + 1) % neurons.length].x}%`}
              y2={`${neurons[(i + 1) % neurons.length].y}%`}
              stroke="#00D9FF"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, delay: neuron.delay, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>

      {/* Hero Section - Terminal Style */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-slate-900/50 px-6 py-3 flex items-center gap-2 border-b border-cyan-500/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-sm text-cyan-400 font-mono">aiqa-platform-v3.0</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono">
              <div className="mb-4">
                <span className="text-green-400">user@aiqa</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/platform</span>
                <span className="text-white">$ ./initialize</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-white"
                >
                  _
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-2 text-sm"
              >
                <div className="text-cyan-300">{'>'} Initializing AI Platform...</div>
                <div className="text-green-300">{'>'} Neural networks: <span className="text-white">ACTIVE</span></div>
                <div className="text-green-300">{'>'} Machine learning core: <span className="text-white">ONLINE</span></div>
                <div className="text-green-300">{'>'} Predictive analytics: <span className="text-white">READY</span></div>
                <div className="text-purple-300 mt-4">{'>'} System ready. 🚀</div>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Platform
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Next-generation artificial intelligence infrastructure for building, deploying, and scaling intelligent systems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Feature Cards */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Capabilities</span>
            </h2>
            <p className="text-gray-400 text-lg">Powered by cutting-edge machine learning</p>
          </motion.div>

          {/* Feature Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {aiFeatures.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 border border-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl mr-2">{feature.icon}</span>
                {feature.title}
              </motion.button>
            ))}
          </div>

          {/* Feature Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border"
              style={{ borderColor: aiFeatures[activeFeature].color + '40' }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-6xl">{aiFeatures[activeFeature].icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold" style={{ color: aiFeatures[activeFeature].color }}>
                        {aiFeatures[activeFeature].title}
                      </h3>
                      <p className="text-gray-400">{aiFeatures[activeFeature].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {aiFeatures[activeFeature].description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(aiFeatures[activeFeature].metrics).map(([key, value]) => (
                      <div key={key} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                        <div className="text-2xl font-bold" style={{ color: aiFeatures[activeFeature].color }}>
                          {value}
                        </div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visualization */}
                <div className="relative h-80">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20 blur-3xl"
                    style={{ background: aiFeatures[activeFeature].color }}
                  ></div>
                  <div className="relative h-full bg-slate-900/50 rounded-2xl border border-slate-700 p-6 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 2, repeat: Infinity },
                      }}
                      className="w-48 h-48 rounded-full border-4 border-dashed"
                      style={{ borderColor: aiFeatures[activeFeature].color }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-8xl">
                        {aiFeatures[activeFeature].icon}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Tech Stack Progress Bars */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-400">Mastering the latest AI frameworks</p>
          </motion.div>

          <div className="space-y-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{tech.name}</span>
                  <span className="text-cyan-400">{tech.level}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Ready to Build with AI?
            </h2>
            <p className="text-xl mb-8 opacity-90 relative z-10">
              Join thousands of companies leveraging our AI platform
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transition-shadow relative z-10"
            >
              Start Building Now →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlatformAIDashboard;
