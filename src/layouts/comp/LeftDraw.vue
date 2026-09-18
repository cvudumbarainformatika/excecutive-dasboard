<template>
  <q-drawer
    show-if-above
    side="left"
    bordered
    :width="280"
    :breakpoint="400"
    class="bg-dark text-grey-2"
  >
    <!-- ========================================= -->
    <!-- DAFTAR MENU -->
    <!-- ========================================= -->
    <q-scroll-area
      :style="`height: calc(100% - ${height}px); margin-top: ${height}px;`"
    >
      <q-separator />

      <q-list padding class="text-grey-7">

        <!-- MENU SESUAI ROLE USER -->
        <q-item
          v-for="(item, i) in filteredMenus"
          :key="i"
          :to="item.url"
          exact
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon
              class="__icon"
              :name="item.icon"
            />
          </q-item-section>

          <q-item-section class="__label">
            {{ item.nama }}
          </q-item-section>
        </q-item>

        <!-- JIKA TIDAK ADA MENU -->
        <q-item v-if="filteredMenus.length === 0">
          <q-item-section>
            <div class="text-grey-5 text-center q-pa-md">
              Tidak ada menu yang dapat diakses
            </div>
          </q-item-section>
        </q-item>

      </q-list>
    </q-scroll-area>

    <!-- ========================================= -->
    <!-- HEADER DRAWER -->
    <!-- ========================================= -->
    <div
      class="absolute-top bg-primary text-white"
      :style="`height: ${height}px;`"
    >
      <div class="absolute-bottom bg-transparent q-pa-md">

        <div class="_judul_page text-weight-bold text-h6">
          SI PETA KENCANA
        </div>

        <div class="_judul_page f-12 text-grey-5">
          UOBK RSUD MOHAMAD SALEH KOTA PROBOLINGGO
        </div>

      </div>
    </div>

    <!-- ========================================= -->
    <!-- PILIH TAHUN DAN BULAN -->
    <!-- ========================================= -->
    <div class="absolute-bottom q-mb-sm">

      <div class="q-pa-md">

        <q-card class="my-card text-dark">

          <!-- TAHUN -->
          <q-card-section>

            <div class="row items-center justify-between">

              <q-btn
                @click="app.setCurrentYear(year - 1)"
                flat
                size="sm"
                round
                color="dark"
                icon="chevron_left"
              />

              <div class="text-weight-bold">
                {{ year }}
              </div>

              <q-btn
                @click="app.setCurrentYear(year + 1)"
                flat
                size="sm"
                round
                color="dark"
                icon="chevron_right"
              />

            </div>

          </q-card-section>

          <q-separator />

          <!-- BULAN -->
          <q-card-section>

            <div class="row items-center q-col-gutter-md">

              <div
                v-for="(item, i) in bulans"
                :key="i"
                class="col-4"
              >
                <q-btn
                  @click="app.setCurrentMonth(i + 1)"
                  size="sm"
                  class="glossy full-width"
                  dense
                  :color="(month - 1) === i ? 'primary' : 'dark'"
                  :label="item.substring(0, 3)"
                />
              </div>

            </div>

          </q-card-section>

        </q-card>

      </div>

    </div>

  </q-drawer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { LocalStorage } from 'quasar'
import { useAppStore } from 'src/stores/app'

// ==========================================
// CONFIG DRAWER
// ==========================================
const height = ref(110)

// ==========================================
// STORE
// ==========================================
const app = useAppStore()

// ==========================================
// DAFTAR MENU
// ==========================================
//
// role:
// superadmin
// inspektorat
// bpkad
// baperida
// dinkes
//
// ==========================================
const menus = [
  {
    nama: 'Kepegawaian',
    url: '/kepegawaian',
    icon: 'people',
    role: [
      'superadmin',
      'dinkes'
    ]
  },

  {
    nama: 'Layanan',
    url: '/layanan',
    icon: 'support_agent',
    role: [
      'superadmin',
      'dinkes'
    ]
  },

  {
    nama: 'Rekam Medik',
    url: '/rekammedik',
    icon: 'report',
    role: [
      'superadmin',
      'dinkes'
    ]
  },

  {
    nama: 'Keuangan',
    url: '/keuangan',
    icon: 'dvr',
    role: [
      'superadmin',
      'bpkad',
      'dinkes'
    ]
  },

  {
    nama: 'Kinerja',
    url: '/kinerja',
    icon: 'assignment_ind',
    role: [
      'superadmin',
      'dinkes'
    ]
  },

  {
    nama: 'Kebutuhan',
    url: '/kebutuhan',
    icon: 'inventory_2',
    role: [
      'superadmin',
      'inspektorat',
      'bpkad',
      'baperida',
      'dinkes'
    ]
  }
]

// ==========================================
// DATA USER LOGIN
// ==========================================
//
// Di project kamu LocalStorage:
//
// auth_token
// auth_user
//
// auth_user contohnya:
//
// {
//   id: 4,
//   nama: 'Baperida',
//   username: 'baperida',
//   email: null,
//   role: 'baperida'
// }
//
// Karena disimpan menggunakan Quasar LocalStorage,
// ambil juga menggunakan LocalStorage.getItem().
//
// JANGAN:
//
// JSON.parse(localStorage.getItem('auth_user'))
//
// ==========================================
const user = computed(() => {
  const data = LocalStorage.getItem('auth_user')

  if (!data) {
    return {}
  }

  return data
})

// ==========================================
// ROLE USER LOGIN
// ==========================================
const userRole = computed(() => {
  return String(user.value?.role || '')
    .trim()
    .toLowerCase()
})

// ==========================================
// FILTER MENU BERDASARKAN ROLE
// ==========================================
const filteredMenus = computed(() => {
  return menus.filter(item => {
    return item.role.includes(userRole.value)
  })
})

// ==========================================
// BULAN
// ==========================================
const month = computed(() => {
  return app.currentMonth
})

// ==========================================
// TAHUN
// ==========================================
const year = computed(() => {
  return app.currentYear
})

// ==========================================
// LIST BULAN
// ==========================================
const bulans = computed(() => {
  return app.monts
})

// ==========================================
// DEBUG
// ==========================================
// Nanti kalau sudah berjalan normal,
// bagian console.log ini boleh dihapus.
//
// Untuk Baperida seharusnya:
//
// USER LOGIN:
// {
//   id: 4,
//   nama: 'Baperida',
//   username: 'baperida',
//   role: 'baperida'
// }
//
// ROLE LOGIN:
// baperida
//
// MENU YANG TAMPIL:
// Kebutuhan
//
// ==========================================

console.log('================================')
console.log('USER LOGIN:', user.value)
console.log('ROLE LOGIN:', userRole.value)
console.log('MENU YANG TAMPIL:', filteredMenus.value)
console.log('================================')
</script>

<style lang="scss" scoped>
.url-active {
  color: black;
}

.q-item.q-router-link--active,
.q-item--active {

  .__icon {
    color: $primary;
  }

  .__label {
    color: white;
  }
}
</style>
