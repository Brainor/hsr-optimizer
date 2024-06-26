import 'primevue/resources/themes/md-dark-indigo/theme.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.mount('#app')
