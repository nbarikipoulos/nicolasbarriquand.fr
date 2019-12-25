<template>
  <div id="app">
    <Main msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Main from '@/components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style lang="scss">
  @charset "utf-8";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 5px;
  }

  // @import "~bulma/sass/utilities/_all";
  // @import "~bulma";
  // @import "~buefy/src/scss/buefy";

</style>
