<template lang="pug">
  div(class="card modal-button" :class="{ 'is-shady': isDetailed() }")
    div(class="card-header has-background-primary")
      p(class="card-header-title has-text-white") {{ data['position'] }}
      p(v-if="isDetailed()" class="card-header-icon has-text-white")
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
</template>

<script>
export default {
  name: 'Project',
  props: { data: {} },
  methods: {
    isDetailed () { return this.data.details }
  }
}
</script>
