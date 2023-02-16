<template>
  <q-card class="my-card __anjay">
    <q-card-section>
      <div class="absolute-bottom bayang">
        <q-icon :name="icon" size="200px" />
      </div>
      <div class="row items-center justify-between">
        <q-avatar round size="60px" font-size="40px" :color="txtColor" :text-color="color" :icon="icon" />
        <div>
          <div class="text-h4 text-weight-bold">
            {{jumlah}}
          </div>
          <div class="f-16 text-right">{{txtShort}}</div>
        </div>
      </div>
      <q-separator :class="`q-mt-md bg-${txtColor}`" />
      <div class="f-14 q-pt-md text-right">
          {{ txt }}
        </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { colors } from 'quasar'
const { getPaletteColor } = colors

defineProps({
  jumlah: {
    type: Number,
    default: 0
  },
  txt: {
    type: String,
    default: 'Seluruh Pegawai Aktif'
  },
  txtShort: {
    type: String,
    default: 'ALL'
  },
  color: {
    type: String,
    default: 'dark'
  },
  icon: {
    type: String,
    default: 'dashboard'
  },
  txtColor: {
    type: String,
    default: 'grey-4'
  }

})
</script>

<style lang="scss" scoped>
$bg: v-bind(getPaletteColor(color));
$txt: v-bind(getPaletteColor(txtColor));
.__anjay {
  background-color: $bg;
  color: $txt;
  .bayang {
    opacity: .06;
  }
}
</style>
