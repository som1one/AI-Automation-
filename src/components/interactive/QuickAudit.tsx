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
        <Sparkles className="w-5 h-5" />
        Запустить аудит
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:max-w-2xl md:w-full z-50 bg-card border-2 border-primary/30 
                       rounded-2xl shadow-glow-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                {!isCompleted ? (
                  <>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30">
                          <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-bold">Бесплатный мини-аудит</h3>
                          <p className="text-sm text-foreground-secondary">
                            Вопрос {currentStep + 1} из {questions.length}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-background-secondary rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-foreground-secondary" />
                      </button>
                    </div>

                    {/* Progress */}
                    <div className="mb-8">
                      <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>

                    {/* Question */}
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="mb-6"
                    >
                      <h4 className="text-2xl font-display font-bold mb-6">
                        {questions[currentStep].question}
                      </h4>
                      <div className="space-y-3">
                        {questions[currentStep].options.map((option, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswer(option)}
                            className="w-full p-4 rounded-xl bg-background-secondary border border-border 
                                     hover:border-primary/50 hover:bg-primary/10 text-left transition-all
                                     flex items-center gap-3 group"
                          >
                            <div className="w-6 h-6 rounded-full border-2 border-primary/30 group-hover:border-primary 
                                         flex items-center justify-center flex-shrink-0">
                              <div className="w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-foreground-secondary group-hover:text-foreground transition-colors">
                              {option}
                            </span>
                            <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 ml-auto transition-opacity" />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                      transition={{ duration: 1 }}
                      className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 
                               border border-primary/30 mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Аудит завершен!
                    </h3>
                    <p className="text-foreground-secondary mb-6">
                      Результаты отправлены в Telegram. Мы свяжемся с вами в ближайшее время!
                    </p>
                    <div className="flex gap-4 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={reset}
                        className="btn-outline"
                      >
                        Пройти еще раз
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(false)}
                        className="btn-primary"
                      >
                        Закрыть
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
