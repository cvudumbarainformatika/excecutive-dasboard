<template>
  <div class="bg-grey-2 relative-position" :style="`min-height:${height}px`">
    <div class="row container items-center absolute-bottom  q-pb-lg q-pt-lg">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="row items-center">
          <q-avatar :size="`${avatarSize}px`" :font-size="`${fs}px`" color="grey" text-color="white" icon="directions" />
          <div class="column q-ml-md">
            <div class="text-h5 text-weight-bold">Nama Akun</div>
            <div class="text-grey">Executive Account</div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="text-right">
          <div class="text-h5 text-weight-bold">Dashboard Executive</div>
          <div class="text-grey">Dashboard ini Hanya bisa di akses Oleh Direktur</div>
          <div class="text-primary">UOBK RSUD MOHAMAD SALEH</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  height: {
    type: Number,
    default: window.innerHeight * 0.2
  }
})

const fs = ref(window.innerHeight * 0.0875)
const avatarSize = ref(window.innerHeight * 0.125)
</script>
<style lang="scss" scoped>
.container {
  padding-left: 5%;
  padding-right: 10%;
}
</style>
