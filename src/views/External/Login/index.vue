<template>
  <layout>
    <container>
      <p style="margin-bottom: 10px; color: #666">
        WPPConnect Admin
      </p>
      <h1>
        Faça o login para acessar a plataforma
      </h1>

      <formulario>
        <label>
          Email
        </label>
        <input placeholder="admin@wppconnect.com"/>

        <label>
          Digite aqui sua sneha
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
