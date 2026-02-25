import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// ── Contact form ──────────────────────────────────────────────────────────
export const sendContactForm = (data) => api.post('/contact', data)

// ── Content (page data) ───────────────────────────────────────────────────
export const getHomeContent    = () => api.get('/content/home')
export const getPlatformContent  = () => api.get('/content/platform')
export const getServicesContent  = () => api.get('/content/services')
export const getIndustriesContent = () => api.get('/content/industries')
export const getAboutContent     = () => api.get('/content/about')

export default api
