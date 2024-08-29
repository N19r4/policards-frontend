import { createMemoryHistory, createRouter } from 'vue-router'
import { FlashcardSetsView, LoginView, SignUpView } from '../views'

const routes = [
  { path: '/', component: LoginView },
  { path: '/sign-up', component: SignUpView },
  { path: '/flashcard-sets', component: FlashcardSetsView},
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
