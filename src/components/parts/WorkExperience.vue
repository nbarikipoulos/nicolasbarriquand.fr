<template lang="pug">
v-timeline(
  align="center"
  line-color="primary-lighten-1"
  dense
)
  v-timeline-item(
    v-for="(item, i) in xps.filter(xp => !xp.hide )"
    :key="i"
    dot-color="accent"
    icon="mdi-calendar-outline"
    :hide-dot="item.type === 'project'"
  )
    template(#[getTargetSlot(i+1)])
      div(
        v-if="item.type === 'event'"
        class="d-none d-md-block text-h6 font-weight-bold text-primary-darken-1"
        v-text="formatDate(item.date, 'long')"
      )
    template(#[getTargetSlot(i)])
      div(
        v-if="item.type === 'event'"
        class="text-h6 text-primary-darken-1"
      )
        p
          span(class="d-md-none mr-1") {{ formatDate(item.date, 'short') }}:
          span {{ item.desc }}
      project(
        v-else
        :content="item"
      )
</template>

<script setup>
import { Project } from '@/components/parts/sub'
import { formatDate } from '@/utils/misc'

import xps from '@/data/xp.json'

defineProps({
  content: { type: Object, default: _ => ({}) }
})

const getTargetSlot = (i) => (i % 2) ? 'opposite' : 'default'
</script>
