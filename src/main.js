import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import LoadingPlugin from "@/plugins/LoadingPlugin";

Vue.config.productionTip = false
Vue.use(LoadingPlugin)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
