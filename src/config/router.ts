import { createMemoryHistory, createRouter } from 'vue-router'
import { FlashcardSetsView, LoginView, SignUpView } from '../views'

const routes = [
  { path: '/', component: SignUpView },
  { path: '/login', component: LoginView },
  { path: '/flashcard-sets', component: FlashcardSetsView},
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
