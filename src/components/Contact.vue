<template lang="pug">
  section(class="section" :id="data.nav['anchor']")
    div(class="section-heading")
      h1(class="title") {{ data.title }}
      //- p(class="subtitle") {{ data.subtitle }}

    div(class="container subsection")
      div(class="columns is-centered is-white")
        div(class="column is-8")
          div(class="columns is-vcentered")
            div(class="column is-6")
              figure(class="image is-16by9")
                img(src="@/assets/location.jpg")
            div(class="column is-6")
              p(v-for="item in data['items']")
                b-icon(pack="fa" :icon="item['icon']" type="is-primary")
                span &nbsp;&nbsp;{{ item['type']}}&nbsp;&nbsp;
                span(v-html="item['value']")
</template>
<script>
export default {
  name: 'Contact',
  props: { data: {} }
}
</script>
