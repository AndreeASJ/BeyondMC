/**
 * Global TypeScript Types & Interfaces
 * Centralized type definitions for type safety and reusability
 */

// ============================================
// Component Props Types
// ============================================

export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// ============================================
// Tech Feature Types
// ============================================

export interface TechSpec {
  label: string
  value: string
  unit?: string
}

export interface TechFeature {
  icon: string
  title: string
  description: string
  specs: string[]
  image?: string  // Future: when images are added
}

// ============================================
// Animation Types
// ============================================

export interface AnimationVariant {
  hidden: object
  visible: object
}

export interface ScrollAnimationConfig {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

// ============================================
// Future: Vehicle Models
// ============================================

export interface VehicleModel {
  id: string
  name: string
  tagline: string
  price: number
  images: string[]
  specs: {
    range: number
    power: number
    acceleration: number
    topSpeed: number
    charging: number
  }
  features: string[]
}

// ============================================
// Future: Contact Form
// ============================================

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  interest: 'test-drive' | 'purchase' | 'information' | 'partnership'
}

// ============================================
// Future: Newsletter
// ============================================

export interface NewsletterSubscription {
  email: string
  preferences?: string[]
}

// ============================================
// Utility Types
// ============================================

export type Nullable<T> = T | null
export type Optional<T> = T | undefined

