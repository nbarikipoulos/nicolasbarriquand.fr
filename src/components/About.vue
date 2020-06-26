<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    div(class="section-heading")
      h1(class="title") {{ getContent('title') }}
    div(class="container subsection")
      div(class="tile is-ancestor")
        div(
          v-for="elt in skillTextParts"
          class="tile is-parent is-half"
        )
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{ elt.content['title'] }}
            ul(class="fa-ul")
              li(v-for="item in elt.content['items']")
                ext-b-icon(
                  class="fa-li"
                  v-bind="elt.icon"
                )
                p {{ item }}
    div(class="container subsection")
      div(class="tile is-ancestor")
        div(class="tile is-parent is-half")
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{ getContent('text', 'figure.title') }}
              div(class="tile is-parent is-vertical")
                Figure(
                  v-for="figure in getContent('figures')"
                  class="tile is-child",
                  v-bind="figure"
                )
        div(class="tile is-parent is-half")
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{ getContent('text', 'skill.title') }}
              div(v-for="item in getContent('skill.bars')")
                p {{ item.name }}
                b-progress(
                  :value="item.percent",
                  :max=100
                  size="is-medium"
                )
</template>

<script>
import Figure from '@/components/sub/Figure'
import { content } from '@/mixins'

export default {
  name: 'About',
  mixins: [content],
  components: { Figure },
  computed: {
    skillTextParts () {
      const paragraph = this.getContent('skill.text')
      return [
        { content: paragraph.ok, icon: { icon: 'ok', type: 'is-success' } },
        { content: paragraph.ko, icon: { icon: 'ko', type: 'is-danger' } }
      ]
    }
  }
}
</script>
