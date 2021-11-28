import Vue from 'vue'

import VueScrollTo from 'vue-scrollto'

import App from '@/App.vue'
import Icon from '@/components/utils/Icon'
import SectionHeader from '@/components/utils/SectionHeader'
import json from '@/data/data.json'

Vue.use(VueScrollTo)
Vue.component('ExtIcon', Icon)
Vue.component('SectionHeader', SectionHeader)

Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    props: { content: json }
  })
}).$mount('#app')
