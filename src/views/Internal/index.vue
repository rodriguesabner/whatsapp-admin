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
  overflow: hidden;
}

#layout__internal_column {
  display: block;
  width: calc(100% - 320px);
  overflow: auto;
}

@media screen and (max-width: 1024px) {
  #layout__internal_column{
    width: calc(100% - 100px);
  }
}
</style>
