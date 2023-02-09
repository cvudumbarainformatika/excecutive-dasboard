
const routes = [
  {
    path: '/',
    component: () => import('layouts/ExecutiveLayout.vue'),
    children: [
      { path: '', component: () => import('pages/direktur/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
