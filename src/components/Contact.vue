<template lang="pug">
  section(class="section" :id="getContent('nav', 'anchor')")
    section-header(
      :title="getContent('title')"
      :subtitle="getContent('subtitle')"
    )
    div(class="container is-fluid pb-5")
      p
        ext-icon(icon="mail" :class="clazz")
        a(:href="`mailto:${mail}`")
          span {{ mail }}
      p
        ext-icon(icon="phone" :class="clazz")
        span {{ phone }}
</template>

<script>
import { content } from '@/mixins'

export default {
  name: 'Contact',
  mixins: [content],
  computed: {
    clazz () { return 'is-size-5 has-text-primary mr-1' },
    mail () { return this.getContent('mail') },
    phone () { return this.getContent('phone') }
  }
}
</script>
