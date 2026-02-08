import { motion } from 'framer-motion'
import { LucideIcon, ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  details: string
  features: string[]
  color: 'primary' | 'accent'
}

const ServiceCard = ({ icon: Icon, title, description, details, features, color }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="card group relative overflow-hidden h-full"
    >
      {/* Gradient overlay on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${
            color === 'primary' ? 'from-primary/20 via-secondary/10 to-accent/20' : 'from-accent/20 via-primary/10 to-secondary/20'
          } pointer-events-none`}
        />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? [0, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          className={`inline-flex p-4 rounded-2xl mb-6 shadow-glow ${
            color === 'primary' ? 'bg-gradient-to-br from-primary/20 to-secondary/10 text-primary border border-primary/30' : 'bg-gradient-to-br from-accent/20 to-primary/10 text-accent border border-accent/30'
          }`}
        >
          <motion.div
            animate={isHovered ? { 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            } : {}}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-gradient transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-foreground-secondary mb-4 leading-relaxed">
          {description}
        </p>

        {/* Details */}
        <motion.div
          animate={{
            height: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-foreground-secondary mb-3">{details}</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground-secondary"
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`} />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          animate={{
            y: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0,
          }}
          className="mt-6 flex items-center gap-2 text-sm font-semibold group-hover:text-primary transition-colors"
        >
          <span>Узнать больше</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
