'use strict'

import json from '@/data/projects.json'

const mixin = {
  data: _ => ({ projects: json })
}

export default mixin
