<template>
  <div class="bg-grey-2 relative-position" :style="`min-height:${height}px`">
    <div class="row container items-center absolute-bottom pb-lg">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="row items-center">
          <q-avatar :size="`${app.txt100}px`" :font-size="`${app.txt50}px`" color="grey" text-color="white" icon="directions" />
          <div class="column q-ml-md">
            <div class="txt-h5 text-weight-bold">Nama Akun</div>
            <div class="txt-md text-grey">Executive Account</div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="text-right">
          <div class="txt-h5 text-weight-bold">Dashboard Executive</div>
          <div class="txt-md text-grey">Dashboard ini Hanya bisa di akses Oleh Direktur</div>
          <div class="txt-md text-primary">UOBK RSUD MOHAMAD SALEH</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'

defineProps({
  height: {
    type: Number,
    default: window.innerHeight * 0.2
  }
})

const app = useAppStore()
// const textLg = ref(window.innerHeight * 0.03)
</script>
<style lang="scss" scoped>

</style>
