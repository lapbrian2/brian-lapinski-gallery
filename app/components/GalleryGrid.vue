<script setup lang="ts">
import type { Artwork } from '~/types/artwork'

defineProps<{
  artworks: Artwork[]
}>()
</script>

<template>
  <div class="gallery-grid">
    <ArtworkCard
      v-for="artwork in artworks"
      :key="artwork.id"
      :artwork="artwork"
    />
  </div>
</template>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
