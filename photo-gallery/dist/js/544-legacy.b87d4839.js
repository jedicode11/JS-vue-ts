"use strict";(self["webpackChunkphoto_gallery"]=self["webpackChunkphoto_gallery"]||[]).push([[544],{2642:(e,t,o)=>{o.r(t),o.d(t,{startFocusVisible:()=>c});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ion-focused",n="ion-focusable",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=e=>{let t=[],o=!0;const c=e?e.shadowRoot:document,i=e||document.body,a=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},d=()=>{o=!1,a([])},u=e=>{o=r.includes(e.key),o||a([])},v=e=>{if(o&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));a(t)}},l=()=>{c.activeElement===i&&a([])};c.addEventListener("keydown",u),c.addEventListener("focusin",v),c.addEventListener("focusout",l),c.addEventListener("touchstart",d),c.addEventListener("mousedown",d);const E=()=>{c.removeEventListener("keydown",u),c.removeEventListener("focusin",v),c.removeEventListener("focusout",l),c.removeEventListener("touchstart",d),c.removeEventListener("mousedown",d)};return{destroy:E,setFocus:a}}}}]);
//# sourceMappingURL=544-legacy.b87d4839.js.map