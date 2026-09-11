import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Hero.vue'
import AdmissionView from '../views/Admission.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admission',
      name: 'admission',
      component: AdmissionView,
    }
  ],
})

export default router