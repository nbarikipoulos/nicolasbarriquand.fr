<template lang="pug">
v-footer(
  class="bg-primary text-center d-flex flex-column"
)
  a(
    v-for="(item, i) in content['links']"
    :key="i"
    :href="item['url']",
    target="_blank"
  )
    v-icon(
      :icon="item['icon']"
      size="large"
      color="white"
    )
  span(class="text-white text-body-2") {{ content['copy'] }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
