<template lang="pug">
  footer(class="footer")
    div(class="columns content is-vcentered  has-text-centered is-marginless")
        div(class="column is-narrow")
          span {{ getContent('copy') }}
        div(class="column")
          a(
            v-for="item in getContent('links')"
            :href="item['url']",
            target="_blank"
          )
            ext-b-icon(
              :ico="item['icon']"
              type="is-white"
              :style="{'margin':'0.1em'}"
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
import content from '@/mixins/content'

export default {
  name: 'Footer',
  mixins: [content]
}
</script>
