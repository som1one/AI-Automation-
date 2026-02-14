import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface CTASectionProps {
  setActiveSection: (section: string) => void
}

const CTASection = ({ setActiveSection }: CTASectionProps) => {
  const navigate = useNavigate()
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  return (
    <section 
      id="cta" 
      className="section relative overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at top right, rgba(107, 127, 215, 0.03) 0%, #050505 50%)'
      }}
    >
      {/* Vertical line left */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-border/20 hidden md:block" />
      
      {/* Section number - крупнее, акцентным цветом */}
      <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-primary/15 font-mono text-6xl md:text-8xl font-bold tracking-wider -rotate-90 origin-center whitespace-nowrap"
        >
          08
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="divider mb-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-foreground">Ваш бизнес не должен зависеть от{' '}</span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
              }}
            >
              настроения сотрудников.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
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
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contacts')}
              className="relative px-8 py-3.5 bg-transparent border border-foreground/50 text-foreground font-semibold rounded-sm transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Обсудить внедрение</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
