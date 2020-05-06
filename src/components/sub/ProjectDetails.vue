<template lang="pug">
  div(class="modal-card" @click="$parent.close()")
    header(class="modal-card-head")
      div(
        class="modal-card-title is-size-6-mobile has-text-bold"
      ) {{ getContent('position') }}
      b-button(
        class="is-pulled-right is-primary has-text-white"
        size="is-medium"
        rounded
        v-bind="closeIcon"
        @click="$parent.close()"
    )
    section(class="modal-card-body")
      div(
        v-for="detail in getContent('details')"
        class="box"
      )
        h4(class="has-text-weight-bold has-text-primary")
          p {{ detail['title'] }}
        ul(v-if="detail['elements']" class="fa-ul")
          li(v-for="element in detail['elements']")
            ext-b-icon(class="fa-li" icon="chevron")
            span {{ element }}
    footer(class="modal-card-foot")
      b-taglist
        b-tag(v-for="tag in getContent('tech')" :key="tag" type="is-white") {{ tag }}
</template>

<script>
import content from '@/mixins/content'
import iconStore from '@/lib/utils/iconStore'

const ico = iconStore.get('times')

export default {
  name: 'ProjectDetails',
  mixins: [content],
  data: _ => ({ closeIcon: { 'icon-pack': ico.pack, 'icon-left': ico.icon } })
}
</script>
