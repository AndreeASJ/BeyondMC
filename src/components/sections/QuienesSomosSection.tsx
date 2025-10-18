'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import { useRef, useState, useEffect } from 'react'

/**
 * Quienes Somos Section - Who We Are
 * Purpose: Present company identity and background
 * Architecture: Full-scale background image with overlaid content
 * Performance: Optimized with Next.js Image component and priority loading
 */
export default function QuienesSomosSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Scroll-based parallax effect for mobile
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Very aggressive parallax transform: start with Mexico visible, end with Argentina fully visible
  const parallaxX = useTransform(scrollYProgress, [0, 1], ['10%', '-40%'])

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      {/* Full-screen background image container */}
      <div 
        className="relative w-full h-[100vh] overflow-hidden"
        style={{ backgroundColor: '#161620' }}
      >
        {/* Mobile parallax container */}
        <motion.div
          className="absolute inset-0 h-full"
          style={{
            width: isMobile ? '200%' : '100%',
            x: isMobile ? parallaxX : 0,
          }}
        >
          <Image
            src="/BG_AboutUs_1.webp"
            alt="Beyond Movilidad Compartida - Quienes Somos"
            fill
            priority
            quality={100}
            className="object-cover lg:object-contain w-full h-full"
            sizes={isMobile ? "200vw" : "100vw"}
            style={{
              objectPosition: isMobile ? 'right center' : 'center center',
              imageRendering: 'auto'
            }}
          />
        </motion.div>
      </div>

      {/* Content overlay - positioned absolutely over the image */}
      <div className="absolute inset-0 z-10">
        <Container>
          <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center py-16 lg:py-24">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.23, 1, 0.32, 1],
                delay: 0.1
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.015,
                transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className="w-full lg:w-5/6 xl:w-11/12 px-4 sm:px-6 md:px-8 lg:px-12 mb-12 lg:mb-0"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                background: 'linear-gradient(90deg, rgba(22,22,32,0.4) 0%, rgba(22,22,32,0.2) 50%, transparent 100%)',
                padding: '2rem',
                borderRadius: '1rem'
              }}
            >
              {/* Logo - Choreographed entrance */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 40, scale: 0.85, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 1.4, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.3
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.04,
                  rotateY: 5,
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                <Image
                  src="/PNG 300/BMC_Blanco Iso.png"
                  alt="Beyond Movilidad Compartida Logo"
                  width={280}
                  height={140}
                  className="h-28 w-auto sm:h-30 md:h-32 lg:h-36"
                  priority
                  quality={100}
                  style={{
                    imageRendering: 'auto'
                  }}
                />
              </motion.div>

              {/* Title - Choreographed entrance */}
              <motion.h2 
                className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6"
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.1, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.5
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                ¿Quiénes somos?
              </motion.h2>

              {/* First Paragraph - Choreographed entrance */}
              <motion.p 
                className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white leading-relaxed font-extralight mb-6"
                initial={{ opacity: 0, y: 35, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.7
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.008,
                  x: 5,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                Somos un grupo interdisciplinario de empresarios,<br />
                emprendedores, inversionistas, científicos y promotores<br />
                del desarrollo económico que unen esfuerzos para crear,<br />
                diseñar, fabricar y comercializar vehículos eléctricos<br />
                con marca mexicana.
              </motion.p>

              {/* Second Paragraph - Choreographed finale */}
              <motion.p 
                className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white leading-relaxed font-extralight"
                initial={{ opacity: 0, y: 40, x: -15, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ 
                  duration: 1.3, 
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.9
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.006,
                  x: 8,
                  y: -1,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                Este sueño nace en Argentina, con el arquitecto, emprendedor<br />
                y diseñador <strong className="font-bold text-white">Miguel Ángel Bravo</strong>, y encuentra su hogar en<br />
                Sonora, México, junto con la empresaria <strong className="font-bold text-white">María Elena Gallego</strong>,<br />
                sumando 57 años de experiencia en el establecimiento de<br />
                empresas extranjeras y hoy creando una <strong className="font-bold text-white"><span className="relative"><span className="relative z-10">empresa&nbsp;nacional</span><span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500" style={{bottom: '-2px'}}></span></span></strong>.
              </motion.p>
            </motion.div>

            {/* Right Side - Choreographed companion */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.88, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.23, 1, 0.32, 1],
                delay: 0.2
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.01,
                rotateY: -2,
                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-12"
            >
              {/* This space allows the background map to show through */}
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
