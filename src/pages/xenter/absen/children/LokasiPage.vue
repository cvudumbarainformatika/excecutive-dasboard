<template>
  <div  class="column fit absolute flex-center bg-white shadow-4" style="overflow: hidden;">
    <div class="absolute-bottom full-width z-top">
      <q-card>
        <q-card-section>
          <div class="column flex-center">
            <div>Lokasi Kamu</div>
            <div>{{ lat }}, {{ lang }}</div>
            <q-btn color="negative" to="/absen">Kembali</q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div ref="mapRef" class="absolute-top fit"></div>
  </div>
</template>
<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useGeolocation } from '@vueuse/core'
// import L from 'leaflet'

// const emits = defineEmits(['activated', 'deactivated'])

const mapRef = ref()
// const map = ref()
const lat = ref(0)
const lang = ref(0)

// const { coords, locatedAt, error, resume, pause } = useGeolocation()
const { coords } = useGeolocation()

const koordinat = computed(() => {
  return coords.value
})

console.log('luar', koordinat?.value)

watchEffect(() => {
  console.log('watch effect', koordinat.value)
  // lat.value = koordinat.value?.latitude
  // lang.value = koordinat.value?.longitude
  // map.value?.setView([koordinat.value?.latitude, koordinat.value?.longitude], 13)
})

// const unwatch = watchEffect(() => {
//   unwatch()

//   console.log('watch effect', koordinat.value)
//   // lat.value = koordinat.value?.latitude
//   // lang.value = koordinat.value?.longitude
//   // map.value?.setView([koordinat.value?.latitude, koordinat.value?.longitude], 13)
// })

// onMounted(() => {
//   // emits('activated')
//   // console.log(mapRef.value)
//   // map.value = L.map(mapRef.value).setView([51.505, -0.09], 13)
//   // map.value = L.map(mapRef.value).fitWorld()
//   // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   //   maxZoom: 19,
//   //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//   // }).addTo(map.value)
//   // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   //   maxZoom: 19,
//   //   attribution: '© OpenStreetMap'
//   // }).addTo(map.value)
// })

// onUnmounted(() => {
//   // emits('deactivated')
// })

// function cekLocation (lok) {
//   // console.log(lok)
//   console.log('coba', lok.coords)
// }
</script>

<style lang="scss" scoped>
.map{
  width:100vw;
  height:100%;
  background-color: $grey-2;
  overflow: hidden;
}
</style>
