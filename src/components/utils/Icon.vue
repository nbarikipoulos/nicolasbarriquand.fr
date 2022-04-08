<template lang="pug">
font-awesome-icon(
  :icon="getIcon(iconName) ?? icons['bug']"
)
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import { FontAwesomeIcon, getIcon } from '@/utils/fontawesome'

const props = defineProps({
  iconName: { type: String, default: 'bug' }
})

</script>
