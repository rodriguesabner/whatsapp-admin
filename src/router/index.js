import Vue from 'vue';
import VueRouter from 'vue-router';
import External from '../views/External/index.vue';
import Internal from '../views/Internal/index.vue';
import Home from '../views/Internal/Home/index.vue';
import Chat from '../views/Internal/Chat/index.vue';
import Contacts from '../views/Internal/Contacts/index.vue';
import Login from '../views/External/Login/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: External,
    children: [
      {
        path: '',
        name: 'login',
        component: Login,
      },
    ],
  },
  {
    path: '/app',
    name: 'Internal',
    component: Internal,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'chat',
        name: 'Chat',
        component: Chat,
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: Contacts,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
