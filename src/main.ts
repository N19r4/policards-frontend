import { createApp } from 'vue'
import { router } from './config/router'

import App from './App.vue'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/lara-light-teal/theme.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
