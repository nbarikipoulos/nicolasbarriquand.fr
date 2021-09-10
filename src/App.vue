<template lang="pug">
  div(id="app" class="is-unselectable has-text-justified")
    nav(class="navbar is-fixed-top has-background-primary" id="nav")
      a(
        role="button"
        class="navbar-burger"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
        ref="burger"
        @click='toggleBurgerMenu()'
      )
        span(class="has-text-white" aria-hidden="true")
        span(class="has-text-white" aria-hidden="true")
        span(class="has-text-white" aria-hidden="true")
      div(
        class="navbar-menu has-background-primary"
        role="navigation"
        arial-label="main navigation"
        ref="navMenu"
      )
        div(class="navbar-end")
          div(
            v-for="(item, index) in navItems"
            :key="index"
            class="navbar-item"
            v-scroll-to="scroll(item, index)"
            @click="toggleBurgerMenu()"
          )
            a(class="has-text-white") {{ item['label'] }}

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
  'services',
  'about',
  'projects',
  'contact'
]

export default {
  name: 'app',
  mixins: [content],
  components: { ...Sections, MyFooter },
  data: _ => ({
    sectionIds: sectionstoDisplay
  }),
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
    },
    toggleBurgerMenu () {
      ['burger', 'navMenu'].forEach(el => this.$refs[el].classList.toggle('is-active'))
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/main";
</style>
