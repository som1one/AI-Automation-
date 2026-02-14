import { motion } from 'framer-motion'

const problems = [
  'Заявки обрабатываются с задержкой',
  'Процессы завязаны на конкретных людях',
  'Нет прозрачной картины происходящего',
]

const ProblemsSection = () => {
  return (
    <section 
      id="problems" 
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
          02
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
            <span className="text-foreground">Ваш бизнес теряет деньги{' '}</span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
              }}
            >
              там, где вы не смотрите.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="space-y-8"
        >
          {problems.map((problem, index) => (
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
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/40 group-hover:bg-primary/60 transition-colors duration-300"
                  whileHover={{ 
                    boxShadow: '0 0 8px rgba(107, 127, 215, 0.3)',
                  }}
                />
                <motion.p
                  className="text-xl sm:text-2xl text-foreground-secondary group-hover:text-foreground transition-colors duration-300 leading-relaxed"
                  whileHover={{ 
                    filter: 'brightness(1.1)',
                  }}
                >
                  {problem}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default ProblemsSection
