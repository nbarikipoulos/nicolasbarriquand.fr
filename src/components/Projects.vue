<template lang="pug">
  section(class="section" :id="data.nav['anchor']")
    div(class="section-heading")
      h1(class="title is-2") {{ data.title }}
      p(class="subtitle is-5") {{ data.subtitle }}

    div(class="container subsection")
      div(class="columns is-multiline")
        div(
          v-for="project in projects"
          class="column is-half-tablet is-half-desktop is-one-third-fullhd"
        )
          Project(:data="project")
</template>
<script>
import Project from '@/components/Project.vue'

import json from '@/data/projects.json'

export default {
  name: 'Projects',
  components: {
    Project
  },
  data () { return { projects: json } },
  props: { data: {} }
}
</script>
