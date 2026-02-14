import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/sections/Footer'

const ReputationControlPage = () => {
  const [review, setReview] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const generateResponse = async () => {
    if (!review.trim()) return
    
    setIsLoading(true)
    setResponse('')
    
    try {
      const response = await fetch('/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: review }),
      })
      
      if (!response.ok) {
        throw new Error('Ошибка при генерации ответа')
      }
      
      const data = await response.json()
      setResponse(data.response || data.text || '')
    } catch (error) {
      console.error('Ошибка:', error)
      setResponse('Произошла ошибка при генерации ответа. Попробуйте еще раз.')
    } finally {
      setIsLoading(false)
    }
  }

  const problemsWithout = [
    'Ответы пишутся вручную',
    'Негатив теряется',
    'Тон коммуникации нестабилен',
    'Репутация зависит от настроения менеджера',
  ]

  const benefitsWith = [
    'Реакция мгновенная',
    'Тональность единая',
    'Критические отзывы выделяются',
    'Процесс контролируем',
  ]

  const features = [
    {
      title: 'Контроль отзывов и репутации',
      description: 'Автоматическая генерация корректных ответов.',
    },
    {
      title: 'Автоматическая обработка заявок',
      description: 'Система классифицирует обращения.',
    },
    {
      title: 'Систематизация клиентского потока',
      description: 'Каждый входящий сигнал получает структуру.',
    },
    {
      title: 'Уведомления о критических ситуациях',
      description: 'Негативные отзывы помечаются и отправляются ответственным.',
    },
  ]

  const implementationSteps = [
    'Анализ каналов коммуникации',
    'Настройка логики обработки',
    'Интеграция с CRM / почтой / мессенджерами',
    'Контроль и масштабирование',
  ]

  const scrollToDemo = () => {
    const element = document.getElementById('demo')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen text-foreground relative" style={{ backgroundColor: '#000000' }}>
      <Navigation activeSection="" setActiveSection={() => {}} />
      
      <main className="relative z-10">
        {/* 1. Hero-блок */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          />
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                <span className="text-foreground">Контроль репутации в{' '}</span>
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
                  }}
                >
                  реальном времени
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                Отзывы не должны управлять бизнесом.<br />
                Система должна управлять реакцией на них.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToDemo}
                className="px-8 py-3.5 bg-foreground text-background font-semibold rounded-sm hover:bg-foreground/90 transition-colors flex items-center gap-2 mx-auto"
              >
                Попробовать сейчас
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* 2. Проблемный блок */}
        <section className="section relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
              {/* Когда нет системы */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-foreground leading-tight">
                  Когда нет системы:
                </h3>
                <div className="space-y-10">
                  {problemsWithout.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-6 pl-12 relative"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/40" />
                      <p className="text-xl sm:text-2xl md:text-3xl text-foreground-secondary leading-relaxed">{problem}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Когда есть Operis */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-primary leading-tight">
                  Когда есть Operis:
                </h3>
                <div className="space-y-10">
                  {benefitsWith.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-6 pl-12 relative"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40" />
                      <p className="text-xl sm:text-2xl md:text-3xl text-foreground-secondary leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Блок "Попробовать систему" */}
        <section id="demo" className="section relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Проверьте{' '}</span>
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
                  }}
                >
                  генерацию ответа
                </span>
              </h2>
              <p className="text-xl text-foreground-secondary">
                Введите отзыв клиента — система сформирует корректный ответ.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Левая колонка - Отзыв клиента */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground-secondary uppercase tracking-wider">
                  Отзыв клиента
                </label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Введите отзыв клиента..."
                  className="w-full h-64 p-4 bg-background-secondary/50 border border-border/50 rounded-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary/50 focus:bg-background-secondary transition-colors resize-none"
                />
              </div>

              {/* Правая колонка - Ответ системы */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground-secondary uppercase tracking-wider">
                  Ответ системы
                </label>
                <div className="w-full h-64 p-4 bg-background-secondary/50 border border-border/50 rounded-sm text-foreground relative overflow-hidden">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    </div>
                  ) : response ? (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-foreground-secondary leading-relaxed"
                    >
                      {response}
                    </motion.p>
                  ) : (
                    <p className="text-foreground-muted italic">Ответ появится здесь после генерации</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateResponse}
                disabled={!review.trim() || isLoading}
                className="px-8 py-3.5 bg-foreground text-background font-semibold rounded-sm hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Генерация...
                  </>
                ) : (
                  <>
                    Сгенерировать ответ
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>

            <p className="text-xs text-foreground-muted text-center mt-6">
              Демонстрационная версия. Ответы не сохраняются.
            </p>
          </div>
        </section>

        {/* 4. Что это на самом деле */}
        <section className="section relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Это не чат-бот.{' '}</span>
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
                  }}
                >
                  Это часть архитектуры контроля.
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    x: 4,
                    transition: { duration: 0.3 }
                  }}
                  className="group border-l border-primary/40 pl-8"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-foreground-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Как это внедряется */}
        <section className="section relative overflow-hidden" style={{ backgroundColor: '#141414' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Как это{' '}</span>
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #e6edf3 0%, #e6edf3 30%, rgba(107, 127, 215, 0.9) 60%, rgba(107, 127, 215, 0.7) 100%)'
                  }}
                >
                  внедряется
                </span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    x: 4,
                    transition: { duration: 0.3 }
                  }}
                  className="group flex items-start gap-8"
                >
                  <div className="w-12 h-12 border border-primary/40 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-primary/60 transition-colors duration-300">
                    <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl text-foreground-secondary group-hover:text-foreground transition-colors duration-300 pt-2">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Финальный CTA */}
        <section className="section relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Репутация — это процесс.</span>
              </h2>
              <p className="text-2xl sm:text-3xl text-foreground-secondary">
                Не ручная работа.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('contacts')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="px-8 py-3.5 bg-foreground text-background font-semibold rounded-sm hover:bg-foreground/90 transition-colors flex items-center gap-2 mx-auto mt-8"
              >
                Обсудить внедрение
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default ReputationControlPage
