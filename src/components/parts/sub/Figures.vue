<template lang="pug">
my-title(
  :text="content['title']"
  subtitle
)
v-card(
  v-for="(item, i) in content['items']"
  :key="i"
  class="ma-2 pa-2"
  border
  density="compact"
)
  span(class="text-h4 text-primary font-weight-black mr-1") {{ item['value'] }}
  span(class="font-weight-black text-primary") {{ item['label'] }}
  v-icon(
    v-if="item.icon"
    :icon="item.icon"
    size="small"
    class="mt-n8 ml-0 text-yellow"
  )
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
