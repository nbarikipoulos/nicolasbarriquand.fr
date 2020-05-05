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
              ext-b-icon(:ico="item['icon']")
              span &nbsp;{{ item.title }}
</template>

<script>
import section from '@/mixins/section'

export default {
  name: 'Services',
  mixins: [section],
  props: { data: {} },
  methods: {
    getText (id) { return this.data.text[id] }
  }
}
</script>
