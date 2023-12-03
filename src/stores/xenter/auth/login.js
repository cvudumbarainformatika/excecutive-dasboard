import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import * as storage from 'src/utility/storrage'
import { useXenterAppStore } from 'src/stores/xenter/index'

export const useLoginXenterStore = defineStore('login-xenter', {
  state: () => ({
    token: storage.getLocalToken() ? storage.getLocalToken() : null,
    user: storage.getUser() ? storage.getUser() : null
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {
    async login (payload) {
      const app = useXenterAppStore()
      app.setLoading(true)
      try {
        const resp = await api.post('/v2/login', payload)
        console.log(resp)
        if (resp.status === 200) {
          storage.setUser(resp?.data?.user)
          storage.setLocalToken(resp?.data?.token)

          setTimeout(() => {
            this.user = storage.getUser()
            this.token = storage.getLocalToken()
          }, 300)

          return new Promise((resolve, reject) => {
            app.setError(null)
            app.setLoading(false)
            resolve()
          })
        } else {
          app.setLoading(false)
        }
      } catch (error) {
        console.log(error)
        app.setLoading(false)
        app.setError('Maaf Ada Kesalahan Harap Ulangi!')
      }
    },

    logout () {
      const app = useXenterAppStore()
      app.setLoading(true)
      // setTimeout(() => {
      return new Promise((resolve, reject) => {
        storage.clearStore()
        app.setLoading(false)
        resolve()
      })
      // }, 300)
      // try {
      //   await api.post('/v1/logout').then(resp => {
      //     console.log('store logout', resp)
      //     if (resp.status === 200) {
      //       return new Promise((resolve, reject) => {
      //         storage.clearStore()
      //         app.setLoading(false)
      //         resolve()
      //       })
      //     }
      //   })
      // } catch (error) {
      //   console.log(error)
      //   app.setError('Maaf Ada Kesalahan!')
      //   app.setStatus('error')
      //   app.setLoading(false)
      // }
    }

  }

})
