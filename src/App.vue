<template lang="pug">
  div(id="app" class="is-family-monospace is-size-5-desktop is-unselectable has-text-justified")
    b-navbar(type="is-primary" fixed-top)
      template(slot="end")
        b-navbar-item(
          v-for="(item, index) in getNavItems()"
          :href="`#${item['anchor']}`"
          :key="index"
        ) {{ item['label'] }}
    template(v-for="(component, index) in getComponentData()")
      component(
        :is="component.name"
        :content="component.data"
        :key="index"
    )
    my-footer(:content="data.footer")
</template>

<script>
'use strict'

import * as Sections from '@/components/sections'
import MyFooter from '@/components/Footer'

import json from '@/data/data.json'

const sectionstoDisplay = [
  'home',
  'about',
  'services',
  'projects',
  'contact'
]

export default {
  name: 'app',
  components: { ...Sections, MyFooter },
  data: _ => ({ data: json, sections: sectionstoDisplay }),
  methods: {
    getComponentData () {
      return this.sections.map(key => ({
        name: key,
        data: json.sections[key]
      }))
    },
    getNavItems () {
      return this.sections
        .map(key => this.data.sections[key].nav)
        .filter(elt => undefined !== elt)
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/main";
</style>
