<template lang="pug">
div(class="container is-fluid columns is-multiline")
  div(
    v-for="(item, i) in content['items']"
    :key="i"
    class="column is-4"
  )
    h1(class="is-uppercase")
      my-icon(
        class="mr-2"
        :icon-name="item['icon']"
      )
      span {{ item.title }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
