import express from 'express'

const router = express.Router()

// ── Page content data ─────────────────────────────────────────────────────
// This acts as your CMS layer. Update these objects to change page content
// without touching JSX files.

const platformContent = {
  label: 'OUR PLATFORM',
  title: 'TwinV is the All-in-One Platform for IoT and Digital Twins',
  description:
    'TwinV combines IoT and digital twin technology to deliver real-time insights, predictive analytics, and advanced simulations. Optimize performance, streamline operations, and drive innovation with our all-in-one platform.',
  cta: 'Step Into the Future',
  features: [
    {
      id: 1,
      title: 'Flexible Protocol Integration',
      description:
        'TwinV supports seamless integration with any communication protocol, ensuring compatibility with diverse IoT devices and enabling future-ready scalability.',
    },
    {
      id: 2,
      title: 'AI-Powered Predictions',
      description:
        'Leverage advanced AI and machine learning to predict potential issues, optimize resources, and drive intelligent decision-making.',
    },
    {
      id: 3,
      title: 'Real-Time Insights',
      description:
        'Gain real-time visibility into asset performance to enable proactive maintenance and boost efficiency.',
    },
    {
      id: 4,
      title: 'Sustainable Energy Optimization',
      description:
        "Optimize energy consumption and enhance sustainability with TwinV's advanced insights.",
    },
  ],
}

const servicesContent = {
  label: 'Tailored Smart Solutions',
  title: 'Comprehensive IoT Solutions for Every Stage of Development',
  description:
    'We specialize in delivering end-to-end IoT solutions, combining hardware and software expertise.',
  cta: 'Transform with Us',
  services: [
    {
      id: 1,
      title: 'Custom Software Development',
      description:
        'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.',
    },
    {
      id: 2,
      title: 'IT Consulting and Digital Advisory',
      description:
        'We assess, design, and optimize solutions with strategic precision, from concept to delivery.',
    },
    {
      id: 3,
      title: 'Digital Transformation',
      description:
        'We enhance functionality, modernize systems, improve security, automate processes, and reduce IT costs.',
    },
  ],
}

const industriesContent = {
  label: 'Industries in focus',
  title: 'Accelerate Growth with End-to-End IoT Expertise',
  description:
    'Transform your business faster with our unparalleled IoT expertise.',
  cta: 'Unlock Innovation',
  industries: [
    { id: 1, name: 'FinTech', description: 'Custom financial software for digital payments, banking.' },
    { id: 2, name: 'Real Estate', description: 'Develop modern real estate solutions using cutting-edge technologies.' },
    { id: 3, name: 'Healthcare', description: 'Custom EHR, EMR, ERX, and other medical solutions.' },
    { id: 4, name: 'Transportation and Mobility', description: 'Custom TMS, WMS, FMS, vehicle management, and blockchain systems.' },
    { id: 5, name: 'Software', description: 'Build software of any complexity, from SaaS systems to product ecosystems.' },
    { id: 6, name: 'Manufacturing', description: 'Optimize production with custom manufacturing software solutions.' },
    { id: 7, name: 'Smart Home and Appliances', description: 'Increase the value of smart home products with user-centered software.' },
  ],
}

const aboutContent = {
  title: 'About AIQA Labs',
  mission: 'To empower businesses with intelligent IoT and AI-driven solutions that transform operations and drive innovation.',
  stats: [
    { value: '9+', label: 'Years', title: 'Experience', description: 'Driving innovation in the tech industry.' },
    { value: '10+', label: 'Industries', title: 'Served', description: 'Empowering diverse sectors with technology.' },
    { value: '100%', label: 'Client', title: 'Satisfaction', description: 'Delivering excellence in every project.' },
  ],
}

// ── Routes ────────────────────────────────────────────────────────────────

// GET /api/content/platform
router.get('/platform', (_req, res) => {
  res.json(platformContent)
})

// GET /api/content/services
router.get('/services', (_req, res) => {
  res.json(servicesContent)
})

// GET /api/content/industries
router.get('/industries', (_req, res) => {
  res.json(industriesContent)
})

// GET /api/content/about
router.get('/about', (_req, res) => {
  res.json(aboutContent)
})

// GET /api/content/home — returns all sections at once
router.get('/home', (_req, res) => {
  res.json({
    platform: platformContent,
    services: servicesContent,
    industries: industriesContent,
    about: aboutContent,
  })
})

export default router
