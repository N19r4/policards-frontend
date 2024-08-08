import { createApp } from 'vue'
import { router } from './config/router'
import { definePreset } from '@primevue/themes'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';


// import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import 'primeflex/themes/primeone-light.css'

const DarkTeal = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{teal.50}',
      100: '{teal.100}',
      200: '{teal.200}',
      300: '{teal.300}',
      400: '{teal.400}',
      500: '{teal.500}',
      600: '{teal.600}',
      700: '{teal.700}',
      800: '{teal.800}',
      900: '{teal.900}',
      950: '{teal.950}',
    },
  },
})

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: DarkTeal,
    options: {
      darkModeSelector: '.app-dark',
    },
  },
  ripple: true,
  pt: {
    card: {
      root: 'pc-card',
    },
  },
})
app.use(router)
app.use(ToastService);
app.directive('tooltip', Tooltip);

app.mount('#app')
