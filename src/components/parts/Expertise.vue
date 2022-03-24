<template lang="pug">
div(class="container is-fluid columns is-multiline")
  div(
    v-for="(item, i) in content['parts']"
    :key="i"
    class="column is-4"
  )
    h1(class="is-uppercase")
      my-icon(
        class="is-size-5 mr-2"
        :icon-name="item['icon']"
      )
      span {{ item.title }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
