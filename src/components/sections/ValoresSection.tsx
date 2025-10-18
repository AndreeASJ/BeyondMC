'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * Valores Section - Our Values
 * Purpose: Present company values with icons and descriptions
 * Architecture: Background image with offset positioning and gradient overlay
 */
export default function ValoresSection() {
  return (
    <section className="relative min-h-screen py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: '#161620' }}>
      {/* Background Image with Offset */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            transform: 'translateX(40%)',
            width: '100%'
          }}
        >
          <Image
            src="/Beach B 04.png"
            alt="Beyond Movilidad Compartida Background"
            fill
            className="object-cover"
            style={{
              objectPosition: 'right center'
            }}
            quality={100}
            sizes="100vw"
          />
        </div>
        
        {/* Gradient Overlay to hide cut-off */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #161620 40%, rgba(22, 22, 32, 0.8) 60%, rgba(22, 22, 32, 0.4) 80%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4">
            Nuestros <span className="text-green-400 font-bold">valores</span>
          </h2>
        </motion.div>

        {/* Values Grid - 2 on top, 3 on bottom */}
        <div className="space-y-16 lg:space-y-30">
          {/* Top Row - 2 values centered */}
          <div className="flex flex-row justify-center items-center gap-24 lg:gap-40">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <img
                  src="/iconografia/Iconografia BMC_Diseño.png"
                  alt="Diseño Icon"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 mx-auto object-contain"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-3xl text-white">
                {/* Make it two lines */}
                <span className="block">Intencionalidad</span>
                <span className="block">en el diseño</span>
              </h3>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <img
                  src="/iconografia/Iconografia BMC_responsabilidad ambiental .png"
                  alt="Responsabilidad Ambiental Icon"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 mx-auto object-contain"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-3xl text-white">
                {/* Make it two lines */}
                <span className="block">Responsabilidad</span>
                <span className="block">ambiental</span>
              </h3>
            </motion.div>
          </div>

          {/* Mobile: Second Row - 2 values | Desktop: Bottom Row - 3 values */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Value 3: Innovation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <img
                src="/iconografia/Iconografia BMC_Innovacion.png"
                alt="Innovación Icon"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 mx-auto object-contain"
              />
            </div>
            <h3 className="text-sm sm:text-base lg:text-3xl text-white">
              Innovación
            </h3>
          </motion.div>

          {/* Value 4: Inclusion */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <img
                src="/iconografia/Iconografia BMC_Inclusion.png"
                alt="Inclusión Icon"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 mx-auto object-contain"
              />
            </div>
            <h3 className="text-sm sm:text-base lg:text-3xl text-white">
              Inclusión
            </h3>
          </motion.div>

          {/* Value 5: Security - Hidden on mobile, shown on desktop */}
          <motion.div
            className="text-center hidden lg:block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <img
                src="/iconografia/Iconografia BMC_Seguridad.png"
                alt="Seguridad Icon"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 mx-auto object-contain"
              />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-white">
              Seguridad
            </h3>
          </motion.div>

          </div>

          {/* Mobile: Third Row - 1 value (Seguridad) */}
          <div className="grid grid-cols-1 lg:hidden gap-6 max-w-6xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <img
                  src="/iconografia/Iconografia BMC_Seguridad.png"
                  alt="Seguridad Icon"
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-contain"
                />
              </div>
              <h3 className="text-sm sm:text-base text-white">
                Seguridad
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
