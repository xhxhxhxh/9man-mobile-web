import VueRouter from 'vue-router';
import Login from './components/Login/Login.vue';
import Console from './components/Console/Console.vue';
import Homepage from './components/Homepage/Homepage.vue';
import Course from './components/Course/Course.vue';
import User from './components/User/User.vue';
import Setting from './components/Setting/Setting.vue';
import Reset from './components/Setting/Reset.vue';
import MakeUpCourse from './components/Course/MakeUpCourse.vue';
import ImproveInfo from './components/Login/ImproveInfo.vue';
import PersonalInfo from './components/User/PersonalInfo.vue';
import Avatar from './components/User/Avatar.vue';
import ModifyName from './components/User/ModifyName.vue';

const router = new VueRouter ({
    routes: [
        { path: '/', redirect: '/console/homepage' },
        { path: '/login', component: Login },
        { path: '/console/user/setting', component: Setting },
        { path: '/console/user/setting/reset', component: Reset },
        { path: '/console/course/MakeUpCourse', component: MakeUpCourse },
        { path: '/login/improveInfo', component: ImproveInfo },
        { path: '/console/user/personalInfo', component: PersonalInfo },
        { path: '/console/user/personalInfo/avatar', component: Avatar },
        { path: '/console/user/personalInfo/modifyName', component: ModifyName },
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