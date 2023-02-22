<template>
  <q-page>
    <app-loading v-if="store.loading" />
    <div class="row q-col-gutter-md q-pa-lg" style="padding-bottom:100px">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="__judul text-h6">Data Layanan</div>
        <div class="__sub_judul f-14 text-grey-7">Data Layanan Per tanggal <span class="text-negative">{{ app.currentDay }} {{ app.monts[month - 1] }} {{ year }}</span></div>
      </div>

      <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
        <div class="row q-col-gutter-md">
          <div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4">
            <card-layanan
              deskripsi="Jumlah Tempat Tidur"
              icon="king_bed"
              :jumlah="store.tempatTidur"
              :jumlah-terisi="store.tempatTidurTerisi"
              :jumlah-tersedia="store.tempatTidurTersedia"/>
          </div>
          <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8 col-xl-8">
            <card-ranap
              txt-jumlah="Jumlah Pasien Ranap"
              :key="store.ranapTahun"
              :jumlah-ranap-tahun="jumlahRanapTahun"
              :value-list="store.ranapTahun"
              :tahun="year"
              primary="dark"
              secondary="transparent"
            />
          </div>

          <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
            <card-layanan
              :deskripsi="`Pasien Poli tgl ( ${app.currentDay} ${app.mm[month - 1]} ${ year } )`"
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
          <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8 col-xl-8">
            <card-ranap
              txt-jumlah="Jumlah Pasien Rajal"
              :key="store.poliTahun"
              :jumlah-ranap-tahun="jumlahPoliTahun"
              :value-list="store.poliTahun"
              :tahun="year"
              primary="primary"
              secondary="transparent"
              label="Rajal"
            />
          </div>

          <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-center q-pt-md">
                  <q-icon name="local_hospital" color="negative" size="98px"></q-icon>
                  <div class="text-h2 text-weight-bold text-negative q-pa-md">{{store.igd}}</div>
                  <div class="f-14 q-pb-sm">Jumlah Pasien sedang di IGD</div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-center q-pt-md">
                  <q-icon name="local_hospital" color="negative" size="98px"></q-icon>
                  <div class="text-h2 text-weight-bold text-negative q-pa-md">{{store.igd}}</div>
                  <div class="f-14 q-pb-sm">Jumlah Pasien sedang di IGD</div>
                </div>
              </q-card-section>
            </q-card>
          </div>

        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { usePelayananStore } from 'src/stores/pelayanan'
import { onMounted, computed, watch } from 'vue'

import CardLayanan from './CardLayanan.vue'
import CardRanap from './CardRanap.vue'

const store = usePelayananStore()
const app = useAppStore()
const month = computed(() => app.currentMonth)
const year = computed(() => app.currentYear)
const d = computed(() => app.currentDay)

const jumlahRanapTahun = computed(() => {
  const ranap = store.ranapTahun
  if (ranap.length > 0) {
    return ranap.map(x => x.jumlah).reduce((x, y) => x + y, 0)
  }

  return 0
})
const jumlahPoliTahun = computed(() => {
  const poli = store.poliTahun
  if (poli.length > 0) {
    return poli.map(x => x.jumlah).reduce((x, y) => x + y, 0)
  }

  return 0
})

onMounted(() => {
  monthToString()
})

function monthToString () {
  const m = month.value <= 9 ? '0' + (month.value) : (month.value).toString()
  const mYear = m + '-' + year.value + '-' + d.value
  store.getData(mYear)
}

watch([month, year], (newValue) => {
  console.log('watch', newValue)
  monthToString()
})
// console.log('pelayanan', d.value)
</script>
