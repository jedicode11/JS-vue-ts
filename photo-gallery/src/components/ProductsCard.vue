<template>
    <ion-card>
        <ion-toolbar>
            <ion-title>Products</ion-title>
            <ion-button slot="secondary" size="small" fill="clear" color="medium">Show ()
            </ion-button>
        </ion-toolbar>

        <ion-card-content>
            <swiper :slides-per-view="2" :modules="modules">
                <swiper-slide class="img-slide">
                    <img alt="1"
                        src="https://img.freepik.com/free-photo/laptop-coffee-cup-with-office-stationery-earphone-gray-business-desk_23-2148080454.jpg?w=1380&t=st=1671608070~exp=1671608670~hmac=b96979a4d2dfe4ee6753e8a0a0d3abe872ea969bd87c62892613d96cb126a435" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="2"
                        src="https://img.freepik.com/free-photo/laptop-spiral-notepad-eye-glasses-black-tea-plant-wooden-table_23-2148080380.jpg?t=st=1671608066~exp=1671608666~hmac=735eb2521363d3577e6cbca9a1c1399519cdd489ecfc51a1df28f2e3644373ad" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="3"
                        src="https://img.freepik.com/free-photo/notebook-technology-gift-shopping-shop-symbol_1418-12.jpg?w=1380&t=st=1671608115~exp=1671608715~hmac=792ac412a15ba61cbb16d7e4be86fef78dfb51974919bc65675d97935dcaf346" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="4"
                        src="https://img.freepik.com/free-photo/laptop-spiral-notepad-eye-glasses-black-tea-plant-wooden-table_23-2148080380.jpg?t=st=1671608066~exp=1671608666~hmac=735eb2521363d3577e6cbca9a1c1399519cdd489ecfc51a1df28f2e3644373ad" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="5"
                        src="https://img.freepik.com/free-photo/blank-spiral-notepad-surrounded-with-office-supplies-gadgets-cup-tea-plant-wooden-table_23-2148080360.jpg" />
                </swiper-slide>

                <swiper-slide class="img-slide">
                    <img alt="6"
                        src="https://img.freepik.com/free-photo/laptop-coffee-cup-with-office-stationery-earphone-gray-business-desk_23-2148080454.jpg?w=1380&t=st=1671608070~exp=1671608670~hmac=b96979a4d2dfe4ee6753e8a0a0d3abe872ea969bd87c62892613d96cb126a435" />
                </swiper-slide>
                <swiper-slide class="img-slide">
                    <img alt="7"
                        src="https://img.freepik.com/free-photo/blank-spiral-notepad-surrounded-with-office-supplies-gadgets-cup-tea-plant-wooden-table_23-2148080360.jpg" />
                </swiper-slide>
            </swiper>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonToolbar, IonTitle, IonButton, IonCardContent, IonCard, } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';


export default defineComponent({
    name: 'ProductsCard',
    components: {
        IonToolbar, IonTitle, IonButton, IonCardContent, IonCard,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Scrollbar],
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