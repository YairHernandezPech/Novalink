import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home.vue'; // Tu componente original
import Login from './components/login.vue'; // El nuevo componente que creamos

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;