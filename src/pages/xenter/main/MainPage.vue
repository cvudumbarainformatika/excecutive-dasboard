<template>
  <app-page @page-activated="callFirst('loading')">
    <template #header>
      <header-main :user="user?.pegawai" />
    </template>
    <template #content>
      <ContentOne />
      <JadwalHarian :key="currentJadwal" :current-jadwal="currentJadwal" />
      <HistoryAbsensi />
      <CalendarSection />
    </template>
  </app-page>
</template>

<script setup>
import { useLoginXenterStore } from 'src/stores/xenter/auth/login'
import { useJadwal } from 'src/stores/xenter/absensi/jadwal'
import { useRekapAbsen } from 'src/stores/xenter/absensi/rekap'
import HeaderMain from './HeaderMain.vue'
import ContentOne from './contents/ContentOne.vue'
import JadwalHarian from './contents/JadwalHarian.vue'
import HistoryAbsensi from './contents/HistoryAbsensi.vue'
import CalendarSection from './contents/CalendarSection.vue'

import { useDater } from 'src/composable/dater'
import { computed, onMounted } from 'vue'
// import { useRouter } from 'vue-router'

const auth = useLoginXenterStore()
const user = computed(() => {
  return auth?.user
})

const { tgl, dayjs } = useDater()
// const router = useRouter()
const store = useJadwal()
const rekap = useRekapAbsen()

const currentJadwal = computed(() => store.getCurrentJadwal(tgl?.value?.hari))

onMounted(() => {
  console.log('main')
  callFirst('loading')
})

function callFirst (val) {
  store.getJadwals(val)
  rekap.getRekap(dayjs().locale('id').format('MM'), val)
}
</script>
