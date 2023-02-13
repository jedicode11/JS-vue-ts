<template>
  <ion-page id="main-content">
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Hall plan</ion-title>

        <ion-buttons slot="secondary">
          <!-- <ion-button>
                        <ion-icon slot="icon-only" :icon="search"></ion-icon>
                    </ion-button> -->
          <ion-button >
            <ion-icon slot="icon-only" :icon="ellipsisVertical">
              <ion-content>
                <ion-header collapse="condense">
                </ion-header>
              </ion-content>
            </ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    
    <ion-content>
      <ion-card-content :fullscreen="true">
        <img alt="A map"
          src="https://img.freepik.com/free-vector/street-map-desing-with-catering-sector-pins_23-2147618798.jpg?w=740&t=st=1671529374~exp=1671529974~hmac=41e12072cbd8c94f821a1af5bbad044be4c07582efad8df53f0460a6fdf32bf5" />
      </ion-card-content>
    </ion-content>
  </ion-page>
</template>
  
<script lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons, IonCardContent, IonPage, IonButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { create, ellipsisVertical, personCircle, star, search } from 'ionicons/icons';


export default defineComponent({
  name: 'FloorPlan',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons, IonCardContent, IonPage, IonButton, IonIcon },
  methods: {
  },
  setup() {
    
    return {
      create, ellipsisVertical, personCircle, star, search
    };
  },
});
</script>