import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react'
import { useState } from 'react'

interface Question {
  id: number
  question: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Сколько времени в неделю тратите на рутинные задачи?',
    options: ['Меньше 10 часов', '10-20 часов', '20-40 часов', 'Больше 40 часов'],
  },
  {
    id: 2,
    question: 'Какой главный источник потери лидов?',
    options: ['Медленная обработка заявок', 'Нет автоматизации', 'Нет интеграций', 'Другое'],
  },
  {
    id: 3,
    question: 'Какая автоматизация нужна в первую очередь?',
    options: ['Telegram-бот', 'AI-ассистент', 'Интеграции', 'Автоворонки'],
  },
]

const QuickAudit = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsCompleted(true)
      // Здесь можно отправить результаты
      setTimeout(() => {
        const message = `Мини-аудит:\n\n${questions.map((q, i) => `${q.question}\nОтвет: ${newAnswers[i]}`).join('\n\n')}`
        window.open(`https://t.me/auto_ai_agents?text=${encodeURIComponent(message)}`, '_blank')
      }, 2000)
    }
  }

  const reset = () => {
    setCurrentStep(0)
    setAnswers([])
    setIsCompleted(false)
    setIsOpen(false)
  }

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="btn-primary inline-flex items-center gap-2"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Запустить аудит
        </span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isCompleted && setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:max-w-2xl md:w-full z-50 bg-background-secondary/95 backdrop-blur-xl 
                       border-2 border-primary/40 rounded-3xl shadow-glow overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                {!isCompleted ? (
                  <>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/20 border border-primary/40 shadow-glow">
                          <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-display font-bold gradient-text">
                            Бесплатный мини-аудит
                          </h3>
                          <p className="text-sm text-foreground-secondary mt-1">
                            Вопрос {currentStep + 1} из {questions.length}
                          </p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-background-secondary/50 rounded-xl transition-colors"
                      >
                        <X className="w-5 h-5 text-foreground-secondary" />
                      </motion.button>
                    </div>

                    {/* Progress */}
                    <div className="mb-8">
                      <div className="h-2 bg-background-secondary/50 rounded-full overflow-hidden border border-border/30">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-glow"
                        />
                      </div>
                    </div>

                    {/* Question */}
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <h4 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
                        {questions[currentStep].question}
                      </h4>
                      <div className="space-y-3">
                        {questions[currentStep].options.map((option, index) => (
                          <motion.button
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswer(option)}
                            className="w-full p-5 rounded-xl bg-background/50 border-2 border-border/50 
                                     hover:border-primary/50 hover:bg-primary/10 text-left transition-all duration-300
                                     flex items-center gap-4 group relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10 w-6 h-6 rounded-full border-2 border-primary/30 group-hover:border-primary 
                                         flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                              <div className="w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <span className="relative z-10 flex-1 text-base font-medium text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                              {option}
                            </span>
                            <ArrowRight className="relative z-10 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 ml-auto transition-all duration-300 transform group-hover:translate-x-1" />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      className="inline-flex p-5 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 
                               border-2 border-primary/40 shadow-glow mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 gradient-text">
                      Аудит завершен!
                    </h3>
                    <p className="text-foreground-secondary mb-8 max-w-md mx-auto">
                      Результаты отправлены в Telegram. Мы свяжемся с вами в ближайшее время!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={reset}
                        className="btn-outline"
                      >
                        Пройти еще раз
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(false)}
                        className="btn-primary"
                      >
                        <span className="relative z-10">Закрыть</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default QuickAudit
