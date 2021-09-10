'use strict'

import json from '@/data/projects.json'

const mixin = {
  data: _ => ({ projects: json }),
  methods: {
    getKeys () {
      const res = new Map()
      for (const project of this.projects) {
        const types = project.keys.type

        for (const type of types) {
          if (!res.has(type)) {
            res.set(type, [])
          }
          const tgt = res.get(type)
          tgt.push(project.company)
        }
      }
      return res
    }
  }
}

export default mixin
