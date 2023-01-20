
import HeaderPage from './executive/HeaderPage.vue';

<template>
  <q-page class="flex flex-center">
    <div class="frame-dark">
      <HeaderPage :width="app.txt140" :key="app.txt140"/>
      <div class="__content row">
        <div class="w-140 tempat__menu">
          <menu-draw :width="app.txtLg" @on-selected="handleMenu" />
        </div>
        <div class="relative flex flex-1 bg-primary">
          <div>gdsgds</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'
import HeaderPage from './executive/HeaderPage.vue'
import MenuDraw from './executive/MenuDraw.vue'

const app = useAppStore()
const menu = ref('Keuangan')
function handleMenu (val) {
  menu.value = val
}

</script>

<style lang="scss" scoped>

</style>
