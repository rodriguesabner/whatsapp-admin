<template>
  <layout>
    <top-content>
      <title-component>
        Enviar Mensagem
      </title-component>
    </top-content>

    <top-separator />

    <users-list>
      <li>
        <plus-button>
          +
        </plus-button>
      </li>
      <li>
        <img src="https://github.com/rodriguesabner.png"/>
      </li>
      <li>
        <img src="https://github.com/rodriguesabner.png"/>
      </li>
      <li>
        <img src="https://github.com/rodriguesabner.png"/>
      </li>
      <li>
        <img src="https://github.com/rodriguesabner.png"/>
      </li>
    </users-list>

    <top-content style="margin-top: 2em;">
      <title-component>
        Mensagens Agendadas
      </title-component>
    </top-content>

    <top-separator />

    <carousel :nav="false" :dots="false" :stagePadding="30" >
      <user-card>
        <p>
          10/11/22 10:00h
        </p>

        <div>
          <img src="https://github.com/rodriguesabner.png"/>
          <p>
            Olá, tudo bem?
          </p>
        </div>
      </user-card>
      <user-card>
        <p>
          10/11/22 10:00h
        </p>

        <div>
          <img src="https://github.com/rodriguesabner.png"/>
          <p>
            Olá, tudo bem?
          </p>
        </div>
      </user-card>
      <user-card>
        <p>
          10/11/22 10:00h
        </p>

        <div>
          <img src="https://github.com/rodriguesabner.png"/>
          <p>
            Olá, tudo bem?
          </p>
        </div>
      </user-card>
      <user-card>
        <p>
          10/11/22 10:00h
        </p>

        <div>
          <img src="https://github.com/rodriguesabner.png"/>
          <p>
            Olá, tudo bem?
          </p>
        </div>
      </user-card>
    </carousel>
  </layout>
</template>

<script src="./SendMessageShortcut.js"/>
