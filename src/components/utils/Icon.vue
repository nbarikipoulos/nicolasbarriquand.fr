<template lang="pug">
font-awesome-icon(
  class="has-text-primary"
  :icon="getIcon(iconName) ?? icons['bug']"
)
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import { FontAwesomeIcon, getIcon } from '@/utils/fontawesome'

const props = defineProps({
  iconName: { type: String, default: 'bug' },
  color: { type: String, default: 'has-text-primary' }
})

</script>
