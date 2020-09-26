<template>
  <div id="grid">
    <button class="button" @click="getJoke">Get Joke</button>
    <div></div>
    <button class="button" @click="updateType('loud')">Make it Loud</button>
    <button class="button" @click="updateType('snake')">Make it Snake</button>
    <button class="button" @click="updateType('normal')">Make it Normal</button>
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "joke-button",

  methods: {
    getJoke: function() {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "GET"
        })
        .then(response => {
          console.log(response);
          this.$store.commit("updateJoke", response.data.joke);
        })
        .catch(error => {
          console.log(error);
          this.joke = "Something went wrong!";
        });
    },
    updateType: function(type) {
      this.$store.commit("updateJokeType", type);
    }
  }
};
</script>

<style scoped>
.button {
  border: 1px solid black;
  padding: 10px;
  background-color: maroon;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin: 1vw;
  border-radius: 10%;
}
</style>
