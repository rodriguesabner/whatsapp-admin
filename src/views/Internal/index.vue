<template>
  <div id="layout__internal_main">
    <sidebar/>
    <div id="layout__internal_column">
      <header-component/>
      <slot>
        <router-view/>
      </slot>
    </div>
  </div>
</template>

<script src="./Internal.js"/>

<style>
#layout__internal_main {
  display: flex;
  height: 100%;
  width: 100%;
}

#layout__internal_column {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
