import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    height: window.innerHeight,
    width: window.innerWidth
  }),
  getters: {
    txt50: (state) => state.height * 0.0875, // 50px
    txt100: (state) => state.height * 0.125, // 100px
    txtH5: (state) => state.height * 0.03, // text-h5 || 1.5rem || 24 px
    txtLg: (state) => state.height * 0.0225, // 18px
    txtMd: (state) => state.height * 0.0175, // 14px
    txtSm: (state) => state.height * 0.015, // 12px
    txtXs: (state) => state.height * 0.0125 // 10px
  },
  actions: {
    // increment () {
    //   this.counter++
    // }
  }
})
