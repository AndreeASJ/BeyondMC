'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TechFeature {
  icon: string
  title: string
  description: string
  stats: { label: string; value: string }[]
}

const techFeatures: TechFeature[] = [
  {
    icon: '⚡',
    title: 'Batería de Nueva Generación',
    description: 'Tecnología de celdas de estado sólido con densidad energética superior y carga ultra-rápida.',
    stats: [
      { label: 'Capacidad', value: '120 kWh' },
      { label: 'Carga rápida', value: '15 min' },
      { label: 'Ciclos de vida', value: '500k km' },
    ]
  },
  {
    icon: '🚀',
    title: 'Motor Eléctrico Tri-Motor',
    description: 'Sistema de propulsión avanzado con control independiente por rueda y tracción total.',
    stats: [
      { label: 'Potencia', value: '450 HP' },
      { label: 'Torque', value: '850 Nm' },
      { label: 'Eficiencia', value: '95%' },
    ]
  },
  {
    icon: '🧠',
    title: 'IA de Conducción Autónoma',
    description: 'Sistema de asistencia avanzado con procesamiento en tiempo real y aprendizaje continuo.',
    stats: [
      { label: 'Nivel', value: 'SAE L3' },
      { label: 'Sensores', value: '12 cámaras' },
      { label: 'Procesador', value: '5 nm' },
    ]
  },
  {
    icon: '🛡️',
    title: 'Seguridad Inteligente',
    description: 'Estructura de aluminio aeroespacial con sistemas de protección activa y pasiva.',
    stats: [
      { label: 'Rating', value: '5★ NCAP' },
      { label: 'Airbags', value: '10 zonas' },
      { label: 'Frenado', value: '35 m' },
    ]
  },
]

/**
 * Technology & Innovation Section
 * Showcases advanced features with scroll-triggered animations
 */
export default function TechInnovationSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-electric-cyan rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-electric-blue/10 backdrop-blur-md rounded-full border border-electric-blue/30 text-electric-blue"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TECNOLOGÍA E INNOVACIÓN
          </motion.span>

          <motion.h2
            className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ingeniería del
            <span className="block gradient-text">Futuro</span>
          </motion.h2>

          <motion.p
            className="text-lg xs:text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cada componente ha sido diseñado con precisión milimétrica para ofrecer 
            la experiencia de conducción más avanzada del planeta.
          </motion.p>
        </motion.div>

        {/* Tech Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
            >
              {/* Card Background with Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl transition-all duration-500 group-hover:from-electric-blue/10 group-hover:to-electric-purple/5" />
              <div className="absolute inset-0 border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-electric-blue/30 group-hover:shadow-lg group-hover:shadow-electric-blue/20" />
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl xs:text-2xl md:text-3xl font-display font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm xs:text-base text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {feature.stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.15 + statIndex * 0.1 }}
                    >
                      <div className="text-lg xs:text-xl md:text-2xl font-bold text-electric-blue mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs xs:text-sm text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <svg
                    className="w-6 h-6 text-electric-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-gray-400 mb-6">
            ¿Quieres conocer más sobre nuestra tecnología?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-electric-blue/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descargar Especificaciones Técnicas
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
