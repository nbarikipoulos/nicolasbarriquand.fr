<template lang="pug">
  div
    //- -----
    //- Card
    //- -----
    div(class="card" :class="{ 'is-shady': hasDetail }" @click="openModal")
      div(class="card-header")
        p(class="card-header-title") {{ data['position'] }}
        p(v-if="hasDetail" class="card-header-icon")
          b-icon(pack="fa" icon="ellipsis-h has-text-primary")
      div(class="card-content card-content-project")
        ul(class="fa-ul")
          li
            b-icon(class="fa-li" pack="fa" icon="building" type="is-primary")
            span {{ data['company'] }}
          li
            b-icon(class="fa-li" pack="fa" icon="city" type="is-primary")
            span {{ data['location'] }}
          li
            b-icon(class="fa-li" pack="fa" icon="calendar-alt" type="is-primary")
            span {{ data['date'] }}
        br
        ul(class="fa-ul")
          li(class="has-text-justified")
            b-icon(class="fa-li" pack="fa" icon="hammer" type="is-primary")
            span(style="overflow: hidden;") {{ data['desc'] }}
      footer(class="card-footer project-footer")
        b-taglist
          b-tag(v-for="tag in data['tech']" type="is-primary") {{ tag }}
    //- -----
    //- Modal (aka project details)
    //- -----
    b-modal(:active.sync="isModalActive" has-modal-card)
      div(class="modal-card")

        header(class="modal-card-head")
          p(class='modal-card-title') {{ data['position'] }}
          //- button(class="delete" aria-label="close")

        section(class="modal-card-body")
          div(v-for="detail in data['details']" class="box has-text-justified")
            h4(class="title is-6")
              p {{ detail['title'] }}
            ul(v-if="detail['elements']" class="fa-ul")
              li(v-for="element in detail['elements']")
                b-icon(class="fa-li" pack="fa" icon="angle-right")
                span {{ element }}

        footer(class="modal-card-foot")
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
