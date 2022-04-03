<template lang="pug">
ul(class="fa-ul")
  li(
    v-for="(item, i) in items" 
    :key="i"
    :class="liClass"
  )
    my-icon(
      class="fa-li"
      :icon-name="iconName"
    )
    span {{ item }}
</template>

<script setup>
defineProps({
  items: { type: Array, default: _ => [] },
  iconName: { type: String, default: 'chevron' },
  liClass: { type: String, default: '' }
})

</script>
