import { gsap } from 'gsap'

/**
 * Анимация появления элемента с задержкой
 */
export const fadeInUp = (element: HTMLElement, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power2.out' }
  )
}

/**
 * Анимация свечения для кнопок
 */
export const glowAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  })
}

/**
 * Анимация сканирования (для AI-эффекта)
 */
export const scanAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    y: '100vh',
    duration: 3,
    repeat: -1,
    ease: 'none',
  })
}
