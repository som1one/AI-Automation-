import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Диагностика системы',
    description: 'Мы анализируем не симптомы, а логику процессов. Находим узкие места, дублирование и скрытые потери.',
  },
  {
    title: 'Архитектура решения',
    description: 'Проектируем структуру, которая выдержит рост. Без временных патчей и случайных связей.',
  },
  {
    title: 'Внедрение в рабочую среду',
    description: 'Интегрируем решение в текущие процессы. Без остановки бизнеса.',
  },
  {
    title: 'Стресс-тестирование',
    description: 'Проверяем на реальной нагрузке. Система должна работать не в идеале — а в реальности.',
  },
  {
    title: 'Контроль и развитие',
    description: 'Мы не исчезаем после запуска. Контроль метрик, оптимизация, масштабирование.',
  },
]

const ProcessSection = () => {
  return (
    <section 
      id="process" 
      className="section relative overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at top right, rgba(107, 127, 215, 0.03) 0%, #0f0f0f 50%)'
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
          06
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="divider mb-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-foreground">Как{' '}</span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
              }}
            >
              мы работаем
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ 
                x: 4,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="flex items-start gap-8">
                <motion.div
                  className="w-12 h-12 border border-primary/40 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-primary/60 transition-colors duration-300 mt-1"
                  whileHover={{ 
                    boxShadow: '0 0 8px rgba(107, 127, 215, 0.3)',
                  }}
                >
                  <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {index + 1}
                  </span>
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
                    whileHover={{ 
                      filter: 'brightness(1.1)',
                    }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProcessSection
