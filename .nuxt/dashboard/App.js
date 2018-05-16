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

import '..\\..\\apps\\dashboard\\static\\plugins\\iCheck\\square\\blue.css'


let layouts = {

  "_default": () => import('..\\..\\apps\\dashboard\\layouts\\default.vue'  /* webpackChunkName: "layouts_default" */).then(m => m.default || m),

  "_login": () => import('..\\..\\apps\\dashboard\\layouts\\login.vue'  /* webpackChunkName: "layouts_login" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Dasboard: new24-fontend","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"script":[{"src":"\u002Fdashboard\u002Fbower_components\u002Fjquery\u002Fdist\u002Fjquery.min.js"},{"src":"\u002Fdashboard\u002Fbower_components\u002Fbootstrap\u002Fdist\u002Fjs\u002Fbootstrap.min.js"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fdashboard\u002Ffavicon.ico"}],"bodyAttrs":{"class":"skin-blue"},"style":[]},
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

