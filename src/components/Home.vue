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
            b-icon(class="fa-li" pack="fa" icon="chevron-circle-right" type="is-icon")
            span {{ line }}
</template>
<script>
export default {
  name: 'Home',
  props: { data: {} },
  methods: {
    getText (id) { return this.data.text[id] }
  }
}
</script>
