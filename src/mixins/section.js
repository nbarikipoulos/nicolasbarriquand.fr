'use strict'

import _icons from '@/assets/icons.json'

const mixin = {
  props: { content: Object },
  data: _ => ({ icoStore_: {} }),
  methods: {
    getContent (id) { return this.content[id] },
    getIcon (id) {
      if (!(id in this.icoStore_)) {
        this.icoStore_[id] = _icons[id]
      }
      return this.icoStore_[id]
    }
  }
}

export default mixin
