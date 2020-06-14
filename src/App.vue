<template lang="pug">
  div(id="app" class="is-family-monospace is-size-5-desktop is-unselectable has-text-justified")
    b-navbar(type="is-primary" fixed-top)
      template(slot="end")
        b-navbar-item(
          v-for="(item, index) in getNavItems()"
          :href="`#${item['anchor']}`"
          :key="index"
        ) {{ item['label'] }}
    template(v-for="(elt, index) in getComps()")
      component(
        :is="elt.comp"
        :content="elt.data"
        :key="index"
    )
</template>

<script>
'use strict'

import * as Sections from '@/components/sections'
import Footer from '@/components/Footer'

import json from '@/data/data.json'

const components = { ...Sections, Footer }

export default {
  name: 'app',
  components,
  data: _ => ({ data: json }),
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
