import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactDarkNeural = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    { icon: '📧', title: 'Email', value: 'hello@aiqa.com', color: '#00D9FF' },
    { icon: '📞', title: 'Phone', value: '+1 (555) 123-4567', color: '#7C3AED' },
    { icon: '📍', title: 'Office', value: 'San Francisco, CA', color: '#10B981' },
    { icon: '⏰', title: 'Hours', value: '24/7 Support', color: '#F59E0B' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
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
              <span className="text-cyan-400 font-semibold">💬 Get in Touch</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="block">Let's Build</span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Together
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI? Our experts are here to help
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all"
              >
                <div className="text-5xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: method.color }}>
                  {method.title}
                </h3>
                <p className="text-gray-300">{method.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-cyan-400">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl"
                >
                  Send Message →
                </motion.button>
              </form>
            </motion.div>

            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-6 text-cyan-400">Why Choose AIQA?</h3>
                <ul className="space-y-4">
                  {[
                    '🎯 Expert AI consultants with 10+ years experience',
                    '⚡ 24/7 technical support and monitoring',
                    '🔒 Enterprise-grade security and compliance',
                    '🚀 Fast deployment - go live in weeks, not months',
                    '💰 Transparent pricing with no hidden fees',
                    '🏆 99.99% uptime SLA guarantee',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-gray-300 text-lg"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Schedule Demo */}
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-8 text-center relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"
                />
                <div className="relative z-10">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-3xl font-bold mb-4">Schedule a Demo</h3>
                  <p className="mb-6 opacity-90">
                    See our AI platform in action with a personalized demo
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-white/50 transition-shadow"
                  >
                    Book Demo →
                  </motion.button>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-6 text-cyan-400">Global Offices</h3>
                <div className="space-y-4">
                  {[
                    { city: 'San Francisco', country: 'USA', label: 'Headquarters' },
                    { city: 'London', country: 'UK', label: 'European HQ' },
                    { city: 'Singapore', country: 'SG', label: 'Asia Pacific HQ' },
                  ].map((office, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <span className="text-2xl">📍</span>
                      <div>
                        <div className="font-semibold">{office.city}, {office.country}</div>
                        <div className="text-sm text-gray-400">{office.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-12 text-center"
          >
            <div className="text-8xl mb-6">🌍</div>
            <h3 className="text-4xl font-bold mb-4">We're Global</h3>
            <p className="text-xl text-gray-300">
              Serving clients in 30+ countries across 6 continents
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactDarkNeural;
