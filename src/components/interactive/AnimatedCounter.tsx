import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  decimals?: number
  format?: 'number' | 'default'
}

const AnimatedCounter = ({ value, suffix = '', duration = 1.5, decimals = 0, format = 'default' }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const [count, setCount] = useState(format === 'number' ? Math.round(value) : value)
  const prevValueRef = useRef(format === 'number' ? Math.round(value) : value)

  useEffect(() => {
    // Округляем значение если нужно
    const roundedValue = format === 'number' ? Math.round(value) : (decimals === 0 ? Math.round(value) : value)
    
    // Если значение не изменилось, не делаем ничего
    if (prevValueRef.current === roundedValue) {
      return
    }
    
    // Если не в поле зрения, просто устанавливаем значение
    if (!isInView) {
      setCount(roundedValue)
      prevValueRef.current = roundedValue
      return
    }

    // Анимируем от ТЕКУЩЕГО отображаемого значения к новому
    let startTime: number
    let animationFrame: number
    
    // Начинаем от текущего count, а не от prevValueRef
    const currentDisplayValue = decimals === 0 && format !== 'number' 
      ? Math.round(count) 
      : (format === 'number' ? Math.round(count) : count)
    const startValue = currentDisplayValue
    const endValue = roundedValue

    // Если значения одинаковые, не анимируем
    if (Math.abs(startValue - endValue) < 0.01) {
      setCount(endValue)
      prevValueRef.current = endValue
      return
    }

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      let currentValue = startValue + (endValue - startValue) * easeOutQuart
      
      // Округляем во время анимации для целых чисел
      if (decimals === 0 && format !== 'number') {
        currentValue = Math.round(currentValue)
      } else if (format === 'number') {
        currentValue = Math.round(currentValue)
      }
      
      setCount(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(endValue)
        prevValueRef.current = endValue
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration, decimals, format, count])

  const formatNumber = (num: number) => {
    if (format === 'number') {
      const rounded = Math.round(num)
      // Форматируем с пробелами для тысяч
      return rounded.toLocaleString('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    }
    // Для обычного формата округляем до нужного количества знаков
    const rounded = decimals > 0 ? num : Math.round(num)
    return rounded.toFixed(decimals)
  }

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span className="tabular-nums">{formatNumber(count)}</span>
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  )
}

export default AnimatedCounter
