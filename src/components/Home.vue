<template lang="pug">
  section(
    class="hero is-small is-primary"
  )
    div(class="hero-body")
      div(class="container")
        p(class="has-text-primary-white") {{ getText('hero.pre.title') }}
        h1(class="title is-2 has-text-primary-white") {{ getText('hero.title') }}
        h2(class="subtitle is-3 has-text-primary-white") {{ getText('hero.subtitle') }}
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
