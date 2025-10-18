import HeroSection from '@/components/sections/HeroSection'
import QuienesSomosSection from '@/components/sections/QuienesSomosSection'
import MissionVisionSection from '@/components/sections/MissionVisionSection'
import ValoresSection from '@/components/sections/ValoresSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuienesSomosSection />
      <MissionVisionSection />
      <ValoresSection />
    </main>
  )
}


