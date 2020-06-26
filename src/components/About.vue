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
            //- FIXME to factorize
            p(class="has-text-centered subtitle is-5") {{ getContent('text', 'figure.title') }}
              div(class="tile is-ancestor")
                div(class="tile is-parent is-vertical is-5")
                  Figure(
                    class="tile is-child box has-text-centered",
                    v-bind="getContent('figures', 'xp')"
                  )
                  Figure(
                    class="tile is-child box has-text-centered",
                    v-bind="getContent('figures', 'project')"
                  )
                div(class="tile is-parent is-vertical is-7")
                  div(class="tile is-child box")
                    Figure(
                      class="tile is-child has-text-centered",
                      v-bind="getContent('figures', 'client')"
                    )
                    div(class="tile is-child image is-16by9")
                      img(src="@/assets/pig.gif")
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
