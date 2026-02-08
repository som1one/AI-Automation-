import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, TrendingUp, Clock, Shield } from 'lucide-react'
import AIAssistant from '@/components/visual/AIAssistant'
import AnimatedCounter from '@/components/interactive/AnimatedCounter'

interface HeroSectionProps {
  setActiveSection: (section: string) => void
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
      
      {/* Animated background elements - более плавные */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
            y: [0, 25, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-r from-primary/18 via-secondary/12 to-primary/18 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -35, 0],
            y: [0, -40, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-secondary/18 via-accent/12 to-secondary/18 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 backdrop-blur-sm mb-8 shadow-glow"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gradient">AI Automation Expert</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight px-4"
          >
            <span className="block">Помогаю бизнесам</span>
            <span className="block text-gradient">перестать терять</span>
            <span className="block">заявки и время</span>
            <span className="block text-gradient">через автоматизацию</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Превращаю рутину в автоматизированные процессы,
            <br className="hidden sm:block" />
            чтобы вы фокусировались на росте бизнеса
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contacts')}
              className="btn-primary flex items-center gap-2 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Начать аудит бесплатно
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="btn-outline flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Узнать больше
            </motion.button>
          </motion.div>

          {/* AI Assistant Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-16"
          >
            <AIAssistant />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
          >
            {[
              { value: '50%+', label: 'Рост конверсии', icon: TrendingUp, color: 'text-primary' },
              { value: '20ч', label: 'Экономия времени', icon: Clock, color: 'text-accent' },
              { value: '24/7', label: 'Автоматизация', icon: Zap, color: 'text-primary' },
              { value: '100%', label: 'Надежность', icon: Shield, color: 'text-accent' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="card text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-3 rounded-xl mb-4 ${
                      stat.color === 'text-primary' 
                        ? 'bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30' 
                        : 'bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/30'
                    } shadow-glow`}
                  >
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </motion.div>
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-gradient mb-2"
                  >
                    {stat.value.includes('%') ? (
                      <AnimatedCounter 
                        value={parseInt(stat.value)} 
                        suffix="%+" 
                        duration={2}
                      />
                    ) : stat.value.includes('ч') ? (
                      <AnimatedCounter 
                        value={parseInt(stat.value)} 
                        suffix="ч" 
                        duration={2}
                      />
                    ) : stat.value === '24/7' ? (
                      '24/7'
                    ) : (
                      <AnimatedCounter 
                        value={100} 
                        suffix="%" 
                        duration={2}
                      />
                    )}
                  </motion.div>
                  <div className="text-sm text-foreground-secondary">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 px-4"
      >
        <div className="text-xs sm:text-sm text-foreground-secondary mb-2 text-center max-w-md">
          Я не беру всех подряд. Работаю только с бизнесами, готовыми к автоматизации
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground-secondary rounded-full flex items-start justify-center p-2 cursor-pointer"
          onClick={() => scrollToSection('services')}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-foreground-secondary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
