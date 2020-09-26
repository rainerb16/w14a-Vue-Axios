<template>
  <div>
    <joke-main />
    <joke-button>{{ joke }}</joke-button>
  </div>
</template>

<script>
import JokeMain from "./joke.vue";
import JokeButton from "./joke-button.vue";

export default {
  name: "normal-joke",
  components: {
    JokeMain,
    JokeButton
  },
  data() {
    return {
      joke: this.$store.state.joke
    };
  }
};
</script>

<style scoped></style>
