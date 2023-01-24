<template>
  <q-tab-panels
    animated
    swipeable
    vertical
    infinite
    class="full-width full-height"
  >
    <q-tab-panel name="Keuangan">
      <panel-keuangan />
    </q-tab-panel>

    <q-tab-panel name="SDM">
      <panel-sdm />
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
import PanelSdm from './PanelSdm.vue'
</script>
