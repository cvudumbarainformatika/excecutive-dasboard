<template>
  <q-card class="my-card __anjay">
    <q-card-section>
      <div class="absolute-bottom bayang">
        <q-icon :name="icon" size="200px" />
      </div>
      <div class="q-pb-sm text-right">
        <div class="f-18 text-weight-bold">{{txtShort}}</div>
        <!-- <div class="f-14">{{ txt }}</div> -->
      </div>
      <div class="row items-center justify-between">
        <q-avatar round size="60px" font-size="40px" :color="txtColor" :text-color="color" :icon="icon" />
        <div>
          <div class="text-h4 text-weight-bold">
            {{jumlah}}
          </div>
        </div>
      </div>
      <q-separator :class="`q-mt-md bg-${txtColor}`" />

        <div class="row items-center justify-between q-mt-md">
          <div class="text-pink">
            <div class="row items-center">
              <q-icon name="woman" size="sm" />
              <div class="text-weight-bold text-h5">{{jumlahP}}</div>
            </div>
            <div class="f-12">Perempuan</div>
          </div>
          <div class="text-cyan-12">
            <div class="row items-center">
              <q-icon name="man" size="sm" />
              <div class="text-weight-bold text-h5">{{jumlahL}}</div>
            </div>
            <div class="f-12 text-right">Laki-laki</div>
          </div>
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
  jumlahL: {
    type: Number,
    default: 0
  },
  jumlahP: {
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
    opacity: .05;
  }
}
</style>
