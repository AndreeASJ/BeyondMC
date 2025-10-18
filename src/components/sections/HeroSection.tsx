'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

/**
 * Hero Section - Beyond Movilidad Compartida
 * Features: Carousel with smooth transitions, parallax desert background, logo integration
 * Architecture: Clean separation of concerns with optimized performance
 */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Smooth parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3) // Now 3 slides
    }, 5000) // 6 seconds per slide

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {/* Slide 1: Metallic Logo on Solid Background */}
        {currentSlide === 0 && (
          <motion.div
            key="slide-1"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Solid color background */}
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: '#161620' }}
            />
            
            {/* Centered metallic logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  src="/PNG 300/BMC_Metalico Full.png"
                  alt="Beyond Movilidad Compartida Logo"
                  width={800}
                  height={400}
                  className="h-32 w-auto xs:h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 logo-hd"
                  priority
                  quality={100}
                  sizes="(max-width: 475px) 256px, (max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 352px, 416px"
                  style={{
                    objectFit: 'contain',
                    filter: 'none',
                    imageRendering: 'auto'
                  } as React.CSSProperties}
                />
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Slide 2: Desert Landscape with Logo and Text */}
        {currentSlide === 1 && (
          <motion.div
            key="slide-2"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Parallax Desert Background */}
            <motion.div 
              className="absolute inset-0"
              style={{ y }}
            >
              {/* Fallback Image */}
              <Image
                src="/Desert A 01.png"
                alt="Desert landscape with futuristic electric vehicle"
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="100vw"
              />
              
              {/* Video Background - Over the image */}
              <video
                className="absolute inset-0 w-full h-full object-cover z-10"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/Video1_000.mp4" type="video/mp4" />
              </video>
              {/* Gentle circular shadow gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-radial from-black/25 via-black/5 to-transparent opacity-60" />
            </motion.div>

            {/* Main Content Container - Positioned absolutely to the left */}
            <div className="absolute inset-0 z-20 flex items-center justify-start">
              <div className="w-full h-full flex items-start justify-start">
                
                {/* Logo and Text - Subtle, sophisticated entrance */}
                <motion.div
                  className="absolute left-4 xs:left-6 sm:left-8 md:left-12 lg:left-28 xl:left-36 top-16 xs:top-20 sm:top-24 md:top-32 lg:top-80 xl:top-96 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-2 xs:px-3 sm:px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Logo HD - Smooth fade and slide */}
                  <motion.div
                    className="mb-3 xs:mb-4 sm:mb-5 md:mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 2, 
                      delay: 1.5,
                      ease: [0.5, 0.1, 0.5, 1]
                    }}
                  >
                    <Image
                      src="/PNG 300/BMC_Claro Full.png"
                      alt="Beyond Movilidad Compartida Logo"
                      width={600}
                      height={300}
                      className="h-32 w-auto xs:h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 logo-hd"
                      priority
                      quality={100}
                      sizes="(max-width: 475px) 256px, (max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 352px, 416px"
                      style={{
                        objectFit: 'contain',
                        filter: 'none',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                  </motion.div>

                  {/* Mission Statement - Elegant fade in */}
                  <motion.p
                    className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                  >
                    Compromiso con la innovación<br className="hidden xs:block" />
                    <span className="xs:hidden"> </span>y sostenibilidad en la fabricación<br className="hidden xs:block" />
                    <span className="xs:hidden"> </span>de vehículos eléctricos en México.
                  </motion.p>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}

        {/* Slide 3: Vehicle Close-up */}
        {currentSlide === 2 && (
          <motion.div
            key="slide-3"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Vehicle Background - Close-up with dark filter */}
            <motion.div 
              className="absolute inset-0"
              style={{ y }}
            >
              {/* Fallback Image */}
              <Image
                src="/Abstract 06_000.png"
                alt="Futuristic electric vehicle close-up"
                fill
                className="object-cover object-center vehicle-bg-mobile"
                priority
                quality={90}
                sizes="100vw"
                style={{
                  filter: 'brightness(0.7) contrast(1.1) saturate(0.4) hue-rotate(-10deg) sepia(0.3)',
                  transformOrigin: 'center center'
                }}
              />
              
              {/* Video Background - Over the image */}
              <video
                className="absolute inset-0 w-full h-full object-cover object-center z-10"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{
                  filter: 'brightness(0.7) contrast(1.1) saturate(0.4) hue-rotate(-10deg) sepia(0.3)',
                  transformOrigin: 'center center'
                }}
              >
                <source src="/Video4.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay for extra depth */}
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content Container for Vehicle Slide */}
            <div className="absolute inset-0 z-20 flex items-center justify-end">
              <div className="w-full h-full flex items-start justify-end">
                
                {/* Logo and Text - Positioned on the right */}
                <motion.div
                  className="absolute right-4 xs:right-6 sm:right-8 md:right-12 lg:right-28 xl:right-36 top-16 xs:top-20 sm:top-24 md:top-32 lg:top-80 xl:top-96 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-2 xs:px-3 sm:px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* White Logo - Smooth fade and slide */}
                  <motion.div
                    className="mb-3 xs:mb-4 sm:mb-5 md:mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 2, 
                      delay: 1.5,
                      ease: [0.5, 0.1, 0.5, 1]
                    }}
                  >
                    <Image
                      src="/PNG 300/BMC_Blanco Iso.png"
                      alt="Beyond Movilidad Compartida Logo"
                      width={600}
                      height={300}
                      className="h-32 w-auto xs:h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 logo-hd"
                      priority
                      quality={100}
                      sizes="(max-width: 475px) 256px, (max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 352px, 416px"
                      style={{
                        objectFit: 'contain',
                        filter: 'none',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                  </motion.div>

                  {/* Beyond Movilidad Compartida Title */}
                  <motion.h1
                    className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold tracking-wider mb-3 xs:mb-4 sm:mb-5 md:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 1.8,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                  >
                    BEYOND<br />
                    MOVILIDAD<br />
                    COMPARTIDA
                  </motion.h1>

                  {/* Innovation Message - Different from desert slide */}
                  <motion.p
                    className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                  >
                    Innovación tecnológica<br className="hidden xs:block" />
                    <span className="xs:hidden"> </span>y diseño vanguardista<br className="hidden xs:block" />
                    <span className="xs:hidden"> </span>para el futuro de la movilidad.
                  </motion.p>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 xs:space-x-3">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
