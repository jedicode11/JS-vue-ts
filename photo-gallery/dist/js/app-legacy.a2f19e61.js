(()=>{var e={2330:(e,t,o)=>{var l={"./pwa-action-sheet.entry.js":[3807,807],"./pwa-camera-modal-instance.entry.js":[7890,890],"./pwa-camera-modal.entry.js":[9238,238],"./pwa-camera.entry.js":[3099,99],"./pwa-toast.entry.js":[5816,816]};function a(e){if(!o.o(l,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],a=t[0];return o.e(t[1]).then((()=>o(a)))}a.keys=()=>Object.keys(l),a.id=2330,e.exports=a},1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},6462:(e,t,o)=>{"use strict";o(6992),o(8674),o(7727);var l=o(9963),a=o(6252);function n(e,t,o,l,n,r){const i=(0,a.up)("main-menu"),u=(0,a.up)("ion-router-outlet"),s=(0,a.up)("ion-app");return(0,a.wg)(),(0,a.j4)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i),(0,a.Wm)(u)])),_:1})}var r=o(4281);function i(e,t,o,l,n,r){const i=(0,a.up)("ion-title"),u=(0,a.up)("ion-toolbar"),s=(0,a.up)("ion-header"),d=(0,a.up)("ion-item"),c=(0,a.up)("ion-list"),m=(0,a.up)("ion-content"),p=(0,a.up)("ion-menu");return(0,a.wg)(),(0,a.j4)(p,{"content-id":"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)("LOGO TEC")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(m,{class:"ion-padding"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{"router-link":"/home"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Wm)(d,{"router-link":"/explore"},{default:(0,a.w5)((()=>[(0,a.Uk)("Explore")])),_:1}),(0,a.Wm)(d,{"router-link":"/floorplan"},{default:(0,a.w5)((()=>[(0,a.Uk)("Floor Plan")])),_:1}),(0,a.Wm)(d,{"router-link":"/networking"},{default:(0,a.w5)((()=>[(0,a.Uk)("Networking")])),_:1}),(0,a.Wm)(d,{"router-link":"/myfair"},{default:(0,a.w5)((()=>[(0,a.Uk)("My fair")])),_:1}),(0,a.Wm)(d,{"router-link":"/updatedata"},{default:(0,a.w5)((()=>[(0,a.Uk)("Update Data")])),_:1}),(0,a.Wm)(d,{"router-link":"/settings"},{default:(0,a.w5)((()=>[(0,a.Uk)("Settings")])),_:1}),(0,a.Wm)(d,{"router-link":"/imprint"},{default:(0,a.w5)((()=>[(0,a.Uk)("Imprint")])),_:1})])),_:1})])),_:1})])),_:1})}var u=o(8903);const s=(0,a.aZ)({name:"main-menu",components:{IonContent:r.W2,IonHeader:r.Gu,IonMenu:r.z0,IonTitle:r.wd,IonToolbar:r.sr,IonItem:r.Ie,IonList:r.q_},methods:{onHome(){console.log("on Home")}},setup(){return{create:u.Ue8,ellipsisHorizontal:u.gwR,ellipsisVertical:u.LHl,helpCircle:u.pvH,search:u.yC4,personCircle:u.Y1u,star:u.h_b}}});var d=o(3744);const c=(0,d.Z)(s,[["render",i]]),m=c,p=(0,a.aZ)({name:"App",components:{IonApp:r.dr,IonRouterOutlet:r.jP,MainMenu:m}}),f=(0,d.Z)(p,[["render",n]]),w=f;var b=o(1089);function g(e,t,o,l,n,r){const i=(0,a.up)("ion-menu-button"),u=(0,a.up)("ion-icon"),s=(0,a.up)("ion-buttons"),d=(0,a.up)("ion-button"),c=(0,a.up)("ion-title"),m=(0,a.up)("ion-toolbar"),p=(0,a.up)("ion-header"),f=(0,a.up)("ion-content"),w=(0,a.up)("ReviewCard"),b=(0,a.up)("ion-item"),g=(0,a.up)("ExhibitorsCard"),_=(0,a.up)("ProductsCard"),h=(0,a.up)("EventsCard"),W=(0,a.up)("IndustryNewsCard"),k=(0,a.up)("SlideShowCard"),x=(0,a.up)("ion-label"),I=(0,a.up)("ion-list"),y=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(y,{id:"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{slot:"start"},{default:(0,a.w5)((()=>[(0,a.Wm)(i),(0,a.Wm)(u,{slot:"icon-only",icon:e.star},null,8,["icon"])])),_:1}),(0,a.Wm)(s,{slot:"secondary"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{slot:"icon-only",icon:e.personCircle},null,8,["icon"])])),_:1}),(0,a.Wm)(d,{onClick:t[0]||(t[0]=t=>e.takePhoto())},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{slot:"icon-only",icon:e.camera},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{fullscreen:!0},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{collapse:"condense"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{size:"large"},{default:(0,a.w5)((()=>[(0,a.Uk)("Photo Gallery")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["icon"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(f,{class:"ion-padding"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{lines:"full"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k)])),_:1}),(0,a.Wm)(d,{size:"large",color:"danger",expand:"block"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)(" > Fair information")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}const _=(0,a._)("img",{alt:"1",src:"https://img.freepik.com/free-psd/blank-business-card-design-mockup_53876-57938.jpg?w=740&t=st=1671610224~exp=1671610824~hmac=615c5a29e899bd66f10b5a13376123832bc861851b110006fdf477fbbda69cce"},null,-1),h=(0,a._)("img",{alt:"2",src:"https://img.freepik.com/free-psd/blank-business-card-design-mockup_53876-57938.jpg?w=740&t=st=1671610224~exp=1671610824~hmac=615c5a29e899bd66f10b5a13376123832bc861851b110006fdf477fbbda69cce"},null,-1),W=(0,a._)("img",{alt:"3",src:"https://img.freepik.com/free-vector/white-business-card-with-red-details_1435-1363.jpg?t=st=1671599322~exp=1671599922~hmac=fb476e62dccb80d669994e75cf5d15339fdd0eee6834d0a2fcacbf1146abb0d5"},null,-1),k=(0,a._)("img",{alt:"4",src:"https://img.freepik.com/free-vector/boho-business-cards-design-template_23-2149057748.jpg?w=740&t=st=1671610366~exp=1671610966~hmac=57a0c84cbd7964bbf4de0254180959f680b18bfec403d5f8d9d1113b21446dd0"},null,-1),x=(0,a._)("img",{alt:"5",src:"https://img.freepik.com/free-vector/boho-business-cards-design-template_23-2149057748.jpg?w=740&t=st=1671610366~exp=1671610966~hmac=57a0c84cbd7964bbf4de0254180959f680b18bfec403d5f8d9d1113b21446dd0"},null,-1),I=(0,a._)("img",{alt:"6",src:"https://img.freepik.com/free-vector/boho-business-cards-design-template_23-2149057748.jpg?w=740&t=st=1671610366~exp=1671610966~hmac=57a0c84cbd7964bbf4de0254180959f680b18bfec403d5f8d9d1113b21446dd0"},null,-1),y=(0,a._)("img",{alt:"7",src:"https://img.freepik.com/free-vector/boho-business-cards-design-template_23-2149057748.jpg?w=740&t=st=1671610366~exp=1671610966~hmac=57a0c84cbd7964bbf4de0254180959f680b18bfec403d5f8d9d1113b21446dd0"},null,-1);function v(e,t,o,l,n,r){const i=(0,a.up)("ion-title"),u=(0,a.up)("ion-button"),s=(0,a.up)("ion-toolbar"),d=(0,a.up)("swiper-slide"),c=(0,a.up)("swiper"),m=(0,a.up)("ion-card-content"),p=(0,a.up)("ion-card");return(0,a.wg)(),(0,a.j4)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Exhibitor")])),_:1}),(0,a.Wm)(u,{slot:"secondary",size:"small",fill:"clear",color:"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)("Show () ")])),_:1})])),_:1}),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{"slides-per-view":4,modules:e.modules},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[_])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[W])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[x])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[I])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[y])),_:1})])),_:1},8,["modules"])])),_:1})])),_:1})}var C=o(702),j=o(8014);const H=(0,a.aZ)({name:"ExhibitorsCard",components:{IonToolbar:r.sr,IonTitle:r.wd,IonButton:r.YG,IonCardContent:r.FN,IonCard:r.PM,Swiper:j.tq,SwiperSlide:j.o5},setup(){return{modules:[C.pt,C.LW],create:u.Ue8,ellipsisHorizontal:u.gwR,ellipsisVertical:u.LHl,helpCircle:u.pvH,search:u.yC4,personCircle:u.Y1u,star:u.h_b}}}),M=(0,d.Z)(H,[["render",v]]),U=M,P=(0,a._)("img",{alt:"1",src:"https://img.freepik.com/free-photo/laptop-coffee-cup-with-office-stationery-earphone-gray-business-desk_23-2148080454.jpg?w=1380&t=st=1671608070~exp=1671608670~hmac=b96979a4d2dfe4ee6753e8a0a0d3abe872ea969bd87c62892613d96cb126a435"},null,-1),S=(0,a._)("img",{alt:"2",src:"https://img.freepik.com/free-photo/laptop-spiral-notepad-eye-glasses-black-tea-plant-wooden-table_23-2148080380.jpg?t=st=1671608066~exp=1671608666~hmac=735eb2521363d3577e6cbca9a1c1399519cdd489ecfc51a1df28f2e3644373ad"},null,-1),B=(0,a._)("img",{alt:"3",src:"https://img.freepik.com/free-photo/notebook-technology-gift-shopping-shop-symbol_1418-12.jpg?w=1380&t=st=1671608115~exp=1671608715~hmac=792ac412a15ba61cbb16d7e4be86fef78dfb51974919bc65675d97935dcaf346"},null,-1),G=(0,a._)("img",{alt:"4",src:"https://img.freepik.com/free-photo/laptop-spiral-notepad-eye-glasses-black-tea-plant-wooden-table_23-2148080380.jpg?t=st=1671608066~exp=1671608666~hmac=735eb2521363d3577e6cbca9a1c1399519cdd489ecfc51a1df28f2e3644373ad"},null,-1),O=(0,a._)("img",{alt:"5",src:"https://img.freepik.com/free-photo/blank-spiral-notepad-surrounded-with-office-supplies-gadgets-cup-tea-plant-wooden-table_23-2148080360.jpg"},null,-1),D=(0,a._)("img",{alt:"6",src:"https://img.freepik.com/free-photo/laptop-coffee-cup-with-office-stationery-earphone-gray-business-desk_23-2148080454.jpg?w=1380&t=st=1671608070~exp=1671608670~hmac=b96979a4d2dfe4ee6753e8a0a0d3abe872ea969bd87c62892613d96cb126a435"},null,-1),T=(0,a._)("img",{alt:"7",src:"https://img.freepik.com/free-photo/blank-spiral-notepad-surrounded-with-office-supplies-gadgets-cup-tea-plant-wooden-table_23-2148080360.jpg"},null,-1);function E(e,t,o,l,n,r){const i=(0,a.up)("ion-title"),u=(0,a.up)("ion-button"),s=(0,a.up)("ion-toolbar"),d=(0,a.up)("swiper-slide"),c=(0,a.up)("swiper"),m=(0,a.up)("ion-card-content"),p=(0,a.up)("ion-card");return(0,a.wg)(),(0,a.j4)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Products")])),_:1}),(0,a.Wm)(u,{slot:"secondary",size:"small",fill:"clear",color:"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)("Show () ")])),_:1})])),_:1}),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{"slides-per-view":2,modules:e.modules},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[P])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[B])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[G])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[O])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[D])),_:1}),(0,a.Wm)(d,{class:"img-slide"},{default:(0,a.w5)((()=>[T])),_:1})])),_:1},8,["modules"])])),_:1})])),_:1})}const N=(0,a.aZ)({name:"ProductsCard",components:{IonToolbar:r.sr,IonTitle:r.wd,IonButton:r.YG,IonCardContent:r.FN,IonCard:r.PM,Swiper:j.tq,SwiperSlide:j.o5},setup(){return{modules:[C.pt,C.LW]}}}),F=(0,d.Z)(N,[["render",E]]),A=F,L=(0,a._)("img",{alt:"1",src:"https://images.unsplash.com/photo-1560495458-ccd02e45c962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80"},null,-1),Z=(0,a._)("img",{alt:"2",src:"https://images.unsplash.com/photo-1482148829819-e32810d7e13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1262&q=80"},null,-1),Y=(0,a._)("img",{alt:"3",src:"https://images.unsplash.com/photo-1644514934378-f81d61e2d80e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"},null,-1),q=(0,a._)("img",{alt:"4",src:"https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},null,-1);function V(e,t,o,l,n,r){const i=(0,a.up)("ion-title"),u=(0,a.up)("ion-button"),s=(0,a.up)("ion-toolbar"),d=(0,a.up)("ion-card"),c=(0,a.up)("swiper-slide"),m=(0,a.up)("ion-card-title"),p=(0,a.up)("ion-card-subtitle"),f=(0,a.up)("swiper"),w=(0,a.up)("ion-card-content");return(0,a.wg)(),(0,a.j4)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Events")])),_:1}),(0,a.Wm)(u,{slot:"secondary",size:"small",fill:"clear",color:"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)("Show () ")])),_:1})])),_:1}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{"slides-per-view":2,modules:e.modules},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"img-slide"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"img-card",color:"danger"},{default:(0,a.w5)((()=>[L])),_:1})])),_:1}),(0,a.Wm)(c,{class:"img-slide"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"img-card",color:"danger"},{default:(0,a.w5)((()=>[Z,(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Uk)("3rd Theme Day for Workplace Representatives - NEW WORK")])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Date: October 11,2022,11:11")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(c,{class:"img-slide"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"img-card",color:"danger"},{default:(0,a.w5)((()=>[Y,(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Uk)("IBA Forum")])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Date: October 11,2022,11:11")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(c,{class:"img-slide"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"img-card",color:"danger"},{default:(0,a.w5)((()=>[q,(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Materials4Future")])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Date: October 22,2022,11:11")])),_:1})])),_:1})])),_:1})])),_:1},8,["modules"])])),_:1})])),_:1})}const z=(0,a.aZ)({name:"EventsCard",components:{IonToolbar:r.sr,IonCard:r.PM,IonCardContent:r.FN,IonCardTitle:r.Dq,IonCardSubtitle:r.tO,Swiper:j.tq,SwiperSlide:j.o5,IonButton:r.YG,IonTitle:r.wd},setup(){return{modules:[C.pt,C.LW,C.xW]}}}),R=(0,d.Z)(z,[["render",V]]),$=R,Q=e=>((0,a.dD)("data-v-427a3628"),e=e(),(0,a.Cn)(),e),K=Q((()=>(0,a._)("img",{alt:"Brand Logo",src:"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},null,-1))),J=Q((()=>(0,a._)("img",{alt:"Buildings and plane",src:"https://images.unsplash.com/photo-1602521716590-4667d0574602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"},null,-1))),X=Q((()=>(0,a._)("img",{alt:"Welcome to ORGATEC",src:"https://images.unsplash.com/photo-1574778320881-853c7e4e3dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"},null,-1))),ee=Q((()=>(0,a._)("img",{alt:"Laptop Screen",src:"https://images.unsplash.com/photo-1544140708-514b7837e6b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},null,-1))),te=Q((()=>(0,a._)("img",{alt:"Whole world lamp",src:"https://images.unsplash.com/photo-1601762429744-46fe92ccd903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},null,-1)));function oe(e,t,o,l,n,r){const i=(0,a.up)("ion-card-title"),u=(0,a.up)("swiper-slide"),s=(0,a.up)("swiper"),d=(0,a.up)("ion-card-content"),c=(0,a.up)("ion-card");return(0,a.wg)(),(0,a.j4)(c,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{"slides-per-view":1,loop:!0,modules:e.modules,autoplay:!0,scrollbar:!0},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[K,(0,a.Uk)(" NEW VISIONS OF WORK ")])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[J,(0,a.Uk)(" Discover visionary concepts ")])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[X,(0,a.Uk)(" Welcome to ORGATEC ")])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[ee,(0,a.Uk)(" The office: Hub and home at the same time ")])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[te,(0,a.Uk)(" ORGATEC - Solutions for the whole world of work ")])),_:1})])),_:1})])),_:1},8,["modules"])])),_:1})])),_:1})}o(6162);const le=(0,a.aZ)({name:"ReviewCard",components:{IonCard:r.PM,IonCardTitle:r.Dq,IonCardContent:r.FN,Swiper:j.tq,SwiperSlide:j.o5},setup(){return{modules:[C.pt,C.LW,C.xW]}}}),ae=(0,d.Z)(le,[["render",oe],["__scopeId","data-v-427a3628"]]),ne=ae,re=(0,a._)("img",{alt:"1",src:"https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},null,-1),ie=(0,a._)("img",{alt:"2",src:"https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},null,-1),ue=(0,a._)("img",{alt:"3",src:"https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},null,-1),se=(0,a._)("img",{alt:"4",src:"https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},null,-1);function de(e,t,o,l,n,r){const i=(0,a.up)("ion-title"),u=(0,a.up)("ion-button"),s=(0,a.up)("ion-toolbar"),d=(0,a.up)("ion-card-title"),c=(0,a.up)("ion-card"),m=(0,a.up)("swiper-slide"),p=(0,a.up)("swiper"),f=(0,a.up)("ion-card-content");return(0,a.wg)(),(0,a.j4)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Industry news")])),_:1}),(0,a.Wm)(u,{slot:"secondary",size:"small",fill:"clear",color:"medium"},{default:(0,a.w5)((()=>[(0,a.Uk)("Show () ")])),_:1})])),_:1}),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{"slides-per-view":2,modules:e.modules},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"img-slide"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"img-card",color:"danger"},{default:(0,a.w5)((()=>[re,(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Let there be (the right) light!")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(m,{class:"img-slide"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"img-card",color:"danger"},{default:(0,a.w5)((()=>[ie,(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)("FELLOWES TO SHOWCASE MONITOR ARM INNOVATIONS AT")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(m,{class:"img-slide"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"img-card",color:"danger"},{default:(0,a.w5)((()=>[ue,(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)("COCOONING - vielleich ist die Zukunft des Buros ganz andres? ")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(m,{class:"img-slide"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"img-card",color:"danger"},{default:(0,a.w5)((()=>[se,(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)("WHAT IF WE FLY")])),_:1})])),_:1})])),_:1})])),_:1},8,["modules"])])),_:1})])),_:1})}const ce=(0,a.aZ)({name:"IndustryNewsCard",components:{IonToolbar:r.sr,IonTitle:r.wd,IonCard:r.PM,IonCardContent:r.FN,IonCardTitle:r.Dq,Swiper:j.tq,SwiperSlide:j.o5,IonButton:r.YG},setup(){return{modules:[C.pt,C.LW,C.xW]}}}),me=(0,d.Z)(ce,[["render",de]]),pe=me,fe=(0,a._)("img",{alt:"1",src:"https://as1.ftcdn.net/v2/jpg/01/12/55/88/1000_F_112558872_smoPBSIZPhUEf1R9ekEUFsa8ORFkGsvz.jpg"},null,-1),we=(0,a._)("img",{alt:"2",src:"https://as1.ftcdn.net/v2/jpg/01/12/55/88/1000_F_112558872_smoPBSIZPhUEf1R9ekEUFsa8ORFkGsvz.jpg"},null,-1),be=(0,a._)("img",{alt:"3",src:"https://img.freepik.com/free-vector/realistic-loft-interior_1284-19022.jpg?w=1380&t=st=1671610648~exp=1671611248~hmac=41475b8a4a59bb24f777c44afd5fc58a4cd5b80d1349bcd4088af369b72babb4"},null,-1),ge=(0,a._)("img",{alt:"4",src:"https://img.freepik.com/free-vector/realistic-loft-interior_1284-19022.jpg?w=1380&t=st=1671610648~exp=1671611248~hmac=41475b8a4a59bb24f777c44afd5fc58a4cd5b80d1349bcd4088af369b72babb4"},null,-1);function _e(e,t,o,l,n,r){const i=(0,a.up)("swiper-slide"),u=(0,a.up)("swiper"),s=(0,a.up)("ion-card-content"),d=(0,a.up)("ion-card");return(0,a.wg)(),(0,a.j4)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{"slides-per-view":4,modules:e.modules},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[fe])),_:1}),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[we])),_:1}),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[be])),_:1}),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[ge])),_:1})])),_:1},8,["modules"])])),_:1})])),_:1})}const he=(0,a.aZ)({name:"SlideShowCard",components:{IonCard:r.PM,IonCardContent:r.FN,Swiper:j.tq,SwiperSlide:j.o5},setup(){return{modules:[C.pt,C.LW],create:u.Ue8,ellipsisHorizontal:u.gwR,ellipsisVertical:u.LHl,helpCircle:u.pvH,search:u.yC4,personCircle:u.Y1u,star:u.h_b}}}),We=(0,d.Z)(he,[["render",_e]]),ke=We;o(3948),o(8862);var xe=o(2262),Ie=o(9895),ye=o(6826),ve=o(4406),Ce=o(4571),je=o(5241);function He(){const e=(0,xe.iH)([]),t="photos",o=async()=>{const o=await Ce.u.get({key:t}),l=o.value?JSON.parse(o.value):[];if(!(0,je.a)("hybrid"))for(const e of l){const t=await ve.fy.readFile({path:e.filepath,directory:ve.tP.Data});e.webviewPath=`data:image/jpeg;base64,${t.data}`}e.value=l},l=async()=>{const t=await ye.V1.getPhoto({resultType:ye.dk.Uri,source:ye.oK.Camera,quality:100}),o=(new Date).getTime()+".jpeg",l=await r(t,o);e.value=[l,...e.value]},n=e=>new Promise(((t,o)=>{const l=new FileReader;l.onerror=o,l.onload=()=>{t(l.result)},l.readAsDataURL(e)})),r=async(e,t)=>{let o;if((0,je.a)("hybrid")){const t=await ve.fy.readFile({path:e.path});o=t.data}else{const t=await fetch(e.webPath),l=await t.blob();o=await n(l)}const l=await ve.fy.writeFile({path:t,data:o,directory:ve.tP.Data});return(0,je.a)("hybrid")?{filepath:l.uri,webviewPath:Ie.dV.convertFileSrc(l.uri)}:{filepath:t,webviewPath:e.webPath}},i=()=>{Ce.u.set({key:t,value:JSON.stringify(e.value)})};return(0,a.bv)(o),(0,a.YP)(e,i),{photos:e,takePhoto:l}}const Me=(0,a.aZ)({components:{IonButtons:r.Sm,IonButton:r.YG,IonMenuButton:r.fG,IonTitle:r.wd,IonContent:r.W2,IonHeader:r.Gu,IonPage:r._i,IonToolbar:r.sr,IonItem:r.Ie,IonList:r.q_,IonLabel:r.Q$,IonIcon:r.gu,ExhibitorsCard:U,ReviewCard:ne,ProductsCard:A,EventsCard:$,IndustryNewsCard:pe,SlideShowCard:ke},methods:{onHome(){console.log("on Home")}},setup(){const{photos:e,takePhoto:t}=He();return{create:u.Ue8,ellipsisHorizontal:u.gwR,personCircle:u.Y1u,star:u.h_b,camera:u.nSy,trash:u._Ij,close:u.xvD,photos:e,takePhoto:t}}}),Ue=(0,d.Z)(Me,[["render",g]]),Pe=Ue,Se=(0,a._)("img",{alt:"Red Office",src:"https://images.unsplash.com/photo-1497100022365-1a3688dc53ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1023&q=80"},null,-1);function Be(e,t,o,l,n,r){const i=(0,a.up)("ion-menu-button"),u=(0,a.up)("ion-buttons"),s=(0,a.up)("ion-title"),d=(0,a.up)("ion-toolbar"),c=(0,a.up)("ion-header"),m=(0,a.up)("ion-searchbar"),p=(0,a.up)("ion-card"),f=(0,a.up)("ion-card-content"),w=(0,a.up)("ion-content"),b=(0,a.up)("ion-label"),g=(0,a.up)("ion-button"),_=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(_,{id:"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{slot:"start"},{default:(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1}),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Discover")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{color:"danger"},{default:(0,a.w5)((()=>[Se,(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Discover your personal highlights")])),_:1}),(0,a.Wm)(m,{placeholder:"Program, Exhibitor, Speaker..."})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(g,{size:"large",color:"danger",expand:"block"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)(" > Exhibitors")])),_:1})])),_:1}),(0,a.Wm)(g,{size:"large",color:"danger",expand:"block"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)(" > Programme")])),_:1})])),_:1}),(0,a.Wm)(g,{size:"large",color:"danger",expand:"block"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)(" > Products groups")])),_:1})])),_:1}),(0,a.Wm)(g,{size:"large",color:"danger",expand:"block"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)(" > Products")])),_:1})])),_:1}),(0,a.Wm)(g,{size:"large",color:"danger",expand:"block"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)(" > Trademarks")])),_:1})])),_:1}),(0,a.Wm)(g,{size:"large",color:"danger",expand:"block"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)(" > News")])),_:1})])),_:1})])),_:1})}const Ge=(0,a.aZ)({name:"ExplorePage",components:{IonButtons:r.Sm,IonContent:r.W2,IonHeader:r.Gu,IonMenuButton:r.fG,IonPage:r._i,IonTitle:r.wd,IonToolbar:r.sr,IonButton:r.YG,IonSearchbar:r.VI,IonCardContent:r.FN,IonCard:r.PM,IonLabel:r.Q$}}),Oe=(0,d.Z)(Ge,[["render",Be]]),De=Oe,Te=(0,a._)("img",{alt:"A map",src:"https://img.freepik.com/free-vector/street-map-desing-with-catering-sector-pins_23-2147618798.jpg?w=740&t=st=1671529374~exp=1671529974~hmac=41e12072cbd8c94f821a1af5bbad044be4c07582efad8df53f0460a6fdf32bf5"},null,-1);function Ee(e,t,o,l,n,r){const i=(0,a.up)("ion-menu-button"),u=(0,a.up)("ion-buttons"),s=(0,a.up)("ion-title"),d=(0,a.up)("ion-header"),c=(0,a.up)("ion-content"),m=(0,a.up)("ion-icon"),p=(0,a.up)("ion-button"),f=(0,a.up)("ion-toolbar"),w=(0,a.up)("ion-card-content"),b=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(b,{id:"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{slot:"start"},{default:(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1}),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Hall plan")])),_:1}),(0,a.Wm)(u,{slot:"secondary"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{slot:"icon-only",icon:e.ellipsisVertical},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{collapse:"condense"})])),_:1})])),_:1},8,["icon"])])),_:1})])),_:1})])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{fullscreen:!0},{default:(0,a.w5)((()=>[Te])),_:1})])),_:1})])),_:1})}const Ne=(0,a.aZ)({name:"FloorPlan",components:{IonHeader:r.Gu,IonToolbar:r.sr,IonTitle:r.wd,IonContent:r.W2,IonMenuButton:r.fG,IonButtons:r.Sm,IonCardContent:r.FN,IonPage:r._i,IonButton:r.YG,IonIcon:r.gu},methods:{},setup(){return{create:u.Ue8,ellipsisVertical:u.LHl,personCircle:u.Y1u,star:u.h_b,search:u.yC4}}}),Fe=(0,d.Z)(Ne,[["render",Ee]]),Ae=Fe,Le=(0,a._)("img",{alt:"Brand Logo",src:"https://images.unsplash.com/photo-1525498372-85a5f226615a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},null,-1);function Ze(e,t,o,l,n,r){const i=(0,a.up)("ion-menu-button"),u=(0,a.up)("ion-buttons"),s=(0,a.up)("ion-title"),d=(0,a.up)("ion-toolbar"),c=(0,a.up)("ion-header"),m=(0,a.up)("ion-card-subtitle"),p=(0,a.up)("ion-card-title"),f=(0,a.up)("ion-label"),w=(0,a.up)("ion-button"),b=(0,a.up)("ion-card-content"),g=(0,a.up)("ion-card"),_=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(_,{id:"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{slot:"start"},{default:(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1}),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Networking")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(g,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[Le,(0,a.Uk)(" Welcome "),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Some content and features are only available with a ticket.Log-in to add purchased tickets to the app. ")])),_:1})])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"t-button",size:"large",color:"danger",shape:"round",fill:"outline"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)("Log-in Now")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"t-button",size:"large",color:"danger",shape:"round",fill:"outline"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)("Buy ticket")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"t-button",size:"large",color:"danger",shape:"round",fill:"outline"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{color:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)("Redeem ticket code")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}const Ye=(0,a.aZ)({name:"NetworkingPage",components:{IonButtons:r.Sm,IonMenuButton:r.fG,IonPage:r._i,IonHeader:r.Gu,IonCard:r.PM,IonCardContent:r.FN,IonButton:r.YG,IonCardTitle:r.Dq,IonTitle:r.wd,IonToolbar:r.sr,IonCardSubtitle:r.tO,IonLabel:r.Q$},setup(){return{create:u.Ue8,ellipsisVertical:u.LHl,personCircle:u.Y1u,star:u.h_b,search:u.yC4}}}),qe=(0,d.Z)(Ye,[["render",Ze]]),Ve=qe;function ze(e,t,o,l,n,r){const i=(0,a.up)("ion-menu-button"),u=(0,a.up)("ion-buttons"),s=(0,a.up)("ion-title"),d=(0,a.up)("ion-toolbar"),c=(0,a.up)("ion-header"),m=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(m,{id:"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{slot:"start"},{default:(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1}),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("My fair")])),_:1})])),_:1})])),_:1})])),_:1})}const Re=(0,a.aZ)({name:"MyFair",components:{IonHeader:r.Gu,IonTitle:r.wd,IonToolbar:r.sr,IonMenuButton:r.fG,IonButtons:r.Sm,IonPage:r._i}}),$e=(0,d.Z)(Re,[["render",ze]]),Qe=$e,Ke=(0,a._)("p",{class:"ion-padding-horizontal"},"The additional data traffic is low and you healp us a lot improving the app. No personal data is transmitted, The collected information is anonymous and relates only to the use of this app.",-1);function Je(e,t,o,l,n,r){const i=(0,a.up)("ion-menu-button"),u=(0,a.up)("ion-buttons"),s=(0,a.up)("ion-title"),d=(0,a.up)("ion-toolbar"),c=(0,a.up)("ion-header"),m=(0,a.up)("ion-checkbox"),p=(0,a.up)("ion-label"),f=(0,a.up)("ion-item"),w=(0,a.up)("ion-content"),b=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(b,{id:"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{slot:"start"},{default:(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1}),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Settings")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(w,{class:"ion-padding"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Allow collecting of anonymous usage data.")])),_:1}),Ke,(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{id:"terms",onIonChange:e.onTermsChanged,checked:e.canDismiss},null,8,["onIonChange","checked"]),(0,a.Wm)(p,{class:"ion-text-wrap",for:"terms"}),(0,a.Wm)(p,{class:"ion-text-wrap",for:"terms"},{default:(0,a.w5)((()=>[(0,a.Uk)("I agree")])),_:1})])),_:1})])),_:1})])),_:1})}const Xe=(0,a.aZ)({name:"SettingsPage",components:{IonButtons:r.Sm,IonHeader:r.Gu,IonMenuButton:r.fG,IonPage:r._i,IonTitle:r.wd,IonToolbar:r.sr,IonContent:r.W2,IonItem:r.Ie,IonCheckbox:r.nz,IonLabel:r.Q$},data(){return{canDismiss:!1,presentingElement:void 0}},methods:{onTermsChanged(e){this.canDismiss=e.detail.checked}}}),et=(0,d.Z)(Xe,[["render",Je]]),tt=et;function ot(e,t,o,l,n,r){const i=(0,a.up)("ion-menu-button"),u=(0,a.up)("ion-buttons"),s=(0,a.up)("ion-title"),d=(0,a.up)("ion-toolbar"),c=(0,a.up)("ion-header"),m=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(m,{id:"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:"danger"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{slot:"start"},{default:(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1}),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Legal notice")])),_:1})])),_:1})])),_:1})])),_:1})}const lt=(0,a.aZ)({name:"ImprintPage",components:{IonButtons:r.Sm,IonHeader:r.Gu,IonMenuButton:r.fG,IonPage:r._i,IonTitle:r.wd,IonToolbar:r.sr}}),at=(0,d.Z)(lt,[["render",ot]]),nt=at,rt=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:Pe},{path:"/explore",name:"ExplorePage",component:De},{path:"/floorplan",name:"FloorPlan",component:Ae},{path:"/networking",name:"Networking",component:Ve},{path:"/myfair",name:"MyFair",component:Qe},{path:"/settings",name:"Settings",component:tt},{path:"/imprint",name:"Imprint",component:nt}],it=(0,b.p7)({history:(0,b.PO)("/"),routes:rt}),ut=it;o(8851),o(1292),o(1633),o(1045),o(6187),o(2299),o(3423),o(4687),o(9147),o(6250);var st=o(9495);const dt=(0,l.ri)(w).use(r.oX).use(ut);ut.isReady().then((()=>{dt.mount("#app")})),(0,st.q)(window)}},t={};function o(l){var a=t[l];if(void 0!==a)return a.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,o),n.exports}o.m=e,(()=>{var e=[];o.O=(t,l,a,n)=>{if(!l){var r=1/0;for(d=0;d<e.length;d++){for(var[l,a,n]=e[d],i=!0,u=0;u<l.length;u++)(!1&n||r>=n)&&Object.keys(o.O).every((e=>o.O[e](l[u])))?l.splice(u--,1):(i=!1,n<r&&(r=n));if(i){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,a,n]}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;o.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"===typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"===typeof l.then)return l}var n=Object.create(null);o.r(n);var r={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&l;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>r[e]=()=>l[e]));return r["default"]=()=>l,o.d(n,r),n}})(),(()=>{o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,l)=>(o.f[l](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+({571:"stencil-polyfills-dom",952:"stencil-polyfills-css-shim"}[e]||e)+"-legacy."+{78:"88bcafb8",85:"0b861d75",99:"367cd818",176:"90378759",238:"5f692159",338:"cace1bdb",515:"c4549f2a",541:"d04f656c",544:"b87d4839",571:"e4ecc4b8",576:"d181fbee",601:"4bedc8a0",753:"9e701f3f",775:"d8fc28d2",806:"bd928739",807:"bbd14c77",816:"257b06d9",823:"bf79f7a1",890:"2c3744ca",952:"c996af3a",990:"8875bce0"}[e]+".js"})(),(()=>{o.miniCssF=e=>{}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="photo-gallery:";o.l=(l,a,n,r)=>{if(e[l])e[l].push(a);else{var i,u;if(void 0!==n)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==l||c.getAttribute("data-webpack")==t+n){i=c;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+n),i.src=l),e[l]=[a];var m=(t,o)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[l];if(delete e[l],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(o))),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="/"})(),(()=>{var e={143:0};o.f.j=(t,l)=>{var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)l.push(a[2]);else{var n=new Promise(((o,l)=>a=e[t]=[o,l]));l.push(a[2]=n);var r=o.p+o.u(t),i=new Error,u=l=>{if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=l&&("load"===l.type?"missing":l.type),r=l&&l.target&&l.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,a[1](i)}};o.l(r,u,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,l)=>{var a,n,[r,i,u]=l,s=0;if(r.some((t=>0!==e[t]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(u)var d=u(o)}for(t&&t(l);s<r.length;s++)n=r[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},l=self["webpackChunkphoto_gallery"]=self["webpackChunkphoto_gallery"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var l=o.O(void 0,[998],(()=>o(6462)));l=o.O(l)})();
//# sourceMappingURL=app-legacy.a2f19e61.js.map