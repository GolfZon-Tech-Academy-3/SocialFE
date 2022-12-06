import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top : 0};
        }
    },
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
        }
    ]
})

export default router;