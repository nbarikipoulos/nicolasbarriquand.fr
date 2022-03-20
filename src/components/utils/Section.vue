<template lang="pug">
section(class="section")
  my-header(
    v-if="!header.hide"
    :title="header.title"
    :subtitle="header.subtitle"
  )
  slot
    p Nothing to display in this section...
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import MyHeader from './Header.vue'

defineProps({
  header: { type: Object, default: _ => ({}) },
  title: { type: String, default: _ => '' },
  subtitle: { type: String, default: _ => '' }
})
</script>
