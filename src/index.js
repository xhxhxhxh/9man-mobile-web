import Vue from 'vue';
import VueRouter from 'vue-router';
import './less/index.less';
import router from './router';
import app from './app.vue';
import axios from 'axios'
import Vuex from 'vuex';
import { Button, Radio, Badge, Cell } from 'mint-ui'

Vue.config.productionTip = false;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
Vue.prototype.$axios= axios;

//全局组件
Vue.component(Button.name, Button);
Vue.component(Radio.name, Radio);
Vue.component(Badge.name, Badge);
Vue.component(Cell.name, Cell);

Vue.use(VueRouter);
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        rootUrl: '',
        sessionId: '',
        userInfo: ''
    },
    mutations: {
        //设置id 和 userInfo
        setIdAndUserInfo (state, userInfo) {
            state.sessionId = userInfo.id;
            state.userInfo = userInfo;
        }
    }
});

new Vue({
    el: '#app',
    data: {
        message: '哈哈哈'
    },
    render: c => c(app),
    router,
    store
});