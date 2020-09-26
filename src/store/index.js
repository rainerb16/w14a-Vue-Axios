import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: ""
  },
  mutations: {
    updateJoke: function(state, joke) {
      state.joke = joke;
    }
  },
  actions: {},
  modules: {}
});
