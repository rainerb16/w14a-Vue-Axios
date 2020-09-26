<template>
  <div id="app">
    <h1 id="title-content">Chuck Norris & Programmer Jokes... Together!</h1>
    <h3 id="subtitle-content"><i>Why? Who knows...</i></h3>
    <normal-joke v-if="showType === 'normal'" key="normal"> </normal-joke>
    <loud-joke v-else-if="showType === 'loud'" key="loud"> </loud-joke>
    <snake-joke v-else-if="showType === 'snake'" key="snake"> </snake-joke>
    <br />
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
import JokeButton from "./components/joke-button";
import LoudJoke from "./components/loud-joke";
import SnakeJoke from "./components/snake-joke";
import NormalJoke from "./components/normal-joke";
export default {
  name: "App",
  components: {
    JokeButton,
    LoudJoke,
    SnakeJoke,
    NormalJoke
  },
  computed: {
    showType: function() {
      return this.$store.state.showType;
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
