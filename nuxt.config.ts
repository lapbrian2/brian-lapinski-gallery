export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  build: {
    transpile: ['gsap'],
  },

  app: {
    head: {
      title: 'Brian Lapinski — Works',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Selected works by Brian Lapinski. AI-generated art exploring portraiture, landscape, and the boundaries of human perception.' },
        { property: 'og:title', content: 'Brian Lapinski — Works' },
        { property: 'og:description', content: 'Selected works exploring portraiture, landscape, and the boundaries of human perception.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
