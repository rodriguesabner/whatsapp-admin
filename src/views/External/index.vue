<template>
  <div id="layout__external_main">
    <slot>
      <router-view/>
    </slot>
  </div>
</template>

<script src="./External.js"/>

<style>
#layout__external_main {
  display: flex;
  height: 100%;
  width: 100%;
}

</style>
