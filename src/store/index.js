import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: [],
    berita: []
  },
  mutations: {
    GET_PROFILE (state, data) {
      state.profile = data[0]
    },
    GET_BERITA (state, data) {
      state.berita = data
    }
  },
  actions: {
    getApi ({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.get(`${process.env.VUE_APP_API}${proto.url}`, proto.headers)
          .then((res) => {
            commit(proto.mutation, res.data)
            resolve(res.data)
            console.log(res.data)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    },
    postApi ({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.post(`${process.env.VUE_APP_API}${proto.url}`, proto.data, proto.headers)
          .then((res) => {
            commit(proto.mutation, res.data)
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    },
    patchApi ({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.patch(`${process.env.VUE_APP_API}${proto.url}`, proto.data)
          .then((res) => {
            commit(proto.mutation, res.data)
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    },
    // eslint-disable-next-line no-unused-vars
    deleteApi ({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.delete(`${process.env.VUE_APP_API}${proto.url}`, proto.data)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    }
  },
  modules: {
  }
})
