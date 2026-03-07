import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServicesDarkNeural = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 1,
      icon: '🧠',
      title: 'AI & Machine Learning',
      tagline: 'Intelligence at Scale',
      description: 'Deploy advanced neural networks and machine learning models that learn, adapt, and optimize operations automatically. From computer vision to natural language processing.',
      features: [
        'Custom Neural Network Development',
        'Computer Vision & Image Recognition',
        'Natural Language Processing (NLP)',
        'Reinforcement Learning Systems',
        'AutoML & Model Optimization',
        'AI Model Deployment & Monitoring',
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Transformers'],
      color: '#00D9FF',
      metrics: { accuracy: '99.8%', speed: '10ms', scale: '1M+ ops/s' },
    },
    {
      id: 2,
      icon: '⚡',
      title: 'IoT Solutions',
      tagline: 'Connect Everything',
      description: 'Build intelligent IoT ecosystems that connect devices, collect data, and automate responses. From smart buildings to industrial automation.',
      features: [
        'IoT Device Integration',
        'Real-time Data Streaming',
        'Edge Computing Solutions',
        'Device Management Platform',
        'Sensor Network Architecture',
        'M2M Communication Protocols',
      ],
      technologies: ['MQTT', 'CoAP', 'LoRaWAN', 'BLE', 'Zigbee'],
      color: '#7C3AED',
      metrics: { devices: '10K+', uptime: '99.99%', latency: '< 100ms' },
    },
    {
      id: 3,
      icon: '🔮',
      title: 'Predictive Analytics',
      tagline: 'See Tomorrow, Today',
      description: 'Leverage machine learning algorithms to forecast trends, detect anomalies, and make data-driven decisions before problems occur.',
      features: [
        'Time Series Forecasting',
        'Anomaly Detection Systems',
        'Predictive Maintenance',
        'Customer Behavior Analysis',
        'Risk Assessment Models',
        'Real-time Alert Systems',
      ],
      technologies: ['Prophet', 'ARIMA', 'LSTM', 'XGBoost', 'Power BI'],
      color: '#10B981',
      metrics: { forecast: '30 days', accuracy: '94%', alerts: '< 1s' },
    },
    {
      id: 4,
      icon: '🤖',
      title: 'Intelligent Automation',
      tagline: 'Automate Everything',
      description: 'Transform manual processes into intelligent, self-optimizing workflows that run 24/7 without human intervention.',
      features: [
        'Robotic Process Automation (RPA)',
        'Workflow Orchestration',
        'Business Process Mining',
        'Intelligent Document Processing',
        'Chatbot & Virtual Assistant',
        'Auto-scaling Infrastructure',
      ],
      technologies: ['UiPath', 'Python', 'Airflow', 'Kubernetes', 'Docker'],
      color: '#F59E0B',
      metrics: { efficiency: '+340%', savings: '$2M/yr', processes: '100+' },
    },
    {
      id: 5,
      icon: '🛡️',
      title: 'Cyber Security',
      tagline: 'Military-Grade Protection',
      description: 'AI-powered security solutions that detect threats in real-time, prevent breaches, and protect your critical infrastructure.',
      features: [
        'AI Threat Detection',
        'Zero-Trust Architecture',
        'Security Incident Response',
        'Vulnerability Assessment',
        'Penetration Testing',
        'Compliance & Auditing',
      ],
      technologies: ['Splunk', 'CrowdStrike', 'Snort', 'Wireshark', 'SIEM'],
      color: '#EF4444',
      metrics: { threats: '1M+ blocked', response: '< 1min', breaches: '0' },
    },
    {
      id: 6,
      icon: '📊',
      title: 'Data Engineering',
      tagline: 'Turn Data into Gold',
      description: 'Build scalable data pipelines and warehouses that process billions of records and deliver insights at lightning speed.',
      features: [
        'Data Pipeline Architecture',
        'ETL/ELT Development',
        'Data Warehouse Design',
        'Real-time Data Processing',
        'Data Quality & Governance',
        'Big Data Analytics',
      ],
      technologies: ['Spark', 'Kafka', 'Airflow', 'Snowflake', 'dbt'],
      color: '#8B5CF6',
      metrics: { throughput: '10 PB/s', records: '1B+', latency: '< 50ms' },
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block mb-6 bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-2">
              <span className="text-cyan-400 font-semibold">⚡ Enterprise-Grade Services</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="block">Intelligent</span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI-powered services designed for the modern enterprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="py-12 px-6 sticky top-20 z-40 bg-[#0A0E27]/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedService === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 border border-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl mr-2">{service.icon}</span>
                {service.title}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Display */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Service Header */}
              <div className="mb-12 text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-8xl mb-6 inline-block"
                >
                  {services[selectedService].icon}
                </motion.div>
                <h2
                  className="text-5xl md:text-6xl font-bold mb-4"
                  style={{ color: services[selectedService].color }}
                >
                  {services[selectedService].title}
                </h2>
                <p className="text-2xl text-gray-400 mb-6">{services[selectedService].tagline}</p>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {services[selectedService].description}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                {Object.entries(services[selectedService].metrics).map(([key, value]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all"
                  >
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: services[selectedService].color }}
                    >
                      {value}
                    </div>
                    <div className="text-gray-400 capitalize">{key}</div>
                  </motion.div>
                ))}
              </div>

              {/* Features & Technologies */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
                >
                  <h3 className="text-3xl font-bold mb-6 text-cyan-400">Core Features</h3>
                  <ul className="space-y-4">
                    {services[selectedService].features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-cyan-400 text-xl flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
                >
                  <h3 className="text-3xl font-bold mb-6" style={{ color: services[selectedService].color }}>
                    Technologies
                  </h3>
                  <div className="space-y-4">
                    {services[selectedService].technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-cyan-500/50 transition-all"
                      >
                        <div className="text-lg font-semibold text-white">{tech}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${services[selectedService].color}80` }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl"
                  style={{
                    background: `linear-gradient(to right, ${services[selectedService].color}, #7C3AED)`,
                  }}
                >
                  Get Started with {services[selectedService].title} →
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Service Portfolio</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedService(index)}
                className="group cursor-pointer relative"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity rounded-3xl"
                  style={{ background: service.color }}
                />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all h-full">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.tagline}</p>
                  <div className="text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    Learn more →
                  </div>
                </div>
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
              Let's Build <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Talk to our experts about transforming your business with AI
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 217, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl"
            >
              Schedule Consultation →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDarkNeural;
