import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import AllRepo from '../components/AllRepo.vue';
import MyProfile from '../components/MyProfile.vue';
import PageNotFound from '../components/PageNotFound.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/all-repo',
        component: AllRepo,
    },
    {
        path: '/my-profile',
        component: MyProfile,
    },
    {
        path: '/repos/:id',
        name: 'single-repo',
        component: () => import("../components/SingleRepo.vue")
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: PageNotFound,
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router