import Vue from 'vue'
import Vuex from 'vuex'
import vmodal from 'vue-js-modal'
import App from './App.vue'
import store from './store'
Vue.use(Vuex)
Vue.use(vmodal)
const appStore = new Vuex.Store(store)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: appStore
}).$mount('#app')
