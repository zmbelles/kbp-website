import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ✅ same directory, no /index
import './style.css'

createApp(App).use(router).mount('#app')
