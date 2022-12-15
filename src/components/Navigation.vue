<template lang="pug">
v-bottom-navigation(
  bg-color="primary-darken-1"
  :elevation="8"
)
  v-btn(
    v-for="(item, i) in items"
    :key="i"
    @click="scrollTo(item.target ?? item.id)"
  )
    v-icon(
      :icon="item.icon"
    )
    span {{ item.label }}
</template>

<script setup>
defineProps({
  items: { type: Object, default: _ => ({}) }
})

const scrollTo = (id) => document
  .getElementById(id)
  .scrollIntoView({ behavior: 'smooth' })
</script>
