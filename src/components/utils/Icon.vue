<template lang="pug">
  b-icon(
    :pack="pack"
    :icon="name"
    :type="type"
  )
</template lang="pug">

<script>
import section from '@/mixins/section'

export default {
  name: 'ExtBIcon',
  mixins: [section],
  data: _ => ({ pack: undefined, name: undefined }),
  props: {
    ico: [Object, String],
    type: { type: String, default: 'is-icon' }
  },
  mounted: function () {
    const object = typeof this.ico === 'string'
      ? this.getIcon(this.ico)
      : this.ico

    this.pack = object.pack
    this.name = object.name
  }
}
</script>
