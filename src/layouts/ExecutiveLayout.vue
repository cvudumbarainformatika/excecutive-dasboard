<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          SI PETA KENCANA
        </q-toolbar-title>

        <q-btn
          flat
          no-caps
          icon="logout"
          label="Logout"
          @click="logout"
        />
      </q-toolbar>
    </q-header>

    <left-draw v-model="leftDrawerOpen"  />

    <q-page-container  class="bg-grey-2">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { LocalStorage, useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import LeftDraw from './comp/LeftDraw.vue'

const leftDrawerOpen = ref(false)
const $q = useQuasar()
const router = useRouter()

function logout () {
  $q.dialog({
    title: 'Logout',
    message: 'Yakin ingin keluar dari aplikasi?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    LocalStorage.remove('auth_token')
    LocalStorage.remove('auth_user')
    router.replace('/auth')
  })
}
</script>
