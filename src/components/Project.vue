<template lang="pug">
  div
    //- -----
    //- Card
    //- -----
    div(
      class="card"
      :class="{ 'is-shady': hasDetail }"
      @click="openModal"
    )
      div(class="card-header")
        p(class="card-header-title") {{ data['position'] }}
        p(v-if="hasDetail" class="card-header-icon")
          b-icon(
            class="has-text-white"
            :pack="ico('ellipsis')['pack']"
            :icon="ico('ellipsis')['name']"
          )
      div(class="card-content card-content-project")
        ul(class="fa-ul")
          li(v-for="itemId in ['company', 'location', 'date']")
            b-icon(
              class="fa-li"
              :pack="ico(itemId)['pack']"
              :icon="ico(itemId)['name']"
              type="is-icon"
            )
            span {{ data[itemId] }}
        br
        ul(class="fa-ul")
          li
            b-icon(
              class="fa-li"
              :pack="ico('briefcase')['pack']"
              :icon="ico('briefcase')['name']"
              type="is-icon"
            )
            span(style="overflow: hidden;") {{ data['desc'] }}
      footer(class="card-footer project-footer")
        b-taglist
          b-tag(v-for="tag in data['tech']" :key="tag" type="is-white") {{ tag }}
    //- -----
    //- Modal (aka project details)
    //- -----
    b-modal(:active.sync="isModalActive" has-modal-card)
      div(class="modal-card" @click="closeModal")

        header(class="modal-card-head")
          div(class="modal-card-title is-size-6-mobile has-text-bold") {{ data['position'] }}
          b-button(
              class="is-pulled-right is-primary has-text-white"
              size="is-medium"
              rounded
              :icon-pack="ico('times')['pack']"
              :icon-left="ico('times')['name']"
              @click="closeModal"
          )
        section(class="modal-card-body")
          div(
            v-for="detail in data['details']"
            class="box"
          )
            h4(class="has-text-weight-bold has-text-primary")
              p {{ detail['title'] }}
            ul(v-if="detail['elements']" class="fa-ul")
              li(v-for="element in detail['elements']")
                b-icon(
                  class="fa-li"
                  :pack="ico('chevron')['pack']"
                  :icon="ico('chevron')['name']"
                  type="is-icon"
                )
                span {{ element }}

        footer(class="modal-card-foot")
          b-taglist
            b-tag(v-for="tag in data['tech']" :key="tag" type="is-white") {{ tag }}
</template>

<script>
import section from '@/mixins/section'

export default {
  name: 'Project',
  mixins: [section],
  data: _ => ({ isModalActive: false }),
  props: { data: {} },
  computed: {
    hasDetail: function () { return 'details' in this.data }
  },
  methods: {
    openModal () { this.isModalActive = this.hasDetail },
    closeModal () { this.isModalActive = false }
  }
}
</script>
