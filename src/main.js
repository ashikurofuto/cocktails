import './assets/styles/main.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


createApp(App).use(router).use(createPinia()).use(ElementPlus).mount('#app');
