import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-mono font-semibold mb-4 text-foreground">
              OPERIS
            </h3>
            <p className="text-foreground-secondary text-lg">
              Архитектура операционных процессов.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Контакт
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@operis.ru"
                className="flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors text-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href="https://t.me/operis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors text-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-foreground-muted text-lg">
              Краткая юридическая информация
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30">
          <p className="text-sm text-foreground-muted text-center">
            © {new Date().getFullYear()} Operis. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
