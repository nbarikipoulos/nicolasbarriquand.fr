<template lang="pug">
  div(class="has-text-left pb-5")
    h1(class="title is-uppercase has-text-weight-bold dots") {{ title }}
    p(class="subtitle ") {{ subtitle }}
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: { type: String },
    subtitle: { type: String }
  }
}
</script>
