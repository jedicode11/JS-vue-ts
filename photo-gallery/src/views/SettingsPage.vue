<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-title>Allow collecting of anonymous usage data.</ion-title>
      <p class="ion-padding-horizontal">The additional data traffic is low and you healp us a lot improving the app.
        No personal data is transmitted, The collected information is anonymous and relates only to the use of this
        app.</p>
      <ion-item>
        <ion-checkbox id="terms" @ionChange="onTermsChanged" :checked="canDismiss"></ion-checkbox>
        <ion-label class="ion-text-wrap" for="terms"></ion-label>
        <ion-label class="ion-text-wrap" for="terms">I agree</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, CheckboxCustomEvent, IonContent, IonItem, IonCheckbox, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'SettingsPage',
  components: { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonContent, IonItem, IonCheckbox, IonLabel },
  data() {
    return {
      canDismiss: false,
      presentingElement: undefined,
    };
  },
  methods: {

    onTermsChanged(ev: CheckboxCustomEvent) {
      this.canDismiss = ev.detail.checked;
    },
  },
});
</script>