<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    div(class="section-heading")
      h1(class="title") {{ getContent('title') }}

    div(class="container subsection")
      div(class="tile is-ancestor")
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
        div(class="tile is-parent is-half")
          div(class="tile is-child box")
            //- FIXME to factorize
            p(class="has-text-centered subtitle is-5") {{ getContent('text', 'figure.title') }}
              div(class="tile is-ancestor")
                div(class="tile is-parent is-vertical is-5")
                  div(class="tile is-child box has-text-centered")
                    span(
                      class="is-size-3 has-text-weight-bold has-text-primary"
                    ) {{ getContent('figures', 'xp', 'value') }}
                    span(
                      class="is-size-6 has-text-weight-bold"
                    )  {{ getContent('figures', 'xp','label') }}
                  div(class="tile is-child box has-text-centered")
                    span(
                      class="is-size-3 has-text-weight-bold has-text-primary"
                    ) {{ getContent('figures', 'project', 'value') }}
                    span(
                      class="is-size-6 has-text-weight-bold"
                    )  {{ getContent('figures', 'project', 'label') }}
                div(class="tile is-parent is-7")
                  div(class="tile is-child box")
                    span(
                      class="is-size-3 has-text-weight-bold has-text-primary"
                    ) {{ getContent('figures', 'client', 'value') }}
                    span(
                      class="is-size-6 has-text-weight-bold"
                    )  {{ getContent('figures', 'client', 'label') }}
                      div(class="image is-16by9")
                        img(src="@/assets/pig.gif")

    div(class="container subsection")
      div(class="tile is-ancestor")
        //- FIXME to factorize
        div(class="tile is-parent is-half")
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{ getContent('skill.text', 'ok', 'title') }}
            ul(class="fa-ul")
              li(v-for="item in getContent('skill.text', 'ok','items')")
                ext-b-icon(class="fa-li" ico="ok" type="is-success")
                p {{ item }}
        div(class="tile is-parent is-half")
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{  getContent('skill.text', 'ko', 'title') }}
            ul(class="fa-ul")
              li(v-for="item in getContent('skill.text', 'ko','items')")
                ext-b-icon(class="fa-li" ico="ko" type="is-danger")
                span {{ item }}
</template>

<script>
import section from '@/mixins/section'

export default {
  name: 'About',
  mixins: [section]
}
</script>
