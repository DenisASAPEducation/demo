import Vue from 'vue'
import Vuex from 'vuex'
import module_a from './module_a'
import module_b from './module_b'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    module_a,
    module_b
  }
})
