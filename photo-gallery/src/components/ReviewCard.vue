<template>
    <ion-card color="danger">
        <ion-card-content>
            <swiper :slides-per-view="1" :loop="true" :modules="modules" :autoplay="true" :scrollbar="true">
                <swiper-slide>
                    <ion-card-title> <img alt="Brand Logo"
                            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                        NEW VISIONS OF WORK
                    </ion-card-title>
                </swiper-slide>

                <swiper-slide>
                    <ion-card-title><img alt="Buildings and plane"
                            src="https://images.unsplash.com/photo-1602521716590-4667d0574602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                        Discover visionary concepts
                    </ion-card-title>
                </swiper-slide>

                <swiper-slide>
                    <ion-card-title> <img alt="Welcome to ORGATEC"
                            src="https://images.unsplash.com/photo-1574778320881-853c7e4e3dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                        Welcome to ORGATEC
                    </ion-card-title>
                </swiper-slide>

                <swiper-slide>
                    <ion-card-title> <img alt="Laptop Screen"
                            src="https://images.unsplash.com/photo-1544140708-514b7837e6b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                        The office: Hub and home at the same time
                    </ion-card-title>
                </swiper-slide>

                <swiper-slide>
                    <ion-card-title> <img alt="Whole world lamp"
                            src="https://images.unsplash.com/photo-1601762429744-46fe92ccd903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        ORGATEC - Solutions for the whole world of work
                    </ion-card-title>
                </swiper-slide>
            </swiper>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonCardTitle, IonCardContent } from '@ionic/vue';
import { Autoplay, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

export default defineComponent({
    name: 'ReviewCard',
    components: { IonCard, IonCardTitle, IonCardContent, 
        Swiper, SwiperSlide, 
     },
    setup() {
        return {
            modules: [Autoplay, Scrollbar, EffectFade],
        };
    },
});
</script>

<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
}
</style>
