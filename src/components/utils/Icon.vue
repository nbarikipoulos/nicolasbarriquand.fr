<template lang="pug">
  b-icon(
    :pack="pack"
    :icon="name"
    :type="type"
  )
</template lang="pug">

<script>
import iconStore from '@/lib/utils/iconStore'

export default {
  name: 'ExtBIcon',
  data: _ => ({ pack: undefined, name: undefined }),
  props: {
    ico: [Object, String],
    type: { type: String, default: 'is-icon' }
  },
  mounted: function () {
    const object = typeof this.ico === 'string'
      ? iconStore.get(this.ico)
      : this.ico

    this.pack = object.pack
    this.name = object.name
  }
}
</script>
