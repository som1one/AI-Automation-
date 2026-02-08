import { motion } from 'framer-motion'
import { ContactForm, QuickContact } from '@/components/ui/ContactForm'
import { Sparkles } from 'lucide-react'
import QuickAudit from '@/components/interactive/QuickAudit'
import ROICalculator from '@/components/interactive/ROICalculator'

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-l from-primary/10 via-secondary/5 to-transparent" />
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
            Контакты
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto mb-2">
            Напишите в Telegram и разберите вашу ситуацию
          </p>
          <p className="text-sm text-foreground-muted">
            Я не беру всех подряд. Работаю только с бизнесами, готовыми к автоматизации
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <ContactForm />
          </div>
          <div>
            <QuickContact />
          </div>
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <ROICalculator />
        </motion.div>

        {/* Free Audit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 shadow-glow mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-2">
            Бесплатный мини-аудит
          </h3>
          <p className="text-foreground-secondary mb-6">
            Получите бесплатный мини-аудит за 5 минут: 3 проблемы + 1 предложение
          </p>
          <QuickAudit />
        </motion.div>
      </div>
    </section>
  )
}

export default ContactsSection
