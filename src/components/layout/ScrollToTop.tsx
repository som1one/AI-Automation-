import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Сохраняем позицию скролла перед уходом со страницы
    const saveScrollPosition = () => {
      sessionStorage.setItem(`scrollPosition_${pathname}`, window.scrollY.toString())
    }

    // Восстанавливаем позицию скролла при возврате на страницу
    const savedPosition = sessionStorage.getItem(`scrollPosition_${pathname}`)
    if (savedPosition) {
      // Небольшая задержка для того, чтобы контент успел загрузиться
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10))
      }, 0)
    } else {
      // Если позиции нет, прокручиваем наверх только при смене маршрута
      window.scrollTo(0, 0)
    }

    // Сохраняем позицию при скролле
    const handleScroll = () => {
      saveScrollPosition()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return null
}

export default ScrollToTop
