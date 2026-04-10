<script setup lang="ts">
import { artworks, categories } from '~/data/artworks'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const activeFilter = ref('all')

const filteredArtworks = computed(() => {
  if (activeFilter.value === 'all') return artworks
  return artworks.filter(a => a.category === activeFilter.value)
})

const categoryCounts = computed(() => {
  const counts: Record<string, number> = { all: artworks.length }
  for (const a of artworks) {
    counts[a.category] = (counts[a.category] ?? 0) + 1
  }
  return counts
})

function handleFilter(category: string) {
  activeFilter.value = category
  nextTick(() => ScrollTrigger.refresh())
}
</script>

<template>
  <div>
    <AppNav />
    <HeroSection />
    <FilterBar
      :categories="categories"
      :counts="categoryCounts"
      :active="activeFilter"
      @filter="handleFilter"
    />
    <main class="gallery">
      <GalleryGrid :artworks="filteredArtworks" />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.gallery {
  padding: 4rem 3rem 8rem;
}

@media (max-width: 768px) {
  .gallery {
    padding: 2rem 1.5rem 6rem;
  }
}
</style>
