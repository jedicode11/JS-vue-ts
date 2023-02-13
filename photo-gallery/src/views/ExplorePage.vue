<template>
    <ion-page id="main-content">
        <ion-header>
            <ion-toolbar color="danger">
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>Discover</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-card-content>
                <ion-card color="danger">
                    <img alt="Red Office"
                        src="https://images.unsplash.com/photo-1497100022365-1a3688dc53ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1023&q=80" />
                    <ion-title>Discover your personal highlights</ion-title>
                    <ion-searchbar placeholder="Program, Exhibitor, Speaker..."></ion-searchbar>
                </ion-card>
            </ion-card-content>
        </ion-content>

        <ion-button size="large" color="danger" expand="block">
            <ion-label color="light"> > Exhibitors</ion-label>
        </ion-button>

        <ion-button size="large" color="danger" expand="block">
            <ion-label color="light"> > Programme</ion-label>
        </ion-button>

        <ion-button size="large" color="danger" expand="block">
            <ion-label color="light"> > Products groups</ion-label>
        </ion-button>

        <ion-button size="large" color="danger" expand="block">
            <ion-label color="light"> > Products</ion-label>
        </ion-button>

        <ion-button size="large" color="danger" expand="block">
            <ion-label color="light"> > Trademarks</ion-label>
        </ion-button>

        <ion-button size="large" color="danger" expand="block">
            <ion-label color="light"> > News</ion-label>
        </ion-button>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonButtons, IonContent, IonButton, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonSearchbar, IonSegment, IonSegmentButton, IonCardContent, IonCard, IonLabel,
} from '@ionic/vue';


export default defineComponent({
    name: 'ExplorePage',
    components: {
        IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonSearchbar, IonCardContent, IonCard, IonLabel,
    },

});
</script>

