import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
}

/**
 * Reusable Button component with multiple variants and animations
 * Implements electric theme with optional glow effect
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue'
    
    const variants = {
      primary: 'bg-gradient-to-r from-electric-blue to-electric-purple text-white hover:shadow-lg hover:scale-105',
      secondary: 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20',
      outline: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black',
      ghost: 'text-white hover:bg-white/10',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const glowStyles = glow ? 'glow-box' : ''

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glowStyles,
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button


