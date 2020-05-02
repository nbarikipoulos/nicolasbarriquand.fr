<template lang="pug">
  section(class="section" :id="data.nav['anchor']")
    div(class="section-heading")
      h1(class="title") {{ data.title }}
      p(class="subtitle") {{ data.subtitle }}

    div(class="container subsection")
      div(class="columns is-multiline")
        div(v-for="item in data['parts']" class="column is-6")
          div(class="box")
            h1(class="has-text-weight-bold")
              b-icon(pack="fa" :icon="item['icon']" type="is-icon")
              span &nbsp;{{ item.title }}
</template>
<script>
export default {
  name: 'Services',
  props: { data: {} },
  methods: {
    getText (id) { return this.data.text[id] }
  }
}
</script>
