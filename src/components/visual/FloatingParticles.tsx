import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particleCount = 30

    // Инициализация частиц - более аккуратные параметры
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * container.offsetWidth,
      y: Math.random() * container.offsetHeight,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.3 + 0.15,
    }))

    const animate = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > container.offsetWidth) particle.speedX *= -1
        if (particle.y < 0 || particle.y > container.offsetHeight) particle.speedY *= -1

        particle.x = Math.max(0, Math.min(container.offsetWidth, particle.x))
        particle.y = Math.max(0, Math.min(container.offsetHeight, particle.y))
      })
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particlesRef.current.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: [particle.opacity, particle.opacity * 1.3, particle.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
          className="absolute rounded-full bg-gradient-to-r from-primary/40 to-secondary/30"
          style={{
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 3}px rgba(139, 92, 246, 0.4)`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
