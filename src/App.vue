<template lang="pug">
  div(id="app")
    Home(:data="getSectionData('home')")
    About(:data="getSectionData('about')")
</template>

<script>

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'

import json from '@/data/data.json'

export default {
  name: 'app',
  components: {
    Home,
    About
  },
  data () { return { data: json } },
  methods: {
    getSectionData (name) { return json.sections[name] }
  }
}
</script>

<style lang="scss">
  @charset "utf-8";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
    margin: 5px;
  }

  $primary: hsl(217, 71%, 53%); //rgb(36, 9, 9);

  @import "~bulma/sass/utilities/_all";
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  @import "@/sass/my.sass"

</style>
