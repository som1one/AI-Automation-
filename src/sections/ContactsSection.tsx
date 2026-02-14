import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, MessageCircle, Mail, CheckCircle2, Sparkles, Calculator, Zap } from 'lucide-react'
import QuickAudit from '@/components/interactive/QuickAudit'
import ROICalculator from '@/components/interactive/ROICalculator'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const telegramMessage = `Новая заявка с сайта:\n\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`
    const telegramUrl = `https://t.me/auto_ai_agents?text=${encodeURIComponent(telegramMessage)}`
    
    window.open(telegramUrl, '_blank')
    
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 
                     rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-background/50 backdrop-blur-xl border border-border/50 
                     rounded-3xl p-8 shadow-glow">
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/20 
                     border border-primary/40 shadow-glow mb-4"
          >
            <Send className="w-6 h-6 text-primary" />
          </motion.div>
          <h3 className="text-2xl font-display font-bold mb-2 gradient-text">
            Напишите мне
          </h3>
          <p className="text-sm text-foreground-secondary">
            Заполните форму, и я свяжусь с вами в Telegram
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
              Имя
            </label>
            <div className="relative group">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border/50 
                         text-foreground placeholder:text-foreground-muted/50
                         focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                         focus:bg-background transition-all duration-300
                         hover:border-primary/30"
                placeholder="Ваше имя"
              />
              {focusedField === 'name' && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                />
              )}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
              Email
            </label>
            <div className="relative group">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border/50 
                         text-foreground placeholder:text-foreground-muted/50
                         focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                         focus:bg-background transition-all duration-300
                         hover:border-primary/30"
                placeholder="your@email.com"
              />
              {focusedField === 'email' && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                />
              )}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
              Сообщение
            </label>
            <div className="relative group">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border/50 
                         text-foreground placeholder:text-foreground-muted/50 resize-none
                         focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                         focus:bg-background transition-all duration-300
                         hover:border-primary/30"
                placeholder="Расскажите о вашем проекте..."
              />
              {focusedField === 'message' && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                />
              )}
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary flex items-center justify-center gap-2 mt-6"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Отправлено!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Отправить в Telegram
                </>
              )}
            </span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}

const QuickContact = () => {
  const openTelegram = () => {
    window.open('https://t.me/auto_ai_agents', '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative group"
    >
      {/* Animated glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 
                   rounded-3xl blur-2xl"
      />
      
      <div className="relative bg-background/50 backdrop-blur-xl border border-border/50 
                     rounded-3xl p-8 text-center shadow-glow">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/20 
                   border border-primary/40 shadow-glow mb-4"
        >
          <MessageCircle className="w-8 h-8 text-primary" />
        </motion.div>
        
        <h3 className="text-2xl font-display font-bold mb-2 gradient-text">
          Или напишите напрямую
        </h3>
        <p className="text-sm text-foreground-secondary mb-6">
          Нажмите на кнопку ниже, чтобы открыть чат в Telegram
        </p>

        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={openTelegram}
          className="w-full btn-primary flex items-center justify-center gap-2 mb-6"
        >
          <span className="relative z-10 flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Открыть Telegram
          </span>
        </motion.button>

        <div className="pt-6 border-t border-border/50">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-foreground-secondary/70 hover:text-foreground-secondary 
                     transition-colors duration-300 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">email@example.com</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const ContactsSection = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'calculator' | 'audit'>('form')

  return (
    <section id="contacts" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/15 via-secondary/10 to-primary/15 
                     rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 right-1/4 w-[650px] h-[650px] bg-gradient-to-r from-secondary/15 via-accent/10 to-secondary/15 
                     rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 gradient-text"
          >
            Начнем работу вместе
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto mb-2"
          >
            Напишите в Telegram и разберите вашу ситуацию
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-foreground-muted"
          >
            Я не беру всех подряд. Работаю только с бизнесами, готовыми к автоматизации
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <div className="relative inline-flex p-1.5 rounded-2xl bg-background/30 border border-border/30 backdrop-blur-sm">
            {[
              { id: 'form' as const, label: 'Написать', icon: Send },
              { id: 'calculator' as const, label: 'Калькулятор', icon: Calculator },
              { id: 'audit' as const, label: 'Аудит', icon: Sparkles },
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300
                    ${
                      isActive
                        ? 'text-white'
                        : 'text-foreground-secondary hover:text-foreground'
                    }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className={`w-4 h-4 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                    {tab.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-primary to-secondary shadow-glow"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                      style={{ zIndex: 0 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'form' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <ContactForm />
              <QuickContact />
            </div>
          )}

          {activeTab === 'calculator' && (
            <div className="mb-16">
              <ROICalculator />
            </div>
          )}

          {activeTab === 'audit' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="card max-w-3xl mx-auto text-center mb-16"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 shadow-glow mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 gradient-text">
                Бесплатный мини-аудит
              </h3>
              <p className="text-foreground-secondary mb-6">
                Получите бесплатный мини-аудит за 5 минут: 3 проблемы + 1 предложение
              </p>
              <QuickAudit />
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, text: 'Быстрый ответ', subtext: 'В течение 24 часов' },
            { icon: CheckCircle2, text: 'Только серьезные проекты', subtext: 'Работаю с бизнесами' },
            { icon: MessageCircle, text: 'Прямая связь', subtext: 'В Telegram' },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background/30 border border-border/30 
                         hover:border-primary/30 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 
                              border border-primary/30 mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-semibold text-foreground mb-1">{item.text}</div>
                <div className="text-sm text-foreground-secondary">{item.subtext}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactsSection
