import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [{ path: '/', component: () => HelloWorld }]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
