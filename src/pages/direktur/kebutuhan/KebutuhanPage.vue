<template>
  <q-page class="kebutuhan-page q-pa-md">
    <section class="requirement-section">
      <div class="page-title">Kebutuhan Alkes</div>
      <div class="table-wrap">
      <table class="kebutuhan-table">
        <colgroup><col class="mark-col"><col class="level-one-col"><col class="level-two-col"><col class="room-code-col"><col class="item-col"><col class="quantity-col"></colgroup>
        <thead><tr><th>mark</th><th colspan="4">Sarana</th><th>Kebutuhan</th></tr></thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index" :class="rowClass(row)">
            <td class="number">{{ row.mark }}</td>
            <td>{{ row.level1 }}</td>
            <td>{{ row.level2 }}</td>
            <td>{{ row.roomCode }}</td>
            <td>{{ row.item }}</td>
            <td class="quantity">{{ row.kebutuhan }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>

    <section class="requirement-section">
      <div class="page-title">Kebutuhan Sarana</div>
      <div class="table-wrap">
        <table class="kebutuhan-table sarana-table">
          <colgroup><col class="mark-col"><col class="level-one-col"><col class="level-two-col"><col class="sarana-col"><col class="available-col"></colgroup>
          <thead><tr><th>mark</th><th colspan="3">Sarana</th><th>Tersedia</th></tr></thead>
          <tbody>
            <tr v-for="(row, index) in saranaRows" :key="index" :class="saranaRowClass(row)">
              <td class="number">{{ row.mark }}</td>
              <td>{{ row.level1 }}</td>
              <td>{{ row.level2 }}</td>
              <td>{{ row.sarana }}</td>
              <td class="quantity">{{ row.tersedia }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="requirement-section">
      <div class="page-title">Kebutuhan Prasarana</div>
      <div class="table-wrap">
        <table class="kebutuhan-table prasarana-table">
          <colgroup><col class="mark-col"><col class="level-one-col"><col class="level-two-col"><col class="prasarana-col"><col class="available-col"></colgroup>
          <thead><tr><th>mark</th><th colspan="3">Prasarana</th><th>Tersedia</th></tr></thead>
          <tbody>
            <tr v-for="(row, index) in prasaranaRows" :key="index" :class="saranaRowClass(row)">
              <td class="number">{{ row.mark }}</td>
              <td>{{ row.level1 }}</td>
              <td>{{ row.level2 }}</td>
              <td>{{ row.prasarana }}</td>
              <td class="quantity">{{ row.tersedia }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import rows from './rencanaAlkes.json'
import saranaRows from './kebutuhanSarana.json'
import prasaranaRows from './kebutuhanPrasarana.json'

function rowClass (row) {
  if (row.level1) return 'section'
  if (row.level2) return 'category'
  if (row.roomCode && !row.item) return 'room'
  return ''
}

function saranaRowClass (row) {
  if (row.level1) return 'section'
  if (row.level2) return 'category'
  return ''
}
</script>

<style scoped>
.kebutuhan-page { min-width: 0; }
.requirement-section { margin-bottom: 28px; }
.page-title { margin-bottom: 12px; padding: 4px 0; color: #1b1b1b; font-size: 22px; font-weight: 600; background: #f5f5f5; }
.table-wrap { max-height: 520px; overflow: auto; background: white; border: 1px solid #111; }
.kebutuhan-table {
  width: 100%; min-width: 1000px; border-collapse: collapse; color: #111; font-family: Arial, sans-serif; font-size: 14px;
}
.kebutuhan-table th, .kebutuhan-table td { border: 1px solid #111; height: 22px; padding: 0 3px; line-height: 1.2; }
.kebutuhan-table thead th { height: 68px; color: #ff0; font-weight: normal; text-align: center; background: #808500; }
.kebutuhan-table thead th:first-child { background: #f00; }
.kebutuhan-table tbody td { border-top-style: dotted; border-bottom-style: dotted; }
.kebutuhan-table .section td { background: #c9e5e9; }
.kebutuhan-table .category td, .kebutuhan-table .room td { background: #dce2eb; }
.kebutuhan-table .number { text-align: right; }
.kebutuhan-table .quantity { text-align: center; font-weight: 600; }
.mark-col { width: 8%; } .level-one-col { width: 12%; } .level-two-col { width: 13%; } .room-code-col { width: 13%; } .item-col { width: 46%; } .quantity-col { width: 8%; }
.sarana-col { width: 55%; } .available-col { width: 12%; }
.prasarana-col { width: 55%; }
</style>
