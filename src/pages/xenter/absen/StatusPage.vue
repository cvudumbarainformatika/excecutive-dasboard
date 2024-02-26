<template>
  <q-page class="page fit bg-grey-4" >
    <div class="absolute-top full-height page-effect column shadow-4" :class="{'effect-left': hasLeaveFromHere}">
      <div class="col-auto">
        <HeaderMain />
      </div>
      <!-- content -->
      <div class="col full-height relative-position">
        <div class="column full-height full-width absolute">
          <div class="col full-height">
            <div class="column full-height flex-center">
              <div v-if="scheduleStorrage?.statusStorrage !== '1'">
                <div v-if="cond==='masuk'" class="column flex-center">
                  <q-icon name="doorbell" color="negative" size="60px" />
                  <div class="f-12 text-weight-bold text-negative q-mt-md">Saatnya Absen</div>
                </div>
                <div v-else-if="cond==='pulang'" class="column flex-center">
                  <q-icon name="timer" color="negative" size="60px" />
                  <div class="f-12 text-weight-bold text-negative q-mt-md">Saatnya Pulang</div>
                </div>
                <div v-else class="column flex-center">
                  <q-icon name="verified" color="teal" size="60px" />
                  <div class="f-12 text-weight-bold text-teal q-mt-md">Belum Ada Jadwal</div>
                </div>
              </div>
              <div v-else class="column flex-center">
                <q-icon name="local_cafe" color="primary" size="60px" />
                  <div class="f-12 text-weight-bold text-primary q-mt-md">Tidak Ada Jadwal</div>
              </div>
              <!-- {{ tgl }} -->
            </div>
          </div>

          <div class="col-auto full-width" >
            <q-card v-if="cond==='masuk' || cond==='pulang'" flat>
              <div class="row full-width">
                <q-btn class="col-6 q-py-md" color="dark" label="Scan Qr" square size="md" to="/absen/lihat-lokasi"/>
                <q-btn class="col-6 " color="teal" label="Scan Wajah" square size="md"/>
              </div>
            </q-card>
            <q-card v-else flat>
              <div class="row full-width">
                <q-btn class="col-6 q-py-md" color="dark" label="Scan Qr" square size="md" to="/absen/lihat-lokasi"/>
                <q-btn class="col-6 " color="teal" label="Scan Wajah" square size="md"/>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <router-view
      v-slot="{ Component }"
      class="transition"
      >
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
          <component
            :is="Component"
              @page-activated="hasActiveChildPage=true"
              @page-deactivated="hasActiveChildPage=false"
          />
      </transition>
    </router-view>

  </q-page>

</template>

<script setup>
// import { useDater } from 'src/composable/dater'
import { onMounted, onUnmounted, ref } from 'vue'
import HeaderMain from './HeaderMain.vue'
// import { onUnmounted } from 'vue'

import { useAbsenContext } from './absenContext'
import { onBeforeRouteLeave } from 'vue-router'

const { tgl, cond, scheduleStorrage, start } = useAbsenContext()

const hasLeaveFromHere = ref(false)

onMounted(() => {
  hasLeaveFromHere.value = false
})

const setTimer = setInterval(start, 1000)

onUnmounted(() => {
  clearInterval(setTimer)
})
onBeforeRouteLeave(() => {
  clearInterval(setTimer)
})

console.log(tgl.value)
console.log(cond.value)
</script>
