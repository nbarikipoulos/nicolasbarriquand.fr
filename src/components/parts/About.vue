<template lang="pug">
div(class="container is-fluid columns is-multiline is-centered")
  div(class="column")
    p(class="subtitle dots") {{ content['figures']['title'] }}
    div(
      v-for="(figure, i) in content['figures']['items']"
      :key="i"
      class="mx-4"
    )
      span(class="is-size-3 mr-1 has-text-weight-bold has-text-primary") {{ figure.value }}
      span(class="is-size-6") {{ figure.label }}
  div(class="column")
    p(class="subtitle dots") {{ content['skills']['title'] }}
    my-list(
      :items="content['skills']['items'].map(item=>item.name)"
      icon-color="has-text-primary"
    )
div(class="container is-fluid mb-5")
  p(class="subtitle dots") {{ content['expertise']['title'] }}
  expertise(
    class="pl-5"
    :content="content['expertise']"
  )
div(class="container is-fluid")
  p(class="subtitle dots") {{ content['generalities']['title'] }}
  my-list(
    :items="content['generalities']['items']"
    li-class="mt-3"
    icon-color="has-text-primary"
  )
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import { Expertise } from '@/components/parts'
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
