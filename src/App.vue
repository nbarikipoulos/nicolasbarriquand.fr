<template lang="pug">
div(
  id="app"
  class="is-unselectable has-text-justified"
)
  my-menu(:nav-items="navItems")
  my-section(
    v-for="part in parts"
    :key="part.id"
    :header="part.header"
    :id="part.nav.anchor"
  )
    template(#default)
      component(
        :is="part.is"
        :content="part.content"
      )
  my-footer(:content="json.footer")
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import MyMenu from '@/components/Menu.vue'
import { Section as MySection } from '@/components/utils'
import { Home, About, Projects, Contact } from '@/components/parts'
import MyFooter from '@/components/Footer.vue'

import json from '@/data/data.json'

const f = (id, is, navLabel, hasHeader = true) => ({
  id,
  is,
  header: {
    hide: !hasHeader,
    title: json.sections[id].title,
    subtitle: json.sections[id].subtitle
  },
  content: json.sections[id],
  nav: { label: navLabel, anchor: id }
})

const parts = [
  ['home', Home, 'Home', false],
  ['about', About, 'About'],
  ['projects', Projects, 'Projects'],
  ['contact', Contact, 'Contact']
].map(d => f(...d))

const navItems = parts.map(item => item.nav)

</script>

<style lang="scss">
  @import "@/assets/styles/main";
</style>
