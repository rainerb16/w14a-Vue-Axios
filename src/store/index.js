import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Joke: ""
  },
  mutations: {
    updateJoke: function(state, data) {
      state.joke = data;
    }
  },
  getters: {
    normalJoke: function(state) {
      return state.data.joke;
    }
  },
  modules: {}
});
