<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Networking</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-card color="danger">
      <ion-card-content>
        <ion-card-title> <img alt="Brand Logo"
            src="https://images.unsplash.com/photo-1525498372-85a5f226615a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          Welcome
          <ion-card-subtitle>
            Some content and features are only available with a ticket.Log-in to add purchased tickets to the app.
          </ion-card-subtitle>
        </ion-card-title>

        <ion-toolbar>
          <ion-button class="t-button" size="large" color="danger" shape="round" fill="outline">
            <ion-label color="light">Log-in Now</ion-label>
          </ion-button>
        </ion-toolbar>

        <ion-toolbar>
          <ion-button class="t-button" size="large" color="danger" shape="round" fill="outline">
            <ion-label color="light">Buy ticket</ion-label>
          </ion-button>
        </ion-toolbar>

        <ion-toolbar>
          <ion-button class="t-button" size="large" color="danger" shape="round" fill="outline">
            <ion-label color="light">Redeem ticket code</ion-label>
          </ion-button>
        </ion-toolbar>



      </ion-card-content>
    </ion-card>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonMenuButton, IonPage, IonHeader, IonButton, IonLabel, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import { create, ellipsisVertical, personCircle, star, search } from 'ionicons/icons';

export default defineComponent({
  name: 'NetworkingPage',
  components: {
    IonButtons, IonMenuButton, IonPage, IonHeader, IonCard, IonCardContent, IonButton, IonCardTitle, IonTitle, IonToolbar, IonCardSubtitle, IonLabel,
  },
  setup() {

    return {
      create, ellipsisVertical, personCircle, star, search
    };
  },
});
</script>

<style>
ion-card {
  height: 100%;
  margin: 15px;
}

.t-button {
  width: 100%;
 
}
</style>