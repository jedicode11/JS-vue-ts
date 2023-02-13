<template>
  <ion-app>
    <main-menu></main-menu>
    <ion-router-outlet>

    </ion-router-outlet>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import MainMenu from '@/components/MainMenu.vue';


export default defineComponent({
  name: 'App',

  components: {
    IonApp, IonRouterOutlet, MainMenu,
  },
});
</script>