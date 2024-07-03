import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RegisterForm from '../components/RegisterForm.vue';
import UserProfile from '../components/UserProfile.vue';
import User from '../components/User.vue';
import Solicitudes from '../components/Solicitudes.vue';
import CrearSolicitud from '../components/CrearSolicitud.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/UserProfile', component: UserProfile },
  { path: '/RegisterForm/:nombre?/:apellido?/:email?', component: RegisterForm, name: 'RegisterForm' },
  { path: '/User', component: User },
  { path: '/Solicitudes', component: Solicitudes },
  { path: '/CrearSolicitud', component: CrearSolicitud },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


