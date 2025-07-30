<template>
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
            <tr v-for="(item, x) in store.data" :key="x">
               <td>{{ x + 1 }}.</td>
              <td>{{ item?.ruang }}</td>
              <td class="text-center">{{ item?.total }}</td>
              <td class="text-center text-negative">{{ item?.terisi }}</td>
              <td class="text-center text-positive">{{ item?.sisa }}</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </q-card>
</template>
<script setup>
import { usePelayananStore } from 'src/stores/pelayanan'

const store = usePelayananStore()
</script>

<style scoped>
.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.full-table {
  width: 100%;
  min-width: 900px; /* paksa minimal lebar */
  table-layout: auto;
  word-break: break-word;
}

.full-table td,
.full-table th {
  padding: 12px;
  font-size: 14px;
}
</style>
