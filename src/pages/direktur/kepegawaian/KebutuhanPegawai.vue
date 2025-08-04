<template>
  <q-dialog v-model="store.dialogkebutuhanpegawai" transition-show="rotate" transition-hide="rotate">
     <q-card
    class="my-card"
    style="width: 100%; max-width: 1200px; margin: 0 auto; border-radius: 12px;"
  >
    <div class="q-pa-md">
      <div class="text-h6 text-primary q-mb-md">Detail Kebutuhan Pegawai</div>

      <!-- 🔧 Tambahkan pembungkus scroll -->
      <div class="table-wrapper">
        <q-markup-table flat bordered class="full-table">
          <thead>
            <tr class="bg-primary text-white">
              <th class="text-left">No.</th>
              <th class="text-left">Jabatan</th>
              <th class="text-center">Standart</th>
              <th class="text-center">Eksisting</th>
              <th class="text-center">Selisih</th>
              <th class="text-center">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, x) in store.kebutuhanPegawai" :key="x">
               <td>{{ x + 1 }}.</td>
              <td>{{ item?.jabatan }}</td>
              <td class="text-center text-bold">{{ item?.standart }}</td>
              <td class="text-center text-bold">{{ item?.eksisting }}</td>
              <td class="text-center text-bold" v-if="item.status === 'Kurang'">{{ item?.standart - item?.eksisting}}</td>
              <td class="text-center text-bold" v-else> - </td>
              <td class="text-center text-bold" v-if="item.status === 'Kurang'"><q-badge color="red"> {{ item?.status }} </q-badge></td>
               <td class="text-center text-bold" v-else> <q-badge color="primary"> {{ item?.status }} </q-badge> </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </q-card>
  </q-dialog>
</template>
<script setup>

import { useKepegawaianStore } from 'src/stores/kepegawaian'

const store = useKepegawaianStore()
</script>
