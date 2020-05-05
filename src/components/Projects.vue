<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    div(class="section-heading")
      h1(class="title") {{ getContent('title') }}
      p(class="subtitle") {{ getContent('subtitle') }}

    div(class="container subsection")
      div(class="columns is-multiline")
        div(
          v-for="project in projects"
          class="column is-half-tablet is-half-desktop is-half-fullhd"
        )
          Project(:content="project")
</template>

<script>
import Project from '@/components/Project.vue'

import section from '@/mixins/section'

import json from '@/data/projects.json'

export default {
  name: 'Projects',
  mixins: [section],
  components: {
    Project
  },
  data: _ => ({ projects: json })
}
</script>
