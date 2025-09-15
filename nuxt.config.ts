// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/','/admin']
    }
  }
})