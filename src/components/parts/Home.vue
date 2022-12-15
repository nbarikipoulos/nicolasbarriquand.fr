<template lang="pug">
v-img(
  cover
  :src="cpc"
)
  div(
    style="opacity: 0.9;"
    class="ma-1 d-flex flex-column align-start justify-center fill-height align-left text-white"
  )
    p(class="px-1 mb-1 text-h5 text-sm-h4 text-md-h3 font-weight-medium bg-primary") {{ content.me }}
    p(class="px-1 mb-1 text-h6 text-sm-h5 text-md-h4 font-weight-thin bg-primary") {{ content.role }}
</template>

<script setup>
import cpc from '@/assets/cpc.jpg'

defineProps({
  content: { type: Object, default: _ => ({}) }
})

</script>
