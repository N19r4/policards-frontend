import { createMemoryHistory, createRouter } from 'vue-router'
<<<<<<< Updated upstream
import { MainHubView } from '../views'
import { FlashcardSetsView } from '../views'
=======
import { LibraryView } from '../views'
>>>>>>> Stashed changes
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

const routes = [
<<<<<<< Updated upstream
  { path: '/login', component: () => LoginView },
  {path: '/', component: () => SignUpView},
  { path: '/flashcard-sets', component: () => FlashcardSetsView },
=======
  { path: '/', component: LoginView },
  { path: '/sign-up', component: SignUpView },
  { path: '/library', component: LibraryView },
>>>>>>> Stashed changes
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
