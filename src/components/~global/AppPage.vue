<template>
  <q-page class="page absolute-top fit bg-grey-4 shadow-4">
    <app-loadingxenter v-show="app.loading" />
    <AppErrorXenter v-if="!app.loading && app.error !== null"
      :msg="app.error"
      :status="app.status"
      @ok="app.setError(null)"
    />
    <div v-else class="page-effect column absolute-top fit shadow-4"
      :class="{'effect-left': hasActiveChildPage}"
    >
      <!-- head -->
      <div class="page-header col-auto">
        <slot name="header" />
      </div>
      <!-- content -->
      <div class="col full-height relative-position">
        <div class="absolute full-height full-width scroll">
          <slot name="content"/>
          <div style="padding-bottom: 100px;"></div>

        </div>
      </div>
    </div>
    <router-view
        v-slot="{ Component }"
        class="transition"
      >
        <transition
          appear
          enter-active-class="animated slideInRight"
          leave-active-class="animated slideOutRight"
        >
        <keep-alive>
          <component
            @page-activated="hasActiveChildPage=true"
            @page-deactivated="hasActiveChildPage=false"
            :is="Component"
          />
        </keep-alive>
        </transition>
      </router-view>
  </q-page>
</template>

<script setup>
// import { useLoginXenterStore } from 'src/stores/xenter/auth/login'
import { onActivated, onDeactivated, onMounted, ref } from 'vue'
// import { useRoute } from 'vue-router'
import { useXenterAppStore } from 'src/stores/xenter'

const app = useXenterAppStore()
// const route = useRoute()

const hasActiveChildPage = ref(false)
const emits = defineEmits(['pageActivated', 'pageDeactivated'])

onMounted(() => {
  // console.log('app-page', router)
})

onActivated(() => {
  console.log('activated')
  emits('pageActivated')
})

onDeactivated(() => {
  console.log('not active')
  emits('pageDeactivated')
})

</script>
