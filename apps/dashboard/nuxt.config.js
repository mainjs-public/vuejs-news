const bodyParser = require('body-parser');
const session = require('express-session');
module.exports = {
  srcDir: __dirname,
  buildDir: '.nuxt/dashboard',
  // Add apollo module
  modules: ['@nuxtjs/apollo'],

  // Give apollo module options
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/quill.js', ssr: false }
  ],
  router: {
    base: '/dashboard/'
  },
  head: {
    title: 'Dasboard: new24-fontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      // { src: '/js/modernizr-2.8.3.min.js' },
      // { src: 'https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js' },
      // { src: 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js' },
      { src: '/dashboard/bower_components/jquery/dist/jquery.min.js'},
      // { src: '/bower_components/jquery-ui/jquery-ui.min.js'},
      { src: '/dashboard/bower_components/bootstrap/dist/js/bootstrap.min.js'},
      // { src: '/bower_components/raphael/raphael.min.js'},
      // { src: '/bower_components/morris.js/morris.min.js'},
      // { src: '/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js'},
      // { src: '/bower_components/datatables.net/js/jquery.dataTables.min.js'},
      // { src: '/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js'},
      // { src: '/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'},
      // { src: '/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'},
      // { src: '/bower_components/jquery-knob/dist/jquery.knob.min.js'},
      // { src: '/bower_components/moment/min/moment.min.js'},
      // { src: '/bower_components/bootstrap-daterangepicker/daterangepicker.js'},
      // { src: '/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'},
      // { src: '/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'},
      // { src: '/bower_components/jquery-slimscroll/jquery.slimscroll.min.js'},
      // { src: '/bower_components/fastclick/lib/fastclick.js'},
      // { src: '/bower_components/ckeditor/ckeditor.js'},
      // { src: '/bower_components/select2/dist/js/select2.full.min.js'},
      // { src: '/plugins/iCheck/icheck.min.js'},
      // { src: '/dist/js/adminlte.min.js'},
      // { src: '/dist/js/pages/dashboard.js'},
      // { src: '/dist/js/demo.js'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/dashboard/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'skin-blue'
    }
  },
  css: [
    '~static/bower_components/bootstrap/dist/css/bootstrap.min.css',
    '~static/bower_components/font-awesome/css/font-awesome.min.css',
    '~static/bower_components/Ionicons/css/ionicons.min.css',
    '~static/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css',
    '~static/dist/css/AdminLTE.min.css',
    '~static/dist/css/skins/skin-blue.css',
    '~static/bower_components/morris.js/morris.css',
    '~static/bower_components/jvectormap/jquery-jvectormap.css',
    '~static/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
    '~static/bower_components/bootstrap-daterangepicker/daterangepicker.css',
    '~static/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
    '~static/plugins/iCheck/square/blue.css'
  ],
  serverMiddleware: [
    bodyParser.json(),
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
  ]
}
