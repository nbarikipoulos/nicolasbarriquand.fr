<template lang="pug">
div(
  :class="hasDetails ? 'is-clickable': ''"
  @click="openModal()"
)
  my-icon(
    v-if="hasDetails"
    class="is-pulled-right is-clickable has-text-primary" 
    icon-name="open"  
    @click="openModal()"
    size="lg"
  )
  ul
    li(
      v-for="id in ['position', 'company', 'date', 'desc']"
      :key="id"
    )
      my-icon(
        class="mr-2 has-text-primary"
        :icon-name="id"
      )
      span(
        :class="getClass(id)"
      ) {{ content[id] }}
    li
      my-icon(
        class="mr-2 has-text-primary"
        icon-name="code"
      )
      my-tags(
        class="is-uppercase has-background-primary has-text-light has-text-weight-bold"
        :items="content['keys']['tech']"
      )
project-details(
  v-if="hasDetails"
  :content="content"
  v-model="showModal"
)
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import { ref, computed, watch } from 'vue'
import { root } from '@/utils'
import ProjectDetails from './ProjectDetails.vue'

const props = defineProps({
  content: { type: Object, default: _ => ({}) }
})

const hasDetails = computed(_ => { return 'details' in props.content })

const showModal = ref(false)

watch(showModal, _ => { root.style.overflow = showModal.value ? 'hidden' : 'auto' })

const openModal = _ => { showModal.value = true }

const getClass = (id) => {
  let result
  switch (id) {
    case 'position': result = 'subtitle has-text-primary'; break
    default: result = ''
  }
  return result
}
</script>
