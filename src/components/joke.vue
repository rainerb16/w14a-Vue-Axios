<template>
  <div></div>
</template>

<script>
export default {
  name: "joke-main",

  props: {
    joke: {
      type: String
    }
  },
  methods: {
    getNewJoke: function() {
      this.$root.$commit("getNewJoke", this.joke);
    }
  }
  // data: function() {
  //   return {
  //     normalJoke: this.$store.state.joke
  //   };
  // }
};
</script>

<style scoped></style>
