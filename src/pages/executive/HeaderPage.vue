<template>
  <div class="pa-lg">
    <div class="flex flex-row">
      <div class="flex pa-md text-center w-100">
        <q-img :src="srcImg" :width="`${width}px`"></q-img>
      </div>
      <div class="flex flex-1 pa-lg">
        <div class="row items-center grow">
          <div class="" >
            <div class="txt-h5 text-weight-bold">Dashboard Executive</div>
            <div class="txt-lg text-grey">Dashboard Khusus untuk direktur UOBK RSUD Mohamad Saleh</div>
          </div>
          <q-space />
          <div class="">
            <div class="txt-h5 text-weight-bold">Dashboard Executive</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  width: {
    type: Number,
    default: 50
  }
})
const srcImg = computed(() => new URL('../../../src/assets/images/logo-rsud.png', import.meta.url).href)
</script>
