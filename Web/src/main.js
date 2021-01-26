import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'w3-css/w3.css';
//import 'assets/css/style.css'

import router from './router'

createApp(App).use(router).mount('#app')
