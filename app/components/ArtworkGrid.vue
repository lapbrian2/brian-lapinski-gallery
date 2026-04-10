<script setup lang="ts">
import type { Artwork } from '~/types/artwork'

defineProps<{
  artworks: Artwork[]
}>()
</script>

<template>
  <div class="grid">
    <ArtworkCard
      v-for="artwork in artworks"
      :key="artwork.id"
      :artwork="artwork"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 3rem 4rem;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1.5rem 3rem;
  }
}
</style>
