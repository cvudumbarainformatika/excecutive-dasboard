import { defineStore } from 'pinia'

import { api } from 'boot/axios'
import { useXenterAppStore } from '..'

export const useJadwal = defineStore('jadwal-xenter', {
  state: () => ({
    jadwals: [],
    error: null,
    loading: false,
    currentJadwal: null,

    libur: 0,
    masuk: 0,
    totalJam: 0,
    totalMenit: 0,
    totalJamMenit: 0
  }),
  getters: {
    getCurrentJadwal: (state) => (hari) => {
      const newJadwals = [...state.jadwals]
      if (newJadwals.length > 0) {
        return newJadwals.filter((item) => item.hari === hari || item.day === hari)
          // eslint-disable-next-line no-return-assign
          .reduce((curr, item) => curr = item, null)
      }

      return null
    }
  },
  actions: {
    async getJadwals (val) {
      console.log('jadwl loading', val)
      const app = useXenterAppStore()
      app.error = null
      val === 'loading' ? app.loading = true : app.loading = false
      try {
        const resp = await api.get('/v2/absensi/jadwal/by-user')
        console.log('jadwal by user', resp)
        this.jadwalReducer(resp?.data, app)
      } catch (error) {
        console.error(error)
        app.error = 'error response'
        app.loading = false
      }
    },
    jadwalReducer (payload, app) {
      const jadwalss = payload
      this.jadwals = jadwalss.length > 0 ? jadwalss : []
      this.error = null
      this.libur = this.jadwals.length > 0 ? this.jadwals.filter(x => x.status === '1').length : 0
      this.masuk = this.jadwals.length > 0 ? this.jadwals.filter(x => x.status === '2').length : 0
      this.totalJam = this.jadwals.length > 0 ? this.jadwals.map(x => x.status === '2' || x.status === 2 ? x.jam : 0).reduce((r, x) => r + x, 0) : 0
      this.totalMenit = this.jadwals.length > 0 ? this.jadwals.map(x => x.status === '2' || x.status === 2 ? x.menit : 0).reduce((r, x) => r + x, 0) : 0

      app.loading = false
    }
  }
})
