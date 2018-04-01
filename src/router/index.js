import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import { routes } from './routes';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    Vue.$vux.loading.show({ text: '加载中' });

    // if (to.matched.some(record => record.meta.requiresAuth)) {
    if (/^\/login/.test(to.path) || store.state.user.userId) return next();

    store.dispatch('login').then(
        result => next(),
        error =>
            next({
                path: '/login'
                // query: { redirect: to.fullPath }
            })
    );
});

router.afterEach(to => setTimeout(() => Vue.$vux.loading.hide(), 60));

export default router;
