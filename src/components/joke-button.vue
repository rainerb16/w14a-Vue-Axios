<template>
  <div>
    <h4>{{ joke }}</h4>
    <button id="button" @click="getJoke">Get Joke</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "joke-button",
  data() {
    return {
      joke: ""
    };
  },
  methods: {
    getJoke: function() {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "GET"
        })
        .then(response => {
          this.joke = response.data.joke;
        })
        .catch(error => {
          console.log(error);
          this.joke = "There was an Error";
        });
      // this.$store.commit("updateJoke");
    }
  }
};
</script>

<style scoped>
#button {
  border: 1px solid black;
  padding: 10px;
  background-color: maroon;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
