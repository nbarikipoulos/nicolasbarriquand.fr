<template lang="pug">
div(
  v-for="(detail, i) in content"
  :key="i"
  class="text-justify text-medium-emphasis"
)
  v-icon(
    class="mr-1"
    icon="mdi-chevron-double-right"
    color="primary"
  )
  span(class="text-primary-darken-1") {{ detail.title }}
  v-list(
    class="text-justify"
    density="compact"
  )
    v-list-item(
      v-for="(element, j) in detail.elements"
      :key="j"
    )
      template(#prepend)
        v-icon(
          class="mr-1"
          icon="mdi-chevron-right"
          color="primary-darken-1"
        )
      span {{ element }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
