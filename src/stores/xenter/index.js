import { defineStore } from 'pinia'

export const useXenterAppStore = defineStore('xenter-app', {
  state: () => ({
    loading: false
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    setLoading () {
      this.loading = !this.loading
    }
  }
})
