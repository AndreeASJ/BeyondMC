/**
 * Application Constants
 * Centralized configuration values for easy maintenance
 */

// ============================================
// Company Information
// ============================================

export const COMPANY = {
  name: 'Bravo Motor Company',
  tagline: 'Vehículos Eléctricos del Futuro',
  description: 'Innovación y tecnología en movilidad eléctrica',
  email: 'info@bravomotor.com',
  phone: '+1 (555) 123-4567',
  address: 'Silicon Valley, CA',
} as const

// ============================================
// Social Media
// ============================================

export const SOCIAL_MEDIA = {
  twitter: 'https://twitter.com/bravomotor',
  instagram: 'https://instagram.com/bravomotor',
  facebook: 'https://facebook.com/bravomotor',
  linkedin: 'https://linkedin.com/company/bravomotor',
  youtube: 'https://youtube.com/@bravomotor',
} as const

// ============================================
// Vehicle Specifications
// ============================================

export const HERO_STATS = {
  range: {
    value: '500+',
    label: 'Kilómetros de autonomía',
    unit: 'km',
  },
  acceleration: {
    value: '0-100',
    label: 'km/h en 3.2s',
    unit: 's',
  },
  energy: {
    value: '100%',
    label: 'Energía renovable',
    unit: '%',
  },
} as const

export const TECH_STATS = {
  power: {
    label: 'Potencia',
    value: '800',
    unit: 'HP',
  },
  range: {
    label: 'Autonomía',
    value: '500',
    unit: 'km',
  },
  charging: {
    label: 'Carga rápida',
    value: '18',
    unit: 'min',
  },
  efficiency: {
    label: 'Eficiencia',
    value: '96',
    unit: '%',
  },
} as const

// ============================================
// Animation Durations
// ============================================

export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.3,
  },
  stagger: {
    items: 0.15,
    cards: 0.2,
  },
} as const

// ============================================
// Easing Curves
// ============================================

export const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  linear: [0, 0, 1, 1],
} as const

// ============================================
// Breakpoints (matching Tailwind)
// ============================================

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// ============================================
// SEO Meta
// ============================================

export const SEO = {
  defaultTitle: 'Bravo Motor Company | Vehículos Eléctricos del Futuro',
  titleTemplate: '%s | Bravo Motor Company',
  defaultDescription:
    'Innovación y tecnología en movilidad eléctrica. Descubre la próxima generación de vehículos eléctricos con Bravo Motor Company.',
  keywords: [
    'vehículos eléctricos',
    'movilidad sostenible',
    'tecnología',
    'innovación',
    'carros eléctricos',
    'bravo motor',
    'vehículos del futuro',
  ],
  siteUrl: 'https://bravomotor.com',
  twitterHandle: '@bravomotor',
} as const

// ============================================
// Routes
// ============================================

export const ROUTES = {
  home: '/',
  models: '/modelos',
  technology: '/tecnologia',
  sustainability: '/sostenibilidad',
  about: '/nosotros',
  contact: '/contacto',
  testDrive: '/test-drive',
} as const

// ============================================
// API Endpoints (Future)
// ============================================

export const API = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  testDrive: '/api/test-drive',
} as const

