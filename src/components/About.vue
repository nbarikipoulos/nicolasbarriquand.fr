<template lang="pug">
  section(class="section" :id="data.nav['anchor']")
    div(class="section-heading")
      h1(class="title is-2") {{ data.title }}
      //- p(class="subtitle is-5") {{ data.subtitle }}

    div(class="container subsection")
      p(class="has-text-justified is-size-6 has-text-black") {{ data.intro }}

    div(class="container subsection")
      div(class="tile is-ancestor")
        div(class="tile is-parent is-half")
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{ data.text['skill.title'] }}
              div(v-for="item in data['skill.bars']")
                p {{ item.name }}
                b-progress(
                  :value="item.percent",
                  :max=100
                  size="is-medium"
                )
        div(class="tile is-parent is-half")
          div(class="tile is-child box")
            //- FIXME to factorize
            p(class="has-text-centered subtitle is-5") {{ data.text['figure.title'] }}
              div(class="tile is-ancestor")
                div(class="tile is-parent is-vertical is-5")
                  div(class="tile is-child box has-text-centered")
                    span(
                      class="is-size-3 has-text-weight-bold has-text-primary"
                    ) {{ data['figures']['xp']['value'] }}
                    span(
                      class="is-size-5 has-text-weight-bold"
                    )  {{ data['figures']['xp']['label'] }}
                  div(class="tile is-child box has-text-centered")
                    span(
                      class="is-size-3 has-text-weight-bold has-text-primary"
                    ) {{ data['figures']['project']['value'] }}
                    span(
                      class="is-size-5 has-text-weight-bold"
                    )  {{ data['figures']['project']['label'] }}
                div(class="tile is-parent is-7")
                  div(class="tile is-child box")
                    span(
                      class="is-size-3 has-text-weight-bold has-text-primary"
                    ) {{ data['figures']['client']['value'] }}
                    span(
                      class="is-size-4 has-text-weight-bold"
                    )  {{ data['figures']['client']['label'] }}
                      div(class="image is-16by9")
                        img(src="@/assets/pig.gif")

    div(class="container subsection")
      div(class="tile is-ancestor")
        //- FIXME to factorize
        div(class="tile is-parent is-half has-text-justified")
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{ data['skill.text']['ok']['title'] }}
            ul(class="fa-ul")
              li(v-for="item in data['skill.text']['ok']['items']")
                b-icon( class="fa-li" pack="fa" icon="check" type="is-success")
                p {{ item }}
        div(class="tile is-parent is-half has-text-justified")
          div(class="tile is-child box")
            p(class="has-text-centered subtitle is-5") {{ data['skill.text']['ko']['title'] }}
            ul(class="fa-ul")
              li(v-for="item in data['skill.text']['ko']['items']")
                b-icon( class="fa-li" pack="fa" icon="times" type="is-danger")
                p {{ item }}
</template>
<script>
export default {
  name: 'About',
  props: { data: {} }
}
</script>
