<template>
  <layout>
    <wrapper>
      <left-container>
        <iconly name="search" set="bulk"/>
        <input placeholder="Search contact, chat, etc..."/>
        <iconly name="filter" set="bulk"/>
      </left-container>

      <right-container>
        <li class="active">
          <iconly name="message" set="bulk"/>
        </li>

        <li>
          <iconly name="activity" set="bulk"/>
        </li>

        <li>
          <iconly name="notification" set="bulk"/>
        </li>

        <li>
          <iconly name="profile" set="bulk"/>
        </li>
      </right-container>
    </wrapper>
  </layout>
</template>

<script src="./Header.js"/>
