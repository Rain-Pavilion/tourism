import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'
import './assets/css/font-awesome.css'
import './assets/css/base.css';
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
