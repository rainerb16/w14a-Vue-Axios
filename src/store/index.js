import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: "",
    showJoke: ""
  },
  mutations: {
    getJoke: function(state) {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          methods: "GET"
        })
        .then(response => {
          state.joke = response.data.joke;
        })
        .catch(error => {
          console.log(error);
          this.joke = "There was an Error";
        });
    },
    loudJoke: function(state) {
      state.showJoke = "loudJoke";
    },
    normalJoke: function(state) {
      state.showJoke = "normalJoke";
    },
    snakeJoke: function(state) {
      state.showJoke = "snakeJoke";
    }
  },
  actions: {},
  modules: {},
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
  }
});
