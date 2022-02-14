import Vue from 'vue';
import Iconly from 'vue-iconly';
import PortalVue from 'portal-vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Iconly);
Vue.use(PortalVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
