<template lang="pug">
div(class="hero is-medium")
  div(class="hero-body home")
    div
      p(class="mb-3")
        span(class="title is-2 is-size-6-mobile px-1 has-background-primary has-text-light") {{ content['hero']['title'] }}
      p
        span(class="subtitle is-3 is-size-6-mobile px-1 has-background-primary has-text-light") {{ content['hero']['subtitle'] }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>

