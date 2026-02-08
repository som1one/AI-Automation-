import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw, MessageSquare, Brain, CheckCircle2 } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const InteractiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [step, setStep] = useState(0)
  const intervalRef = useRef<number | null>(null)

  const steps = [
    { title: 'Заявка получена', icon: MessageSquare, color: 'text-primary' },
    { title: 'AI обрабатывает', icon: Brain, color: 'text-secondary' },
    { title: 'Ответ отправлен', icon: CheckCircle2, color: 'text-accent' },
  ]

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setStep((prev) => (prev + 1) % steps.length)
      }, 2000)
    } else {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, steps.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-display font-bold mb-6 text-center">
        Демо: Как работает автоматизация
      </h3>

      <div className="relative h-64 mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 overflow-hidden">
        {steps.map((stepItem, index) => {
          const Icon = stepItem.icon
          const isActive = step === index
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isActive ? 1 : 0.2,
                scale: isActive ? 1 : 0.8,
              }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.div
                animate={isActive && isPlaying ? { 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                } : {}}
                transition={{ duration: 1, repeat: isActive && isPlaying ? Infinity : 0 }}
                className={`p-6 rounded-2xl mb-4 ${
                  isActive 
                    ? 'bg-gradient-to-br from-primary/30 to-secondary/20 border-2 border-primary/50 shadow-glow' 
                    : 'bg-background-secondary/50'
                }`}
              >
                <Icon className={`w-12 h-12 ${stepItem.color}`} />
              </motion.div>
              <div className={`text-xl font-semibold ${stepItem.color} ${isActive ? '' : 'opacity-50'}`}>
                {stepItem.title}
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="btn-primary flex items-center gap-2"
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" />
              Пауза
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Запустить демо
            </>
          )}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setStep(0)
            setIsPlaying(false)
          }}
          className="btn-outline flex items-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Сбросить
        </motion.button>
      </div>
    </motion.div>
  )
}

export default InteractiveDemo
