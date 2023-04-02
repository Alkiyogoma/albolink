// https://nuxt.com/docs/api/configuration/nuxt-config
//export default defineNuxtConfig({
    export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ZunoApp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                tailwindcss: {},
                autoprefixer: {},
                },
            },
        },
    }
}
