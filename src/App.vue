<template>
  <router-view />
</template>

<script setup>
import { useAppStore } from 'src/stores/app/index'
import { computed } from 'vue'

// INI DARI HEIGHT 800px
const store = useAppStore()

const txt50 = computed(() => store.txt50 + 'px')
const txt100 = computed(() => store.txt100 + 'px')
// const txtH5 = computed(() => store.txtH5+ 'px')
const txtLg = computed(() => store.txtLg + 'px')
const txtMd = computed(() => store.txtMd + 'px')
const txtSm = computed(() => store.txtSm + 'px')
const txtXs = computed(() => store.txtXs + 'px')

console.log('app:', store.height)
</script>

<style lang="scss">

$sizes: (
  "lg": v-bind(txtLg),
  "md": v-bind(txtMd),
  "sm": v-bind(txtSm),
  "xs": v-bind(txtXs)
  );

@each $name, $size in $sizes {
  .txt-#{$name} {
      font-size: #{$size} !important;
  }

  .pb-#{$name} {
      padding-bottom: #{$size};
  }
  .pt-#{$name} {
      padding-top: #{$size}px;
  }
  .pa-#{$name} {
      padding: #{$size}px;
  }
  .px-#{$name} {
      padding-left: #{$size}px;
      padding-right: #{$size}px;
  }
  .py-#{$name} {
      padding-top: #{$size}px;
      padding-bottom: #{$size}px;
  }
  .mb-#{$name} {
      margin-bottom: #{$size}px !important;
  }
  .mt-#{$name} {
      margin-top: #{$size}px !important;
  }
  .ma-#{$name} {
      margin: #{$size}px !important;
  }
  .mx-#{$name} {
      margin-left: #{$size}px !important;
      margin-right: #{$size}px !important;
  }
  .my-#{$name} {
      margin-top: #{$size}px !important;
      margin-bottom: #{$size}px !important;
  }
}

.txt-50 {
  font-size:v-bind(txt50);
}
.txt-100 {
  font-size:v-bind(txt100);
}

.container {
  padding-left: 5%;
  padding-right: 10%;
}

</style>
