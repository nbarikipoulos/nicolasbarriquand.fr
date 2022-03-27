<template lang="pug">
div(class="has-text-centered")
  p(class="mx-0 px-1 py-1 title is-size-4 is-size-6-mobile has-background-primary has-text-light") {{ title }}
  p(class="subtitle px-1 mb-5 is-size-6") {{ subtitle }}
</template>

<script setup>
defineProps({
  title: { type: String, default: _ => 'No Title...' },
  subtitle: { type: String, default: _ => '' }
})
</script>
