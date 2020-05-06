<template lang="pug">
  b-icon(
    v-bind="icoObject"
    :type="type"
  )
</template lang="pug">

<script>
import iconStore from '@/lib/utils/iconStore'

export default {
  name: 'ExtBIcon',
  data: _ => ({ icoObject: { pack: undefined, icon: undefined } }),
  props: {
    icon: [Object, String],
    type: { type: String, default: 'is-icon' }
  },
  mounted: function () {
    this.icoObject = typeof this.icon === 'string'
      ? iconStore.get(this.icon)
      : this.ico
  }
}
</script>
