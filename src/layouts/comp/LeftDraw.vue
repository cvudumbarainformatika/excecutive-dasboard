<template>
  <q-drawer show-if-above side="left" bordered :width="340" :breakpoint="400">
      <!-- drawer content -->
      <!-- <div class="q-pa-lg">
        <div class="_judul_page text-weight-bold text-h6">Dashboard Executive</div>
        <div class="_judul_page text-caption text-grey">Dashboard Khusus Direktur</div>
        <div class="_judul_page text-caption">UOBK RSUD MOHAMAD SALEH KOTA PROBOLINGGO</div>
      </div> -->

      <!-- <q-separator></q-separator> -->

      <q-scroll-area
        style="height: calc(100% - 140px); margin-top:140px; border-right: 1px solid #ddd"

      >
        <div class="q-pa-md">
          <div class="text-caption">Per tanggal</div>
          <q-date
            v-model="date"
            mask="YYYY-MM-DD"
          />
        </div>

      </q-scroll-area>
      <div class="absolute-top" src="" style="height: 140px; border-bottom: 1px solid gray;">
          <div class="absolute-bottom bg-transparent  q-pa-lg">
            <div class="_judul_page text-weight-bold text-h6">Dashboard Executive</div>
            <div class="_judul_page text-caption text-grey">Dashboard Khusus Direktur</div>
            <div class="_judul_page text-caption">UOBK RSUD MOHAMAD SALEH KOTA PROBOLINGGO</div>
          </div>
        </div>
    </q-drawer>
</template>

<script setup>
import { ref } from 'vue'
import useDate from 'src/utility/useDate.js'

const { dateDbFormat } = useDate()
const date = ref(dateDbFormat(new Date()))
// const dateOpen = ref(true)

console.log(date)
</script>
