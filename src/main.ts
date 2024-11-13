import App from '@/App.vue'
import '@/assets/css/app.css'
import router from '@/router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');
