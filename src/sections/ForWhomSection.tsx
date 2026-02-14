import { motion } from 'framer-motion'

const criteria = [
  {
    title: 'Стабильный поток клиентов',
    description: 'Бизнес уже масштабируется и требует структуры.',
  },
  {
    title: 'Операционная нагрузка',
    description: 'Есть процессы, которые нужно контролировать системно.',
  },
  {
    title: 'Желание расти системно',
    description: 'Понимание, что рост идёт через архитектуру, а не через хаос.',
  },
]

const ForWhomSection = () => {
  return (
    <section 
      id="for-whom" 
      className="section relative overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at top right, rgba(107, 127, 215, 0.03) 0%, #0a0a0a 50%)'
      }}
    >
      {/* Vertical line left */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-border/20 hidden md:block" />
      
      {/* Section number - крупнее, акцентным цветом, с прозрачностью, частично уходящий за границу */}
      <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-primary/15 font-mono text-6xl md:text-8xl font-bold tracking-wider -rotate-90 origin-center whitespace-nowrap"
        >
          07
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 leading-tight tracking-tight">
            <span className="text-foreground">Для кого{' '}</span>
            <span className="text-primary">мы</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="space-y-8 mb-20"
        >
          {criteria.map((item, index) => (
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
              className="group relative"
            >
              <div className="flex items-start gap-6 pl-8 relative">
                {/* Вертикальная линия слева - акцентным цветом */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/40 group-hover:bg-primary/60 transition-colors duration-300"
                  whileHover={{ 
                    boxShadow: '0 0 8px rgba(107, 127, 215, 0.3)',
                  }}
                />
                
                {/* Карточка без рамки */}
                <div className="flex-1 space-y-2">
                  <motion.p
                    className="text-xl sm:text-2xl text-foreground-secondary group-hover:text-foreground transition-colors duration-300 leading-relaxed"
                    whileHover={{ 
                      filter: 'brightness(1.1)',
                    }}
                  >
                    {item.title}
                  </motion.p>
                  <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default ForWhomSection
