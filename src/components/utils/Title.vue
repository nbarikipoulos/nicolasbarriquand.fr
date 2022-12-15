<template lang="pug">
h1(
  v-if="!subtitle"
  class="text-h6 text-sm-h6 text-md-h4 font-weight-black text-primary-darken-1"
) {{ text }}
h2(
  v-else
  class="text-body-1 text-sm-h6 text-md-h5 text-primary-darken-1"
) {{ text }}
v-divider(
  class="mb-5"
  color="primary"
)
</template>

<script setup>
defineProps({
  text: { type: String, default: _ => '' },
  subtitle: { type: Boolean, default: false }
})
</script>
