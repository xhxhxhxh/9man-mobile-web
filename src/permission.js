import router from './router';
import store from './store';
import common from './js/common';

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style


NProgress.configure({showSpinner: false}) // NProgress Configuration

const whiteList = ['/login', '/console/homepage', '/console/notLogin'] // no redirect whitelist

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (common.getLocalStorage('id').length !== 0) {
        if (to.path === '/login') {
            next({path: '/'})
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            if (store.state.identity === '') {
                const info = common.getLocalStorage('userInfo')
                store.commit('setIdentity', info.identity)
                // router.addRoutes([store.getters.roles])
                const redirect = decodeURIComponent(from.query.redirect || to.path)
                if (to.path === redirect) {
                    // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                    next({
                        ...to, replace:
                            true
                    })
                } else {
                    // 跳转到目的路由
                    next({path: redirect})
                }
            } else {
                next()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // console.log(to.path);
            next()
        }else if (whiteList.indexOf('/console/' + to.path.split('/')[2]) !== -1) {
            next()
        } else {
            next({
                path: '/console/notLogin',
                replace: false
            })
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
