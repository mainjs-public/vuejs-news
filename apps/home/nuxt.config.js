module.exports = {
  srcDir: __dirname,
  buildDir: '.nuxt/home',
  head: {
    title: 'new24-fontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: '/js/modernizr-2.8.3.min.js' },
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
  ]
}
