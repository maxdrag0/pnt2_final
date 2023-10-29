import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RegisterForm from '../components/RegisterForm.vue'
import LoginForm from '../components/LoginForm.vue'
import UserProfile from '../components/UserProfile.vue'
import User from '../components/User.vue'
import Solicitudes from '../components/Solicitudes.vue'
import CrearUsuario from '../components/CrearUsuario.vue'
import CrearSolicitud from '../components/CrearSolicitud.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/UserProfile/', component: UserProfile },
  { path: '/RegisterForm', component: RegisterForm },
  { path: '/User', component: User },
  { path: '/Solicitudes', component: Solicitudes },
  { path: '/CrearUsuario', component: CrearUsuario },
  { path: '/CrearSolicitud', component: CrearSolicitud },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


