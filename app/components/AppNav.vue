<script setup lang="ts">
</script>

<template>
  <nav class="nav">
    <div class="nav-name">Brian Lapinski</div>
    <div class="nav-label">Selected Works</div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  mix-blend-mode: difference;
}

.nav-name {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav-label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .nav {
    padding: 1.5rem 1.5rem;
  }
}
</style>
