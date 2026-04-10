<script setup lang="ts">
import { gsap } from 'gsap'
import type { Artwork } from '~/types/artwork'

defineProps<{
  featured: Artwork
}>()

const heroRef = ref<HTMLElement>()
const titleChars = ref<HTMLElement>()
const subChars = ref<HTMLElement>()
const accentLine = ref<HTMLElement>()
const imageWrap = ref<HTMLElement>()

function splitToChars(text: string): string {
  return text
    .split('')
    .map(ch =>
      ch === ' '
        ? '<span class="char">&nbsp;</span>'
        : `<span class="char">${ch}</span>`
    )
    .join('')
}

onMounted(() => {
  if (titleChars.value) titleChars.value.innerHTML = splitToChars('Selected Works')
  if (subChars.value) subChars.value.innerHTML = splitToChars('Brian Lapinski — Midjourney, 2025')

  nextTick(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    tl.from('.hero-title .char', {
      y: '120%',
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.03,
    })
    tl.from('.hero-sub .char', {
      opacity: 0,
      y: 8,
      duration: 0.4,
      stagger: 0.015,
    }, '-=0.6')
    tl.from(accentLine.value!, {
      scaleX: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.4')
    tl.from(imageWrap.value!, {
      opacity: 0,
      y: 60,
      scale: 0.96,
      duration: 1.4,
      ease: 'power3.out',
    }, '-=1.2')
  })
})
</script>

<template>
  <section ref="heroRef" class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          <span ref="titleChars" class="hero-title-inner"></span>
        </h1>
        <p ref="subChars" class="hero-sub"></p>
        <div ref="accentLine" class="hero-line"></div>
      </div>
      <div ref="imageWrap" class="hero-image-wrap">
        <img
          class="hero-image"
          :src="featured.src"
          :alt="featured.title"
        >
        <div class="hero-image-caption">
          <span class="caption-title">{{ featured.title }}</span>
          <span class="caption-cat">{{ featured.category }}</span>
        </div>
      </div>
    </div>
    <div class="hero-scroll-hint">Scroll</div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8rem 3rem 4rem;
  position: relative;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
}

.hero-text {
  padding-bottom: 2rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 300;
  line-height: 0.92;
  letter-spacing: -0.02em;
  overflow: hidden;
}

.hero-title-inner {
  display: block;
}

:deep(.char) {
  display: inline-block;
}

.hero-sub {
  margin-top: 2rem;
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.hero-line {
  width: 60px;
  height: 1px;
  background: var(--accent);
  margin-top: 2.5rem;
  transform-origin: left;
}

.hero-image-wrap {
  position: relative;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.hero-image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 2rem;
  background: linear-gradient(to top, rgba(21,20,21,0.8), transparent);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.caption-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 300;
}

.caption-cat {
  font-size: 0.6875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-secondary);
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
    padding: 6rem 1.5rem 3rem;
  }
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .hero-scroll-hint {
    display: none;
  }
}
</style>
