<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    section-header(
      :title="getContent('title')"
      :subtitle="getContent('subtitle')"
    )
    div(class="container is-fluid columns is-multiline")
      div(
        v-for="project in projects"
        class="column is-6 px-0"
      )
        project(:content="project")
</template>

<script>
import Project from '@/components/sub/Project.vue'
import { content, projects } from '@/mixins'

export default {
  name: 'Projects',
  mixins: [content, projects],
  components: { Project }
}
</script>
