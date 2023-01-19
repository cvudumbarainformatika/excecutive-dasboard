
import HeaderPage from './executive/HeaderPage.vue';

<template>
  <q-page class="flex flex-center">
    <div class="frame-dark">
      <HeaderPage :width="app.txt70" :key="app.txt70"/>
      <div class="bg-primary px-md">
        <div class="w-100 bg-negative">s</div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import HeaderPage from './executive/HeaderPage.vue'

const app = useAppStore()
</script>
