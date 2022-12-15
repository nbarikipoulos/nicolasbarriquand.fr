<template lang="pug">
my-title(
  :text="content['title']"
  subtitle
)
v-card(
  class="mx-auto"
  border
)
  v-list(
    class="text-justify"
  )
    v-list-item(
      v-for="(item, i) in content['items']"
      :key="i"
    )
      template(#prepend)
        v-icon(
          icon="mdi-chevron-right"
          color="primary"
        )
      span(
        v-for="(elt, j) in trs(item)"
        :key="j"
        :class="elt.clazz"
      ) {{ elt.content }}
      //- span(v-if="item.details") {{ item.details.join(' ') }}
      //- v-list-item(v-if="item.details")
      //-   p(
      //-     v-for="(detail, j) in item.details"
      //-     :key="j"
      //-   ) {{ detail }}
</template>

<script setup>
defineProps({
  content: { type: Object, default: _ => ({}) }
})

// FIXME arf....
const trs = (item) => [].concat(item.title, ...item.details ?? [])
  .join(' ')
  .split('__')
  .map((content, i) => ({
    content,
    clazz: i % 2 ? 'font-weight-black text-primary' : ''
  }))
</script>
