<template>
    <ion-card>
        <ion-toolbar>
            <ion-title>Industry news</ion-title>
            <ion-button slot="secondary" size="small" fill="clear" color="medium">Show ()
            </ion-button>
        </ion-toolbar>


        <ion-card-content>
            <swiper :slides-per-view="2" :modules="modules">
                <swiper-slide class="img-slide">
                    <ion-card class="img-card" color="danger">
                        <img alt="1"
                            src="https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <ion-card-title>Let there be (the right) light!</ion-card-title>
                    </ion-card>
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <ion-card class="img-card" color="danger">
                        <img alt="2"
                            src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <ion-card-title>FELLOWES TO SHOWCASE MONITOR ARM INNOVATIONS AT</ion-card-title>
                    </ion-card>
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <ion-card class="img-card" color="danger">
                        <img alt="3"
                            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <ion-card-title>COCOONING - vielleich ist die Zukunft des Buros ganz andres?
                        </ion-card-title>
                    </ion-card>
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <ion-card class="img-card" color="danger">
                        <img alt="4"
                            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <ion-card-title>WHAT IF WE FLY</ion-card-title>
                    </ion-card>
                </swiper-slide>
            </swiper>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonToolbar, IonTitle, IonButton, IonCard, IonCardContent, IonCardTitle, } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Autoplay, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';


export default defineComponent({
    name: 'IndustryNewsCard',
    components: {
        IonToolbar, IonTitle, IonCard, IonCardContent, IonCardTitle,
        Swiper, SwiperSlide, IonButton,
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
    height: 300px;
    max-width: 400px;
    max-height: 400px;
}

.img-slide {
    margin: 10px;
}

</style>
