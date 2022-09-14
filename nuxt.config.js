const path = require('path')

const API_URL = 'https://webmoviebox.xyz/api/'

const config = {
  // Global page headers
  head: {
    title: 'tv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'generator', content: 'TadbirKishVira' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico?v1' }]
  },

  target: 'static',

  router: {
    base: '/tv/'
  },

  /*
   ** base path of source directory
   */
  srcDir: 'client/',

  generate: {
    dir: 'docs'
  },

  /*
   ** Ignored views
   */
  ignore: [],

  /*
   ** Progress-bar
   */
  loading: {
    rtl: true,
    continuous: true,
    color: '#ffbf87',
    height: '2px'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios.js', '~/plugins/api.js', '~/plugins/global.js'],

  /*
   ** Dev-modules
   */
  buildModules: ['@nuxtjs/style-resources'],

  /*
   ** Shared style Variables
   */
  styleResources: {
    scss: ['./assets/styles/vars/*.scss', './assets/styles/functions/*.scss', './assets/styles/mixins/*.scss']
  },

  /*
   ** Modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],

  /*
   ** Axion configuration
   */
  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: API_URL, pathRewrite: { '^/api/': '' }, changeOrigin: true }
  },

  /*
   ** Server middleware api
   */
  serverMiddleware: [],

  /*
   ** Environment variables
   */
  env: {
    API_URL
  },

  /*
   ** Build configuration
   */
  build: {
    // enable external css
    extractCSS: true,

    // appling auti-prefixer
    postcss: [
      require('autoprefixer')({
        overrideBrowserslist: ['cover 99.5%', 'not IE < 9']
      })
    ],

    // extend config
    extend(config, ctx) {
      config.resolve.alias['~'] = path.join(__dirname, '/client')
      config.resolve.alias['~~'] = path.join(__dirname, '/client')
      config.resolve.alias['@'] = path.join(__dirname, '/client')
      config.resolve.alias['@shared'] = path.join(__dirname, '/client/components/shared')
      config.resolve.alias['@kit'] = path.join(__dirname, '/client/components/kit')
      config.resolve.alias['@directive'] = path.join(__dirname, '/client/assets/directives')
      config.resolve.alias['@page'] = path.join(__dirname, '/client/pages')
    }
  },

  telemetry: false
}

module.exports = config
