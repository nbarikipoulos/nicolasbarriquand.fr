<template lang="pug">
v-card(
  class="mx-auto"
  color="primary-darken-1"
  density="compact"
)
  template(#title)
    v-icon(
      class="mr-1"
      :icon="items['company'].icon"
    )
    span {{ items['company'].content }}
  template(#subtitle)
    span(class="") {{ items['position'].content }}
  //- v-divider(color="secondary")
  v-list(
    density="compact"
  )
    v-list-item(
      v-for="(prop, i) in ['date', 'desc']"
      :key="i"
      :class="items[prop].clazz"
    )
      template(#prepend)
        v-icon(
          class="mr-1"
          :icon="items[prop].icon"
          color="primary-darken-1"
        )
      span {{ items[prop].content }}
    v-list-item(v-if="hasDetails")
      div(class="d-flex flex-row")
        v-btn(
          color="primary-darken-1"
          variant="tonal"
          size="small"
          @click="show = !show"
        ) {{ expandButtonLabel }}
        v-spacer
        v-btn(
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          variant="plain"
          density="compact"
          color="primary-darken-1"
          @click="show = !show"
        )
      v-expand-x-transition
        v-list-item(v-show="show")
          project-desc(:content="content['details']")
          v-divider(color="primary")
    //- Tech
    v-list-item
      template(#prepend)
        v-icon(
          icon="mdi-code-braces"
          size="large"
          color="primary-darken-1"
        )
      v-chip(
        v-for="(tech, i) in content.keys.tech"
        :key="i"
        class="mb-1 mr-1"
        variant="elevated"
        size="small"
        color="primary-darken-1"
        label
      ) {{ tech }}
</template>

<script setup>
import ProjectDesc from './ProjectDesc.vue'
import { ref, computed } from 'vue'
import { formatDateRange } from '@/utils/misc'

const props = defineProps({
  content: { type: Object, default: _ => ({}) }
})

const f = (d) => formatDateRange(d.start, d.end, 'long')

const show = ref(false)

const hasDetails = computed(_ => 'details' in props.content)
const expandButtonLabel = computed(_ => show.value ? 'Less...' : 'More...')

const items = {
  position: {
    icon: 'mdi-badge-account-outline',
    clazz: '',
    content: props.content.position
  },
  company: {
    icon: 'mdi-domain',
    clazz: 'text-h6 bg-primary',
    content: props.content.company
  },
  location: {
    icon: 'mdi-earth',
    clazz: '',
    content: props.content.location
  },
  date: {
    icon: 'mdi-calendar-month',
    clazz: '',
    content: f(props.content.date)
  },
  desc: {
    icon: 'mdi-toolbox',
    clazz: 'text-justify',
    content: props.content.desc
  }
}
</script>
