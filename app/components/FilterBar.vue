<script setup lang="ts">
import type { CategoryFilter } from '~/types/artwork'

const props = defineProps<{
  categories: CategoryFilter[]
  counts: Record<string, number>
  active: string
}>()

const emit = defineEmits<{
  filter: [category: string]
}>()
</script>

<template>
  <div class="filter-bar" role="tablist" aria-label="Filter artworks by category">
    <button
      v-for="cat in categories"
      :key="cat.id"
      class="filter-btn"
      :class="{ active: active === cat.id }"
      role="tab"
      :aria-selected="active === cat.id"
      @click="emit('filter', cat.id)"
    >
      {{ cat.label }}
      <span class="filter-count">{{ counts[cat.id] ?? 0 }}</span>
    </button>
  </div>
</template>

<style scoped>
.filter-bar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 1.25rem 3rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.filter-btn {
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.filter-btn:hover,
.filter-btn.active {
  color: var(--text-primary);
}

.filter-btn.active {
  border-bottom-color: var(--accent);
}

.filter-count {
  font-size: 0.625rem;
  color: var(--text-tertiary);
  margin-left: 0.35em;
}

@media (max-width: 768px) {
  .filter-bar {
    padding: 1rem 1.5rem;
    gap: 1.25rem;
  }
}
</style>
