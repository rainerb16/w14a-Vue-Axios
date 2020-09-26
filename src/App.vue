<template>
  <div id="app">
    <h1 id="title-content">Chuck Norris & Programmer Jokes... Together!</h1>
    <h3 id="subtitle-content">Why? Who knows...</h3>
    <br />
    <joke-button />
  </div>
</template>

<script>
import JokeButton from "./components/joke-button.vue";
// import NormalJoke from "./components/normal-joke";

export default {
  name: "App",
  components: {
    JokeButton
    // NormalJoke
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
