<template lang="pug">
v-app
  v-main
    navigation(:items="parts.map(p=>p.nav)")
    home(
      id="home"
      :content="getContent('home')"
    )
    my-part(
      v-for="(item, i) in parts"
      :id="item.id"
      :key="i"
      :title="getContent(item.id).title"
    )
      template(#default)
        component(
          :is="item.component"
          :content="getContent(item.id)"
        )
    my-footer(:content="json['footer']")
</template>

<script setup>
import { Home, About, Expertise, Contact, WorkExperience } from '@/components/parts'
import MyFooter from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'

import json from '@/data/data.json'

const getContent = (id) => json.parts[id]

// f(component id, component, nav icon, nav label, nav target)
const f = (id, component, icon, label, target = id) => ({
  id,
  component,
  nav: { icon, label, target }
})

const parts = [
  ['about', About, 'mdi-information-variant', 'About', 'home'],
  ['expertise', Expertise, 'mdi-account-hard-hat-outline', 'Expertise'],
  ['xp', WorkExperience, 'mdi-gamepad-variant-outline', 'XP'],
  ['contact', Contact, 'mdi-at', 'Contact']
].map(a => f(...a))
</script>
