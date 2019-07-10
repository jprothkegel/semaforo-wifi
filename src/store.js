import Vue from 'vue'
import Vuex from 'vuex'
import {ApList} from './apList'
import { axiosConfig } from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ApList: ApList,
    loading: false,
    theming: 'dark'
  },
  mutations: {
    setLoading(state, payload){
      state.loading = payload
    },
    setTheming(state, payload){
      state.theming = payload
    }
  },
  actions: {
    getAPIdList({commit}, mac){
      return new Promise((resolve, reject) => {
        commit('setLoading', true)
        axiosConfig.post('/aps',{data:{macAddress: mac.apiQuery, name: mac.name}})
        .then(resp => {
          commit('setLoading', false)
          resolve(resp.data)
        })
        .catch(err => {
          commit('setLoading', false)
          reject(err)
        })
      })
    },
    setLightTheme({commit}){
      commit('setTheming', 'light')
    },
    setDarkTheme({commit}){
      commit('setTheming' , 'dark')
    }
  },
  getters: {
    loading: state => state.loading,
    theming: state => state.theming
  }
})
