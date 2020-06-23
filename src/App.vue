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
  data: _ => ({ sections: sectionstoDisplay }),
  methods: {
    getComponentData () {
      return this.sections.map(key => ({
        name: key,
        data: this.getContent('sections', key)
      }))
    },
    getNavItems () {
      return this.sections
        .map(key => this.getContent('sections', key).nav)
        .filter(elt => undefined !== elt)
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/main";
</style>
