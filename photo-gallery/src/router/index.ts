import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ExplorePage from '../views/ExplorePage.vue'
import FloorPlan from '../views/FloorPlan.vue'
import NetworkingPage from '../views/NetworkingPage.vue'
import MyFair from '../views/MyFair.vue'
import SettingsPage from '../views/SettingsPage.vue'
import ImprintPage from '../views/ImprintPage.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/explore',
    name: 'ExplorePage',
    component: ExplorePage,
  },
  {
    path: '/floorplan',
    name: 'FloorPlan',
    component: FloorPlan,
  },
  {
    path: '/networking',
    name: 'Networking',
    component: NetworkingPage,
  },
  {
    path: '/myfair',
    name: 'MyFair',
    component: MyFair,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage,
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: ImprintPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router