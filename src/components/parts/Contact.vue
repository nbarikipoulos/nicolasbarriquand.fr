<template lang="pug">
div(class="container is-fluid pt-4")
  p
    my-icon(
      class="is-size-5 has-text-primary mr-2"
      icon-name="homy"
    )
    span {{ content.location }}
  p
    my-icon(
      class="is-size-5 mr-2 has-text-primary"
      icon-name="mail"
      size="lg"
    )
    a(:href="`mailto:${mail}`")
      span {{ mail }}
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import { computed } from 'vue'

const props = defineProps({
  content: { type: Object, default: _ => ({}) }
})

const mail = computed(_ => props.content['mail'])
</script>
