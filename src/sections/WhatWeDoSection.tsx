import { motion } from 'framer-motion'

const services = [
  {
    title: 'Анализ',
    description: 'Разбираем, где именно бизнес теряет контроль.',
  },
  {
    title: 'Проектирование',
    description: 'Создаём логическую модель процесса.',
  },
  {
    title: 'Автоматизация',
    description: 'Внедряем систему обработки, контроля и уведомлений.',
  },
  {
    title: 'Контроль',
    description: 'Настраиваем прозрачную картину происходящего.',
  },
]

const WhatWeDoSection = () => {
  return (
    <section 
      id="what-we-do" 
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
          03
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
            <span className="text-foreground">Мы проектируем архитектуру</span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
              }}
            >
              {' '}процессов.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ 
                x: 4,
                transition: { duration: 0.3 }
              }}
              className="group relative border-l border-primary/40 pl-8"
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300"
                whileHover={{ 
                  filter: 'brightness(1.1)',
                }}
              >
                {service.title}
              </motion.h3>
              <p className="text-xl text-foreground-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhatWeDoSection
