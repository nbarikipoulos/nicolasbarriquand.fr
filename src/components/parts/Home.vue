<template lang="pug">
p {{ content['hero']['pre.title'] }}
h1(class="title is-4") {{ content['hero']['title'] }}
h2(class="subtitle is-4") {{ content['hero']['subtitle'] }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>

