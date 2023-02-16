<template>
  <q-page padding>
    <div class="row q-col-gutter-md" style="margin-bottom:100px">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="__judul text-h6">Data Kepegawaian</div>
        <div class="__sub_judul f-14 text-grey">Data Kepegawaian Per Bulan {{ app.monts[month - 1] }} {{ year }}</div>
      </div>

        <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8 col-xl-8">
          <div class="row q-col-gutter-md">
            <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
              <card-kepeg :jumlah="800" txt="Seluruh Pegawai" icon="groups" />
            </div>
            <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
              <card-kepeg :jumlah="800" color="info" txt-color="dark" txt="Pegawai Negeri Sipil" txt-short="PNS" icon="diversity_3" />
            </div>
            <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
              <card-kepeg :jumlah="800" color="secondary" txt-color="white" txt="Honor Daerah" txt-short="HONDA" icon="diversity_2" />
            </div>
            <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
              <card-kepeg :jumlah="800" color="negative" txt-color="white" txt="Pegawai Tetap" txt-short="PT" icon="people" />
            </div>
            <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
              <card-kepeg :jumlah="800" color="accent" txt-color="white" txt="Pegawai Tidak Tetap" txt-short="PTT" icon="groups_2" />
            </div>
            <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
              <card-kepeg :jumlah="800" color="white" txt-color="dark" txt="Pegawai Lainnya" txt-short="PL" icon="transfer_within_a_station" />
            </div>
          </div>
        </div>

    </div>
  </q-page>
</template>

<script setup>
import CardKepeg from './CardKepeg.vue'
import { useAppStore } from 'src/stores/app'
import { computed } from 'vue'

// const { currentMonth, currentYear } = useDate()
// const percentagePendapatan = ref(82)

const app = useAppStore()
const month = computed(() => app.currentMonth)
const year = computed(() => app.currentYear)

</script>
