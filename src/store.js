import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state.js'
import mutations from './store/mutations'

Vue.use(Vuex)


export default new Vuex.Store({
  state,
  mutations,
  actions: {
    changeCity:({commit},city)=>{
      commit('changeCity',city)
    }
  }
})
