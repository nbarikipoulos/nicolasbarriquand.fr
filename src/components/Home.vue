<template lang="pug">
  section(:id="data.nav['anchor']")
    div(class="hero is-small is-primary")
      div(class="hero-body")
        div(class="container has-text-left")
          p(class="has-text-primary-white") {{ getText('hero.pre.title') }}
          h1(class="title is-2 has-text-primary-white") {{ getText('hero.title') }}
          h2(class="subtitle is-3 has-text-primary-white") {{ getText('hero.subtitle') }}
    div(class="section")
      div(class="container box")
        ul(class="fa-ul")
          li(
            v-for="line in getText('intro')"
          )
            span
              ext-b-icon(class="fa-li" ico="chevron-circle")
              span {{ line }}
</template>

<script>
import section from '@/mixins/section'

export default {
  name: 'Home',
  mixins: [section],
  props: { data: {} },
  methods: {
    getText (id) { return this.data.text[id] }
  }
}
</script>
