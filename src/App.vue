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
const txtH5 = computed(() => store.txtH5 + 'px')
const txtLg = computed(() => store.txtLg + 'px')
const txtMd = computed(() => store.txtMd + 'px')
const txtSm = computed(() => store.txtSm + 'px')
const txtXs = computed(() => store.txtXs + 'px')

console.log('app:', store.height)
</script>

<style lang="scss">

$sizes: (
  "h5": v-bind(txtH5),
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
      padding-top: #{$size};
  }
  .pa-#{$name} {
      padding: #{$size};
  }
  .px-#{$name} {
      padding-left: #{$size};
      padding-right: #{$size};
  }
  .py-#{$name} {
      padding-top: #{$size};
      padding-bottom: #{$size};
  }
  .mb-#{$name} {
      margin-bottom: #{$size} !important;
  }
  .mt-#{$name} {
      margin-top: #{$size} !important;
  }
  .ma-#{$name} {
      margin: #{$size} !important;
  }
  .mx-#{$name} {
      margin-left: #{$size} !important;
      margin-right: #{$size} !important;
  }
  .my-#{$name} {
      margin-top: #{$size} !important;
      margin-bottom: #{$size} !important;
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
