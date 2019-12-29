<template lang="pug">
  section(id="data.nav[anchor]")
    div(class="section-heading")
      h1(class="title is-2") {{ data.title }}
      p(class="subtitle is-5") {{ data.subtitle }}

    div(class="container subsection")
      div(class="columns is-multiline")
        div(v-for="item in data['parts']" class="column is-6")
          div(class="box")
            h1(class="has-text-weight-bold is-size-6")
              b-icon(pack="fa" :icon="item['icon']" type="is-primary")
              span &nbsp;{{ item.title }}
</template>
<script>
export default {
  name: 'Service',
  props: { data: {} },
  methods: {
    getText (id) { return this.data.text[id] }
  }
}
</script>
