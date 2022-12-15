<template lang="pug">
v-row(no-gutters)
  v-col(
    v-for="(item, i) in content['items']"
    :key="i"
    cols="12"
    md="6"
    lg="4"
  )
    v-sheet(class="ma-1 pa-1")
      v-card(
        class="mx-auto"
        density="compact"
        border
      )
        template(#prepend)
          v-icon(
            class="mr-1"
            :icon="item.icon"
            color="primary-darken-1"
        )
        template(#title)
          span(class="text-body-1 text-primary font-weight-black") {{ item.title }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
