import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  
  {
    path: "/blog",
    name: "Blog",
    component: () => import('../views/blog.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
