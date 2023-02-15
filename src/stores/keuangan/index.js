import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useKeuanganStore = defineStore('keuangan', {
  state: () => ({
    targetPendapatan: 0,
    realisasiPendapatan: 0,
    anggaranBelanja: 0,
    realisasiBelanja: 0,

    loading: false,
    params: {
      month: null,
      year: null
    }
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getData (payload) {
      this.setParams(payload)
      const params = { params: this.params }
      await api.get('v1/dashboardexecutive/pendapatan', params)
        .then(resp => {
          console.log(resp)
          if (resp.status === 200) {
            const data = resp.data
            const realisPend = data.penerimaan.length ? data.penerimaan[0].penerimaan : 0
            this.realisasiPendapatan = realisPend
          }
        })
    },

    setParams (payload) {
      if (payload) {
        const myArray = payload.split('-')
        this.params.month = myArray[0]
        this.params.year = myArray[1]
      }
    }

  }

})
