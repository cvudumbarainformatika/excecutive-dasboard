import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useKepegawaianStore = defineStore('kepegawaian', {
  state: () => ({
    kategoriPegawai: [],
    statusPegawai: [],
    colorize: [
      { id: 'PNS', color: 'info', txtColor: 'dark' },
      { id: 'PTT', color: 'accent', txtColor: 'white' },
      { id: 'PT', color: 'blue-4', txtColor: 'dark' },
      { id: 'HonDa', color: 'light-green-10', txtColor: 'white' },
      { id: 'CPNS', color: 'lime-10', txtColor: 'white' },
      { id: 'MoU', color: 'primary', txtColor: 'white' },
      { id: 'PPPK', color: 'blue-grey', txtColor: 'white' },
      { id: 'ALL', color: 'dark', txtColor: 'white' }
    ],

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
      this.setParams(payload)
      const params = { params: this.params }
      await api.get('v1/dashboardexecutive/kepegawaian', params)
        .then(resp => {
          console.log('kepegawaian :', resp)
          if (resp.status === 200) {
            const data = resp.data
            this.kategoriPegawai = data.kategori_pegawai.length ? data.kategori_pegawai : []
            this.statusPegawai = data.status_pegawai.length ? data.status_pegawai : []
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
