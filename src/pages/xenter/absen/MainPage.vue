<template>
  <q-page class="column bg-grey-4">
    <div class="col-auto">
      <HeaderMain />
    </div>
     <!-- content -->
    <div class="col full-height relative-position">
      <div class="column full-height flex-center">
        <div>{{tgl}}</div>

        <div class="absolute-bottom full-width" >
          <q-card flat>
            {{cond}}
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// import { useDater } from 'src/composable/dater'
import HeaderMain from './HeaderMain.vue'
// import { onUnmounted } from 'vue'

import { useAbsenContext } from './absenContext'

const { tgl, cond } = useAbsenContext()

console.log(tgl.value)
console.log(cond.value)
</script>
