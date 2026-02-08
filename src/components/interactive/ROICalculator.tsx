import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { useState } from 'react'

const ROICalculator = () => {
  const [hours, setHours] = useState(20)
  const [hourlyRate, setHourlyRate] = useState(2000)
  const [leads, setLeads] = useState(100)
  const [conversion, setConversion] = useState(5)

  const savedHours = hours
  const savedMoney = hours * hourlyRate
  const additionalLeads = leads * (conversion / 100)
  const additionalRevenue = additionalLeads * 50000 // средний чек

  const totalSavings = savedMoney + additionalRevenue

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-bold">Калькулятор экономии</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">
            Часов в неделю на рутину
          </label>
          <input
            type="range"
            min="5"
            max="40"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-foreground-muted mt-1">
            <span>5ч</span>
            <span className="font-semibold text-primary">{hours}ч</span>
            <span>40ч</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Стоимость часа работы (₽)
          </label>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-foreground-muted mt-1">
            <span>500₽</span>
            <span className="font-semibold text-primary">{hourlyRate.toLocaleString()}₽</span>
            <span>5000₽</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Лидов в месяц
          </label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={leads}
            onChange={(e) => setLeads(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-foreground-muted mt-1">
            <span>10</span>
            <span className="font-semibold text-primary">{leads}</span>
            <span>500</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Рост конверсии (%)
          </label>
          <input
            type="range"
            min="10"
            max="100"
            step="5"
            value={conversion}
            onChange={(e) => setConversion(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-foreground-muted mt-1">
            <span>10%</span>
            <span className="font-semibold text-primary">{conversion}%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 text-center"
        >
          <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-gradient mb-1">
            {savedHours}ч
          </div>
          <div className="text-sm text-foreground-secondary">Экономия времени</div>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          className="p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/10 border border-secondary/30 text-center"
        >
          <TrendingUp className="w-6 h-6 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-gradient mb-1">
            +{additionalLeads.toFixed(0)}
          </div>
          <div className="text-sm text-foreground-secondary">Доп. лидов</div>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          className="p-4 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/30 text-center"
        >
          <DollarSign className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-gradient mb-1">
            {totalSavings.toLocaleString()}₽
          </div>
          <div className="text-sm text-foreground-secondary">Экономия в месяц</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ROICalculator
