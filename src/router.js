import VueRouter from 'vue-router';
// import Login from './components/Login/Login.vue';
// import Console from './components/Console/Console.vue';
// import Homepage from './components/Homepage/Homepage.vue';
// import Course from './components/Course/Course.vue';
// import User from './components/User/User.vue';
// import Setting from './components/Setting/Setting.vue';
// import Reset from './components/Setting/Reset.vue';
// import MakeUpCourse from './components/Course/MakeUpCourse.vue';
// import ImproveInfo from './components/Login/ImproveInfo.vue';
// import PersonalInfo from './components/User/PersonalInfo.vue';
// import Avatar from './components/User/Avatar.vue';
// import ModifyName from './components/User/ModifyName.vue';
// import ModifyGender from './components/User/ModifyGender.vue';
const Login = () => import( './components/Login/Login.vue');
const Console = () => import( './components/Console/Console.vue');
const Homepage = () => import( './components/Homepage/Homepage.vue');
const Course = () => import( './components/Course/Course.vue');
const User = () => import( './components/User/User.vue');
const Setting = () => import( './components/Setting/Setting.vue');
const Reset = () => import( './components/Setting/Reset.vue');
const MakeUpCourse = () => import( './components/Course/MakeUpCourse.vue');
const ImproveInfo = () => import( './components/Login/ImproveInfo.vue');
const PersonalInfo = () => import( './components/User/PersonalInfo.vue');
const Avatar = () => import( './components/User/Avatar.vue');
const ModifyName = () => import( './components/User/ModifyName.vue');
const ModifyGender = () => import( './components/User/ModifyGender.vue');

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
        { path: '/console/user/personalInfo/modifyGender', component: ModifyGender },
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