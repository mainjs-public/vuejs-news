import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\..\\apps\\dashboard\\static\\bower_components\\bootstrap\\dist\\css\\bootstrap.min.css'

import '..\\..\\apps\\dashboard\\static\\bower_components\\font-awesome\\css\\font-awesome.min.css'

import '..\\..\\apps\\dashboard\\static\\bower_components\\Ionicons\\css\\ionicons.min.css'

import '..\\..\\apps\\dashboard\\static\\bower_components\\datatables.net-bs\\css\\dataTables.bootstrap.min.css'

import '..\\..\\apps\\dashboard\\static\\dist\\css\\AdminLTE.min.css'

import '..\\..\\apps\\dashboard\\static\\dist\\css\\skins\\skin-blue.css'

import '..\\..\\apps\\dashboard\\static\\bower_components\\morris.js\\morris.css'

import '..\\..\\apps\\dashboard\\static\\bower_components\\jvectormap\\jquery-jvectormap.css'

import '..\\..\\apps\\dashboard\\static\\bower_components\\bootstrap-datepicker\\dist\\css\\bootstrap-datepicker.min.css'

import '..\\..\\apps\\dashboard\\static\\bower_components\\bootstrap-daterangepicker\\daterangepicker.css'

import '..\\..\\apps\\dashboard\\static\\plugins\\bootstrap-wysihtml5\\bootstrap3-wysihtml5.min.css'


let layouts = {

  "_default": () => import('..\\..\\apps\\dashboard\\layouts\\default.vue'  /* webpackChunkName: "layouts_default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Dasboard: new24-fontend","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"script":[{"src":"https:\u002F\u002Foss.maxcdn.com\u002Fhtml5shiv\u002F3.7.3\u002Fhtml5shiv.min.js"},{"src":"https:\u002F\u002Foss.maxcdn.com\u002Frespond\u002F1.4.2\u002Frespond.min.js"},{"src":"\u002Fbower_components\u002Fjquery\u002Fdist\u002Fjquery.min.js"},{"src":"\u002Fbower_components\u002Fjquery-ui\u002Fjquery-ui.min.js"},{"src":"\u002Fbower_components\u002Fbootstrap\u002Fdist\u002Fjs\u002Fbootstrap.min.js"},{"src":"\u002Fbower_components\u002Fraphael\u002Fraphael.min.js"},{"src":"\u002Fbower_components\u002Fmorris.js\u002Fmorris.min.js"},{"src":"\u002Fbower_components\u002Fjquery-sparkline\u002Fdist\u002Fjquery.sparkline.min.js"},{"src":"\u002Fbower_components\u002Fdatatables.net\u002Fjs\u002Fjquery.dataTables.min.js"},{"src":"\u002Fbower_components\u002Fdatatables.net-bs\u002Fjs\u002FdataTables.bootstrap.min.js"},{"src":"\u002Fplugins\u002Fjvectormap\u002Fjquery-jvectormap-1.2.2.min.js"},{"src":"\u002Fplugins\u002Fjvectormap\u002Fjquery-jvectormap-world-mill-en.js"},{"src":"\u002Fbower_components\u002Fjquery-knob\u002Fdist\u002Fjquery.knob.min.js"},{"src":"\u002Fbower_components\u002Fmoment\u002Fmin\u002Fmoment.min.js"},{"src":"\u002Fbower_components\u002Fbootstrap-daterangepicker\u002Fdaterangepicker.js"},{"src":"\u002Fbower_components\u002Fbootstrap-datepicker\u002Fdist\u002Fjs\u002Fbootstrap-datepicker.min.js"},{"src":"\u002Fplugins\u002Fbootstrap-wysihtml5\u002Fbootstrap3-wysihtml5.all.min.js"},{"src":"\u002Fbower_components\u002Fjquery-slimscroll\u002Fjquery.slimscroll.min.js"},{"src":"\u002Fbower_components\u002Ffastclick\u002Flib\u002Ffastclick.js"},{"src":"\u002Fdist\u002Fjs\u002Fadminlte.min.js"},{"src":"\u002Fdist\u002Fjs\u002Fpages\u002Fdashboard.js"},{"src":"\u002Fdist\u002Fjs\u002Fdemo.js"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"bodyAttrs":{"class":"skin-blue"},"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

