<template>
    <ion-card>
        <ion-toolbar>
            <ion-title>Events</ion-title>
            <ion-button slot="secondary" size="small" fill="clear" color="medium">Show ()
            </ion-button>
        </ion-toolbar>


        <ion-card-content>
            <swiper :slides-per-view="2" :modules="modules">
                <swiper-slide class="img-slide">
                    <ion-card class="img-card" color="danger">
                        <img alt="1"
                            src="https://images.unsplash.com/photo-1560495458-ccd02e45c962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80" />
                    </ion-card>
                </swiper-slide>
               
                <swiper-slide class="img-slide">
                    <ion-card class="img-card" color="danger">
                        <img alt="2"
                            src="https://images.unsplash.com/photo-1482148829819-e32810d7e13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1262&q=80" />
                        <ion-card-title>3rd Theme Day for Workplace Representatives - NEW WORK</ion-card-title>
                        <ion-card-subtitle>Date: October 11,2022,11:11</ion-card-subtitle>
                    </ion-card>
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <ion-card class="img-card" color="danger">
                        <img alt="3"
                            src="https://images.unsplash.com/photo-1644514934378-f81d61e2d80e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" />
                        <ion-card-title>IBA Forum</ion-card-title>
                        <ion-card-subtitle>Date: October 11,2022,11:11</ion-card-subtitle>
                    </ion-card>
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <ion-card class="img-card" color="danger">
                        <img alt="4"
                            src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <ion-card-title>Materials4Future</ion-card-title>
                        <ion-card-subtitle>Date: October 22,2022,11:11</ion-card-subtitle>
                    </ion-card>
                </swiper-slide>
            </swiper>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonToolbar, IonTitle, IonButton, IonCardTitle, IonCardSubtitle, IonCard, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Autoplay, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default defineComponent({
    name: 'EventsCard',
    components: {
        IonToolbar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle,
        Swiper, SwiperSlide, IonButton, IonTitle,
    },
    setup() {
        return {
            modules: [Autoplay, Scrollbar, EffectFade],
        };
    },
});
</script>

<style>

.img-card {
    width: 400px;
    height: 200px;
    max-width: 400px;
    max-height: 200px;
}

.img-slide {
    margin: 10px;
}

</style>
