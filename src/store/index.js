import Vue from 'vue';
import Vuex from 'vuex';
import menuNavStore from './modules/menuNavStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    menuNavStore,
  },
});
