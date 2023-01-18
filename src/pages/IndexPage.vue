<template>
  <q-page class="flex-center">
    <header-dashboard :height="heightHeader" />
    <div class="pa-lg">
      <content-page />
    </div>
  </q-page>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'
import HeaderDashboard from './dashboard/HeaderDashboard.vue'
import ContentPage from './dashboard/ContentPage.vue'

const app = useAppStore()
const heightHeader = ref(app.height * 0.16)
// const contentHeight = ref(app.height - heightHeader.value)
console.log('index height', app.height)
</script>
