<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    section-header(
        :title="getContent('title')"
        :subtitle="getContent('subtitle')"
      )
    div(class="container is-fluid columns is-multiline is-centered")
      div(class="column")
        p(class="dots subtitle is-5 ") {{ getContent('text', 'figure.title') }}
        div(v-for="figure in getContent('figures')")
          span(class="is-size-3 has-text-weight-bold has-text-primary") {{ figure.value }}
          span(class="is-size-5")  {{ figure.label }}
      div(class="column")
        p(class="dots subtitle is-5 ") {{ getContent('text', 'skill.title') }}
          div
            ul(class="fa-ul")
              li(v-for="item in getContent('skill.bars')")
                ext-icon(
                  class="fa-li is-size-5 has-text-primary" icon="chevron"
                  :style="{ 'padding-top': 0, 'margin-bottom': '0.20em' }"
                )
                span(class="is-size-5") {{ item.name }}
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'About',
  mixins: [content]
}
</script>
