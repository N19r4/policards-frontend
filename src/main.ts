import { createApp } from 'vue'
import { router } from './config/router'

import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/lara-dark-teal/theme.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
