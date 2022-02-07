<template>
  <layout>
    <container>
      <contacts-container>
        <contacts-list>
          <contact-item
            v-for="(contact, index) in contacts"
            :key="index"
            :contact="contact"
            @click="selectContact(contact)"
          >
            <p>
              {{ contact.name }}
            </p>
            <contact-avatar :contact="contact"/>
            <contact-name :contact="contact"/>
          </contact-item>
        </contacts-list>
      </contacts-container>
      <chat-container>

      </chat-container>
    </container>
  </layout>
</template>

<script src="./Chat.js"/>
