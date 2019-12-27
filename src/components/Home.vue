<template lang="pug">
  section(
    class="hero is-primary is-fullheight is-fullheight-with-navbar"
  )
    div(class='hero-body')
      div(class='container')
        p {{ getText('hero.pre.title') }}
        h1(class='title is-1') {{ getText('hero.title') }}
        h2(class='subtitle is-3') {{ getText('hero.subtitle') }}
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
