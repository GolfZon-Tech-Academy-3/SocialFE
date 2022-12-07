import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Login from '../pages/Login.vue';
import Signup from '../pages/Signup.vue';
import Members from '../pages/Members.vue';
import Modify from '../pages/Modify.vue';
import Myclub from '../pages/Myclub.vue';
import Myactivity from '../pages/Myactivity.vue';

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
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup,
        },
        {
            path: '/mypage/members',
            name: 'Members',
            component: Members,
        },
        {
            path: '/mypage/modify',
            name: 'Modify',
            component: Modify,
        },
        {
            path: '/mypage/myclub',
            name: 'Myclub',
            component: Myclub,
        },
        {
            path: '/mypage/myactivity',
            name: 'Myactivity',
            component: Myactivity,
        },
    ]
})

export default router;