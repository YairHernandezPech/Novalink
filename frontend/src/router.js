import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home.vue';
import Login from './components/login.vue';
import Dashboard from './components/dashboard.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;