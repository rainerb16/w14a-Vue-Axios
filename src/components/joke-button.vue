<template>
  <div>
    <div id="button" @click="requestNewJoke">Get Joke</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "joke-button",
  methods: {
    requestNewJoke: function() {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "GET"
        })
        .then(result => {
          console.log(result);
          this.joke = result.data.joke;
        })
        .catch(error => {
          console.log(error);
        }),
        this.$store.commit("updateJoke", this.joke);
    }
  }
};
</script>

<style scoped>
#button {
  border: 1px solid black;
  width: 10%;
  margin-left: 45%;
  padding: 5px;
  background-color: maroon;
  color: white;
  font-weight: bold;
}
</style>
