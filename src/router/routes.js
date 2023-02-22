
const routes = [
  {
    path: '/',
    component: () => import('layouts/ExecutiveLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/direktur/IndexPage.vue') },
      { path: '', redirect: '/keuangan' },
      { path: '/keuangan', name: 'keuangan', component: () => import('pages/direktur/keuangan/KeuanganPage.vue') },
      { path: '/kepegawaian', name: 'kepegawaian', component: () => import('pages/direktur/kepegawaian/KepegawaianPage.vue') },
      { path: '/layanan', name: 'layanan', component: () => import('pages/direktur/pelayanan/PelayananPage.vue') },
      { path: '/sarpras', name: 'sarpras', component: () => import('pages/direktur/sarpras/SarprasPage.vue') }
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
