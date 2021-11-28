<template lang="pug">
  div(id="app" class="is-unselectable has-text-justified")
    main-menu(:navItems="navItems")
    template(v-for="(section, index) in sections")
      component(
        v-bind="section"
        :key="index"
    )
    my-footer(:content="getContent('footer')")
</template>

<script>
import MainMenu from '@/components/utils/Menu'
import * as Sections from '@/components'
import MyFooter from '@/components/Footer'
import { content } from '@/mixins'

const sectionstoDisplay = [
  'home',
  'services',
  'about',
  'projects',
  'contact'
]

export default {
  name: 'app',
  mixins: [content],
  components: { MainMenu, ...Sections, MyFooter },
  data: _ => ({ sectionIds: sectionstoDisplay }),
  computed: {
    sections () {
      const contents = this.getContent('sections')
      return this.sectionIds.map(key => ({
        is: key,
        content: contents[key]
      }))
    },
    navItems () { return this.sections.map(section => section.content.nav) }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/main";
</style>
