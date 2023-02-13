<template>
    <ion-page id="main-content">
        <ion-header>
            <ion-toolbar color="danger">
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                    <ion-icon slot="icon-only" :icon="star"></ion-icon>
                </ion-buttons>

                <ion-buttons slot="secondary">
                    <ion-button>
                        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
                    </ion-button>
                    <ion-button @click="takePhoto()">
                        <ion-icon slot="icon-only" :icon="camera">

                            <ion-content :fullscreen="true">
                                <ion-header collapse="condense">
                                    <ion-toolbar>
                                        <ion-title size="large">Photo Gallery</ion-title>
                                    </ion-toolbar>
                                </ion-header>
                            </ion-content>

                        </ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-list lines="full">

                <ion-item>
                    <ReviewCard></ReviewCard>
                </ion-item>

                <ion-item>
                    <ExhibitorsCard></ExhibitorsCard>
                </ion-item>

                <ion-item>
                    <ProductsCard></ProductsCard>
                </ion-item>

                <ion-item>
                    <EventsCard></EventsCard>
                </ion-item>

                <ion-item>
                    <IndustryNewsCard></IndustryNewsCard>
                </ion-item>

                <ion-item>
                    <SlideShowCard></SlideShowCard>
                </ion-item>

                <ion-button size="large" color="danger" expand="block">
                    <ion-label color="light"> > Fair information</ion-label>
                </ion-button>

            </ion-list>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import {
    IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar, IonItem, IonList, IonLabel, IonSegment, IonSegmentButton,
    IonIcon, IonTitle,
} from '@ionic/vue';
import { create, ellipsisHorizontal, personCircle, star, camera, trash, close } from 'ionicons/icons';
import { defineComponent } from 'vue';

import ExhibitorsCard from '@/components/ExhibitorsCard.vue'
import ProductsCard from '@/components/ProductsCard.vue';
import EventsCard from '@/components/EventsCard.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import IndustryNewsCard from '@/components/IndustryNewsCard.vue'
import SlideShowCard from '@/components/SlideShowCard.vue'

import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';

export default defineComponent({
    components: { IonButtons, IonButton, IonMenuButton, IonTitle, IonContent, IonHeader, IonPage, IonToolbar, IonItem, IonList, IonLabel,IonIcon,
        ExhibitorsCard,
        ReviewCard,
        ProductsCard,
        EventsCard,
        IndustryNewsCard,
        SlideShowCard,
    },
    methods: {
        onHome() {
            console.log('on Home');
        },
    },
    setup() {
        const { photos, takePhoto } = usePhotoGallery();

        return {
            create, ellipsisHorizontal, personCircle, star, camera, trash, close, photos,
            takePhoto,
        };
    },
});
</script>


<style>
ion-segment-button::part(indicator-background) {
    background: #f30000;
}

.segment-button-checked.md::part(native) {
    color: #f00000;
}

ion-segment-button.md::part(indicator-background) {
    height: 50px;
}

/* iOS styles */
ion-segment-button.ios::part(native) {
    color: #f60000;
}

.segment-button-checked.ios::part(native) {
    color: rgb(243, 0, 0);
}

ion-segment-button.ios::part(indicator-background) {
    border-radius: 30px;
}

ion-title {
    font-weight: bold;
}


ion-button {
    font-weight: bold;
}

ion-card {
margin: 0 !important;
padding: 0 !important;
}

ion-card-content {
margin: 0 !important;
padding: 0 !important;
}


</style>