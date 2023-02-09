<template>
  <q-card rounded class="card__w">
    <div class="columns q-py-xs q-px-md">
      <div class="text-grey-7">Periode bulan</div>
      <div class="row items-center">
        <q-icon name="event" size="sm" class="q-mr-sm" color="primary" />
        <div> Februari 2023</div>
      </div>
    </div>
  </q-card>
</template>

<script setup>

defineProps({
  pointer: {
    type: String,
    default: 'pointer'
  }
})

</script>

<style lang="scss" scoped>

$p: v-bind(pointer);
.card__w {
  min-width: 200px;
  cursor: $p;
}
</style>
