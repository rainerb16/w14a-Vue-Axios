<template>
  <div></div>
</template>

<script>
export default {
  name: "joke",

  // props: {
  //   joke: {
  //     type: String,
  //     required: true
  //   }
  // },
  data: function() {
    return {
      normalJoke: this.$store.state.joke
    };
  }
};
</script>

<style scoped></style>
