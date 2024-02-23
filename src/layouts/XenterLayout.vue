<template>
  <q-layout view="hHr LpR fFr">

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>
    <q-page-container >
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

    <q-footer>
      <BottomMenu />
    </q-footer>

  </q-layout>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import BottomMenu from './xentercomp/BottomMenu.vue'

import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
// import { useXenterAppStore } from 'src/stores/xenter/index'

const transitionName = ref('')
const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)
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
