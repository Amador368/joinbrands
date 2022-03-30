import { createApp } from 'vue'
//import App from './App.vue'
import HomeView from './views/HomeView.vue'
import router from './router'
import './index.css'
createApp(HomeView).use(router).mount('#app')
