<template lang="pug">
div(class="section")
  p {{ content['hero']['pre.title'] }}
  h1(class="title has-text-weight-bold") {{ content['hero']['title'] }}
  h2(class="subtitle has-text-weight-bold is-uppercase") {{ content['hero']['subtitle'] }}
  div(class="container is-fluid")
    ul(class="fa-ul")
      li(
        v-for="(line, i) in content['intro']"
        :key="i"
        class="mt-1"
      )
        my-icon(
          class="fa-li is-size-5"
          icon-name="chevron"
        )
        span {{ line }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>

