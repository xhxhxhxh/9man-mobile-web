import Vue from 'vue';
import VueRouter from 'vue-router';
import './less/index.less';
import router from './router';
import app from './app.vue';
import axios from 'axios'
import Vuex from 'vuex';
import { Button, Radio, Badge, Cell, Actionsheet } from 'mint-ui'

Vue.config.productionTip = false;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
Vue.prototype.$axios= axios;

//全局组件
Vue.component(Button.name, Button);
Vue.component(Radio.name, Radio);
Vue.component(Badge.name, Badge);
Vue.component(Cell.name, Cell);
Vue.component(Actionsheet.name, Actionsheet);

Vue.use(VueRouter);
Vue.use(Vuex);

//聚焦效果
Vue.directive('focus',{
    inserted: function (el) {
        el.focus();
    }
});
Vue.directive('blur',{
    inserted: function (el) {
        el.blur();
    }
});

const store = new Vuex.Store({
    state: {
        rootUrl: '',
    },
    mutations: {

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