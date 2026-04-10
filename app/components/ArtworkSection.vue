<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Artwork } from '~/types/artwork'

const props = defineProps<{
  artwork: Artwork
  index: number
  flipped?: boolean
}>()

const section = ref<HTMLElement>()
const titleEl = ref<HTMLElement>()
const numberEl = ref<HTMLElement>()

function splitToChars(text: string): string {
  return text
    .split('')
    .map(ch =>
      ch === ' '
        ? '<span class="s-char">&nbsp;</span>'
        : `<span class="s-char">${ch}</span>`
    )
    .join('')
}

onMounted(() => {
  if (titleEl.value) {
    titleEl.value.innerHTML = splitToChars(props.artwork.title)
  }

  nextTick(() => {
    if (!section.value) return

    gsap.from(section.value.querySelectorAll('.s-char'), {
      y: '100%',
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.03,
      scrollTrigger: {
        trigger: section.value,
        start: 'top 75%',
        toggleActions: 'play none none none',
        once: true,
      },
    })

    gsap.from(section.value.querySelector('.section-image'), {
      opacity: 0,
      y: 50,
      scale: 0.97,
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 70%',
        toggleActions: 'play none none none',
        once: true,
      },
    })

    gsap.from(section.value.querySelector('.section-meta'), {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 70%',
        toggleActions: 'play none none none',
        once: true,
      },
    })
  })
})
</script>

<template>
  <section ref="section" class="artwork-section" :class="{ flipped }">
    <div class="section-grid">
      <div class="section-text">
        <div class="section-number">
          <span ref="numberEl" class="number-display">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
        </div>
        <h2 class="section-title">
          <span ref="titleEl" class="title-inner"></span>
        </h2>
        <div class="section-meta">
          <div class="meta-row">
            <span class="meta-label">Category</span>
            <span class="meta-value">{{ artwork.category.charAt(0).toUpperCase() + artwork.category.slice(1) }}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Medium</span>
            <span class="meta-value">{{ artwork.medium }}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Year</span>
            <span class="meta-value">{{ artwork.year }}</span>
          </div>
          <p class="section-desc">{{ artwork.description }}</p>
        </div>
      </div>
      <div class="section-visual">
        <img
          class="section-image"
          :src="artwork.src"
          :alt="artwork.title"
          loading="lazy"
          decoding="async"
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.artwork-section {
  padding: 8rem 3rem;
  border-bottom: 1px solid var(--border);
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.flipped .section-grid {
  direction: rtl;
}

.flipped .section-grid > * {
  direction: ltr;
}

.section-number {
  margin-bottom: 1.5rem;
}

.number-display {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  color: var(--accent);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.01em;
  overflow: hidden;
}

.title-inner {
  display: block;
}

:deep(.s-char) {
  display: inline-block;
}

.section-meta {
  margin-top: 2.5rem;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.8125rem;
}

.meta-label {
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  font-size: 0.6875rem;
}

.meta-value {
  color: var(--text-secondary);
}

.section-desc {
  margin-top: 1.5rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--text-secondary);
  max-width: 45ch;
}

.section-visual {
  overflow: hidden;
}

.section-image {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.artwork-section:nth-child(even) .section-image {
  aspect-ratio: 3 / 4;
}

@media (max-width: 768px) {
  .artwork-section {
    padding: 4rem 1.5rem;
  }
  .section-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .flipped .section-grid {
    direction: ltr;
  }
  .section-visual {
    order: -1;
  }
  .section-image {
    aspect-ratio: 16 / 9;
  }
}
</style>
