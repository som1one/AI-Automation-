import { motion } from 'framer-motion'
import { Search, Code, Rocket, BarChart3, CheckCircle2 } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    icon: Search,
    title: 'Разбор бизнеса',
    description: 'Анализируем ваши процессы, выявляем узкие места и точки роста',
    details: 'Провожу глубокий анализ вашего бизнеса, выявляю процессы, которые можно автоматизировать, и определяю приоритеты для максимального эффекта.',
  },
  {
    icon: Code,
    title: 'Прототип',
    description: 'Создаем рабочий макет для тестирования и согласования',
    details: 'Разрабатываю рабочий прототип решения, который можно протестировать на реальных данных. Вы видите результат до полного внедрения.',
  },
  {
    icon: Rocket,
    title: 'Внедрение',
    description: 'Запускаем систему в ваш бизнес с полной поддержкой',
    details: 'Поэтапно внедряю решение в ваш бизнес с минимальными рисками. Обеспечиваю полную поддержку на каждом этапе.',
  },
  {
    icon: BarChart3,
    title: 'Поддержка',
    description: 'Мониторинг и обновления для долгосрочной эффективности',
    details: 'Постоянно мониторю работу системы, оптимизирую процессы и обновляю функционал для поддержания максимальной эффективности.',
  },
]

const ProcessStep = ({ step, index, isInView }: { step: typeof steps[0], index: number, isInView: boolean }) => {
  const Icon = step.icon
  const stepRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
      whileHover={{ scale: 1.02 }}
    >
      {/* Connection line with animation */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-20 left-8 w-0.5 h-full z-0">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
            className="w-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30"
          />
        </div>
      )}

      <div className="relative z-10 flex gap-6">
        {/* Icon with number badge */}
        <div className="relative flex-shrink-0">
          {/* Glow effect */}
          <motion.div
            animate={isInView ? { 
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 20px rgba(139, 92, 246, 0.3)',
                '0 0 40px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(139, 92, 246, 0.3)'
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl"
          />
          
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 
                     border-2 border-primary/60 flex items-center justify-center shadow-glow
                     backdrop-blur-sm"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
          
          {/* Step number badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring' }}
            className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary 
                     rounded-full flex items-center justify-center border-2 border-background shadow-glow"
          >
            <span className="text-xs font-bold text-white">0{index + 1}</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 pt-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="mb-3"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 group-hover:text-gradient transition-colors">
              {step.title}
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            className="text-lg text-foreground-secondary mb-4 leading-relaxed"
          >
            {step.description}
          </motion.p>
          
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isInView ? { height: 'auto', opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
            className="overflow-hidden"
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent 
                          border border-primary/20 backdrop-blur-sm">
              <p className="text-sm text-foreground-muted leading-relaxed">
                {step.details}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const ProcessSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            Как выглядит процесс
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Прозрачный процесс без сюрпризов
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16 md:space-y-20 relative">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Trust message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block card max-w-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-display font-bold text-gradient">Прозрачность</h4>
            </div>
            <p className="text-foreground-secondary leading-relaxed">
              <span className="font-semibold text-foreground">Никаких скрытых платежей.</span>{' '}
              Вы всегда знаете, что получаете и сколько это стоит. Каждый этап согласовывается
              перед началом работы.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
