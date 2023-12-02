
const routes = [
  // INI UNTUK DASHBOARD
  // {
  //   path: '/',
  //   component: () => import('layouts/ExecutiveLayout.vue'),
  //   children: [
  //     // { path: '', component: () => import('pages/direktur/IndexPage.vue') },
  //     { path: '', redirect: '/kepegawaian' },
  //     { path: '/splash', name: 'splash', component: () => import('pages/direktur/splash/SplashPage.vue') },
  //     { path: '/keuangan', name: 'keuangan', component: () => import('pages/direktur/keuangan/KeuanganPage.vue') },
  //     { path: '/kepegawaian', name: 'kepegawaian', component: () => import('pages/direktur/kepegawaian/KepegawaianPage.vue') },
  //     { path: '/layanan', name: 'layanan', component: () => import('pages/direktur/pelayanan/PelayananPage.vue') },
  //     { path: '/sarpras', name: 'sarpras', component: () => import('pages/direktur/sarpras/SarprasPage.vue') }
  //   ]
  // },
  // {
  //   path: '/anjungan',
  //   component: () => import('layouts/AnjunganLayout.vue'),
  //   children: [
  //     // { path: '', component: () => import('pages/direktur/IndexPage.vue') },
  //     { path: '', redirect: '/anjungan/rsud' },
  //     { path: '/anjungan/rsud', name: 'anjungan.rsud', component: () => import('pages/anjungan/IndexPage.vue') }
  //   ]
  // },

  {
    path: '/',
    component: () => import('layouts/XenterLayout.vue'),
    meta: { requireAuth: true },
    children: [
      { path: '', redirect: '/main' },
      { path: '/main', name: 'main', component: () => import('pages/xenter/main/MainPage.vue'), meta: { page: 4 } },
      { path: '/scan-barcode', name: 'scan-barcode', component: () => import('pages/xenter/scan/ScanBarcodePage.vue'), meta: { page: 5 } }
    ]
  },

  {
    path: '/auth',
    component: () => import('layouts/XenterLayout.vue'),
    meta: { requireAuth: false },
    children: [
      { path: '', redirect: '/auth/login' },
      {
        path: '/auth/login',
        name: 'login',
        component: () => import('pages/auth/LoginPage.vue'),
        meta: { page: 1 }
      },
      {
        path: '/auth/register',
        name: 'register',
        component: () => import('pages/auth/RegisterPage.vue'),
        meta: { page: 2 }
      },
      {
        path: '/auth/input-password',
        name: 'input-password',
        component: () => import('pages/auth/InputPassword.vue'),
        meta: { page: 3 }
      }
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
