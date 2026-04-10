<script setup lang="ts">
import { gsap } from 'gsap'

const line1 = ref<HTMLElement>()
const line2 = ref<HTMLElement>()
const subline = ref<HTMLElement>()
const accentLine = ref<HTMLElement>()

function splitToChars(text: string): string {
  return text
    .split('')
    .map(ch =>
      ch === ' '
        ? '<span class="char" style="width:0.3em;display:inline-block;">&nbsp;</span>'
        : `<span class="char">${ch}</span>`
    )
    .join('')
}

onMounted(() => {
  if (line1.value) line1.value.innerHTML = splitToChars('Selected')
  if (line2.value) line2.value.innerHTML = splitToChars('Works')
  if (subline.value) subline.value.innerHTML = splitToChars('Midjourney — 2025')

  nextTick(() => {
    const tl = gsap.timeline({ delay: 0.6 })

    tl.from('#hero-line-1 .char', {
      y: '110%',
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.04,
    })
    tl.from('#hero-line-2 .char', {
      y: '110%',
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.04,
    }, '-=0.9')
    tl.from('#hero-sub .char', {
      opacity: 0,
      duration: 0.6,
      stagger: 0.02,
    }, '-=0.6')
    tl.from(accentLine.value!, {
      scaleX: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.4')
  })
})
</script>

<template>
  <section class="hero">
    <h1 class="hero-title" aria-label="Selected Works">
      <span id="hero-line-1" ref="line1" class="hero-title-line"></span>
      <span id="hero-line-2" ref="line2" class="hero-title-line"></span>
    </h1>
    <p id="hero-sub" ref="subline" class="hero-sub"></p>
    <div ref="accentLine" class="hero-accent-line"></div>
    <div class="hero-scroll-hint">Scroll</div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 3rem 6rem;
  position: relative;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(4rem, 12vw, 11rem);
  font-weight: 300;
  line-height: 0.88;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.hero-title-line {
  display: block;
  overflow: hidden;
}

:deep(.char) {
  display: inline-block;
}

.hero-sub {
  margin-top: 2rem;
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.hero-accent-line {
  width: 60px;
  height: 1px;
  background: var(--accent);
  margin-top: 3rem;
  transform-origin: left;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  font-size: 0.6875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  writing-mode: vertical-rl;
}

@media (max-width: 768px) {
  .hero {
    padding: 0 1.5rem 4rem;
  }
  .hero-scroll-hint {
    display: none;
  }
}
</style>
