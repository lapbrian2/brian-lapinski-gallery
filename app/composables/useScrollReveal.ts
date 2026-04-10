import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollReveal() {
  const reveals: gsap.core.Tween[] = []

  function reveal(el: HTMLElement, options: {
    y?: number
    delay?: number
    duration?: number
    start?: string
  } = {}) {
    const tween = gsap.from(el, {
      y: options.y ?? 40,
      opacity: 0,
      duration: options.duration ?? 1.2,
      delay: options.delay ?? 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: options.start ?? 'top 88%',
        toggleActions: 'play none none none',
        once: true,
      },
    })
    reveals.push(tween)
    return tween
  }

  function revealChars(el: HTMLElement, options: {
    stagger?: number
    delay?: number
    duration?: number
  } = {}) {
    const chars = el.querySelectorAll('.char')
    if (!chars.length) return

    const tween = gsap.from(chars, {
      y: '110%',
      opacity: 0,
      duration: options.duration ?? 1.2,
      delay: options.delay ?? 0,
      stagger: options.stagger ?? 0.04,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
        once: true,
      },
    })
    reveals.push(tween)
    return tween
  }

  function cleanup() {
    reveals.forEach(t => t.kill())
    reveals.length = 0
  }

  return { reveal, revealChars, cleanup }
}
