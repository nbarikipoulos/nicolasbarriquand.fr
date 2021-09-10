<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    div(class="section-heading")
      h1(class="title") {{ getContent('title') }}
    //- div(class="container subsection")
    //-   div(class="tile is-ancestor")
    //-     div(
    //-       v-for="elt in skillTextParts"
    //-       class="tile is-parent is-half"
    //-     )
    //-       div(class="tile is-child box")
    //-         p(class="has-text-centered subtitle is-5") {{ elt.content['title'] }}
    //-         ul(class="fa-ul")
    //-           li(v-for="item in elt.content['items']")
    //-             ext-icon(
    //-               class="fa-li"
    //-               v-bind="elt.icon"
    //-             )
    //-             p {{ item }}
    div(class="container subsection")
      div(class="tile is-ancestor")
        div(class="tile is-parent is-half")
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{ getContent('text', 'figure.title') }}
              div(class="tile is-parent is-vertical")
                div(
                  v-for="figure in getContent('figures')"
                  class="tile is-child"
                )
                  span(class="is-size-3 has-text-weight-bold has-text-primary") {{ figure.value }}
                  span(class="is-size-5")  {{ figure.label }}
        div(class="tile is-parent is-half")
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{ getContent('text', 'skill.title') }}
            p(class="has-text-white") -
            ul(class="fa-ul")
              li(v-for="item in getContent('skill.bars')")
                ext-icon(
                  class="fa-li is-size-5 has-text-primary" icon="chevron-circle"
                  :style="{ 'padding-top': 0, 'margin-bottom': '0.20em' }"
                )
                span(class="is-size-5") {{ item.name }}
              //- div(v-for="item in getContent('skill.bars')")
              //-   p {{ item.name }}
              //-   progress(
              //-     class="progress is-medium"
              //-     :value="item.percent",
              //-     :max=100
              //-     size="is-medium"
              //-   )
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'About',
  mixins: [content],
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
