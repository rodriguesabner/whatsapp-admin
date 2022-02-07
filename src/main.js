import Vue from 'vue';
import Iconly from 'vue-iconly';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Iconly);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
