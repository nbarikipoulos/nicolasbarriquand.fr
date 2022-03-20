<template lang="pug">
nav(
  class="navbar is-fixed-top has-background-light"
  id="nav"
)
  a(
    role="button"
    class="navbar-burger has-text-primary"
    data-target="navMenu"
    aria-label="menu"
    aria-expanded="false"
    :ref="el => { divs.push(el) }"
    @click='toggleBurgerMenu()'
  )
    span(
      v-for="i in 3"
      :key="i"
      aria-hidden="true"
      class="has-text-primary"
    )
  div(
    class="navbar-menu has-background-light"
    role="navigation"
    arial-label="main navigation"
    :ref="el => { divs.push(el) }"
  )
    div(class="navbar-start has-background-primary px-3 my-2")
      div(
        v-for="(item, i) in navItems"
        :key="i"
        class="navbar-item has-text-weight-bold"
        @click="toggleBurgerMenu()"
      )
        a(
          class="has-text-light is-uppercase"
          v-scroll-to="scroll(item, i)"
        ) {{ item['label'] }}
</template>

<script setup>
/* eslint no-unused-vars : 'off' */
import { ref } from 'vue'

const props = defineProps({
  navItems: {
    type: Array, 
    default: _ => []
  }
})

// Store "normal"/burger div
const divs = ref([])

const toggleBurgerMenu = _ => {
  divs.value.forEach(el => el.classList.toggle('is-active'))
}

const scroll = (item, index) => {
  return {
    el: `#${item.anchor}`,
    offset: index ? -35 : -100
  }
}
</script>
