<template lang="pug">
  div
    ul(class="fa-ul")
      li(v-for="id in ['position', 'company', 'date', 'desc']")
        ext-icon(class="fa-li" :icon="id")
        span(:class="getClass(id)" style="overflow: hidden;") {{ getContent(id) }}
      li
        ext-icon(class="fa-li" icon="code")
        div(class="tags")
          span(
            v-for="tag in getContent('keys', 'tech')"
            :key="tag"
            class="tag is-uppercase has-background-primary has-text-light has-text-weight-bold px-1 py-1"
          ) {{ tag }}
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'Project',
  mixins: [content],
  data: _ => ({ isModalActive: false }),
  methods: {
    getClass (id) {
      let result
      switch (id) {
        case 'position': result = 'has-text-weight-bold is-uppercase has-text-primary'; break
        default: result = ''
      }
      return result
    }
  }
}
</script>
