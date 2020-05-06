<template lang="pug">
  div
    span(
      class="is-size-3 has-text-weight-bold has-text-primary"
    ) {{ value }}
    span(
      class="is-size-6 has-text-weight-bold"
    )  {{ label }}
</template>

<script>
export default {
  name: 'Figure',
  props: ['value', 'label']
}
</script>
