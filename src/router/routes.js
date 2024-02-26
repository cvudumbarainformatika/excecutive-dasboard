
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
      {
        path: '/main',
        name: 'Home',
        component: () => import('pages/xenter/main/MainPage.vue'),
        meta: { page: 4 },
        children: [
          {
            path: '/main/scan-e-xenter',
            name: 'Scan Barcode e-Xenter',
            component: () => import('pages/xenter/main/children/ScanBarcodePage.vue'),
            meta: { page: 41 }
          }
        ]
      },
      { path: '/jadwal', name: 'Jadwal', component: () => import('pages/xenter/jadwal/MainPage.vue'), meta: { page: 5 } },
      {
        path: '/absen',
        name: 'Absen',
        component: () => import('pages/xenter/absen/StatusPage.vue'),
        meta: { page: 6 },
        children: [
          {
            path: '/absen/lihat-lokasi',
            name: 'Lokasi',
            component: () => import('pages/xenter/absen/children/LokasiPage.vue'),
            meta: { page: 61 }
          }
        ]
      },
      { path: '/history', name: 'History', component: () => import('pages/xenter/history/MainPage.vue'), meta: { page: 7 } },
      { path: '/account', name: 'Account', component: () => import('pages/xenter/account/MainPage.vue'), meta: { page: 8 } }
      // { path: '/scan-barcode', name: 'scan-barcode', component: () => import('pages/xenter/scan/ScanBarcodePage.vue'), meta: { page: 9 } }
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
