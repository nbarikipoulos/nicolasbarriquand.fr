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
          ext-b-icon(ico="ellipsis" type="is-white")
      div(class="card-content card-content-project")
        ul(class="fa-ul")
          li(v-for="id in ['company', 'location', 'date']")
            ext-b-icon(class="fa-li" :ico="id")
            span {{ data[id] }}
        br
        ul(class="fa-ul")
          li
            ext-b-icon(class="fa-li" ico="briefcase")
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
              :icon-pack="closeIcon['pack']"
              :icon-left="closeIcon['name']"
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
                ext-b-icon(class="fa-li" ico="chevron")
                span {{ element }}

        footer(class="modal-card-foot")
          b-taglist
            b-tag(v-for="tag in data['tech']" :key="tag" type="is-white") {{ tag }}
</template>

<script>
import section from '@/mixins/section'

import iconStore from '@/lib/utils/iconStore'

export default {
  name: 'Project',
  mixins: [section],
  data: _ => ({ isModalActive: false, closeIcon: iconStore.get('times') }),
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
