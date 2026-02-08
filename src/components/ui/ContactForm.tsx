import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, MessageCircle, Mail, CheckCircle2 } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Формируем сообщение для Telegram
    const telegramMessage = `Новая заявка с сайта:\n\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`
    const telegramUrl = `https://t.me/auto_ai_agents?text=${encodeURIComponent(telegramMessage)}`
    
    // Открываем Telegram
    window.open(telegramUrl, '_blank')
    
    // Показываем подтверждение
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Имя
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border 
                   text-foreground placeholder:text-foreground-muted
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                   transition-all"
          placeholder="Ваше имя"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border 
                   text-foreground placeholder:text-foreground-muted
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                   transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Сообщение
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border 
                   text-foreground placeholder:text-foreground-muted resize-none
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                   transition-all"
          placeholder="Расскажите о вашем проекте..."
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-primary flex items-center justify-center gap-2"
      >
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
      </motion.button>
    </motion.form>
  )
}

const QuickContact = () => {
  const openTelegram = () => {
    window.open('https://t.me/auto_ai_agents', '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="card text-center"
    >
      <div className="mb-6">
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 shadow-glow mb-4">
          <MessageCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-bold mb-2">
          Или напишите напрямую
        </h3>
        <p className="text-foreground-secondary">
          Нажмите на кнопку ниже, чтобы открыть чат в Telegram
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openTelegram}
        className="relative w-full mb-6 px-8 py-3.5 bg-gradient-to-r from-primary to-secondary
                   text-white font-semibold rounded-full 
                   transition-all duration-300 overflow-hidden
                   hover:scale-105 hover:shadow-xl hover:shadow-primary/30
                   active:scale-95 flex items-center justify-center gap-2"
      >
        <span className="relative z-10 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Открыть Telegram
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent
                        opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.button>

      <div className="pt-6 border-t border-border">
        <div className="flex items-center justify-center gap-2 text-foreground-secondary">
          <Mail className="w-4 h-4" />
          <span className="text-sm">email@example.com</span>
        </div>
      </div>
    </motion.div>
  )
}

export { ContactForm, QuickContact }
