import { motion } from 'framer-motion'

const differences = [
  {
    title: 'Мы не продаём софт',
    description: 'Отвечаем за результат.',
  },
  {
    title: 'Мы не усложняем.',
    description: 'Сложность — признак плохой архитектуры.',
  },
  {
    title: 'Мы не исправляем хаос — мы заменяем его структурой.',
    description: 'Каждое решение — элемент общей модели.',
  },
]

const DifferenceSection = () => {
  return (
    <section 
      id="difference" 
      className="section relative overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at top right, rgba(107, 127, 215, 0.03) 0%, #141414 50%)'
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
          05
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
            <span className="text-foreground">Почему{' '}</span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
              }}
            >
              Operis
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {differences.map((item, index) => (
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
                {item.title}
              </motion.h3>
              <p className="text-xl text-foreground-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DifferenceSection
