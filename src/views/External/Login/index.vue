<template>
  <layout>
    <container>
      <h1>
        login
      </h1>

      <formulario>
        <label>
          Email
        </label>
        <input placeholder="admin@wppconnect.com"/>

        <label>
          Senha
        </label>
        <input placeholder="12345" type="password"/>

        <router-link to="/app">
          Entrar
        </router-link>
      </formulario>
    </container>
  </layout>
</template>

<script src="./Login.js"/>
