<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="__judul text-h6">Data Keuangan</div>
        <div class="__sub_judul text-grey">Data Keuangan Per Tanggal</div>
        <div class="row q-col-gutter-md q-pt-md">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <q-card flat bordered>
              <q-card-section class="bg-secondary text-white">
                <div class="row items-center">
                  <div class="col">
                    <div class="text-weight-bold">Pendapatan</div>
                    <div>Tahun 2023</div>
                  </div>
                  <q-knob
                    readonly
                    v-model="percentagePendapatan"
                    show-value
                    size="80px"
                    :thickness="0.22"
                    color="white"
                    track-color="grey"
                    class="text-white q-ma-md"
                  >
                  {{ percentagePendapatan }} %
                </q-knob>
                </div>
                <q-separator class="q-my-md bg-grey" />
                <div class="text-weight-bold">Target Pendapatan</div>
                <div class="text-h5 text-weight-light text-right">Rp. 100.000.000</div>
                <q-separator class="q-my-md bg-grey" />
                <div class="text-weight-bold">Realisasi Pendapatan</div>
                <div class="text-h5 text-weight-light text-right">Rp. 100.000.000</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <q-card flat bordered>
              <q-card-section class="bg-dark text-white">
                <div class="row items-center">
                  <div class="col">
                    <div class="text-weight-bold">Belanja</div>
                    <div>Tahun 2023</div>
                  </div>
                  <q-knob
                    readonly
                    v-model="percentagePendapatan"
                    show-value
                    size="80px"
                    :thickness="0.22"
                    color="white"
                    track-color="grey"
                    class="text-white q-ma-md"
                  >
                  {{ percentagePendapatan }} %
                </q-knob>
                </div>
                <q-separator class="q-my-md bg-grey" />
                <div class="text-weight-bold">Target Pendapatan</div>
                <div class="text-h5 text-weight-light text-right">Rp. 100.000.000</div>
                <q-separator class="q-my-md bg-grey" />
                <div class="text-weight-bold">Realisasi Pendapatan</div>
                <div class="text-h5 text-weight-light text-right">Rp. 100.000.000</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        dsgfds
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const percentagePendapatan = ref(71)
</script>

<style lang="scss" scoped>
</style>
