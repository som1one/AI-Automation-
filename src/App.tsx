import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import ProcessSection from '@/sections/ProcessSection'
import CasesSection from '@/sections/CasesSection'
import ContactsSection from '@/sections/ContactsSection'
import AnimatedBackground from '@/components/visual/AnimatedBackground'
import CursorFollower from '@/components/visual/CursorFollower'
import ScrollProgress from '@/components/visual/ScrollProgress'

function App() {
  const [activeSection, setActiveSection] = useState<string>('home')

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <CursorFollower />
      <ScrollProgress />
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <HeroSection setActiveSection={setActiveSection} />
        <ServicesSection />
        <ProcessSection />
        <CasesSection />
        <ContactsSection />
      </main>
    </div>
  )
}

export default App
