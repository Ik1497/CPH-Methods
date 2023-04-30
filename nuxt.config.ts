export default defineNuxtConfig({
  modules: [
    'nuxt-og-image',
  ],
  css: [
    'vuetify/lib/styles/main.sass'
  ],
  plugins: [
    {
      src: '~/plugins/prism'
    }
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: `stylesheet`,
          type: `text/css`,
          href: `https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css`
        }
      ]
    }
  }
})
