<template>
    <ion-menu content-id="main-content">
        <ion-header>
            <ion-toolbar color="danger">
                <ion-title>LOGO TEC</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-list>
                <ion-item router-link="/home">Home</ion-item>
                <ion-item router-link="/explore">Explore</ion-item>
                <ion-item router-link="/floorplan">Floor Plan</ion-item>
                <ion-item router-link="/networking">Networking</ion-item>
                <ion-item router-link="/myfair">My fair</ion-item>
                <ion-item router-link="/updatedata">Update Data</ion-item>
                <ion-item router-link="/settings">Settings</ion-item>
                <ion-item router-link="/imprint">Imprint</ion-item>                
            </ion-list>
        </ion-content>
    </ion-menu>
</template>


<script lang="ts">
import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonItem, IonList } from '@ionic/vue';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'main-menu',
    components: {
        IonContent,
        IonHeader,
        IonMenu,
        IonTitle,
        IonToolbar,
        IonItem,
        IonList,
    },
    methods: {
        onHome() {
            console.log('on Home');
        },
    },
    setup() {
        return { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star };
    },

});
</script>

