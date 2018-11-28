/* eslint-disable */ 
import Vue from "vue";
import App from "./App.vue";
// import VuePluginStarter from '../dist/vue-plugin-starter.common.js'
// import VuePluginStarter from './../dist/vue-plugin-starter.umd.js'
// const VuePluginStarter = require('./../dist/vue-plugin-starter.common.js').default
// const VuePluginStarter = require('./../dist/vue-plugin-starter.umd.js')
import VuePluginStarter from '../src/index.js'
Vue.config.productionTip = false;
console.log(VuePluginStarter)
Vue.use(VuePluginStarter)
new Vue({
  render: h => h(App)
}).$mount("#app");
