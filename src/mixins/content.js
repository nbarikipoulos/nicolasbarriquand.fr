'use strict'

const mixin = {
  props: { content: Object },
  methods: {
    getContent (...ids) {
      let p
      let res = this.content
      while ((p = ids.shift()) !== undefined) {
        res = res[p]
      }
      return res
    }
  }
}

export default mixin
