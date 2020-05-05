'use strict'

const mixin = {
  props: { content: Object },
  methods: {
    getContent (id) { return this.content[id] }
  }
}

export default mixin
