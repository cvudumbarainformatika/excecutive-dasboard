<template>
  <q-dialog v-model="storepelayanan.dialogtt" transition-show="rotate" transition-hide="rotate">
     <q-card
    class="my-card"
    style="width: 100%; max-width: 1200px; margin: 0 auto; border-radius: 12px;"
  >
    <div class="q-pa-md">
      <div class="text-h6 text-primary q-mb-md">Detail Tempat Tidur</div>

      <!-- 🔧 Tambahkan pembungkus scroll -->
      <div class="table-wrapper">
        <q-markup-table flat bordered class="full-table">
          <thead>
            <tr class="bg-primary text-white">
              <th class="text-left">No.</th>
              <th class="text-left">Nama Poli</th>
              <th class="text-center">Jumlah TT</th>
              <th class="text-center">Terisi</th>
              <th class="text-center">Sisa</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, x) in storepelayanan.data" :key="x">
               <td>{{ x + 1 }}.</td>
              <td>{{ item?.ruang }}</td>
              <td class="text-center">{{ item?.total }}</td>
              <td class="text-center text-negative">{{ item?.terisi }} ({{ ((item?.terisi / item?.total) * 100).toFixed(1) }}%)</td>
              <td class="text-center text-positive">{{ item?.sisa }} ({{ ((item?.sisa / item?.total) * 100).toFixed(1) }}%)</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </q-card>
  </q-dialog>
</template>
<script setup>

import { usePelayananStore } from 'src/stores/pelayanan'

const storepelayanan = usePelayananStore()
</script>
