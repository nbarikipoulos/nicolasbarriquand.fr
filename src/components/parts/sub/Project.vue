<template lang="pug">
div
  ul(class="fa-ul")
    li(
      v-for="id in ['position', 'company', 'date', 'desc']"
      :key="id"
    )
      my-icon(
        class="fa-li"
        :icon-name="id"
      )
      span(
        :class="getClass(id)"
        style="overflow: hidden;"
      ) {{ content[id] }}
    li
      my-icon(
        class="fa-li"
        icon-name="code"
      )
      div(class="tags")
        span(
          v-for="tag in content['keys']['tech']"
          :key="tag"
          class="tag is-uppercase has-background-primary has-text-light has-text-weight-bold px-1 py-1"
        ) {{ tag }}
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
const props = defineProps({
  content: { type: Object, default: _ => ({}) }
})

const getClass = (id) => {
  let result
  switch (id) {
    case 'position': result = 'has-text-weight-bold is-uppercase has-text-primary'; break
    default: result = ''
  }
  return result
}
</script>
