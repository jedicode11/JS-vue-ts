<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>My fair</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'MyFair',
  components: {
    IonHeader,IonTitle,IonToolbar, IonMenuButton, IonButtons, IonPage,
  },
});
</script>