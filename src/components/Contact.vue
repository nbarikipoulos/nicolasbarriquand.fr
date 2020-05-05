<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    div(class="section-heading")
      h1(class="title") {{ getContent('title') }}

    div(class="container subsection")
      div(class="columns is-centered is-white")
        div(class="column is-8")
          div(class="columns is-vcentered")
            div(class="column is-6")
              figure(class="image is-16by9")
                img(src="@/assets/location.jpg")
            div(class="column is-6")
              p(v-for="item in getContent('items')")
                ext-b-icon(:ico="item['icon']")
                span &nbsp;&nbsp;{{ item['type'] }}&nbsp;&nbsp;
                span(v-html="item['value']")
</template>

<script>
import section from '@/mixins/section'

export default {
  name: 'Contact',
  mixins: [section]
}
</script>
