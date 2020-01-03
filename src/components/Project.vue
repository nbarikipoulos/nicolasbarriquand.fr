<template lang="pug">
  div
    //- -----
    //- Card
    //- -----
    div(class="card" :class="{ 'is-shady': hasDetail }" @click="openModal")
      div(class="card-header has-background-primary")
        p(class="card-header-title has-text-white") {{ data['position'] }}
        p(v-if="hasDetail" class="card-header-icon has-text-white")
          b-icon(pack="fa" icon="ellipsis-h")
      div(class="card-content card-content-project")
        ul(class="fa-ul")
          li
            b-icon(class="fa-li" pack="fa" icon="building")
            span(class='has-text-weight-bold')  {{ data['company'] }}
          li
            b-icon(class="fa-li" pack="fa" icon="city")
            span {{ data['location'] }}
          li
            b-icon(class="fa-li" pack="fa" icon="calendar-alt")
            span {{ data['date'] }}
        br
        ul(class="fa-ul")
          li(class="has-text-justified")
            b-icon(class="fa-li" pack="fa" icon="hammer")
            span(style="overflow: hidden;") {{ data['desc'] }}
      footer(class="card-footer project-footer")
        b-taglist
          b-tag(v-for="tag in data['tech']" type="is-primary") {{ tag }}
    //- -----
    //- Modal (aka project details)
    //- -----
    b-modal(:active.sync="isModalActive" has-modal-card)
      div(class="modal-card")

        header(class='modal-card-head has-background-primary')
          p(class='modal-card-title has-text-white') {{ data['position'] }}
          //- button(class='delete' aria-label='close')

        section(class='modal-card-body')
          div(v-for="detail in data['details']" class="box has-text-justified")
            h4(class="title is-5")
              p {{ detail['title'] }}
            ul(v-if="detail['elements']" class="fa-ul")
              li(v-for="element in detail['elements']")
                b-icon(class="fa-li" pack="fa" icon="angle-right")
                span {{ element }}

        footer(class='modal-card-foot')
          b-taglist
            b-tag(v-for="tag in data['tech']" type="is-primary") {{ tag }}
</template>

<script>
export default {
  name: 'Project',
  props: { data: {} },
  data () { return { isModalActive: false } },
  computed: {
    hasDetail: function () { return this.data.details }
  },
  methods: {
    openModal () {
      if (this.hasDetail) {
        this.isModalActive = true
      }
    }
  }
}
</script>
