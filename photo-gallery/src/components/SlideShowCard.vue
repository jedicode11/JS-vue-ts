<template>
    <ion-card>
        <ion-card-content>
            <swiper :slides-per-view="4" :modules="modules">
                <swiper-slide>
                    <img alt="1" src="https://as1.ftcdn.net/v2/jpg/01/12/55/88/1000_F_112558872_smoPBSIZPhUEf1R9ekEUFsa8ORFkGsvz.jpg" />
                </swiper-slide>

                <swiper-slide>
                    <img alt="2" src="https://as1.ftcdn.net/v2/jpg/01/12/55/88/1000_F_112558872_smoPBSIZPhUEf1R9ekEUFsa8ORFkGsvz.jpg"/>
                </swiper-slide>

                <swiper-slide>
                    <img alt="3" src="https://img.freepik.com/free-vector/realistic-loft-interior_1284-19022.jpg?w=1380&t=st=1671610648~exp=1671611248~hmac=41475b8a4a59bb24f777c44afd5fc58a4cd5b80d1349bcd4088af369b72babb4" />
                </swiper-slide>

                <swiper-slide>
                    <img alt="4" src="https://img.freepik.com/free-vector/realistic-loft-interior_1284-19022.jpg?w=1380&t=st=1671610648~exp=1671611248~hmac=41475b8a4a59bb24f777c44afd5fc58a4cd5b80d1349bcd4088af369b72babb4" />
                </swiper-slide>
                
            </swiper>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent } from '@ionic/vue';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';


export default defineComponent({
    name: 'SlideShowCard',
    components: {
        IonCard, IonCardContent,
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
