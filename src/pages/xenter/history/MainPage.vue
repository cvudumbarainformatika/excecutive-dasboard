<template>
  <q-page class="column">
    <app-loadingxenter v-if="app.loading" />
    <AppErrorXenter v-if="!app.loading && app.error !== null"
      :msg="app.error"
      :status="app.status"
      @ok="app.setError(null)"
    />
    <!-- head -->
    <div class="col-auto">
      <header-main :user="user?.pegawai" />
    </div>
    <!-- content -->
    <div class="col full-height relative-position">
      <div class="absolute full-height full-width scroll">
        <div class="column full-height flex-center">
          <q-btn color="primary" class="q-mb-md" @click="toScan">Login E-Xenter</q-btn>
          <div class="q-my-lg">
            <q-btn color="negative" icon="power_settings_new" @click="logout">
              <div class="q-ml-sm">Logout</div>
            </q-btn>
          </div>
          <div class="q-my-lg">
            MAIN PAGE
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useLoginXenterStore } from 'src/stores/xenter/auth/login'
import HeaderMain from './HeaderMain.vue'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useXenterAppStore } from 'src/stores/xenter'
import { useQuasar } from 'quasar'

const app = useXenterAppStore()
const $q = useQuasar()
const auth = useLoginXenterStore()
const user = computed(() => {
  return auth?.user
})
const router = useRouter()
onMounted(() => {
  console.log('q', $q)
})

function toScan () {
  router.push({ path: '/scan-barcode' })
}

function logout () {
  console.log('logout')
  auth.logout().then(() => {
    router.replace({ path: '/auth' })
  })
}
</script>
