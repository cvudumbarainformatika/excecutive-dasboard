<template>
  <q-page class="flex-center">
    <header-dashboard :height="heightHeader" />
    <div :style="`min-height:${contentHeight}px`" class="flex flex-center">dfdsfd</div>
  </q-page>
</template>

<script setup>
import HeaderDashboard from './dashboard/HeaderDashboard.vue'

const height = window.innerHeight
const heightHeader = height * 0.2
const contentHeight = height - heightHeader
console.log('index height', height)
</script>
