<template>
  <layout>
    <wrapper-menu>
      <li class="active">
        <iconly name="home" type="bulk" />
        <router-link to="/">Dashboard</router-link>
      </li>

      <li>
        <iconly name="profile" type="bulk" />
        <router-link to="/">Contacts</router-link>
      </li>

      <li>
        <iconly name="chat" type="bulk" />
        <router-link to="/">Chat</router-link>
      </li>

      <li>
        <iconly name="setting" type="bulk" />
        <router-link to="/">Settings</router-link>
      </li>

      <li>
        <iconly name="logout" type="bulk" />
        <router-link to="/">Logout</router-link>
      </li>
    </wrapper-menu>
  </layout>
</template>

<script src="./Sidebar.js"/>
