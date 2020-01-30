<template lang="pug">
  footer(class="footer")
    div(class="columns content is-vcentered  has-text-centered")
        div(class="column is-narrow")
          span {{ data['copy'] }}
        div(class="column")
          a(
            v-for="item in data['links']"
            :href="item['url']",
            target="_blank"
          )
            b-icon(
              pack="fab"
              :icon="item['icon']"
              type="is-primary"
            )
        div(class="column is-narrow")
          a(
            class="",
            href="https://bulma.io",
            target="_blank"
          )
            img(
              src="https://bulma.io/images/made-with-bulma--semiwhite.png",
              alt="Made with Bulma" width="128" height="24"
            )
</template>
<script>
export default {
  name: 'Footer',
  props: { data: {} }
}
</script>
