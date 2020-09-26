<template>
  <div id="app">
    <h1 id="title-content">Chuck Norris & Programmer Jokes... Together!</h1>
    <h3 id="subtitle-content"><i>Why? Who knows...</i></h3>
    <br />
    <normal-joke
      v-if="showJoke === 'normalJoke'"
      key="normalJoke"
    ></normal-joke>
    <snake-joke
      v-else-if="showJoke === 'snakeJoke'"
      key="snakeJoke"
    ></snake-joke>
    <loud-joke v-else-if="showJoke === 'loudJoke'" key="loudJoke"></loud-joke>
    <br />
    <joke-button />
    <br />
    <br />
    <img
      src="https://i.pinimg.com/736x/03/54/c3/0354c36aed8a696ab7379c0133914737--chuck-norris-facts-funny-posts.jpg"
      alt="Chuck Norris Programmer"
    />
  </div>
</template>

<script>
import NormalJoke from "./components/normal-joke.vue";
import LoudJoke from "./components/loud-joke.vue";
import SnakeJoke from "./components/snake-joke.vue";
import JokeButton from "./components/joke-button.vue";

export default {
  name: "App",
  components: {
    NormalJoke,
    LoudJoke,
    SnakeJoke,
    JokeButton
  },
  computed: {
    showJoke: function() {
      return this.$store.state.showJoke;
    }
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
img {
  width: 30%;
  border-radius: 7%;
}
#title-content {
  text-decoration: underline;
}
</style>
