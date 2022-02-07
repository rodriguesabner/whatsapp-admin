<template>
  <div id="app">
    <sidebar/>
    <layout>
      <header-component/>
      <router-view/>
    </layout>
    <global-styles/>
  </div>
</template>

<script>
import GlobalStyles, { Layout } from '@/styles/GlobalStyles';
// eslint-disable-next-line import/no-unresolved
import Sidebar from './components/Sidebar/index.vue';
import HeaderComponent from './components/Header/index.vue';

export default {
  name: 'App',
  components: {
    GlobalStyles,
    Layout,
    Sidebar,
    HeaderComponent,
  },
};
</script>
