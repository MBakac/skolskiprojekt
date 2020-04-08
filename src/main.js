import Vue from 'vue'
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'
import router from "./router"
import App from "./views/App"

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')