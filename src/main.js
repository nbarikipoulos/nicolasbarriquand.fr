'use strict'

import { createApp } from 'vue'

import VueScrollTo from 'vue-scrollto'

import App from '@/App.vue'
import Icon from '@/components/utils/Icon.vue'

const app = createApp(App)

app.use(VueScrollTo)
  .component('MyIcon', Icon)
  .mount('#app')
