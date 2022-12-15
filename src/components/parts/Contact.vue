<template lang="pug">
p
  v-icon(
    :icon="content.location.icon"
    size="large"
    color="primary"
  )
  span {{ content.location.label }}

p
  v-icon(
    :icon="content.mail.icon"
    size="large"
    color="primary"
  )
  a(:href="`mailto:${mail}`") {{ mail }}
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: { type: Object, default: _ => ({}) }
})

const mail = computed(_ => props.content.mail.label)

</script>
