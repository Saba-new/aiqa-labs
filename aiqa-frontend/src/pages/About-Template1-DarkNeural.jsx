import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutDarkNeural = () => {
  const navigate = useNavigate();

  const story = [
    { year: '2018', title: 'Founded', desc: 'AIQA was born from a vision to make AI accessible to all enterprises' },
    { year: '2020', title: 'First 100 Clients', desc: 'Reached milestone of 100 enterprise clients across 8 industries' },
    { year: '2022', title: 'Global Expansion', desc: 'Opened offices in 5 countries, serving clients worldwide' },
    { year: '2024', title: 'AI Innovation Leader', desc: 'Recognized as top AI solutions provider with 500+ deployed models' },
  ];

  const values = [
    { icon: '🎯', title: 'Innovation First', desc: 'Always pushing boundaries with cutting-edge technology' },
    { icon: '🤝', title: 'Client Success', desc: 'Your success is our success - we grow together' },
    { icon: '🔒', title: 'Trust & Security', desc: 'Military-grade security and transparent operations' },
    { icon: '🌍', title: 'Global Impact', desc: 'Creating solutions that transform industries worldwide' },
  ];

  const team = [
    { name: 'Dr. Sarah Chen', role: 'Chief AI Officer', expertise: 'Neural Networks', color: '#00D9FF' },
    { name: 'Marcus Rodriguez', role: 'CTO', expertise: 'Cloud Architecture', color: '#7C3AED' },
    { name: 'Lisa Wang', role: 'Head of ML', expertise: 'Computer Vision', color: '#10B981' },
    { name: 'James Anderson', role: 'IoT Director', expertise: 'Edge Computing', color: '#F59E0B' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, delay: Math.random() * 2, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-6 bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-2">
              <span className="text-cyan-400 font-semibold">🚀 About AIQA</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="block">Building the</span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Future
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to democratize AI and make intelligent systems accessible to every enterprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-cyan-500/30 p-12 md:p-16 text-center"
          >
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="text-cyan-400">Mission</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              To empower businesses worldwide with cutting-edge AI solutions that drive innovation, 
              efficiency, and growth. We believe every company deserves access to enterprise-grade 
              artificial intelligence, regardless of size or industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">From startup to AI innovation leader</p>
          </motion.div>

          <div className="space-y-8">
            {story.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-8"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="flex-1 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">What drives us every day</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all text-center"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-400">World-class experts leading innovation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all text-center"
              >
                <div
                  className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl font-bold"
                  style={{ background: `${member.color}20`, color: member.color }}
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-cyan-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'AI Models Deployed' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '15+', label: 'Industries Served' },
              { value: '99.99%', label: 'System Uptime' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all"
              >
                <div className="text-5xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
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
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Be part of the AI revolution
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 217, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/careers')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl"
              >
                View Careers →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white/5 backdrop-blur-xl border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-colors"
              >
                Partner With Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutDarkNeural;
