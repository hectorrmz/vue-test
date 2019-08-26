import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Axios from 'axios';

Vue.config.productionTip = false;

Axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
