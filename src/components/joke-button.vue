<template>
  <div>
    <button id="button" @click="getJoke">Get New Joke</button>
    <br />
    <br />
    <button id="button" @click="getNormalJoke">Make it Normal</button>
    <button id="button" @click="getLoudJoke">Make it Loud</button>
    <button id="button" @click="getSnakeJoke">Make it Snake</button>
  </div>
</template>

<script>
export default {
  name: "joke-button",
  methods: {
    getJoke() {
      this.$store.commit("getJoke");
    },
    getNormalJoke() {
      this.$store.commit("normalJoke");
    },
    getLoudJoke() {
      this.$store.commit("loudJoke");
    },
    getSnakeJoke() {
      this.$store.commit("snakeJoke");
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
  margin: 1vw;
  border-radius: 10%;
}
</style>
