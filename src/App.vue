<template>
  <router-view />
</template>

<script setup>
import { useAppStore } from 'src/stores/app/index'
import { useQuasar } from 'quasar'
import { computed } from 'vue'

// INI DARI HEIGHT 800px
const store = useAppStore()
const $q = useQuasar()
$q.dark.set(true)

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

.w-100 {
  width: v-bind(txt100)
}
.w-md {
  width: v-bind(txtMd);
}

.container {
  padding-left: 5%;
  padding-right: 10%;
}

.frame-dark {
  border-radius:20px;
  background-color: $dark;
  height:90vh;
  width:95vw;
  overflow: hidden;
}

.my-card {
  border-radius:10px;
}
.my-card-dark {
  border-radius:10px;
  background: rgb(60,63,69);
  background: linear-gradient(180deg, rgba(60,63,69,1) 0%, rgba(51,56,62,1) 50%, rgba(45,48,56,1) 100%);
}
</style>
