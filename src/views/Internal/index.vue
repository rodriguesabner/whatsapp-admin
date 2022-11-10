<template>
  <div id="layout__internal_column">
    <header-component/>
    <div id="layout__internal_main">
      <sidebar/>
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
  height: calc(100vh - 68px);
  width: 100%;
  overflow: hidden;
}

#layout__internal_column {
  display: block;
  overflow: hidden;
}

@media screen and (max-width: 1024px) {
  #layout__internal_column {
    width: calc(100% - 100px);
  }
}
</style>
