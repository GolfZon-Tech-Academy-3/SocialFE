import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Login from '../pages/Login.vue';
import Signup from '../pages/Signup.vue';
import Members from '../pages/Mypage/Members.vue';
import Modify from '../pages/Mypage/Modify.vue';
import Mymeeting from '../pages/Mypage/Mymeeting.vue';
import Myactivity from '../pages/Mypage/Myactivity.vue';
import Createmeeting from '../pages/Meeting/Createmeeting.vue';
import Search from '../pages/Search.vue';

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
            path: '/mypage/mymeeting',
            name: 'Mymeeting',
            component: Mymeeting,
        },
        {
            path: '/mypage/myactivity',
            name: 'Myactivity',
            component: Myactivity,
        },
        {
            path: '/meeting/createmeeting',
            name: 'Createmeeting',
            component: Createmeeting,
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
        }
    ]
})

export default router;