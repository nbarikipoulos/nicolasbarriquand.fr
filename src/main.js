import Vue from 'vue'
import Buefy from 'buefy'

import VueScrollTo from 'vue-scrollto'

import App from '@/App.vue'
import Icon from '@/components/utils/Icon'

import json from '@/data/data.json'

Vue.use(Buefy)
Vue.use(VueScrollTo)
Vue.component('ExtBIcon', Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    props: { content: json }
  })
}).$mount('#app')
