import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6b6a62ec = () => import('..\\..\\apps\\dashboard\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */).then(m => m.default || m)
const _154f2efd = () => import('..\\..\\apps\\dashboard\\pages\\contact\\index.vue' /* webpackChunkName: "pages_contact_index" */).then(m => m.default || m)
const _6e1f0fee = () => import('..\\..\\apps\\dashboard\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _4be77c15 = () => import('..\\..\\apps\\dashboard\\pages\\setting.vue' /* webpackChunkName: "pages_setting" */).then(m => m.default || m)
const _3136b9a6 = () => import('..\\..\\apps\\dashboard\\pages\\catalog\\category\\index.vue' /* webpackChunkName: "pages_catalog_category_index" */).then(m => m.default || m)
const _d872b06c = () => import('..\\..\\apps\\dashboard\\pages\\contact\\view.vue' /* webpackChunkName: "pages_contact_view" */).then(m => m.default || m)
const _2bb84c9d = () => import('..\\..\\apps\\dashboard\\pages\\modules\\megamenu.vue' /* webpackChunkName: "pages_modules_megamenu" */).then(m => m.default || m)
const _a2789a40 = () => import('..\\..\\apps\\dashboard\\pages\\user\\edit.vue' /* webpackChunkName: "pages_user_edit" */).then(m => m.default || m)
const _e4622716 = () => import('..\\..\\apps\\dashboard\\pages\\catalog\\page\\index.vue' /* webpackChunkName: "pages_catalog_page_index" */).then(m => m.default || m)
const _485b74fc = () => import('..\\..\\apps\\dashboard\\pages\\catalog\\blog\\index.vue' /* webpackChunkName: "pages_catalog_blog_index" */).then(m => m.default || m)
const _69abb4ec = () => import('..\\..\\apps\\dashboard\\pages\\catalog\\blog\\edit.vue' /* webpackChunkName: "pages_catalog_blog_edit" */).then(m => m.default || m)
const _73149ce6 = () => import('..\\..\\apps\\dashboard\\pages\\catalog\\category\\edit.vue' /* webpackChunkName: "pages_catalog_category_edit" */).then(m => m.default || m)
const _7e535437 = () => import('..\\..\\apps\\dashboard\\pages\\catalog\\page\\edit.vue' /* webpackChunkName: "pages_catalog_page_edit" */).then(m => m.default || m)
const _b7112652 = () => import('..\\..\\apps\\dashboard\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _6b6a62ec,
			name: "user"
		},
		{
			path: "/contact",
			component: _154f2efd,
			name: "contact"
		},
		{
			path: "/login",
			component: _6e1f0fee,
			name: "login"
		},
		{
			path: "/setting",
			component: _4be77c15,
			name: "setting"
		},
		{
			path: "/catalog/category",
			component: _3136b9a6,
			name: "catalog-category"
		},
		{
			path: "/contact/view",
			component: _d872b06c,
			name: "contact-view"
		},
		{
			path: "/modules/megamenu",
			component: _2bb84c9d,
			name: "modules-megamenu"
		},
		{
			path: "/user/edit",
			component: _a2789a40,
			name: "user-edit"
		},
		{
			path: "/catalog/page",
			component: _e4622716,
			name: "catalog-page"
		},
		{
			path: "/catalog/blog",
			component: _485b74fc,
			name: "catalog-blog"
		},
		{
			path: "/catalog/blog/edit",
			component: _69abb4ec,
			name: "catalog-blog-edit"
		},
		{
			path: "/catalog/category/edit",
			component: _73149ce6,
			name: "catalog-category-edit"
		},
		{
			path: "/catalog/page/edit",
			component: _7e535437,
			name: "catalog-page-edit"
		},
		{
			path: "/",
			component: _b7112652,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
