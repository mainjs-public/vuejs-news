import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _70fc63c5 = () => import('../../apps/dashboard/pages/user/index.vue' /* webpackChunkName: "pages/user/index" */).then(m => m.default || m)
const _1c30cb82 = () => import('../../apps/dashboard/pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _b6d84f88 = () => import('../../apps/dashboard/pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */).then(m => m.default || m)
const _870ebaae = () => import('../../apps/dashboard/pages/setting.vue' /* webpackChunkName: "pages/setting" */).then(m => m.default || m)
const _3a8f4aaa = () => import('../../apps/dashboard/pages/contact/view.vue' /* webpackChunkName: "pages/contact/view" */).then(m => m.default || m)
const _42971c6e = () => import('../../apps/dashboard/pages/catalog/category/index.vue' /* webpackChunkName: "pages/catalog/category/index" */).then(m => m.default || m)
const _ea5bc060 = () => import('../../apps/dashboard/pages/modules/megamenu.vue' /* webpackChunkName: "pages/modules/megamenu" */).then(m => m.default || m)
const _a21c9a32 = () => import('../../apps/dashboard/pages/user/edit.vue' /* webpackChunkName: "pages/user/edit" */).then(m => m.default || m)
const _90ce76dc = () => import('../../apps/dashboard/pages/catalog/blog/index.vue' /* webpackChunkName: "pages/catalog/blog/index" */).then(m => m.default || m)
const _0c0f847a = () => import('../../apps/dashboard/pages/catalog/blog/edit.vue' /* webpackChunkName: "pages/catalog/blog/edit" */).then(m => m.default || m)
const _738e7dc4 = () => import('../../apps/dashboard/pages/catalog/category/edit.vue' /* webpackChunkName: "pages/catalog/category/edit" */).then(m => m.default || m)
const _5289286b = () => import('../../apps/dashboard/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
    base: '/dashboard/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/user",
			component: _70fc63c5,
			name: "user"
		},
		{
			path: "/login",
			component: _1c30cb82,
			name: "login"
		},
		{
			path: "/contact",
			component: _b6d84f88,
			name: "contact"
		},
		{
			path: "/setting",
			component: _870ebaae,
			name: "setting"
		},
		{
			path: "/contact/view",
			component: _3a8f4aaa,
			name: "contact-view"
		},
		{
			path: "/catalog/category",
			component: _42971c6e,
			name: "catalog-category"
		},
		{
			path: "/modules/megamenu",
			component: _ea5bc060,
			name: "modules-megamenu"
		},
		{
			path: "/user/edit",
			component: _a21c9a32,
			name: "user-edit"
		},
		{
			path: "/catalog/blog",
			component: _90ce76dc,
			name: "catalog-blog"
		},
		{
			path: "/catalog/blog/edit",
			component: _0c0f847a,
			name: "catalog-blog-edit"
		},
		{
			path: "/catalog/category/edit",
			component: _738e7dc4,
			name: "catalog-category-edit"
		},
		{
			path: "/",
			component: _5289286b,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
