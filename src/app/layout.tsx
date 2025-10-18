import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Beyond Movilidad Compartida | Vehículos Eléctricos en México',
  description: 'Compromiso con la innovación y sostenibilidad en la fabricación de vehículos eléctricos en México. Beyond Movilidad Compartida.',
  keywords: ['vehículos eléctricos', 'movilidad compartida', 'sostenibilidad', 'México', 'innovación', 'carros eléctricos'],
  authors: [{ name: 'Beyond Movilidad Compartida' }],
  openGraph: {
    title: 'Beyond Movilidad Compartida | Vehículos Eléctricos en México',
    description: 'Compromiso con la innovación y sostenibilidad en la fabricación de vehículos eléctricos en México',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}


