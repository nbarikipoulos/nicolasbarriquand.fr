<template lang="pug">
  span(class="icon-text")
    span(class="icon")
      i(:class="clazz")
</template lang="pug">

<script>
import iconStore from '@/lib/utils/iconStore'

export default {
  name: 'ExtIcon',
  data: _ => ({ icoObject: { pack: undefined, icon: undefined } }),
  props: {
    icon: [Object, String],
    type: { type: String, default: 'is-icon' },
    color: { type: String, default: 'has-text-primary' }
  },
  computed: {
    clazz () { return `${this.color} ${this.icoObject.pack} ${this.icoObject.icon}` }
  },
  mounted () {
    this.icoObject = typeof this.icon === 'string'
      ? iconStore.get(this.icon)
      : this.ico
  }
}
</script>
