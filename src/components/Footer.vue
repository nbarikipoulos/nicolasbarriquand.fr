<template lang="pug">
footer(class="footer")
  div(class="columns is-mobile content is-vcentered has-text-centered is-marginless")
    div(class="column has-text-left px-5")
      a(
        v-for="(item, i) in content['links']"
        :key="i"
        :href="item['url']",
        target="_blank"
        class="has-background-white pl-1"
      )
        my-icon(
          class="is-size-4"
          :icon-name="item['icon']"
        )
    div(class="column is-narrow")
      span(class="is-size-7 has-text-light px-1 py-1 has-background-primary") {{ content['copy'] }}

</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
