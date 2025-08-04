<template>
  <q-page>
    <app-loading v-if="store.loading" />
    <div class="row q-col-gutter-md q-pa-lg" style="padding-bottom: 100px">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="__judul text-h6">Data Layanan</div>
        <div class="__sub_judul f-14 text-grey-7">
          Data Layanan Per tanggal
          <span class="text-negative"
            >{{ app.currentDay }} {{ app.monts[month - 1] }} {{ year }}</span
          >
        </div>
      </div>

      <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
        <div class="row q-col-gutter-md">

          <div class="col-12 col-md-4">
            <q-card class="dashboard-card">
              <q-card-section>
                <EChart
                  :title="`TOP 10 ICD 10 Ranap ${year}`"
                  :xAxisData="store.topProductsData.products"
                  :series="store.topProductsData.series"
                  :horizontal="true"
                />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card class="dashboard-card">
              <q-card-section>
                <EChart
                  :title="`TOP 10 ICD 10 Rajal ${year}`"
                  :xAxisData="store.topIcd10Datarajal.icd10rajal"
                  :series="store.topIcd10Datarajal.series"
                  :horizontal="true"
                />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card class="dashboard-card">
              <q-card-section>
                <EChart
                  :title="`TOP 10 ICD 10 IGD ${year}`"
                  :show="false"
                  :xAxisData="store.topIcd10Dataigd.icd10igd"
                  :series="store.topIcd10Dataigd.series"
                  :horizontal="true"
                />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-12">
            <q-card class="dashboard-card">
              <q-card-section>
                <EChart
                  :title="`BOR, LOS, TOI, BTO ${year}`"
                  :show="true"
                  :xAxisData="store.salesTrendData.trendMonths"
                  :series="store.borlostoi.series"
                />
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
import { onMounted, computed, watch } from 'vue'

// import EChart from 'src/components/charts/EChart.vue'

import EChart from 'src/components/charts/EChart.vue'
import { useRekammedikStore } from 'src/stores/rekammedik'
// import RincianTTPage from './RincianTTPage.vue'

const store = useRekammedikStore()
const app = useAppStore()
const month = computed(() => app.currentMonth)
const year = computed(() => app.currentYear)
const d = computed(() => app.currentDay)

onMounted(() => {
  monthToString()
})

function monthToString () {
  const m = month.value <= 9 ? '0' + month.value : month.value.toString()
  const mYear = m + '-' + year.value + '-' + d.value
  store.getData(mYear)
}

// const pieSeries = ref([
//   {
//     name: 'Kategori Produk',
//     type: 'pie',
//     radius: ['40%', '70%'],
//     data: [
//       { value: 1048, name: 'BOR' },
//       { value: 735, name: 'LOS' },
//       { value: 580, name: 'TOI' }
//       // { value: 484, name: 'Keramik' },
//       // { value: 300, name: 'Lainnya' }
//     ]
//   }
// ])

// const bar = defineProps({
//   title: {
//     type: String,
//     default: 'ECharts Demo'
//   },
//   xAxisData: {
//     type: Array,
//     default: () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
//   },
//   series: {
//     type: Array,
//     default: () => [
//       {
//         name: 'Data 1',
//         type: 'bar',
//         data: [40, 20, 12, 39, 10, 40]
//       }
//     ]
//   },
//   horizontal: {
//     type: Boolean,
//     default: false
//   }
// })

// function cariJumlahPoli (kode) {
//   const arr = store.dataPoliHrIniSdh
//   return arr.filter(x => x.rs8 === kode).length
// }

watch([month, year], (newValue) => {
  console.log('watch', newValue)
  monthToString()
})
// console.log('pelayanan', d.value)
</script>

<style lang="scss" scoped>
.separator {
  height: 1px;
  width: 100%;
  background-color: black;
  opacity: 0.5;
}
.grid {
  columns: 12rem;
  gap: 0.5rem;
  counter-reset: grid;
}

.item + .item {
  margin-top: 0.5rem;
}

.item {
  break-inside: avoid;
  aspect-ratio: 12 / 12;
  background: $cyan-2;
  // padding: .5rem;
  border-radius: 0.5rem;
}

.item::before {
  counter-increment: grid;
  // content: counter(grid);
}

.item:nth-child(3n) {
  aspect-ratio: 15 / 10;
  background: $pink-2;
}

.item:nth-child(3n - 1) {
  aspect-ratio: 12 / 10;
  background: $lime-2;
}

// INI RAPI
// .item:nth-child(3n) {
//   aspect-ratio: 16 / 9;
//   background: lavender;
// }

// .item:nth-child(3n - 1) {
//   aspect-ratio: 4 / 3;
//   background: lightblue;
// }

// .item:nth-child(3n - 2) {
//   aspect-ratio: 4 / 3;
//   background: blue;
// }
</style>
