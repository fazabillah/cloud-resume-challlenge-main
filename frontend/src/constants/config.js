/**
 * Application configuration constants
 * Centralizes environment-specific and API configuration
 */

export const API_CONFIG = {
  // Counter API base URL - reads from environment variable or falls back to localhost
  counterApiUrl: import.meta.env.VITE_COUNTER_API_URL || 'http://localhost:8000',

  // Reserved for future API integrations
  apiUrl: import.meta.env.VITE_API_URL || '',
}

export const ROUTES = {
  home: '/',
  resume: '/resume',
  projects: '/projects',
  blog: '/blog',
}

export default API_CONFIG
