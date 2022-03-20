<template lang="pug">
span(class="icon-text")
  span(class="icon")
    i(:class="clazz")
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import { computed, ref, onMounted } from 'vue'
import iconStore from '@/lib/utils/iconStore'

const props = defineProps({
  icon: { type: [Object, String], default: '' },
  type: { type: String, default: 'is-icon' },
  color: { type: String, default: 'has-text-primary' }
})

const icoObject = ref({ pack: undefined, icon: undefined })

const clazz = computed(_ => `${props.color} ${icoObject.value.pack} ${icoObject.value.icon}`)

onMounted(_ => {
  icoObject.value = typeof props.icon === 'string'
      ? iconStore.get(props.icon)
      : props.icon
})
</script>
