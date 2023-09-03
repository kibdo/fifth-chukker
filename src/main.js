import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/tailwind.min.css'
import '@/assets/fontawesome-free-5.15.1-web/fontawesome-free-5.15.1-web/css/all.css'
import '@/assets/bootstrap-icons/bootstrap-icons.css'
import '@/assets/boxicons/css/boxicons.min.css'
import '@/assets/css/style.css'
createApp(App).use(router).mount('#app')
