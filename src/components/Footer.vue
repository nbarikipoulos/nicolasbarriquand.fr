<template lang="pug">
  footer(class='footer')
    div(class='content')
      div(class='columns is-vcentered is-marginless')
        div(class='column is-full')
          span {{ data['copy'] }}
          a(
            class='is-pulled-right',
            href="https://bulma.io",
            target="_blank"
          )
            img(
              src="https://bulma.io/images/made-with-bulma--dark.png",
              alt="Made with Bulma" width="128" height="24"
            )
</template>
<script>
export default {
  name: 'Footer',
  props: { data: {} }
}
</script>
