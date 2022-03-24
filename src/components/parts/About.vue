<template lang="pug">
div(class="container is-fluid columns is-multiline is-centered")
  div(class="column")
    p(class="dots subtitle is-5") {{ content['text']['figure.title'] }}
    div(
      v-for="(figure, i) in content['figures']"
      :key="i"
    )
      span(class="is-size-3 has-text-weight-bold has-text-primary") {{ figure.value }}
      span(class="is-size-5")  {{ figure.label }}
  div(class="column")
    p(class="dots subtitle is-5") {{ content['text']['skill.title'] }}
    div
      ul(class="fa-ul")
        li(
          v-for="(item, i) in content['skill.bars']" 
          :key="i"
        )
          my-icon(
            class="fa-li is-size-5"
            icon-name="chevron"
          )
          span(class="is-size-5") {{ item.name }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
