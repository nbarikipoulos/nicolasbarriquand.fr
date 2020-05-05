<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    div(class="section-heading")
      h1(class="title") {{ getContent('title') }}
      p(class="subtitle") {{ getContent('subtitle') }}

    div(class="container subsection")
      div(class="columns is-multiline")
        div(v-for="item in getContent('parts')" class="column is-6")
          div(class="box")
            h1(class="has-text-weight-bold")
              ext-b-icon(:ico="item['icon']")
              span &nbsp;{{ item.title }}
</template>

<script>
import content from '@/mixins/content'

export default {
  name: 'Services',
  mixins: [content]
}
</script>
