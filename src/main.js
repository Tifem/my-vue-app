import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import './style.css'
import router from './router/index';

import App from './App.vue'

createApp(App).use(router).mount('#app')
