<template lang="pug">
v-switch(
  v-model="showAll"
  color="primary"
  density="compact"
  hide-details
  inset
  @click="showAll = !showAll"
)
  template(#label)
    p(
      class="text-h8 font-weight-bold text-primary-darken-1"
    ) {{ content['switch-label'] }}
v-timeline(
  align="center"
  line-color="primary-lighten-1"
)
  v-timeline-item(
    v-for="(item, i) in xps.filter(xp => !xp.hide)"
    v-show="showAll ? true : item.type !== 'project'"
    :key="i"
    dot-color="accent"
    icon="mdi-calendar-outline"
    :hide-dot="item.type === 'project'"
  )
    template(#[getTargetSlot(i+1)])
      div(
        v-if="item.type === 'event'"
        class="d-none d-md-block text-h6 font-weight-bold text-primary"
        v-text="formatDate(item.date, 'long')"
      )
    template(#[getTargetSlot(i)])
      div(
        v-if="item.type === 'event'"
        class="text-h6 text-primary-darken-1"
      )
        p
          span(class="d-md-none text-primary font-weight-bold m-1 ") {{ formatDate(item.date, 'short') }}
          span(class="d-md-none") :&nbsp;
          span(class="text-primary-darken-1") {{ item.desc }}
      project(
        v-else
        :content="item"
      )
</template>

<script setup>
import { Project } from '@/components/parts/sub'
import { ref } from 'vue'
import { formatDate } from '@/utils/misc'

import xps from '@/data/xp.json'

defineProps({
  content: { type: Object, default: _ => ({}) }
})

const showAll = ref(false)

const getTargetSlot = (i) => (i % 2) ? 'opposite' : 'default'
</script>
