<template>
  <q-layout view="lHh Lpr lff">

    <q-page-container  class="bg-primary">
      <router-view
          v-slot="{ Component }"
          class="transition"
        >
        <transition
            :name="transitionName" v-on:before-enter="debug" v-on:before-leave="debug"
          >
            <component :is="Component" />
          </transition>
        </router-view>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
// import { useXenterAppStore } from 'src/stores/xenter/index'

const transitionName = ref('')

// const app = useXenterAppStore()

function debug (data) {
  // debugger
  // console.log(data)
}

onBeforeRouteUpdate((to, from) => {
  console.log('to', to.meta.page)
  console.log('from', from.meta.page)
  transitionName.value = to.meta.page > from.meta.page ? 'next' : 'prev'
})
</script>

<style lang="scss">

/* Transitions */

.next-leave-to {
  animation: leaveToLeft 300ms both cubic-bezier(0.65, 0.84, 0.44, 1);
  z-index: 0;
}

.next-enter-to {
  animation: enterFromRight 300ms both cubic-bezier(0.65, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-leave-to {
  animation: leaveToRight 300ms both cubic-bezier(0.65, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-enter-to {
  animation: enterFromLeft 300ms both cubic-bezier(0.65, 0.84, 0.44, 1);
  z-index: 0;
}

@keyframes leaveToLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-75%);
    filter: brightness(0.3);
  }
}

@keyframes enterFromLeft {
  from {
    transform: translateX(-75%);
    filter: brightness(0.3);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leaveToRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes enterFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
