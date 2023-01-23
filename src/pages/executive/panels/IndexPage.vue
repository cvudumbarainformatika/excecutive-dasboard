<template>
  <q-tab-panels
    animated
    swipeable
    vertical
    infinite
    class="full-width"
  >
    <q-tab-panel name="Keuangan">
      <!-- <div class="text-h6">Keuangan</div> -->
      <panel-keuangan />
    </q-tab-panel>

    <q-tab-panel name="SDM">
      <div class="text-h6">SDM</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="Layanan">
      <div class="text-h6">Layanan</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="Sarpras">
      <div class="text-h6">Sarpras</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import PanelKeuangan from './PanelKeuangan.vue'
</script>
