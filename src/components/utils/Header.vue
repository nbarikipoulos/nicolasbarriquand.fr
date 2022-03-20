<template lang="pug">
div(class="has-text-left pb-5")
  h1(class="title is-uppercase has-text-weight-bold dots") {{ title }}
  p(class="subtitle") {{ subtitle }}
</template>

<script setup>
defineProps({
  title: { type: String, default: _ => 'No Title...' },
  subtitle: { type: String, default: _ => '' }
})
</script>
