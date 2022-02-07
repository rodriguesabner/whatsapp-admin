<template>
  <layout>
    <wrapper-menu>
      <li class="active">
        <router-link to="/">
          <iconly name="home" type="bulk"/>
          <span>
            Dashboard
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/">
          <iconly name="profile" type="bulk"/>
          <span>
          Contacts
        </span>
        </router-link>
      </li>

      <li>
        <router-link to="/chat">
          <iconly name="chat" type="bulk"/>
          <span>
            Chat
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/">
          <iconly name="setting" type="bulk"/>
          <span>
            Settings
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/">
          <iconly name="logout" type="bulk"/>
          <span>
            Logout
          </span>
        </router-link>
      </li>
    </wrapper-menu>
  </layout>
</template>

<script src="./Sidebar.js"/>
