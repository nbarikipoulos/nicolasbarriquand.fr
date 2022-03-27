<template lang="pug">
div(class="container is-fluid columns is-multiline")
  div(
    v-for="(project, i) in projects.filter(p => !p.hide)"
    class="column is-6 px-1"
    :key="i"
  )
    project(:content="project")
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import Project from './sub/Project.vue'
import projects from '@/data/projects.json'

defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
