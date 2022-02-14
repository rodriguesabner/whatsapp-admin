<template>
  <div id="app">
    <layout>
      <router-view/>
    </layout>
    <global-styles/>
    <portal-target name="portal">
    </portal-target>
  </div>
</template>

<script>
import GlobalStyles, { Layout } from '@/styles/GlobalStyles';

export default {
  name: 'App',
  components: {
    GlobalStyles,
    Layout,
  },
};
</script>
