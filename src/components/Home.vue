<template lang="pug">
  section(:id="getContent('nav', 'anchor')")
    div(class="hero is-small is-primary")
      div(class="hero-body")
        div(class="container has-text-left")
          p(class="has-text-primary-white") {{ getContent('hero', 'pre.title') }}
          h1(class="title is-2 has-text-primary-white") {{ getContent('hero', 'title') }}
          h2(class="subtitle is-3 has-text-primary-white") {{ getContent('hero', 'subtitle') }}
    div(class="section")
      div(class="container box")
        ul(class="fa-ul")
          li(
            v-for="line in getContent('intro')"
          )
            span
              ext-b-icon(class="fa-li" icon="chevron-circle")
              span {{ line }}
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'Home',
  mixins: [content]
}
</script>
