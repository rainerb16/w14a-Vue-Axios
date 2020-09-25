<template>
  <div>
    <joke-main />
    <h4>{{ requestNewJoke.joke }}</h4>
  </div>
</template>

<script>
import JokeMain from "./joke.vue";
export default {
  name: "normal-joke",
  components: {
    JokeMain
  },
  // computed: function() {
  //     return this.$store.getters.joke;
  //   }
  // },
  // data: function() {
  //   return {
  //     normalJoke: this.$store.state.joke
  //   };
  // }
  methods: {
    requestNewJoke() {
      this.$store.commit("joke", this.joke);
    }
  }
};
</script>

<style scoped></style>
