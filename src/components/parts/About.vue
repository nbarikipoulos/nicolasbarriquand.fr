<template lang="pug">
v-row
  v-col(
    cols="12"
    sm="12"
    md="6"
    xl="3"
  )
    figures(:content="content['figures']")
  v-col(
    cols="12"
    sm="12"
    md="6"
    xl="3"
  )
    skills(:content="content['skills']")
  v-col(
    sm="12"
    xl="6"
  )
    misc(:content="content['generalities']")
</template>

<script setup>
import { Figures, Skills, Misc } from '@/components/parts/sub'

defineProps({
  content: { type: Object, default: _ => ({}) }
})
</script>
