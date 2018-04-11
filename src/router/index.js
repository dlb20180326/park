import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import { routes } from './routes';

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    if (/^\/$/.test(to.path) && /^\/main/.test(from.path)) return next(false);

    Vue.$vux.loading.show({ text: '加载中' });

    // if (to.matched.some(record => record.meta.requiresAuth)) {
    if (/^\/login/.test(to.path) || store.getters.user.userid) return next();

    store.dispatch('userinfo').then(
        result => next(),
        error => {
            if (/^\/login/.test(from.path)) {
                Vue.$vux.loading.hide();
                return next(false);
            }
            return next({
                path: '/login',
                query: {
                    openId: to.query.openId || undefined
                }
            });
        }
    );
});

router.afterEach(() => Vue.$vux.loading.hide());

export default router;
