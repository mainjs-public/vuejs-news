import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b39c6cfa = () => import('../../apps/home/pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _1492e0a3 = () => import('../../apps/home/pages/account.vue' /* webpackChunkName: "pages/account" */).then(m => m.default || m)
const _14e16d1f = () => import('../../apps/home/pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _393b6dd4 = () => import('../../apps/home/pages/contact.vue' /* webpackChunkName: "pages/contact" */).then(m => m.default || m)
const _72a3a325 = () => import('../../apps/home/pages/search/index.vue' /* webpackChunkName: "pages/search/index" */).then(m => m.default || m)
const _724ce78e = () => import('../../apps/home/pages/tags/_slug.vue' /* webpackChunkName: "pages/tags/_slug" */).then(m => m.default || m)
const _01581533 = () => import('../../apps/home/pages/category/_slug.vue' /* webpackChunkName: "pages/category/_slug" */).then(m => m.default || m)
const _132acbd7 = () => import('../../apps/home/pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */).then(m => m.default || m)
const _742cb770 = () => import('../../apps/home/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/about",
			component: _b39c6cfa,
			name: "about"
		},
		{
			path: "/account",
			component: _1492e0a3,
			name: "account"
		},
		{
			path: "/blog",
			component: _14e16d1f,
			name: "blog"
		},
		{
			path: "/contact",
			component: _393b6dd4,
			name: "contact"
		},
		{
			path: "/search",
			component: _72a3a325,
			name: "search"
		},
		{
			path: "/tags/:slug?",
			component: _724ce78e,
			name: "tags-slug"
		},
		{
			path: "/category/:slug?",
			component: _01581533,
			name: "category-slug"
		},
		{
			path: "/blog/:slug",
			component: _132acbd7,
			name: "blog-slug"
		},
		{
			path: "/",
			component: _742cb770,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
