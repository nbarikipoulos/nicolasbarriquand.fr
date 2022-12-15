<template lang="pug">
my-title(
  :text="content['title']"
  subtitle
)
v-card(
  class="mx-auto"
  density="compact"
  border
)
  v-list(
    density="compact"
  )
    v-list-item(
      v-for="(item, i) in content['items']"
      :key="i"
    )
      template(#prepend)
        v-icon(
          icon="mdi-chevron-right"
          color="primary"
        )
      span(class="font-weight-black text-primary") {{ item['text'] }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
