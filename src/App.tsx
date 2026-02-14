import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from '@/components/layout/Navigation'
import ScrollToTop from '@/components/layout/ScrollToTop'
import HeroSection from '@/sections/HeroSection'
import ProblemsSection from '@/sections/ProblemsSection'
import WhatWeDoSection from '@/sections/WhatWeDoSection'
import ExamplesSection from '@/sections/ExamplesSection'
import DifferenceSection from '@/sections/DifferenceSection'
import ProcessSection from '@/sections/ProcessSection'
import ForWhomSection from '@/sections/ForWhomSection'
import CTASection from '@/sections/CTASection'
import Footer from '@/sections/Footer'
import ReputationControlPage from '@/pages/ReputationControlPage'

function HomePage() {
  const [activeSection, setActiveSection] = useState<string>('home')

  return (
    <>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <HeroSection setActiveSection={setActiveSection} />
        <ProblemsSection />
        <WhatWeDoSection />
        <ExamplesSection />
        <DifferenceSection />
        <ProcessSection />
        <ForWhomSection />
        <CTASection setActiveSection={setActiveSection} />
      </main>
      
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen text-foreground relative" style={{ backgroundColor: '#000000' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reputation-control" element={<ReputationControlPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
