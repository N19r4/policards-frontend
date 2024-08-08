import { createMemoryHistory, createRouter } from 'vue-router'
import { MainHubView } from '../views'
import { FlashcardSetsView } from '../views'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

const routes = [
  { path: '/login', component: () => LoginView },
  {path: '/', component: () => SignUpView},
  { path: '/flashcard-sets', component: () => FlashcardSetsView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
