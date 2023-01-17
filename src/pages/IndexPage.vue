<template>
  <q-page class="flex-center">
    <header-dashboard :height="heightHeader" />
    <div :style="`min-height:${contentHeight}px`" class="flex flex-center">
      height: {{app.height}}
      width: {{ app.width }}
    </div>
  </q-page>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'
import HeaderDashboard from './dashboard/HeaderDashboard.vue'

const app = useAppStore()
const heightHeader = ref(app.height * 0.2)
const contentHeight = ref(app.height - heightHeader.value)
console.log('index height', app.height)
</script>
