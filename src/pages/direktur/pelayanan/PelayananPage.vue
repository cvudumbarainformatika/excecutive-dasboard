<template>
  <q-page padding>
    <div class="row q-col-gutter-md" style="margin-bottom:100px">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="__judul text-h6">Data Layanan</div>
        <div class="__sub_judul f-14 text-grey">Data Layanan Per tanggal {{ app.currentDay }} {{ app.monts[month - 1] }} {{ year }}</div>
      </div>

      <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
        <div class="row q-col-gutter-md">
          <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
            <card-layanan
              deskripsi="Jumlah Tempat Tidur"
              icon="king_bed"
              :jumlah="store.tempatTidur"
              :jumlah-terisi="store.tempatTidurTerisi"
              :jumlah-tersedia="store.tempatTidurTersedia"/>
          </div>
          <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
            <card-layanan
              deskripsi="Jumlah Pasien Poli"
              txt1="Belum Terlayani"
              txt2="Terlayani"
              icon="personal_injury"
              icon1="hourglass_bottom"
              icon2="done_all"
              color="primary"
              :jumlah="store.poli"
              :jumlah-terisi="store.poliHrIniBlm"
              :jumlah-tersedia="store.poliHrIniSdh"/>
          </div>

        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { usePelayananStore } from 'src/stores/pelayanan'
import { onMounted, computed } from 'vue'

import CardLayanan from './CardLayanan.vue'

const store = usePelayananStore()
const app = useAppStore()
const month = computed(() => app.currentMonth)
const year = computed(() => app.currentYear)

onMounted(() => {
  store.getData()
})
// console.log('pelayanan')
</script>
