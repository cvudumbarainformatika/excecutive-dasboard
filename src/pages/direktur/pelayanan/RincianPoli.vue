<template>
   <q-dialog v-model="store.dialogrincianpoli" transition-show="rotate" transition-hide="rotate">
    <div class="q-pa-sm" style="max-width: 90vw; width: 75%;">

            <q-card class="my-card col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12h">
              <div class="q-pa-md">
                <div class="q-pb-md">{{ `Data Pasien Terlayani Berdasarkan Poli tgl ( ${app.currentDay} ${app.mm[month - 1]} ${ year } )` }}</div>
                <div class="grid">
                  <div class="item" v-for="(item, i) in store.masterPoli" :key="i">
                    <div class="column flex-center text-center full-height">
                      <div class="text-h4 q-pa-sm text-grey-9">{{cariJumlahPoli(item.rs1)}}</div>
                      <!-- <div class="separator"></div> -->
                       <div class="text-subtitle9 text-weight-medium q-mb-sm">{{item.rs2}}</div>

                       <div class="text-caption text-left">

                        <div class="q-mb-xs">
                          ✅ <strong>Sudah dilayani:</strong>
                          ({{ cariJumlahPoliTerlayani(item.rs1) }})
                        </div>
                        <div>
                          ⏳ <strong>Belum dilayani:</strong>
                          ({{ cariJumlahPoliBelum(item.rs1) }})
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-card>

    </div>
   </q-dialog>
</template>
<script setup>
import { useAppStore } from 'src/stores/app'
import { usePelayananStore } from 'src/stores/pelayanan'
import { computed } from 'vue'

const store = usePelayananStore()
const app = useAppStore()
const month = computed(() => app.currentMonth)
const year = computed(() => app.currentYear)
// const d = computed(() => app.currentDay)

function cariJumlahPoliTerlayani (kode) {
  return store.dataPoliHrIniSdh?.filter(x => x.rs8 === kode).length
}

function cariJumlahPoliBelum (kode) {
  return store.dataPoliHrIniBlm?.filter(x => x.rs8 === kode).length
}

function cariJumlahPoli (kode) {
  const arr = store.dataPoliHrIniSdh
  return arr.filter(x => x.rs8 === kode).length
}
</script>
<style lang="scss" scoped>
.separator {
  height: 1px;
  width: 100%;
  background-color: black;
  opacity: .5;
}
.grid {
  columns: 12rem;
  gap: .5rem;
  counter-reset: grid;
}

.item + .item {
  margin-top: .5rem;
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
