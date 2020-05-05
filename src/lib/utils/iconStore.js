'use strict'

import _icons from '@/assets/icons.json'

const iconStore = {
  icons: {},
  get (id) {
    if (!(id in this.icons)) {
      this.icons[id] = _icons[id]
    }
    return this.icons[id]
  }
}

export default iconStore
