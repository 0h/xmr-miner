/* global CoinHive */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueConfig from './lib/mixins/config'

const configs = {
  siteKey: store.state.publicKey
}

Vue.use(vueConfig, configs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
