import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import AddProductView from '@/views/AddProductView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/addproduct', component: AddProductView }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router;