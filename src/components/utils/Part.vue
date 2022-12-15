<template lang="pug">
v-container
  my-title(:text="title")
  slot
    p Nothing to display in this part...
</template>

<script setup>
defineProps({
  title: { type: String, default: _ => '???' }
})
</script>
