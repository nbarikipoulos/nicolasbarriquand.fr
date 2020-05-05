import Vue from 'vue'
import Buefy from 'buefy'

import App from '@/App.vue'
import Icon from '@/components/utils/Icon'

Vue.use(Buefy)
Vue.component('ExtBIcon', Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
