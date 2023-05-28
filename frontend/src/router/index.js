import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/About.vue'),
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/pages/BlogDetail.vue')
    },
    {
        path: '/blog/:slug',
        name: 'blog-detail',
        component: () => import('@/pages/BlogDetail.vue')
    }
];


const index = createRouter({
    history: createWebHistory(),
    routes,
});


export default index;