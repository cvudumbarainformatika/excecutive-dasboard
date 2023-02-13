<template>
  <q-drawer show-if-above side="left" bordered :width="280" :breakpoint="400" class="bg-dark text-grey-2">
      <!-- drawer content -->
      <!-- <div class="q-pa-lg">
        <div class="_judul_page text-weight-bold text-h6">Dashboard Executive</div>
        <div class="_judul_page text-caption text-grey">Dashboard Khusus Direktur</div>
        <div class="_judul_page text-caption">UOBK RSUD MOHAMAD SALEH KOTA PROBOLINGGO</div>
      </div> -->

      <!-- <q-separator></q-separator> -->

      <q-scroll-area
        :style="`height: calc(100% - ${height}px); margin-top:${height}px;` "

      >

        <q-separator />
        <!-- <div class="q-pa-md">
          <div class="text-caption">Per tanggal</div>
          <q-date
            v-model="date"
            mask="YYYY-MM-DD"
            color="dark"
          />
        </div> -->
        <q-list padding class="text-grey">
          <q-item v-for="(item, i) in menus" :key="i" clickable v-ripple>
            <q-item-section avatar>
              <q-icon :color="item.nama === active?'primary':''" :name="item.icon" />
            </q-item-section>
            <q-item-section :class="item.nama === active?'text-white':''">{{item.nama}}</q-item-section>
          </q-item>
        </q-list>

      </q-scroll-area>
      <div class="absolute-top bg-primary text-white" :style="`height: ${height}px;` ">
          <div class="absolute-bottom bg-transparent  q-pa-md">
            <div class="_judul_page text-weight-bold text-h6">Dashboard Executive</div>
            <!-- <div class="_judul_page text-caption text-grey">Dashboard Khusus Direktur</div> -->
            <div class="_judul_page text-caption text-grey-5  ">UOBK RSUD MOHAMAD SALEH KOTA PROBOLINGGO</div>
          </div>
      </div>
    </q-drawer>
</template>

<script setup>
import { ref } from 'vue'
import useDate from 'src/utility/useDate.js'

const height = ref(110)
const { dateDbFormat } = useDate()
const date = ref(dateDbFormat(new Date()))

const menus = ref([
  { nama: 'Keuangan', icon: 'dvr' },
  { nama: 'Kepegawaian', icon: 'people' },
  { nama: 'Layanan', icon: 'support_agent' }
])

const active = ref('Keuangan')
// const dateOpen = ref(true)

console.log(date)
</script>
