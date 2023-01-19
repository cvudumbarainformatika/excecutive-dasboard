<template>
  <q-page class="flex-center">
    <header-dashboard :height="heightHeader" />
    <div>
      <!-- <div class="row q-col-gutter-lg relative-position q-pa-lg"> -->
      <div class="row">
        <div class="menu q-pa-lg" >
          <menu-list @on-selected="(val)=> tabMenu = val" />
        </div>
        <!-- CONTENT -->
        <div class="content">
          <content-page v-model="tabMenu" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'
import ContentPage from './dashboard/ContentPage.vue'
import HeaderDashboard from './dashboard/HeaderDashboard.vue'
import MenuList from './dashboard/MenuList.vue'

const app = useAppStore()
const heightHeader = ref(app.height * 0.16)
const widthMenu = ref('280px')
const widthContent = ref(app.width - 280 + 'px')
// const contentHeight = ref(app.height - heightHeader.value)
// console.log('index height', app.height)

const tabMenu = ref('Keuangan')
</script>

<style lang="scss" scoped>
.menu {
  width: v-bind(widthMenu);
}

.content {
  width: v-bind(widthContent);
}
</style>
