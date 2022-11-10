<template>
  <layout>
    <profile-info>
      <avatar src="https://github.com/rodriguesabner.png" alt="Abner"/>
      <p>Olá, seja muito bem vindo(a),</p>
      <h1>Abner Rodrigues</h1>
    </profile-info>

    <wrapper-menu>
      <li class="active">
        <router-link to="/app">
          <iconly name="home" type="broken"/>
          <span>
            Dashboard
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/app/contacts">
          <iconly name="profile" type="broken"/>
          <span>
          Contacts
        </span>
        </router-link>
      </li>

      <li>
        <router-link to="/app/chat">
          <iconly name="chat" type="broken"/>
          <span>
            Chat
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/app/">
          <iconly name="setting" type="broken"/>
          <span>
            Settings
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/">
          <iconly name="logout" type="broken"/>
          <span>
            Logout
          </span>
        </router-link>
      </li>
    </wrapper-menu>
  </layout>
</template>

<script src="./Sidebar.js"/>
