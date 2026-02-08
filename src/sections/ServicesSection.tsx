import { motion } from 'framer-motion'
import { MessageSquare, Brain, GitBranch, Plug } from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'
import InteractiveDemo from '@/components/interactive/InteractiveDemo'

const services = [
  {
    icon: MessageSquare,
    title: 'Telegram-боты',
    description: 'Разработка ботов для автоматизации общения и продаж',
    details: 'Создаю умных Telegram-ботов, которые автоматизируют обработку заявок, отвечают на вопросы клиентов 24/7 и увеличивают конверсию продаж.',
    features: [
      'Обработка заявок 24/7',
      'Интеграция с CRM',
      'Многоязычность',
      'Аналитика и отчеты',
    ],
    color: 'primary' as const,
  },
  {
    icon: Brain,
    title: 'AI-ассистенты',
    description: 'Умные помощники на базе ИИ для обработки запросов',
    details: 'Внедряю AI-ассистентов, которые понимают контекст, обучаются на ваших данных и помогают клиентам находить нужные решения.',
    features: [
      'Обработка естественного языка',
      'Обучение на ваших данных',
      'Персонализация ответов',
      'Мультиканальность',
    ],
    color: 'accent' as const,
  },
  {
    icon: GitBranch,
    title: 'Автоворонки',
    description: 'Автоматические воронки продаж для захвата лидов',
    details: 'Настраиваю многоступенчатые воронки продаж с автоматической сегментацией клиентов и персонализированными предложениями.',
    features: [
      'Сегментация клиентов',
      'Персонализированные предложения',
      'A/B тестирование',
      'Автоматические напоминания',
    ],
    color: 'primary' as const,
  },
  {
    icon: Plug,
    title: 'Интеграции',
    description: 'Соединение систем (CRM, API) для seamless автоматизации',
    details: 'Интегрирую ваши инструменты в единую экосистему: CRM, платежные системы, маркетплейсы, соцсети - всё работает как часы.',
    features: [
      'Интеграция с популярными CRM',
      'API подключения',
      'Синхронизация данных',
      'Единая экосистема',
    ],
    color: 'accent' as const,
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl" />
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
            С чем я работаю
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Комплексные решения для автоматизации вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 mb-12"
        >
          <InteractiveDemo />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-foreground-secondary mb-6">
            Нужна консультация по выбору решения?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contacts')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            <span className="relative z-10">Получить консультацию</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
