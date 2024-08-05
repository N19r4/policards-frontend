import { createMemoryHistory, createRouter } from 'vue-router'
import { MainHubView } from '../views'
import { FlashcardSetsView } from '../views'

const routes = [
  { path: '/', component: () => MainHubView },
  { path: '/flashcard-sets', component: () => FlashcardSetsView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
