<template>
  <layout>
    <p class="title">
      Conecte-se ao seu dispositivo
    </p>
    <container>
      <li>
        <qrcode-vue
          :value="value"
          :size="size"
          level="H"
          background="#1a1d21"
          foreground="#fff"
        />
      </li>

      <li>
        <p>
          Status da conexão:
        </p>
        <h2>
          Desconectado
        </h2>

        <p>
          Última conexão:
        </p>
        <h2>
          30 minutos
        </h2>

        <p>
          Última sincronização:
        </p>
        <h2>
          1 dia
        </h2>
      </li>

    </container>
  </layout>
</template>

<script src="./MobilePair.js"/>
