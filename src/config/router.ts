import { createMemoryHistory, createRouter } from 'vue-router'
import { LibraryView } from '../views'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import MainHubView from '../views/MainHubView.vue'

const routes = [
  { path: '/', component: MainHubView },
  { path: '/login', component: LoginView },
  { path: '/sign-up', component: SignUpView },
  { path: '/library', component: LibraryView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
