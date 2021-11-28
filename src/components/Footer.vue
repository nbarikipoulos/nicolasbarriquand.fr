<template lang="pug">
  footer(class="footer ")
    div(class="columns is-mobile content is-vcentered has-text-centered is-marginless")
        div(class="column is-narrow")
          span(class="is-size-7 has-text-weight-light") {{ getContent('copy') }}
        div(class="column has-text-right")
          a(
            v-for="item in getContent('links')"
            :href="item['url']",
            target="_blank"
            class="has-background-white mx-1"
          )
            ext-icon(
              :icon="item['icon']"
              class="has-text-white"
            )
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'Footer',
  mixins: [content]
}
</script>
