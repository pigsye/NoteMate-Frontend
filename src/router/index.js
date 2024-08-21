import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/app',
    component: () => import('../views/main_app/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/main_app/HomePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
