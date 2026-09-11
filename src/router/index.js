import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Hero.vue'
import AdmissionView from '../views/Admission.vue'
import SampleData from '../views/SampleData.vue'
import SampleMethods from '../views/SampleMethods.vue'
import SampleVmodel from '../views/SampleVmodel.vue'

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
    },
    {
      path: '/sample-data',
      name: 'sampleData',
      component: SampleData,
    },
    {
      path: '/sample-methods',
      name: 'sampleMethods',
      component: SampleMethods,
    },
    {
      path: '/sample-vmodel',
      name: 'sampleVmodel',
      component: SampleVmodel,
    }
  ],
})

export default router