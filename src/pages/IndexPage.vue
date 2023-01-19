<template>
  <q-page class="flex-center">
    <header-dashboard :height="heightHeader" />
    <div class="pa-lg">
      <div class="row q-col-gutter-lg q-pa-lg">
        <div class="col-md-3 col-sm-12 col-xs-12">
          <menu-list />
        </div>
        <div class="col-md-9 col-sm-12 col-xs-12">asfas</div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'
import HeaderDashboard from './dashboard/HeaderDashboard.vue'
import MenuList from './dashboard/MenuList.vue'

const app = useAppStore()
const heightHeader = ref(app.height * 0.16)
// const contentHeight = ref(app.height - heightHeader.value)
console.log('index height', app.height)
</script>
