<template lang="pug">
  section(:id="getContent('nav', 'anchor')")
    div(class="hero is-small is-primary")
      div(class="hero-body")
        div(class="container has-text-left")
          p(class="has-text-primary-white") {{ getContent('hero', 'pre.title') }}
          h1(class="title is-3 is-size-5-mobile has-text-primary-white") {{ getContent('hero', 'title') }}
          h2(class="subtitle is-4 is-size-6-mobile has-text-primary-white") {{ getContent('hero', 'subtitle') }}
    div(class="section")
      div(class="container box")
        ul(class="fa-ul")
          li(v-for="line in getContent('intro')")
            ext-icon(
              class="fa-li is-size-5 has-text-primary" icon="chevron-circle"
              :style="{ 'padding-top': 0, 'margin-bottom': '0.20em' }"
            )
            span(class='is-size-7-mobile') {{ line }}
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'Home',
  mixins: [content]
}
</script>
