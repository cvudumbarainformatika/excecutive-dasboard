<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-lg p-exe">
      <div class="_judul_page text-weight-bold text-h6">Dashboard Executive</div>
      <div class="_judul_page text-caption">Report Dashboard Khusus Direktur</div>
      <div class="_judul_page text-caption">UOBK RSUD MOHAMAD SALEH KOTA PROBOLINGGO</div>
      <div class="q-pt-lg">
        <div class="row items-center">
          <div class="columns">
            <app-card>
            <template #default>
              <div class="columns q-py-xs q-px-md">
                <div class="text-grey-7">Periode Tanggal</div>
                <div class="row items-center">
                  <q-icon name="event" size="sm" class="q-mr-sm" color="primary" />
                  <div> Februari 2023</div>
                </div>
              </div>
            </template>
          </app-card>
          <div v-if="dateOpen" class="q-mt-xs">
            <q-date
              v-model="date"
              landscape
              mask="YYYY-MM-DD"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const date = ref('2019/02/01')
const dateOpen = ref(true)
</script>

<style lang="scss" scoped>
.p-exen {
  padding-left:5%;
  padding-right:5%
}

.card__w {
  min-width: 200px;
}
</style>
