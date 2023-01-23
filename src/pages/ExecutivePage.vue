
import HeaderPage from './executive/HeaderPage.vue';

<template>
  <q-page class="flex flex-center">
    <div class="frame-dark">
      <HeaderPage :width="app.txt80" :key="app.txt80"/>
      <div class="__content flex flex-row">
        <div class="w-140 tempat__menu">
          <menu-draw :width="app.txtLg" @on-selected="handleMenu" />
        </div>
        <div class="flex flex-1">
          <PagePanels v-model="menu" />
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
import PagePanels from 'src/pages/executive/panels/IndexPage.vue'

const app = useAppStore()
// const widthMenu = ref('140px')
// const widthContent = ref((app.width - 250) + 'px')
// const date = new Date()
const menu = ref('Keuangan')
// const year = ref(date.getFullYear())
function handleMenu (val) {
  menu.value = val
}

</script>

<style lang="scss" scoped>

</style>
