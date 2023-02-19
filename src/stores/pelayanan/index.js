import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const usePelayananStore = defineStore('pelayanan', {
  state: () => ({
    items: [],
    tempatTidur: 0,
    tempatTidurTersedia: 0,
    tempatTidurTerisi: 0,

    loading: false,
    params: {
      month: null,
      year: null
    }
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getData (payload) {
      // this.setParams(payload)
      const params = { params: this.params }
      await api.get('v1/dashboardexecutive/pelayanan', params)
        .then(resp => {
          console.log('pelayanan :', resp)
          if (resp.status === 200) {
            // ...
            const data = resp.data
            this.items = data.length > 0 ? data : []
            this.tempatTidur = data.length > 0 ? data.map(x => x.total).reduce((x, y) => x + y, 0) : 0
            this.tempatTidurTersedia = data.length > 0 ? data.map(x => parseInt(x.sisa)).reduce((x, y) => x + y, 0) : 0
            this.tempatTidurTerisi = data.length > 0 ? data.map(x => parseInt(x.terisi)).reduce((x, y) => x + y, 0) : 0
          }
        })
    },

    countData (data, jns) {
      if (jns === 'total') {
        return data.map(x => x.total).reduce((x, y) => x + y, 0)
      } else if (jns === 'terisi') {
        return data.map(x => x.terisi).reduce((x, y) => x + y, 0)
      } else {
        return data.map(x => x.sisa).reduce((x, y) => x + y, 0)
      }
    }

  }

})
