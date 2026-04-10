<script setup lang="ts">
import { gsap } from 'gsap'

const props = defineProps<{
  title: string
  count: number
}>()

const divider = ref<HTMLElement>()

onMounted(() => {
  if (!divider.value) return
  gsap.from(divider.value, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: divider.value,
      start: 'top 85%',
      once: true,
    },
  })
})
</script>

<template>
  <div ref="divider" class="divider">
    <h3 class="divider-title">{{ title }}</h3>
    <div class="divider-line"></div>
    <span class="divider-count">{{ count }} works</span>
  </div>
</template>

<style scoped>
.divider {
  padding: 6rem 3rem 3rem;
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
}

.divider-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 300;
  letter-spacing: -0.01em;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

.divider-count {
  font-size: 0.6875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

@media (max-width: 768px) {
  .divider {
    padding: 4rem 1.5rem 2rem;
  }
}
</style>
