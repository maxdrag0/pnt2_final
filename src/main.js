import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import RegisterForm from './components/RegisterForm.vue'
import LoginForm from './components/LoginForm.vue'

createApp(App).use(router).mount('#app');
