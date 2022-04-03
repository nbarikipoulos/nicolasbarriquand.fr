<template lang="pug">
span(
  v-for="(tag, i) in items"
    :key="i"
    class="tag mr-1 px-1 py-1"
    :class="$attrs.class"
) {{ tag }}
</template>

<script setup>
defineProps({
  items: { type: Array, default: _ => [] }
})
</script>
