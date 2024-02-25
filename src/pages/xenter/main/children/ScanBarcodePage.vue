<template>
  <app-page>
    <template #header>
      opo
    </template>
    <template #content>
      Content Scan
      <q-btn label="back" to="/main" ></q-btn>
    </template>
  </app-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router)

</script>
