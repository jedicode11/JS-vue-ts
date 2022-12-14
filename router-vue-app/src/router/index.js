import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import sourceData from '@/data.json'



const routes = [

  { path: '/', name: "Home", component: HomeView, },

  {

    path: '/protected',

    name: 'protected',

    component: ()=> import('@/views/Protected.vue'),

    meta:{

      requiresAuth: true,

    }

  },

  {

    path: '/login',

    name: 'login',

    component: ()=> import('@/views/Login.vue')

  },

  {

    path: '/link-destin/:id:slug', name: 'destination.show', 

    component: ()=>import('@/views/DestinationShow.vue'),

    props: route=> ({...route.params, id: parseInt(route.params.id)}),

    beforeEnter(to) {

      const exists = sourceData.destinations.find(

        destination => destination.id === parseInt(to.params.id)

      )

      if(!exists) return {
        
        name: 'NotFound',
        
        params: { pathMatch: to.path.split('/').slice(1) },

        query: to.query,

        hash: to.hash,
      
      }

    },

    children:[

      {
        
        path: ':experienceSlug',

        name: 'experience.show',

        component: () => import('@/views/ExperienceShow.vue'),

        props: route=> ({...route.params, id: parseInt(route.params.id)})

      }

  ]

  },

{

  path: '/:patMatch(.*)*',

  name: 'NotFound',

  component: ()=> import('@/views/NotFound.vue')

}

]


const router = createRouter({
  
  history: createWebHistory(),

  routes,

  scrollBehavior (to, form, savedPosition) {

    return savedPosition || new Promise((resolve)=>{

      setTimeout(()=> resolve({ top:0, behavior: 'smooth' }), 300)
    })
  
  }

})

router.beforeEach((to)=>{

  if(to.meta.requiresAuth && !window.user){

    return {name: 'login'}

    // need to login if not already logged in

  }

})

export default router
