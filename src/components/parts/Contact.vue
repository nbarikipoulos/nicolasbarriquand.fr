<template lang="pug">
div(class="container is-fluid pb-5")
  p
    my-icon(
      icon="mail"
      :class="clazz"
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

const clazz = computed(_ => 'is-size-5 has-text-primary mr-1')
const mail = computed(_ => props.content['mail'])
</script>
