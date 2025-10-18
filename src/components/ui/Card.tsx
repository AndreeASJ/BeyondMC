import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  glow?: boolean
  hover?: boolean
}

/**
 * Card component with glass morphism effect
 * Optional glow and hover animations for interactive elements
 */
export default function Card({ children, className, glow = false, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl backdrop-blur-md border border-white/10 p-6',
        'bg-gradient-to-br from-white/5 to-white/[0.02]',
        hover && 'transition-all duration-300 hover:border-electric-blue/50 hover:shadow-lg hover:scale-105',
        glow && 'glow-box',
        className
      )}
    >
      {children}
    </div>
  )
}

