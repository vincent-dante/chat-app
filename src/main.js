
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap-icons/font/bootstrap-icons';

createApp(App).use(router).use(bootstrap).mount('#app')
