export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '早稲田祭2022運営スタッフ新歓公式サイト',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭運営スタッフ2022新歓サイトです',
      },
      { name: 'format-detection', content: 'telephone=no' },
      // OG
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: '早稲田祭運営スタッフ2022新歓サイト',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://wasedasai.github.io/2022shinkan/',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '早稲田祭運営スタッフ2022新歓サイト',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://wasedasai.github.io/2022shinkan/images/logo_with_catch_green.png',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: '早稲田祭運営スタッフ2022新歓サイトです',
      },
      // Twitter
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '早稲田祭運営スタッフ2022新歓サイト',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '早稲田祭運営スタッフ2022新歓サイトです',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: 'https://wasedasai.github.io/2022shinkan/',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content:
          'https://wasedasai.github.io/2022shinkan/images/logo_with_catch_green.png',
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'cpM7aMyzq4nwUyTArzym9iLWG9Mh09S5LnSUQLnypZY',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
        rel: 'stylesheet',
      },
    ],
    script: [{ src: 'js/adobe-font.js' }],
    base: {
      href: 'router.base',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/reset.css', '@/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/swiper', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-210833452-2',
    debug: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // GitHub Pages
  target: 'static',
  router: {
    base: '/2022shinkan/',
  },
}
