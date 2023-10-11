import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RegisterForm from '../components/RegisterForm.vue'
import LoginForm from '../components/LoginForm.vue'
import UserProfile from '../components/UserProfile.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'LoginForm',
        component: LoginForm,
    },
    {
        path: '/register',
        name: 'RegisterForm',
        component: RegisterForm,
    },
    {
        path: '/perfil-voluntario',
        name: 'PerfilVoluntario',
        component: UserProfile,
        props: { userType: 'Voluntario' }
    },
    {
        path: '/perfil-anciano',
        name: 'PerfilAnciano',
        component: UserProfile,
        props: { userType: 'Anciano' }
    },
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;


