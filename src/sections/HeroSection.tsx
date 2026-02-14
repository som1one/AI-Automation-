import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

interface HeroSectionProps {
  setActiveSection: (section: string) => void
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Structural elements */}
      {/* Vertical line left */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-border/20 hidden md:block" />
      
      {/* Section number */}
      <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-primary/15 font-mono text-6xl md:text-8xl font-bold tracking-wider -rotate-90 origin-center whitespace-nowrap"
        >
          01
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-section w-full">
        <div className="text-center">
          {/* Brand name - тонкий шрифт с увеличенным letter-spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-mono font-light text-foreground tracking-[0.3em]">
              OPERIS
            </h2>
          </motion.div>

          {/* Main Heading - с выделением последней строки */}
          <motion.h1
            style={{ y: headingY, opacity: headingOpacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold mb-12 leading-[1.1] tracking-tight"
          >
            <span className="text-foreground">Ваш бизнес не должен<br />
            зависеть от<br /></span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
              }}
            >
              настроения сотрудников.
            </span>
          </motion.h1>

          {/* Subheading - появляется с задержкой */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl sm:text-2xl md:text-3xl text-foreground-secondary mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Операционные системы, которые работают стабильно.
          </motion.p>

          {/* CTA Buttons - появляются последними */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Кнопка 1 - Попробовать сейчас (большая, белая) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/reputation-control')}
              className="relative px-8 py-3.5 bg-foreground text-background font-semibold rounded-sm transition-all duration-300 flex items-center gap-2 overflow-hidden group"
            >
              <span className="relative z-10">Попробовать сейчас</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Кнопка 2 - Обсудить процесс (контурная) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contacts')}
              className="relative px-8 py-3.5 bg-transparent border border-foreground/50 text-foreground font-semibold rounded-sm transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Обсудить процесс</span>
              <motion.div
                className="absolute inset-0 border-2 border-primary/0"
                initial={{ borderColor: 'rgba(107, 127, 215, 0)' }}
                whileHover={{ 
                  borderColor: 'rgba(107, 127, 215, 0.5)',
                  boxShadow: '0 0 20px rgba(107, 127, 215, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
