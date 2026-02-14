import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { useState } from 'react'
import AnimatedCounter from './AnimatedCounter'

const ROICalculator = () => {
  const [hours, setHours] = useState(7)
  const [hourlyRate, setHourlyRate] = useState(2000)
  const [leads, setLeads] = useState(100)
  const [conversion, setConversion] = useState(5)

  // Расчеты
  // Экономия времени в неделю
  const savedHoursPerWeek = hours
  
  // Экономия денег в месяц (часы в неделю * стоимость часа * 4 недели)
  const savedMoneyPerMonth = hours * hourlyRate * 4
  
  // Дополнительные лиды (рост конверсии применяется к текущим лидам)
  // Если конверсия растет на X%, то дополнительных лидов = лиды * (X% / 100)
  const additionalLeads = Math.round(leads * (conversion / 100))
  
  // Средний чек (можно сделать настраиваемым, но пока фиксированный)
  const averageCheck = 50000
  
  // Дополнительный доход от дополнительных лидов
  const additionalRevenue = additionalLeads * averageCheck
  
  // Общая экономия = экономия времени (в деньгах) + дополнительный доход
  const totalSavings = savedMoneyPerMonth + additionalRevenue

  // Функция для расчета процента слайдера
  const getSliderPercentage = (value: number, min: number, max: number) => {
    return ((value - min) / (max - min)) * 100
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/20 border border-primary/40 shadow-glow">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-bold gradient-text">Калькулятор экономии</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Часов в неделю */}
        <div className="relative">
          <label className="block text-sm font-semibold mb-3 text-foreground">
            Часов в неделю на рутину
          </label>
          <div className="relative">
            <input
              type="range"
              min="5"
              max="40"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2 bg-background-secondary rounded-full appearance-none cursor-pointer slider-custom"
              style={{
                background: `linear-gradient(to right, 
                  rgb(139, 92, 246) 0%, 
                  rgb(139, 92, 246) ${getSliderPercentage(hours, 5, 40)}%, 
                  rgba(255, 255, 255, 0.1) ${getSliderPercentage(hours, 5, 40)}%, 
                  rgba(255, 255, 255, 0.1) 100%)`
              }}
            />
            <div className="flex justify-between text-xs mt-2">
              <span className="text-foreground-muted">5ч</span>
              <motion.span 
                key={hours}
                initial={{ scale: 1.2, color: 'rgb(139, 92, 246)' }}
                animate={{ scale: 1, color: 'rgb(139, 92, 246)' }}
                className="font-bold text-primary"
              >
                {hours}ч
              </motion.span>
              <span className="text-foreground-muted">40ч</span>
            </div>
          </div>
        </div>

        {/* Стоимость часа */}
        <div className="relative">
          <label className="block text-sm font-semibold mb-3 text-foreground">
            Стоимость часа работы (₽)
          </label>
          <div className="relative">
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-background-secondary rounded-full appearance-none cursor-pointer slider-custom"
              style={{
                background: `linear-gradient(to right, 
                  rgb(139, 92, 246) 0%, 
                  rgb(139, 92, 246) ${getSliderPercentage(hourlyRate, 500, 5000)}%, 
                  rgba(255, 255, 255, 0.1) ${getSliderPercentage(hourlyRate, 500, 5000)}%, 
                  rgba(255, 255, 255, 0.1) 100%)`
              }}
            />
            <div className="flex justify-between text-xs mt-2">
              <span className="text-foreground-muted">500₽</span>
              <motion.span 
                key={hourlyRate}
                initial={{ scale: 1.2, color: 'rgb(139, 92, 246)' }}
                animate={{ scale: 1, color: 'rgb(139, 92, 246)' }}
                className="font-bold text-primary"
              >
                {hourlyRate.toLocaleString()}₽
              </motion.span>
              <span className="text-foreground-muted">5000₽</span>
            </div>
          </div>
        </div>

        {/* Лидов в месяц */}
        <div className="relative">
          <label className="block text-sm font-semibold mb-3 text-foreground">
            Лидов в месяц
          </label>
          <div className="relative">
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={leads}
              onChange={(e) => setLeads(Number(e.target.value))}
              className="w-full h-2 bg-background-secondary rounded-full appearance-none cursor-pointer slider-custom"
              style={{
                background: `linear-gradient(to right, 
                  rgb(139, 92, 246) 0%, 
                  rgb(139, 92, 246) ${getSliderPercentage(leads, 10, 500)}%, 
                  rgba(255, 255, 255, 0.1) ${getSliderPercentage(leads, 10, 500)}%, 
                  rgba(255, 255, 255, 0.1) 100%)`
              }}
            />
            <div className="flex justify-between text-xs mt-2">
              <span className="text-foreground-muted">10</span>
              <motion.span 
                key={leads}
                initial={{ scale: 1.2, color: 'rgb(139, 92, 246)' }}
                animate={{ scale: 1, color: 'rgb(139, 92, 246)' }}
                className="font-bold text-primary"
              >
                {leads}
              </motion.span>
              <span className="text-foreground-muted">500</span>
            </div>
          </div>
        </div>

        {/* Рост конверсии */}
        <div className="relative">
          <label className="block text-sm font-semibold mb-3 text-foreground">
            Рост конверсии (%)
          </label>
          <div className="relative">
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={conversion}
              onChange={(e) => setConversion(Number(e.target.value))}
              className="w-full h-2 bg-background-secondary rounded-full appearance-none cursor-pointer slider-custom"
              style={{
                background: `linear-gradient(to right, 
                  rgb(139, 92, 246) 0%, 
                  rgb(139, 92, 246) ${getSliderPercentage(conversion, 5, 100)}%, 
                  rgba(255, 255, 255, 0.1) ${getSliderPercentage(conversion, 5, 100)}%, 
                  rgba(255, 255, 255, 0.1) 100%)`
              }}
            />
            <div className="flex justify-between text-xs mt-2">
              <span className="text-foreground-muted">5%</span>
              <motion.span 
                key={conversion}
                initial={{ scale: 1.2, color: 'rgb(139, 92, 246)' }}
                animate={{ scale: 1, color: 'rgb(139, 92, 246)' }}
                className="font-bold text-primary"
              >
                {conversion}%
              </motion.span>
              <span className="text-foreground-muted">100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Экономия времени */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/15 
                     border-2 border-primary/50 text-center overflow-hidden group shadow-glow"
        >
          {/* Animated background glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl blur-xl"
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/30 border-2 border-primary/60 shadow-glow mb-4"
            >
              <Clock className="w-7 h-7 text-primary" />
            </motion.div>
            <div className="mb-3 text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-1 leading-tight flex items-center justify-center gap-1">
                <AnimatedCounter value={savedHoursPerWeek} suffix="ч" />
              </div>
              <div className="text-xs text-foreground-muted/70 uppercase tracking-wider text-center">в неделю</div>
            </div>
            <div className="text-base font-semibold text-foreground-secondary text-center">Экономия времени</div>
          </div>
        </motion.div>

        {/* Доп. лидов */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative p-8 rounded-3xl bg-gradient-to-br from-secondary/30 via-secondary/20 to-accent/15 
                     border-2 border-secondary/50 text-center overflow-hidden group shadow-glow"
        >
          {/* Animated background glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-3xl blur-xl"
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/30 border-2 border-secondary/60 shadow-glow mb-4"
            >
              <TrendingUp className="w-7 h-7 text-secondary" />
            </motion.div>
            <div className="mb-3 text-center">
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-1 leading-tight flex items-center justify-center gap-1">
                +<AnimatedCounter value={additionalLeads} />
              </div>
              <div className="text-xs text-foreground-muted/70 uppercase tracking-wider text-center">дополнительно</div>
            </div>
            <div className="text-base font-semibold text-foreground-secondary text-center">Доп. лидов</div>
          </div>
        </motion.div>

        {/* Экономия в месяц */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="relative p-8 rounded-3xl bg-gradient-to-br from-accent/30 via-accent/20 to-primary/15 
                     border-2 border-accent/50 text-center overflow-hidden group shadow-glow"
        >
          {/* Animated background glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-xl"
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/30 border-2 border-accent/60 shadow-glow mb-4"
            >
              <DollarSign className="w-7 h-7 text-accent" />
            </motion.div>
            <div className="mb-3 text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-1 leading-tight flex items-center justify-center gap-1">
                <AnimatedCounter value={totalSavings} suffix="₽" format="number" />
              </div>
              <div className="text-xs text-foreground-muted/70 uppercase tracking-wider text-center">в месяц</div>
            </div>
            <div className="text-base font-semibold text-foreground-secondary text-center">Экономия в месяц</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ROICalculator
