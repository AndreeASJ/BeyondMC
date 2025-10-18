'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * Mission & Vision Section - Beyond Movilidad Compartida
 * Features: Sidebar with rotated text, mission and vision cards with icons
 * Architecture: Clean layout with improved spacing and modern design
 */
export default function MissionVisionSection() {
  return (
    <section className="relative min-h-[80vh] xs:min-h-[70vh] sm:h-[60vh] bg-gray-50 flex flex-col sm:flex-row">
      {/* Left Sidebar with Rotated Text - Hidden on mobile, shown on larger screens */}
      <motion.div
        className="hidden sm:flex w-24 sm:w-32 lg:w-40 bg-gray-50 items-end justify-center relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full h-full flex justify-center items-end pb-8">
          {/* BEYOND - Left side */}
          <motion.div
            className="absolute"
            style={{ 
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              bottom: '5rem',
              left: '15%'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-navy-800 font-bold text-4xl sm:text-5xl lg:text-5xl tracking-wider">
              Beyond
            </div>
          </motion.div>

          {/* MOVILIDAD COMPARTIDA - Right side */}
          <motion.div
            className="absolute"
            style={{ 
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              bottom: '5rem',
              right: '30%'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-navy-800 font-normal text-base sm:text-3xl lg:text-4xl tracking-wider">
              Movilidad Compartida
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Sidebar Text - Only visible on mobile */}
      <motion.div
        className="sm:hidden bg-gray-50 py-4 px-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-navy-800 font-bold text-2xl tracking-wider mb-1">Beyond</div>
        <div className="text-navy-800 font-normal text-lg tracking-wider">Movilidad Compartida</div>
      </motion.div>

      {/* Main Content Area */}
      <motion.div 
        className="flex-1 flex items-center justify-center py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 w-full max-w-none px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          
          {/* Mission Card */}
          <motion.div
            className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl xs:shadow-2xl hover:shadow-3xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            {/* Mission Icon */}
            <motion.div
              className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 mb-4 xs:mb-5 sm:mb-6 mx-auto"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src="/iconografia/Iconografia BMC_Mision.png"
                alt="Electric Vehicle Icon"
                className="w-full h-full object-contain drop-shadow-lg"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' }}
              />
            </motion.div>

            {/* Mission Title */}
            <motion.h2
              className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4 xs:mb-5 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              MISIÓN
            </motion.h2>

            {/* Mission Content */}
            <motion.div
              className="text-base xs:text-lg sm:text-lg text-gray-600 leading-relaxed space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>
                Liderar la transición hacia la movilidad sostenible en Latinoamérica, mediante la{' '}
                <strong className="text-gray-800">fabricación de vehículos eléctricos en México.</strong>{' '}
                Impulsando la creatividad, desarrollando capacidad tecnológica de vanguardia y creando 
                empleos de alto valor que lleven el diseño, y la manufactura en México a un{' '}
                <strong className="text-gray-800">nivel de clase mundial.</strong>
              </p>
            </motion.div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl xs:shadow-2xl hover:shadow-3xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            {/* Vision Icon */}
            <motion.div
              className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 mb-4 xs:mb-5 sm:mb-6 mx-auto"
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src="/iconografia/Iconografia BMC_Vision.png"
                alt="Gears Icon"
                className="w-full h-full object-contain drop-shadow-lg"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' }}
              />
            </motion.div>

            {/* Vision Title */}
            <motion.h2
              className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4 xs:mb-5 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              VISIÓN
            </motion.h2>

            {/* Vision Content */}
            <motion.div
              className="text-base xs:text-lg sm:text-lg text-gray-600 leading-relaxed space-y-3 xs:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>
                Crear la <strong className="text-gray-800">primera OEM automotriz mexicana</strong>{' '}
                para movilidad como servicio, con enfoque en el diseño, ingeniería, manufactura y 
                comercialización de vehículos eléctricos con un alto grado de integración de 
                componentes hechos en México, compactando la cadena de valor y desarrollando un 
                modelo de negocio que brinde productos accesibles con mayor calidad y seguridad.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Sticky Beyond Logo - Bottom Right */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.23, 1, 0.32, 1],
          delay: 1.5
        }}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
        }}
      >
        <div className="relative">
           <Image
             src="/PNG 300/BMC_Oscuro Iso.png"
             alt="Beyond Movilidad Compartida"
             width={100}
             height={100}
             className="w-20 h-20 xs:w-22 xs:h-22 sm:w-24 sm:h-24 logo-glow"
             quality={100}
             priority
             sizes="(max-width: 475px) 80px, (max-width: 640px) 88px, 96px"
            style={{
              imageRendering: 'crisp-edges',
              borderRadius: '8px',
              objectFit: 'contain'
            }}
          />
        </div>
      </motion.div>

       {/* Custom CSS for strong white glow effect all around */}
       <style jsx>{`
         .logo-glow {
           filter: drop-shadow(0 0 25px rgba(255, 255, 255, 1.0)) 
                   drop-shadow(0 0 50px rgba(255, 255, 255, 1.0))
                   drop-shadow(0 0 75px rgba(255, 255, 255, 1.0))
                   drop-shadow(0 0 100px rgba(255, 255, 255, 1.0))
                   drop-shadow(0 0 125px rgba(255, 255, 255, 0.8))
                   drop-shadow(0 0 150px rgba(255, 255, 255, 0.6));
           transition: filter 0.3s ease;
         }
         
         /* Enhanced glow on hover */
         .logo-glow:hover {
           filter: drop-shadow(0 0 30px rgba(255, 255, 255, 1.0)) 
                   drop-shadow(0 0 60px rgba(255, 255, 255, 1.0))
                   drop-shadow(0 0 90px rgba(255, 255, 255, 1.0))
                   drop-shadow(0 0 120px rgba(255, 255, 255, 1.0))
                   drop-shadow(0 0 150px rgba(255, 255, 255, 1.0))
                   drop-shadow(0 0 180px rgba(255, 255, 255, 0.8));
         }
       `}</style>
    </section>
  )
}
