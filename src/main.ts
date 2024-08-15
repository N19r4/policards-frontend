import { createApp } from 'vue'
import { router } from './config/router'
import { definePreset } from '@primevue/themes'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import 'primeflex/themes/primeone-dark.scss'

const DarkTeal = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '{indigo.50}',
          100: '{indigo.100}',
          200: '{indigo.200}',
          300: '{indigo.300}',
          400: '{indigo.400}',
          500: '{indigo.500}',
          600: '{indigo.600}',
          700: '{indigo.700}',
          800: '{indigo.800}',
          900: '{indigo.900}',
          950: '{indigo.950}',
        },
      },
    },
  },
})

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: DarkTeal,
    options: {
      darkModeSelector: 'system',
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
app.use(ToastService)
app.directive('tooltip', Tooltip)

app.mount('#app')
