<script setup lang="ts">
import { artworks, categories } from '~/data/artworks'
import type { Artwork, ArtworkCategory } from '~/types/artwork'

const featuredArtwork = computed(() =>
  artworks.find(a => a.id === 'gilt-veil')!
)

const featuredSections = computed(() =>
  artworks.filter(a => a.featured).slice(0, 8)
)

const categoryGroups = computed(() => {
  const groups: { category: string; label: string; artworks: Artwork[] }[] = []
  const cats: ArtworkCategory[] = ['portraits', 'landscapes', 'abstract', 'surreal', 'anime', 'sci-fi']
  for (const cat of cats) {
    const items = artworks.filter(a => a.category === cat && !a.featured)
    if (items.length) {
      const label = categories.find(c => c.id === cat)?.label ?? cat
      groups.push({ category: cat, label, artworks: items })
    }
  }
  return groups
})
</script>

<template>
  <div>
    <AppNav />

    <!-- HERO -->
    <HeroSection :featured="featuredArtwork" />

    <!-- FEATURED WORKS — editorial sections -->
    <div class="featured-works">
      <ArtworkSection
        v-for="(artwork, i) in featuredSections"
        :key="artwork.id"
        :artwork="artwork"
        :index="i"
        :flipped="i % 2 === 1"
      />
    </div>

    <!-- REMAINING WORKS — grid by category -->
    <template v-for="group in categoryGroups" :key="group.category">
      <CategoryDivider
        :title="group.label"
        :count="group.artworks.length"
      />
      <ArtworkGrid :artworks="group.artworks" />
    </template>

    <AppFooter />
  </div>
</template>

<style scoped>
.featured-works {
  border-top: 1px solid var(--border);
}
</style>
