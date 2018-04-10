import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\..\\apps\\home\\static\\css\\bootstrap.min.css'

import '..\\..\\apps\\home\\static\\css\\font-awesome.min.css'

import '..\\..\\apps\\home\\static\\css\\animate.css'

import '..\\..\\apps\\home\\static\\css\\hover-min.css'

import '..\\..\\apps\\home\\static\\css\\magnific-popup.css'

import '..\\..\\apps\\home\\static\\css\\meanmenu.min.css'

import '..\\..\\apps\\home\\static\\css\\owl.carousel.css'

import '..\\..\\apps\\home\\static\\css\\lightbox.min.css'

import '..\\..\\apps\\home\\static\\inc\\custom-slider\\css\\nivo-slider.css'

import '..\\..\\apps\\home\\static\\inc\\custom-slider\\css\\preview.css'

import '..\\..\\apps\\home\\static\\css\\meanmenu.min.css'

import '..\\..\\apps\\home\\static\\css\\style.css'

import '..\\..\\apps\\home\\static\\css\\responsive.css'


let layouts = {

  "_default": () => import('..\\..\\apps\\home\\layouts\\default.vue'  /* webpackChunkName: "layouts_default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"new24-fontend","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"script":[{"src":"\u002Fjs\u002Fmodernizr-2.8.3.min.js"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[]},
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

