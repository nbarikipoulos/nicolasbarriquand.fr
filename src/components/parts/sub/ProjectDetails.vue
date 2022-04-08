<template lang="pug">
div(
  class="modal"
  :class="clazz"
)
  div(class="modal-background" @click="close()")
  div(class="modal-card")
    header(class="modal-card-head")
      h1(
        class="modal-card-title subtitle is-size-6-mobile has-text-light"
      ) {{ content.position }}
    section(class="modal-card-body")
      div(class="columns columns is-multiline")
        div(
          v-for="id in ['company', 'location', 'date']"
          :key="id"
          class="column has-text-left is-narrow"
        )
          my-icon(
            class="mr-1 has-text-primary"
            :icon-name="id"
          )
          span {{ content[id] }}
      p(class="subtitle is-size-6")
        my-icon(
          class="mr-2 has-text-primary"
          icon-name="desc"
        )
        span {{ content.desc }}
      div(
        v-for="(part, i) in content.details"
        :key=i
      )
        div
          p 
             my-icon(
               class="mr-1 has-text-primary"
               icon-name="double-chevron"
               )
             span(class="pl-2 subtitle is-size-6") {{ part.title }}
          my-list(
            icon-color="has-text-primary"
            :items="part.elements"
          )

    footer(class="modal-card-foot")
      my-tags(
        class="is-uppercase has-background-light has-text-primary has-text-weight-bold"
        :items="content['keys']['tech']"
      )
  button(class="modal-close is-large" aria-label="close" @click="close()")
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import { computed } from 'vue'

const props = defineProps({
  content: { type: Object, default: _ => ({}) },
  modelValue: { type: Boolean, default: false }
})

const clazz = computed(_ => props.modelValue ? 'is-active' : '')

const emit = defineEmits(['update:modelValue'])

const close = _ => { emit('update:modelValue', false) }
</script>
