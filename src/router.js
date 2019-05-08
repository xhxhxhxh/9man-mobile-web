import VueRouter from 'vue-router';
import Login from './components/Login/Login.vue';
import Console from './components/Console/Console.vue';
import Homepage from './components/Homepage/Homepage.vue';
import Course from './components/Course/Course.vue';
import User from './components/User/User.vue';
import Setting from './components/Setting/Setting.vue';
import Reset from './components/Setting/Reset.vue';

const router = new VueRouter ({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/setting', component: Setting },
        { path: '/reset', component: Reset },
        {
            path: '/console',
            component: Console,
            redirect: '/console/homepage',
            children: [
                { path: 'homepage', component: Homepage },
                { path: 'course', component: Course },
                { path: 'user', component: User },

            ]
        },

    ]
});

export default router;