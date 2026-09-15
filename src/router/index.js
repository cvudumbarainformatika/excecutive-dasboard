import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { LocalStorage } from 'quasar'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  // Router.beforeEach((to, from, next) => {
  //   console.log(LocalStorage.getItem('token'))
  //   // Contoh log aktivitas routing (opsional)
  //   console.log(`Navigasi dari ${from.path} ke ${to.path}`)
  //   next() // selalu lanjutkan
  // })

  Router.beforeEach((to, from, next) => {
    const token = LocalStorage.getItem('auth_token')
    const requireAuth = to.matched.some(
      record => record.meta.requireAuth
    )

    if (requireAuth && !token) {
      return next('/auth')
    }

    if (to.path === '/auth' && token) {
      return next('/keuangan')
    }

    next()
  })

  Router.onError(error => {
    console.log('router', error)
  })

  return Router
})
