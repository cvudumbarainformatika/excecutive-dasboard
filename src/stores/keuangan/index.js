import { defineStore } from 'pinia'
// import { api } from 'src/boot/axios'

export const useKeuanganStore = defineStore('keuangan', {
  state: () => ({
    targetPendapatan: 0,
    realisasiPendapatan: 0,
    anggaranBelanja: 0,
    realisasiBelanja: 0,

    loading: false
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getData () {
      await api.get('v1/')
    }
  }
})
