<template lang="pug">
  div(class="modal-card")
    header(class="modal-card-head")
      div(
        class="modal-card-title is-size-6-mobile has-text-bold"
      ) {{ getContent('position') }}
      button(
        class="button is-pulled-right is-small is-primary has-text-white"
        @click="$parent.isModalActive=false"
      )
        span(class="icon")
          i(class="fas fa-times")
    section(class="modal-card-body")
      div(
        v-for="detail in getContent('details')"
        class="box"
      )
        h4(class="has-text-weight-bold has-text-primary")
          p {{ detail['title'] }}
        ul(v-if="detail['elements']" class="fa-ul")
          li(v-for="element in detail['elements']")
            ext-icon(class="fa-li" icon="chevron")
            span {{ element }}
    footer(class="modal-card-foot")
      div(class="tags")
        span(
          v-for="tag in getContent('keys', 'tech')"
          class="tag"
          :key="tag"
          type="is-white"
        ) {{ tag }}
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'ProjectDetails',
  mixins: [content]
}
</script>
