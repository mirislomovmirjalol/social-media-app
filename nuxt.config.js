export default {
  pageTransition: 'pop-up',
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    host: '0' // default: localhost
  },
  head: {
    title: 'Social-media-app',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCIiqxACMRXBctYc-DiLBPa1YoSw3AzoqE",
          authDomain: "social-media-app-df768.firebaseapp.com",
          projectId: "social-media-app-df768",
          storageBucket: "social-media-app-df768.appspot.com",
          messagingSenderId: "9028999388",
          appId: "1:9028999388:web:1bd06facc508f9dd03fc19",
          measurementId: "G-8Z061CG20Q"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      },]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extractCSS: true,
  },
}
