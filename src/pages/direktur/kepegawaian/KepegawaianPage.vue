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
            <div v-for="(item, i) in store.statusPegawai" :key="i" class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
              <card-kepeg
                :jumlah="item.jumlah"
                :jumlah-l="item.l"
                :jumlah-p="item.p"
                :color="setColor(item) !== null ? setColor(item): 'dark'"
                :txt-color="setTxtColor(item) !== null ? setTxtColor(item): 'white'"
                txt="Pegawai Negeri Sipil"
                :txt-short="item.jenispegawai"
                icon="diversity_3" />
            </div>
            <!-- <div class="col-sm-6 col-xs-6 col-md-4 col-lg-4 col-xl-4">
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
            </div> -->
          </div>
        </div>

    </div>
  </q-page>
</template>

<script setup>
import CardKepeg from './CardKepeg.vue'
import { useAppStore } from 'src/stores/app'
import { useKepegawaianStore } from 'src/stores/kepegawaian/index'
import { computed, onMounted } from 'vue'

// const { currentMonth, currentYear } = useDate()
// const percentagePendapatan = ref(82)

const app = useAppStore()
const store = useKepegawaianStore()
const month = computed(() => app.currentMonth)
const year = computed(() => app.currentYear)

onMounted(() => {
  store.getData()
})

function setColor (item) {
  const jns = item.jenispegawai
  const colorx = store.colorize
  const cc = colorx.filter(x => x.id === jns)
  return cc.length ? cc[0].color : null
}
function setTxtColor (item) {
  const jns = item.jenispegawai
  const colorx = store.colorize
  const cc = colorx.filter(x => x.id === jns)
  return cc.length ? cc[0].txtColor : null
}

</script>
