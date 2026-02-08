import { motion } from 'framer-motion'
import { TrendingUp, Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface CaseCardProps {
  title: string
  industry: string
  problem: string
  solution: string
  metrics: {
    before: string
    after: string
    improvement: string
  }
}

const CaseCard = ({ title, industry, problem, solution, metrics }: CaseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="card group cursor-pointer h-full flex flex-col"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Industry badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/10 border border-primary/30 text-primary text-sm font-medium">
          {industry}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-foreground-secondary transition-transform"
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-gradient transition-colors">
        {title}
      </h3>

      {/* Problem */}
      <div className="mb-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-destructive flex-shrink-0" />
          <span className="text-sm font-semibold text-destructive">Проблема</span>
        </div>
        <p className="text-sm text-foreground-secondary leading-relaxed">{problem}</p>
      </div>

      {/* Solution */}
      <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-sm font-semibold text-primary">Решение</span>
        </div>
        <p className="text-sm text-foreground-secondary leading-relaxed">{solution}</p>
      </div>

      {/* Metrics */}
      <motion.div
        animate={{ 
          height: isExpanded ? 'auto' : 0, 
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? 'auto' : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4 rounded-xl bg-background-secondary flex flex-col items-center justify-center min-h-[80px]">
              <div className="text-xs text-foreground-muted mb-2">До</div>
              <div className="text-lg font-bold text-destructive line-through">
                {metrics.before}
              </div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 flex flex-col items-center justify-center min-h-[80px]">
              <div className="text-xs text-foreground-muted mb-2">После</div>
              <div className="text-lg font-bold text-gradient">
                {metrics.after}
              </div>
            </div>
          </div>
          <div className="text-center p-3 rounded-xl bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 border border-primary/30">
            <div className="text-sm font-semibold text-gradient">
              Улучшение: {metrics.improvement}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expand hint */}
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-auto pt-4 flex items-center justify-center gap-2 text-sm text-foreground-secondary"
        >
          <span>Нажмите для просмотра метрик</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      )}
    </motion.div>
  )
}

export default CaseCard
