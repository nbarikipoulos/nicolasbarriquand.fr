<template lang="pug">
  div(id="app" class="is-family-monospace is-size-5-desktop is-unselectable has-text-justified")
    b-navbar(type="is-primary" fixed-top)
      template(slot="end")
        b-navbar-item(
          v-for="(item, index) in navItems"
          :key="index"
          v-scroll-to="scroll(item, index)"
        ) {{ item['label'] }}
    template(v-for="(section, index) in sections")
      component(
        v-bind="section"
        :key="index"
    )
    my-footer(:content="getContent('footer')")
</template>

<script>
import * as Sections from '@/components'
import MyFooter from '@/components/Footer'
import { content } from '@/mixins'

const sectionstoDisplay = [
  'home',
  'about',
  'services',
  'projects',
  'contact'
]

export default {
  name: 'app',
  mixins: [content],
  components: { ...Sections, MyFooter },
  data: _ => ({ sectionIds: sectionstoDisplay }),
  computed: {
    sectionContent () { return this.getContent('sections') },
    sections () {
      return this.sectionIds.map(key => ({
        is: key,
        content: this.sectionContent[key]
      }))
    },
    navItems () {
      return this.sectionIds
        .map(key => this.sectionContent[key].nav)
        .filter(elt => undefined !== elt)
    }
  },
  methods: {
    scroll (item, index) {
      return {
        el: `#${item.anchor}`,
        offset: index ? -10 : -100
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/main";
</style>
