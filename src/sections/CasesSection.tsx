import { motion } from 'framer-motion'
import CaseCard from '@/components/ui/CaseCard'

const cases = [
  {
    title: 'E-commerce: Автоматизация обработки заказов',
    industry: 'E-commerce',
    problem: 'Ручная обработка заказов, потеря 30% лидов из-за задержек в ответах. Клиенты ждали подтверждения заказа по несколько часов, что приводило к отменам.',
    solution: 'AI-бот в Telegram автоматизировал всю воронку: принимает заказы, отвечает на вопросы, отправляет трекинг-номера и уведомления о статусе. Интеграция с CRM для автоматической синхронизации.',
    metrics: {
      before: '30% потеря лидов',
      after: '+50% конверсия',
      improvement: '+80% эффективность',
    },
  },
  {
    title: 'Консалтинг: Интеграция CRM и уведомлений',
    industry: 'Услуги',
    problem: 'Хаос в интеграциях с CRM, ручная обработка уведомлений - 20 часов/неделю. Дублирование данных, пропущенные задачи, несинхронизированная информация между системами.',
    solution: 'Автоматизированные уведомления и синхронизация данных между системами. Единая экосистема, где все инструменты работают вместе. Автоматическое создание задач и напоминаний.',
    metrics: {
      before: '20 часов/неделю',
      after: '2 часа/неделю',
      improvement: '90% экономия времени',
    },
  },
]

const CasesSection = () => {
  return (
    <section id="cases" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 via-secondary/5 to-transparent" />
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
            Кейсы
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Реальные результаты автоматизации для реальных бизнесов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 items-stretch">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex"
            >
              <CaseCard {...caseItem} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block card max-w-2xl">
            <p className="text-foreground-secondary mb-6">
              Хотите такие же результаты для своего бизнеса?
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
              <span className="relative z-10">Обсудить ваш проект</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CasesSection
