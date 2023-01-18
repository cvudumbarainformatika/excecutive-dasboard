<template>
  <q-card class="my-card shadow-4">
    <div class="pa-lg">
      <div class="row items-center q-col-gutter-sm">
        <div>
          <q-btn dense flat round icon="lens" :size="`${app.txtMd}px`" color="primary" />
        </div>
        <div class="txt-h5 text-weight-bold">Dashgroup</div>
      </div>
      <div class="txt-sm text-grey">Kumpulan Dashboard Executive</div>
    </div>

    <!-- menu -->
    <q-list bordered class="rounded-borders q-pb-lg">

      <q-item
        clickable
        v-ripple
        v-for="(item , i) in menus" :key=i
        dense
        style="padding: 0px !important"
        @click="selected = item.nama"
        :active="selected === item.nama"
        active-class="my-menu-link"
      >
        <div class="row items-center">
          <div>
            <app-lottie :url="item.anim" :height="50" :color="selected === item.nama ? 'white':null" />
          </div>
          <div class="q-ml-xs">{{item.nama}}</div>
        </div>
      </q-item>

    </q-list>
  </q-card>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'

const app = useAppStore()
const selected = ref('Keuangan')

const menus = ref([
  { nama: 'Keuangan', anim: '122832-wallet.json', active: false },
  { nama: 'SDM', anim: '121627-shaking-people.json', active: false },
  { nama: 'Layanan', anim: '122832-wallet.json', active: false },
  { nama: 'Sarpras', anim: '122832-wallet.json', active: false }
])

</script>

<style lang="scss" scoped>
.my-card {
  border-radius:10px;
}

.my-menu-link{
  // color: white;
  background: $secondary;
}
</style>
