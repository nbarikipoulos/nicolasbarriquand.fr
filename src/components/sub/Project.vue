<template lang="pug">
  div
    div(
      class="card"
      :class="{ 'is-shady': hasDetail }"
      @click="openModal"
    )
      div(class="card-header")
        p(class="card-header-title") {{ getContent('position') }}
        p(v-if="hasDetail" class="card-header-icon has-text-white")
          ext-icon(icon="ellipsis")
      div(class="card-content card-content-project")
        ul(class="fa-ul")
          li(v-for="id in ['company', 'location', 'date']")
            ext-icon(class="fa-li" :icon="id")
            span {{ getContent(id) }}
        br
        ul(class="fa-ul")
          li
            ext-icon(class="fa-li" icon="briefcase")
            span(style="overflow: hidden;") {{ getContent('desc') }}
      footer(class="card-footer project-footer")
        div(class="tags")
          span(
            v-for="tag in getContent('keys', 'tech')"
            :key="tag"
            class="tag"
          ) {{ tag }}
    div(
      class="modal"
      :class="{'is-active': isModalActive }"
    )
      div(class="modal-background" @click="isModalActive=false")
      projectDetails(:content="content")
</template>

<script>
import ProjectDetails from '@/components/sub/ProjectDetails.vue'
import { content } from '@/mixins'

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
