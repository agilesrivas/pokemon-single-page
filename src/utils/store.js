import Vue from 'vue'
import Vuex from 'vuex'
import PokeApi from '../services/PokeApi';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    poke:[]
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    removeToken(state) {
      state.token = null;
    },
    setPoke(state, poke) {
      state.poke = poke;
    }
  },
  actions: {
   
  },
  getters: {
      getPoke:(state)=>{
        return state.poke;
      }
  }
})