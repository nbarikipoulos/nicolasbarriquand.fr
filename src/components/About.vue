<template lang="pug">
  section(class="")
    div(class='container')
      p {{ getText('hero.pre.title') }}
      h1(class='title is-1') XXXX
      p bla bla bla bla
</template>
<script>
export default {
  name: 'About',
  props: { data: {} },
  methods: {
    getText (id) { return this.data.text[id] }
  }
}
</script>
