<template>
    <ion-card>
        <ion-toolbar>
            <ion-title>Exhibitor</ion-title>
            <ion-button slot="secondary" size="small" fill="clear" color="medium">Show ()
            </ion-button>
        </ion-toolbar>


        <ion-card-content>
            <swiper :slides-per-view="4" :modules="modules">
                <swiper-slide class="img-slide">
                    <img alt="1" src="https://img.freepik.com/free-psd/blank-business-card-design-mockup_53876-57938.jpg?w=740&t=st=1671610224~exp=1671610824~hmac=615c5a29e899bd66f10b5a13376123832bc861851b110006fdf477fbbda69cce" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="2" src="https://img.freepik.com/free-psd/blank-business-card-design-mockup_53876-57938.jpg?w=740&t=st=1671610224~exp=1671610824~hmac=615c5a29e899bd66f10b5a13376123832bc861851b110006fdf477fbbda69cce" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="3" src="https://img.freepik.com/free-vector/white-business-card-with-red-details_1435-1363.jpg?t=st=1671599322~exp=1671599922~hmac=fb476e62dccb80d669994e75cf5d15339fdd0eee6834d0a2fcacbf1146abb0d5" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="4" src="https://img.freepik.com/free-vector/boho-business-cards-design-template_23-2149057748.jpg?w=740&t=st=1671610366~exp=1671610966~hmac=57a0c84cbd7964bbf4de0254180959f680b18bfec403d5f8d9d1113b21446dd0" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="5" src="https://img.freepik.com/free-vector/boho-business-cards-design-template_23-2149057748.jpg?w=740&t=st=1671610366~exp=1671610966~hmac=57a0c84cbd7964bbf4de0254180959f680b18bfec403d5f8d9d1113b21446dd0" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="6" src="https://img.freepik.com/free-vector/boho-business-cards-design-template_23-2149057748.jpg?w=740&t=st=1671610366~exp=1671610966~hmac=57a0c84cbd7964bbf4de0254180959f680b18bfec403d5f8d9d1113b21446dd0" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="7" src="https://img.freepik.com/free-vector/boho-business-cards-design-template_23-2149057748.jpg?w=740&t=st=1671610366~exp=1671610966~hmac=57a0c84cbd7964bbf4de0254180959f680b18bfec403d5f8d9d1113b21446dd0" />
                </swiper-slide>
            </swiper>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonToolbar, IonTitle, IonButton, IonCardContent, IonCard, IonSegment, IonSegmentButton } from '@ionic/vue';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';



export default defineComponent({
    name: 'ExhibitorsCard',
    components: {
        IonToolbar, IonTitle, IonButton, IonCardContent, IonCard,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Scrollbar],
            create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star
        };
    },

});
</script>