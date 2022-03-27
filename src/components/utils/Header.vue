<template lang="pug">
div(class="has-text-left pb-5")
  h1(class="title is-size-5 dots") {{ title }}
  p(class="subtitle is-size-6") {{ subtitle }}
</template>

<script setup>
defineProps({
  title: { type: String, default: _ => 'No Title...' },
  subtitle: { type: String, default: _ => '' }
})
</script>
