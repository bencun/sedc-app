import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import store from './store/index.js' -- indentical

Vue.config.productionTip = false

let app = new Vue({
  store,
  render: h => h(App)
})
app.$mount('#app')
