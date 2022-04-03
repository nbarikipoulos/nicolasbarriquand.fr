'use strict'

import { createApp } from 'vue'

import VueScrollTo from 'vue-scrollto'

import App from '@/App.vue'
import { Icon, List, Tags } from '@/components/utils'

const app = createApp(App)

app.use(VueScrollTo)
  .component('MyIcon', Icon)
  .component('MyList', List)
  .component('MyTags', Tags)
  .mount('#app')
