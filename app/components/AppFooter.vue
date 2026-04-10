<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="footer-name">Brian Lapinski</div>
    <div class="footer-info">
      <p>All works created with Midjourney, 2025</p>
      <p class="footer-link-row">
        <a href="https://brian-lapinski-portfolio.vercel.app" target="_blank" rel="noopener">
          Full Portfolio
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 4rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.footer-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.footer-info {
  text-align: right;
}

.footer-info p {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  letter-spacing: 0.08em;
}

.footer-link-row {
  margin-top: 0.5rem;
}

.footer-info a {
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
  transition: border-color 0.3s ease, color 0.3s ease;
}

.footer-info a:hover {
  color: var(--text-primary);
  border-color: var(--accent);
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
  .footer-info {
    text-align: left;
  }
}
</style>
