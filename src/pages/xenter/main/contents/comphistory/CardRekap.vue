<template>
  <q-card flat bordered class="br-color">
    <q-card-section class="q-px-md q-py-lg">
      <div class="row items-center justify-between">
        <q-icon :name="icon" size="30px" color="primary"></q-icon>
        <div class="q-ml-sm column flex-center justify-end">
          <div class="f-20 text-weight-bold">{{ qty }}</div>
          <div class="f-10">{{txt}}</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  qty: {
    type: [String, Number],
    default: '0'
  },
  txt: {
    type: String,
    default: 'Hadir'
  },
  icon: {
    type: String,
    default: 'home'
  }
})
</script>
<style lang="scss" scoped>
.br-color {
  border: 1px solid $primary;
  border-radius:10px;
}
</style>
