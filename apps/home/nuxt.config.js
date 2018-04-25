module.exports = {
  srcDir: __dirname,
  buildDir: '.nuxt/home',
  modules: ['@nuxtjs/apollo'],

  // Give apollo module options
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  head: {
    title: 'new24-fontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: '/js/modernizr-2.8.3.min.js' },
      // { src: '/js/jquery.min.js' },
      // { src: '/js/jquery-ui.min.js' },
      // { src: '/js/bootstrap.min.js' },
      // { src: '/js/jquery.meanmenu.js' },
      // { src: '/js/wow.min.js' },
      // { src: '/js/owl.carousel.min.js' },
      // { src: '/js/jquery.magnific-popup.js' },
      // { src: '/js/jquery.counterup.min.js' },
      // { src: '/js/waypoints.min.js' },
      // { src: '/inc/custom-slider/js/jquery.nivo.slider.js' },
      // { src: '/inc/custom-slider/home.js' },
      // { src: '/js/main.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/fav.png' }
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
  ]
}
