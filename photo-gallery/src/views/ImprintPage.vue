<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Legal notice</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'ImprintPage',
  components: {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>