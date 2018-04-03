module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'new24-fontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: '/js/modernizr-2.8.3.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~static/css/bootstrap.min.css',
    '~static/css/font-awesome.min.css',
    '~static/css/animate.css',
    '~static/css/hover-min.css',
    '~static/css/magnific-popup.css',
    '~static/css/meanmenu.min.css',
    '~static/css/owl.carousel.css',
    '~static/css/lightbox.min.css',
    '~static/inc/custom-slider/css/nivo-slider.css',
    '~static/inc/custom-slider/css/preview.css',
    '~static/css/meanmenu.min.css',
    '~static/css/style.css',
    '~static/css/responsive.css'
  ],
  // script:[
  //   {src:'~/assets/js/bootstrap.min.js', type: 'text/javascript'}
  // ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
