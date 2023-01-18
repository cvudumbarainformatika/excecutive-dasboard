import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    height: window.innerHeight,
    width: window.innerWidth
  }),
  getters: {
    txt100: (state) => state.height * 0.104, // 100px
    txt70: (state) => state.height * 0.0729, // 70px
    txt50: (state) => state.height * 0.052, // 50px
    txtH5: (state) => state.height * 0.025, // text-h5 || 1.5rem || 24 px
    txtLg: (state) => state.height * 0.01875, // 18px
    txtMd: (state) => state.height * 0.0145, // 14px
    txtSm: (state) => state.height * 0.0125, // 12px
    txtXs: (state) => state.height * 0.0104 // 10px
  },
  actions: {
    // increment () {
    //   this.counter++
    // }
  }
})
