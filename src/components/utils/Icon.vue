<template lang="pug">
  span(class="icon-text")
    span(class="icon")
      i(:class="clazz")
      //- i(class="fa fa-home")
  //- ext-icon(
  //-   v-bind="icoObject"
  //-   :type="type"
  //- )
</template lang="pug">

<script>
import iconStore from '@/lib/utils/iconStore'

export default {
  name: 'ExtIcon',
  data: _ => ({ icoObject: { pack: undefined, icon: undefined } }),
  props: {
    icon: [Object, String],
    type: { type: String, default: 'is-icon' }
  },
  computed: {
    clazz () { return `${this.icoObject.pack} ${this.icoObject.icon}` }
  },
  mounted () {
    this.icoObject = typeof this.icon === 'string'
      ? iconStore.get(this.icon)
      : this.ico
  }
}
</script>
