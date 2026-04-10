<script setup lang="ts">
import type { Artwork } from '~/types/artwork'

defineProps<{
  artwork: Artwork
}>()

const card = ref<HTMLElement>()

onMounted(() => {
  if (!card.value) return
  const { reveal } = useScrollReveal()
  reveal(card.value)
})
</script>

<template>
  <article
    ref="card"
    class="card"
    :class="{
      wide: artwork.aspect === 'wide',
      featured: artwork.featured,
    }"
  >
    <div class="card-img-wrap">
      <img
        class="card-img"
        :src="artwork.src"
        :alt="`${artwork.title} — ${artwork.description}`"
        loading="lazy"
        decoding="async"
      >
    </div>
    <div class="card-overlay">
      <h3 class="card-title">{{ artwork.title }}</h3>
      <div class="card-meta">
        <span>{{ artwork.category.charAt(0).toUpperCase() + artwork.category.slice(1) }}</span>
        <span>{{ artwork.medium }}</span>
        <span>{{ artwork.year }}</span>
      </div>
      <p class="card-desc">{{ artwork.description }}</p>
    </div>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  background: var(--bg-card);
}

.card.wide {
  grid-column: span 2;
}

.card.featured {
  grid-column: span 2;
  grid-row: span 2;
}

.card-img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
}

.card.wide .card-img-wrap {
  aspect-ratio: 16 / 9;
}

.card.featured .card-img-wrap {
  aspect-ratio: auto;
  height: 100%;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s var(--ease-out);
}

.card:hover .card-img {
  transform: scale(1.04);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(21, 20, 21, 0.92) 0%,
    rgba(21, 20, 21, 0.3) 40%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s var(--ease-out);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
}

.card:hover .card-overlay {
  opacity: 1;
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: 1.2;
  transform: translateY(10px);
  transition: transform 0.5s var(--ease-smooth);
}

.card:hover .card-title {
  transform: translateY(0);
}

.card-meta {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.75rem;
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
  transform: translateY(10px);
  opacity: 0;
  transition: transform 0.5s var(--ease-smooth) 0.05s, opacity 0.4s ease 0.05s;
}

.card:hover .card-meta {
  transform: translateY(0);
  opacity: 1;
}

.card-desc {
  margin-top: 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--text-secondary);
  max-width: 40ch;
  transform: translateY(10px);
  opacity: 0;
  transition: transform 0.5s var(--ease-smooth) 0.1s, opacity 0.4s ease 0.1s;
}

.card:hover .card-desc {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 1024px) {
  .card.featured {
    grid-column: span 2;
    grid-row: span 1;
  }
  .card.featured .card-img-wrap {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 768px) {
  .card.wide,
  .card.featured {
    grid-column: span 1;
    grid-row: span 1;
  }
  .card.wide .card-img-wrap,
  .card.featured .card-img-wrap {
    aspect-ratio: 4 / 3;
  }
  .card-overlay {
    opacity: 1;
  }
  .card-title {
    transform: translateY(0);
  }
  .card-meta {
    transform: translateY(0);
    opacity: 1;
  }
  .card-desc {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card:hover .card-img {
    transform: none;
  }
}
</style>
