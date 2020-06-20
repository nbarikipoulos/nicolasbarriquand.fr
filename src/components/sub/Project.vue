<template lang="pug">
  div
    div(
      class="card"
      :class="{ 'is-shady': hasDetail }"
      @click="openModal"
    )
      div(class="card-header")
        p(class="card-header-title") {{ getContent('position') }}
        p(v-if="hasDetail" class="card-header-icon")
          ext-b-icon(icon="ellipsis" type="is-white")
      div(class="card-content card-content-project")
        ul(class="fa-ul")
          li(v-for="id in ['company', 'location', 'date']")
            ext-b-icon(class="fa-li" :icon="id")
            span {{ getContent(id) }}
        br
        ul(class="fa-ul")
          li
            ext-b-icon(class="fa-li" icon="briefcase")
            span(style="overflow: hidden;") {{ getContent('desc') }}
      footer(class="card-footer project-footer")
        b-taglist
          b-tag(v-for="tag in getContent('keys', 'tech')" :key="tag" type="is-white") {{ tag }}
    b-modal(
      :active.sync="isModalActive"
      has-modal-card
    )
      ProjectDetails(:content="content")
</template>

<script>
import content from '@/mixins/content'
import ProjectDetails from '@/components/sub/ProjectDetails.vue'

export default {
  name: 'Project',
  mixins: [content],
  components: { ProjectDetails },
  data: _ => ({ isModalActive: false }),
  computed: {
    hasDetail: function () { return 'details' in this.content }
  },
  methods: {
    openModal () { this.isModalActive = this.hasDetail }
  }
}
</script>
