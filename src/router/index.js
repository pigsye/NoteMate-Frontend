import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // App Paths, all app pages are to be under this folder
    path: '/app',
    component: () => import('../views/main_app/AppLayout.vue'),
    // All App Paths
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
