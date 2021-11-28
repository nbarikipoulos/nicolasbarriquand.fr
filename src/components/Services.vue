<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    section-header(
      :title="getContent('title')"
      :subtitle="getContent('subtitle')"
    )
    div(class="container is-fluid columns is-multiline")
      div(v-for="item in getContent('parts')" class="column is-4")
        h1(class="is-uppercase")
          ext-icon(:icon="item['icon']" class="is-size-5 has-text-primary")
          span &nbsp;{{ item.title }}
</template>

<script>
import { content, projects } from '@/mixins'

export default {
  name: 'Services',
  mixins: [content, projects]
}
</script>
