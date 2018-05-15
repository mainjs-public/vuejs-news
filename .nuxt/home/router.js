import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6cd7c343 = () => import('..\\..\\apps\\home\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _6cbd2b3a = () => import('..\\..\\apps\\home\\pages\\account.vue' /* webpackChunkName: "pages_account" */).then(m => m.default || m)
const _370deb26 = () => import('..\\..\\apps\\home\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */).then(m => m.default || m)
const _cf1e5a54 = () => import('..\\..\\apps\\home\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */).then(m => m.default || m)
const _d961f440 = () => import('..\\..\\apps\\home\\pages\\search\\index.vue' /* webpackChunkName: "pages_search_index" */).then(m => m.default || m)
const _8b0eb5f2 = () => import('..\\..\\apps\\home\\pages\\tags\\_slug.vue' /* webpackChunkName: "pages_tags__slug" */).then(m => m.default || m)
const _d92f67fc = () => import('..\\..\\apps\\home\\pages\\category\\_slug.vue' /* webpackChunkName: "pages_category__slug" */).then(m => m.default || m)
const _355749de = () => import('..\\..\\apps\\home\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages_blog__slug" */).then(m => m.default || m)
const _e6e0c3f0 = () => import('..\\..\\apps\\home\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _6cd7c343,
			name: "about"
		},
		{
			path: "/account",
			component: _6cbd2b3a,
			name: "account"
		},
		{
			path: "/blog",
			component: _370deb26,
			name: "blog"
		},
		{
			path: "/contact",
			component: _cf1e5a54,
			name: "contact"
		},
		{
			path: "/search",
			component: _d961f440,
			name: "search"
		},
		{
			path: "/tags/:slug?",
			component: _8b0eb5f2,
			name: "tags-slug"
		},
		{
			path: "/category/:slug?",
			component: _d92f67fc,
			name: "category-slug"
		},
		{
			path: "/blog/:slug",
			component: _355749de,
			name: "blog-slug"
		},
		{
			path: "/",
			component: _e6e0c3f0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
