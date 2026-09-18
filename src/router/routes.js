const routes = [
  {
    path: '/',
    component: () => import('layouts/ExecutiveLayout.vue'),
    meta: { requireAuth: true },
    children: [
      // { path: '', redirect: '/splash' },
      // { path: 'splash', name: 'splash', component: () => import('pages/direktur/splash/SplashPage.vue') },
      { path: 'keuangan', name: 'keuangan', component: () => import('pages/direktur/keuangan/KeuanganPage.vue') },
      { path: 'kepegawaian', name: 'kepegawaian', component: () => import('pages/direktur/kepegawaian/KepegawaianPage.vue') },
      { path: 'layanan', name: 'layanan', component: () => import('pages/direktur/pelayanan/PelayananPage.vue') },
      { path: 'rekammedik', name: 'rekammedik', component: () => import('pages/direktur/rekammedik/RekammedikPage.vue') },
      { path: 'kinerja', name: 'kinerja', component: () => import('pages/direktur/kinerja/KinerjaPage.vue') },
      { path: 'sarpras', name: 'sarpras', component: () => import('pages/direktur/sarpras/SarprasPage.vue') },
      { path: 'kebutuhan', name: 'kebutuhan', component: () => import('pages/direktur/kebutuhan/KebutuhanPage.vue') }
    ]
  },

  // halaman login
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'auth',
        component: () => import('pages/petakencana/LoginPage.vue')
      }
    ]
  },
  // {
  //   path: '/anjungan',
  //   component: () => import('layouts/AnjunganLayout.vue'),
  //   children: [
  //     { path: '', redirect: '/anjungan/rsud' },
  //     { path: 'rsud', name: 'anjungan.rsud', component: () => import('pages/anjungan/IndexPage.vue') }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: () => import('layouts/XenterLayout.vue'),
  //   meta: { requireAuth: true },
  //   children: [
  //     {
  //       path: 'main',
  //       name: 'Home',
  //       component: () => import('pages/xenter/main/MainPage.vue'),
  //       meta: { page: 4 },
  //       children: [
  //         {
  //           path: 'scan-e-xenter',
  //           name: 'Scan Barcode e-Xenter',
  //           component: () => import('pages/xenter/main/children/ScanBarcodePage.vue'),
  //           meta: { page: 41 }
  //         }
  //       ]
  //     },
  //     { path: 'jadwal', name: 'Jadwal', component: () => import('pages/xenter/jadwal/MainPage.vue'), meta: { page: 5 } },
  //     {
  //       path: 'absen',
  //       name: 'Absen',
  //       component: () => import('pages/xenter/absen/StatusPage.vue'),
  //       meta: { page: 6 },
  //       children: [
  //         {
  //           path: 'lihat-lokasi',
  //           name: 'Lokasi',
  //           component: () => import('pages/xenter/absen/children/LokasiPage.vue'),
  //           meta: { page: 61 }
  //         }
  //       ]
  //     },
  //     { path: 'history', name: 'History', component: () => import('pages/xenter/history/MainPage.vue'), meta: { page: 7 } },
  //     { path: 'account', name: 'Account', component: () => import('pages/xenter/account/MainPage.vue'), meta: { page: 8 } }
  //   ]
  // },
  // {
  //   path: '/auth',
  //   component: () => import('layouts/XenterLayout.vue'),
  //   meta: { requireAuth: false },
  //   children: [
  //     { path: '', redirect: '/auth/login' },
  //     {
  //       path: 'login',
  //       name: 'login',
  //       component: () => import('pages/auth/LoginPage.vue'),
  //       meta: { page: 1 }
  //     },
  //     {
  //       path: 'register',
  //       name: 'register',
  //       component: () => import('pages/auth/RegisterPage.vue'),
  //       meta: { page: 2 }
  //     },
  //     {
  //       path: 'input-password',
  //       name: 'input-password',
  //       component: () => import('pages/auth/InputPassword.vue'),
  //       meta: { page: 3 }
  //     }
  //   ]
  // },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
