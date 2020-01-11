<template lang="pug">
  div(id="app")
    b-navbar(type="is-primary" fixed-top)
      template(slot="end")
        b-navbar-item(
          v-for="item in getNavItems()"
          :href="'#' + item['anchor']"
        ) {{ item['item.name'] }}
    Home(:data="getSectionData('home')")
    About(:data="getSectionData('about')")
    Services(:data="getSectionData('services')")
    Projects(:data="getSectionData('projects')")
    Contact(:data="getSectionData('contact')")
    Footer(:data="data['footer']")
</template>

<script>

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

import json from '@/data/data.json'

export default {
  name: 'app',
  components: {
    Home,
    About,
    Services,
    Projects,
    Contact,
    Footer
  },
  data () { return { data: json } },
  methods: {
    getSectionData (name) { return json.sections[name] },
    getNavItems () {
      const sections = this.data.sections
      return Object.keys(sections)
        .map(key => sections[key].nav)
        .filter(elt => undefined !== elt)
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/my.scss";

  @import "~bulma/sass/utilities/_all";
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  @import "@/assets/styles/my.sass";
</style>
