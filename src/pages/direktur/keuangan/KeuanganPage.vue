<template>
  <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="__judul text-h6">Data Keuangan</div>
        <div class="__sub_judul text-grey">Data Keuangan Per Tanggal</div>
        <div class="row q-col-gutter-md q-pt-md">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <!-- <q-card flat bordered>
              <q-card-section class="bg-dark text-white">
                <div class="row items-center">
                  <q-avatar rounded size="34px" font-size="18px" color="secondary" text-color="white" icon="bar_chart" />
                  <div class="q-ml-md ">
                    <div class="text-weight-bold">Pendapatan</div>
                    <div class="text-grey f-12"> tahun 2023</div>
                  </div>
                </div>
                <div class="text-center">
                  <app-gauge :value="percentagePendapatan" :height="150" />
                  <div class="text-grey f-12"> {{ percentagePendapatan }}% Complete</div>
                </div>
                <q-separator class="q-my-md bg-grey" />
                <div class="text-center">
                  <div class="f-12">Target Pendapatan</div>
                  <div class="text-h6 "><span class="text-grey">Rp. </span> <span>100.000.000</span></div>
                </div>
                <q-separator class="q-my-md bg-grey" />
                <div class="text-center">
                  <div class="f-12">Realisasi Pendapatan</div>
                  <div class="text-h6 "><span class="text-grey">Rp. </span> <span>100.000.000</span></div>
                </div>
              </q-card-section>
            </q-card> -->
            <card-comp
              :percent="percentagePendapatan"
              :target="1000000000"
              :realisasi="1000000000"
              box-icon-color="secondary"
              title-icon="bar_chart"
              title-icon-color="white"
              title="Pendapatan"
              title-color="white"
              subtitle-color="grey"
              tahun="2023"
              target-name="Target Pendapatan"
              realisasi-name="Realisasi Pendapatan"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <!-- <q-card flat bordered>
              <q-card-section class="bg-info text-dark">
                <div class="row items-center">
                  <q-avatar rounded size="34px" font-size="18px" color="dark" text-color="white" icon="local_mall" />
                  <div class="q-ml-md ">
                    <div class="text-weight-bold">Belanja</div>
                    <div class="text-grey-9 f-12"> tahun 2023</div>
                  </div>
                </div>
                <div class="text-center">
                  <q-knob
                    readonly
                    v-model="percentagePendapatan"
                    show-value
                    size="100px"
                    :thickness="0.2"
                    color="dark"
                    track-color="grey"
                    class="text-dark q-ma-md"
                  >
                    {{ percentagePendapatan }}%
                  </q-knob>
                  <div class="text-dark f-12"> {{ percentagePendapatan }}% Complete</div>
                </div>
                <q-separator class="q-my-md bg-grey" />
                <div class="text-center">
                  <div class="f-12">Anggaran Belanja</div>
                  <div class="text-h6 "><span class="text-grey-8">Rp. </span> <span>100.000.000</span></div>
                </div>
                <q-separator class="q-my-md bg-grey" />
                <div class="text-center">
                  <div class="f-12">Realisasi Belanja</div>
                  <div class="text-h6 "><span class="text-grey-8">Rp. </span> <span>100.000.000</span></div>
                </div>
              </q-card-section>
            </q-card> -->
            <card-comp
              :percent="90"
              color="info"
              :target="1000000000"
              :realisasi="1000000000"
              box-icon-color="dark"
              title-icon="local_mall"
              title-icon-color="white"
              title="Belanja"
              title-color="dark"
              subtitle-color="grey-9"
              tahun="2023"
              target-name="Anggaran Belanja"
              realisasi-name="Realisasi Pembelanjaan"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <q-card>
          <div class="q-px-md q-pt-md">Laporan Per Bulan tahun 2023</div>
        <div class="q-pa-md">
          <q-card flat bordered class="q-mb-sm">
            <q-card-section>
              <div class="row items-center justify-between">
                <div class="row items-center">
                  <div>
                    <q-avatar color="grey-2" text-color="grey-8">
                      <div class="text-weight-bold">J</div>
                    </q-avatar>
                  </div>
                  <div class="q-ml-md">
                    <div>Januari</div>
                    <div class="f-12 text-grey">Realisasi Pendapatan</div>
                    <div class="f-12 text-grey">Realisasi Belanja</div>
                  </div>
                </div>
                <div class="text-right">
                  <div> <q-icon name="trending_up" size="18px" color="primary" /></div>
                  <div class="f-12 text-grey">100.000.000</div>
                  <div class="f-12 text-grey">200.000.000</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
          <q-card flat bordered>
            <q-card-section class="bg-primary text-white">
              <div class="row items-center justify-between">
                <div class="row items-center">
                  <div>
                    <q-avatar color="grey-2" text-color="grey-8">
                      <div class="text-weight-bold">F</div>
                    </q-avatar>
                  </div>
                  <div class="q-ml-md">
                    <div>Februari</div>
                    <div class="f-12 text-grey">Realisasi Pendapatan</div>
                    <div class="f-12 text-grey">Realisasi Belanja</div>
                  </div>
                </div>
                <div class="text-right">
                  <div> <q-icon name="trending_down" size="18px" color="negative" /></div>
                  <div class="f-12 text-grey">100.000.000</div>
                  <div class="f-12 text-grey">200.000.000</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        </q-card>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CardComp from './CardComp.vue'
const percentagePendapatan = ref(82)
</script>
