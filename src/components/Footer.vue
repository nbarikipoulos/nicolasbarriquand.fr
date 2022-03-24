<template lang="pug">
footer(class="footer")
  div(class="columns is-mobile content is-vcentered has-text-centered is-marginless")
      div(class="column is-narrow")
        span(class="is-size-7 has-text-weight-light") {{ content['copy'] }}
      div(class="column has-text-right")
        a(
          v-for="(item, i) in content['links']"
          :key="i"
          :href="item['url']",
          target="_blank"
          class="has-background-white px-1 mx-1"
        )
          my-icon(
            class="has-text-white"
            :icon-name="item['icon']"
          )
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
