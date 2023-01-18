<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <Vue3Lottie
      ref="anim"
      :animationLink="getJson()"
      :height="height"
      :width="height"
      direction="alternate"
    />
  </div>
</template>
<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import { watch, ref } from 'vue'

// import preview from 'src/assets/lottie/123408-image-not-preview.json'

const props = defineProps({
  url: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  },
  height: {
    type: Number,
    default: 50
  }
})

const anim = ref(null)
function getJson () {
  const file = props.url
  if (file === null || file === 'undefined' || file === undefined || file === '') {
    return new URL('../../assets/lottie/123408-image-not-preview.json', import.meta.url).href
  } else {
    return new URL('../../assets/lottie/' + file, import.meta.url).href
  }
}

console.log('anima lottie: ', anim)

watch(() => props.color, (obj) => {
  getJson()
  // changeColor()
})

// function changeColor () {
//   anim.value.updateDocumentData({ t: 'new text', s: 20 }, 0)
// }

</script>
