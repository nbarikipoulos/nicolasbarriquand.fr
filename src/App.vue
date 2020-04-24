<template lang="pug">
  div(id="app" class="is-unselectable")
    b-navbar(type="is-black" fixed-top)
      template(slot="end")
        b-navbar-item(
          v-for="(item, index) in getNavItems()"
          class="has-text-primary"
          :href="'#' + item['anchor']"
          :key="index"
        ) {{ item['item.name'] }}
    template(v-for="(elt, index) in getComps()")
      component(
        :is="elt.comp"
        :data="elt.data"
        :key="index"
    )
</template>

<script>
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

import json from '@/data/data.json'

const components = {
  Home, About, Services, Projects, Contact, Footer
}

export default {
  name: 'app',
  components,
  data () { return { data: json } },
  methods: {
    getComps () {
      return Object.keys(components).map(comp => ({
        comp,
        data: json.sections[
          comp.toString().toLowerCase() // arf...
        ]
      }))
    },
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
  @import "@/assets/styles/main";
</style>
