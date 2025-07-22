<template>
  <q-page class="column flex-center items-center fullscreen text-white" :style="backgroundStyle">
    <div class="full-width q-pa-sm text-center">
      <text-anim :height="100" txt="Dashboard Executive" />
      <text-anim :height="100" />
      <div class="text-h3">KOTA PROBOLINGGO</div>
    </div>
    <q-btn color="secondary" :to="{ path: '/kepegawaian' }">Get Started</q-btn>
  </q-page>
</template>

<script setup>
import TextAnim from './TextAnim.vue'
import bgImage from 'assets/images/background.jpg' // ✅ FIX

const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}
console.log('splash')
</script>
