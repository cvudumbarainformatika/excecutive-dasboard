<template>
  <app-page>
    <template #header>
      <header-main :user="user?.pegawai" />
    </template>
    <template #content>
      Jadwal
    </template>
  </app-page>
</template>

<script setup>
import { useLoginXenterStore } from 'src/stores/xenter/auth/login'
import HeaderMain from './HeaderMain.vue'
import { computed, onMounted } from 'vue'
// import { useRouter } from 'vue-router'
// import { useXenterAppStore } from 'src/stores/xenter'
// import { useQuasar } from 'quasar'

// const app = useXenterAppStore()
// const $q = useQuasar()
const auth = useLoginXenterStore()
const user = computed(() => {
  return auth?.user
})
// const router = useRouter()
onMounted(() => {
  console.log('jadwal')
})
</script>
