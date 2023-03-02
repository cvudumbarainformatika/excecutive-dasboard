<template>
  <q-page padding class="flex flex-center items-center bg-grey-2">
    <div style="width:50%">
      <app-kiosk v-model="model" />
      <!-- <input ref="inp" class="js-kioskboard-input" data-kioskboard-type="keyboard" data-kioskboard-placement="bottom" data-kioskboard-specialcharacters="false" placeholder="Your Name" /> -->
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const model = ref(null)

</script>
