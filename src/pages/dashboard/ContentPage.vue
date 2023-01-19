<template>
  <q-tab-panels
    animated
    swipeable
    vertical
    infinite
    >
      <q-tab-panel name="Keuangan">
        <div class="row q-col-gutter-lg pa-sm">
          <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <q-card class="my-card shadow-4">
              <app-chart />
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <q-card class="my-card shadow-4">
              fdskfdas
            </q-card>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="SDM">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="Layanan">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="Sarpras">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
</template>
<script setup>
</script>
