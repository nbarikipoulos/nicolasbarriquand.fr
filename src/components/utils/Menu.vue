<template lang="pug">
  nav(class="navbar is-fixed-top has-background-light" id="nav")
    a(
      role="button"
      class="navbar-burger has-text-primary"
      data-target="navMenu"
      aria-label="menu"
      aria-expanded="false"
      ref="burger"
      @click='toggleBurgerMenu()'
    )
      span(aria-hidden="true" class="has-text-primary")
      span(aria-hidden="true" class="has-text-primary")
      span(aria-hidden="true" class="has-text-primary")
    div(
      class="navbar-menu has-background-light"
      role="navigation"
      arial-label="main navigation"
      ref="navMenu"
    )
      div(class="navbar-start has-background-primary px-3 my-2")
        div(
          v-for="(item, index) in navItems"
          :key="index"
          class="navbar-item has-text-weight-bold"
          @click="toggleBurgerMenu()"
        )
          a(
            class="has-text-light is-uppercase"
            v-scroll-to="scroll(item, index)"
          ) {{ item['label'] }}
</template>
<script>
export default {
  name: 'MainMenu',
  props: {
    navItems: { type: Array }
  },
  methods: {
    scroll (item, index) {
      return {
        el: `#${item.anchor}`,
        offset: index ? -35 : -100
      }
    },
    toggleBurgerMenu () {
      ['burger', 'navMenu'].forEach(el => this.$refs[el].classList.toggle('is-active'))
    }
  }
}
</script>
