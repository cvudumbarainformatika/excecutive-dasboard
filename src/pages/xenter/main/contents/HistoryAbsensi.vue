<template>
  <q-card flat square class="q-pa-md">
    <div class="f-12">Absensi Bulan Ini 📅</div>
  </q-card>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col-4">
        <card-rekap txt="Hadir" icon="launch" :qty="parseInt(rekap.HADIR)" />
      </div>
      <div class="col-4">
        <card-rekap txt="Sakit" icon="medical_services" :qty="parseInt(rekap.SAKIT)" />
      </div>
      <div class="col-4">
        <card-rekap txt="Izin" icon="delivery_dining" :qty="parseInt(rekap.IJIN)" />
      </div>
      <div class="col-4">
        <card-rekap txt="Cuti" icon="send_time_extension" :qty="parseInt(rekap.CUTI)" />
      </div>
      <div class="col-4">
        <card-rekap txt="DL" icon="delivery_dining" :qty="parseInt(rekap.DL)" />
      </div>
      <div class="col-4">
        <card-rekap txt="Dspen" icon="earbuds" :qty="parseInt(rekap.DISPEN)" />
      </div>
      <div class="col-4">
        <card-rekap txt="Alpha" icon="spellcheck" :qty="parseInt(rekap.A)" />
      </div>
      <div class="col-8">
        <card-rekap txt="Terlambat" icon="sensor_occupied" :qty="parseInt(rekap.TERLAMBAT)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CardRekap from './comphistory/CardRekap.vue'
import { useRekapAbsen } from 'src/stores/xenter/absensi/rekap'

const rekap = useRekapAbsen()
</script>

<style lang="scss" scoped>
</style>
