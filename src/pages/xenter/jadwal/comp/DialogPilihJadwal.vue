<template>
  <q-dialog
      persistent
      position="bottom"
      transition-show="slide-up"
      transition-hide="slide-down"
      @before-hide="select=null"
    >
    <q-card class="full-width" style="height: 100vh;">
      <div class="column fit">
        <div class="col-auto">
          <div class="row justify-between items-center q-pa-sm bg-dark text-white">
            <div class="text-weight-bold">Pilih Kategory Shift</div>
            <q-btn flat round icon="close" class="q-pa-xs" v-close-popup />
          </div>
          <q-separator></q-separator>
        </div>
        <div class="col full-height bg-grey-4 scroll">
          <div class="q-mb-xs"></div>
          <div v-for="(item,n) in items" :key="n">
            <q-card v-if="item?.id > 2" flat square
              class="q-mb-xs" v-ripple.early
              :class="select===item? 'bg-dark text-white':''"
              @click="pilih(item)">
              <q-card-section class="q-px-md q-py-sm">
                <div :style="`color:${item?.warna??'grey'}`">{{ item?.nama }}</div>
                <div class="f-10">{{ item?.masuk }} - {{ item?.pulang }}</div>
              </q-card-section>
            </q-card>
          </div>
          <div style="margin-bottom: 120px;"></div>
        </div>
        <div class="absolute-bottom full-width">
          <div class="row">
            <div class="col-6">
              <q-btn square class="full-width" color="negative" size="lg" v-close-popup>Pilih Libur</q-btn>
            </div>
            <div class="col-6">
              <q-btn square class="full-width" color="dark" size="lg" v-close-popup>Pilih Shift</q-btn>
            </div>
          </div>
        </div>
      </div>
    </q-card>

    </q-dialog>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits('pilihJadwal')

const select = ref(null)

function pilih (item) {
  select.value = item
  emits('pilihJadwal', item)
}

</script>
