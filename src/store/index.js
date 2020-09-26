import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: "",
    showType: "normal"
  },
  getters: {
    loudJoke: function(state) {
      return state.joke.toUpperCase();
    },
    snakeJoke: function(state) {
      return state.joke.replaceAll(" ", "_");
    },
    normalJoke: function(state) {
      return state.joke;
    }
  },
  mutations: {
    updateJoke: function(state, data) {
      state.joke = data;
    },
    updateJokeType: function(state, type) {
      state.showType = type;
    }
  },
  actions: {},
  modules: {}
});
