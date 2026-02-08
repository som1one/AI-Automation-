import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Sparkles, Zap, Brain, Cpu } from 'lucide-react'

const AIAssistant = () => {
  const [activeIcon, setActiveIcon] = useState(0)
  const icons = [Sparkles, Zap, Brain, Cpu]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const ActiveIcon = icons[activeIcon]

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main orb */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto"
      >
        {/* Outer glow - более плавный и аккуратный */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 blur-3xl"
        />
        
        {/* Middle ring - плавное вращение */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-6 rounded-full border border-primary/20"
        />
        
        {/* Secondary ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-8 rounded-full border border-secondary/15"
        />
        
        {/* Inner core - более аккуратный */}
        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-primary/40 via-secondary/25 to-accent/35 
                     backdrop-blur-lg border border-primary/40 flex items-center justify-center
                     shadow-[0_0_40px_rgba(139,92,246,0.3)]">
          <motion.div
            key={activeIcon}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="text-primary"
          >
            <ActiveIcon className="w-10 h-10 sm:w-14 sm:h-14" />
          </motion.div>
        </div>

        {/* Floating particles - более плавные и аккуратные */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 8
          const radius = 110
          return (
            <motion.div
              key={i}
              animate={{
                x: [
                  Math.cos(angle) * radius,
                  Math.cos(angle) * (radius + 15),
                  Math.cos(angle) * radius,
                ],
                y: [
                  Math.sin(angle) * radius,
                  Math.sin(angle) * (radius + 15),
                  Math.sin(angle) * radius,
                ],
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.15,
              }}
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-primary"
              style={{
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 8px rgba(139, 92, 246, 0.8)',
              }}
            />
          )
        })}
      </motion.div>

      {/* Scanning lines - более плавные и аккуратные */}
      <motion.div
        animate={{
          y: ['-100%', '100%', '-100%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"
      />
    </div>
  )
}

export default AIAssistant
