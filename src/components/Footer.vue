<template lang="pug">
  footer(class="footer")
    div(class="columns is-mobile content is-vcentered  has-text-centered is-marginless")
        div(class="column is-narrow")
          span {{ getContent('copy') }}
        div(class="column has-text-right")
          a(
            v-for="item in getContent('links')"
            :href="item['url']",
            target="_blank"
          )
            ext-icon(
              :icon="item['icon']"
              class="has-text-white"
            )
        //- div(class="column is-narrow")
          //- a(
          //-   class="",
          //-   href="https://bulma.io",
          //-   target="_blank"
          //- )
          //-   img(
          //-     src="https://bulma.io/images/made-with-bulma--semiwhite.png",
          //-     alt="Made with Bulma" width="128" height="24"
          //-   )
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'Footer',
  mixins: [content]
}
</script>
