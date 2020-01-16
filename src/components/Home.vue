<template lang="pug">
  section(
    class="hero is-small is-white"
  )
    div(class="hero-body")
      div(class="container")
        p {{ getText('hero.pre.title') }}
        h1(class="title is-2") {{ getText('hero.title') }}
        h2(class="subtitle is-3") {{ getText('hero.subtitle') }}
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
