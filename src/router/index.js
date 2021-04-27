import { createRouter, createWebHistory } from 'vue-router'
import ChatPage from '../views/ChatPage.vue'

const routes = [
  {
    path: '/',
    name: 'ChatPage',
    component: ChatPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
