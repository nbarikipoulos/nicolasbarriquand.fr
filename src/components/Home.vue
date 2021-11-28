<template lang="pug">
  div(class="section" :id="getContent('nav', 'anchor')")
    p {{ getContent('hero', 'pre.title') }}
    h1(class="title has-text-weight-bold") {{ getContent('hero', 'title') }}
    h2(class="subtitle has-text-weight-bold is-uppercase") {{ getContent('hero', 'subtitle') }}
    div(class="container is-fluid")
      ul(class="fa-ul")
        li(v-for="line in getContent('intro')")
          ext-icon(
            class="fa-li is-size-5" icon="chevron"
            :style="{ 'padding-top': 0, 'margin-bottom': '0.20em' }"
          )
          span {{ line }}
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'Home',
  mixins: [content]
}
</script>
