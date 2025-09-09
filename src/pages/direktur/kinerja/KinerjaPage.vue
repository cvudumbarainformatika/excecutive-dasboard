<template>
  <q-page>
    <app-loading v-if="store.loading" />
    <div class="row q-col-gutter-md q-pa-lg" style="padding-bottom: 100px">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="__judul text-h6">Data IKM</div>
        <div class="__sub_judul f-14 text-grey-7">
          Data IKM
        </div>
      </div>

      <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
         <div class="row q-col-gutter-md">
          <div class="col-12 col-md-12">
            <q-card class="dashboard-card">
              <q-card-section>
                <EChart
                  :title="`Indeks Kepuasan Masyarakat (IKM)`"
                  :show="false"
                  :xAxisData="store.data?.xAxis?.data"
                  :series="store.data?.series"
                  :fontSize="12"
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
import EChart from 'src/components/charts/EChart.vue'
import { useKinerjaStore } from 'src/stores/kinerja'
import { onMounted } from 'vue'

const store = useKinerjaStore()

onMounted(() => {
  store.getData()
})
</script>
