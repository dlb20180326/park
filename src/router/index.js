import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/main'),
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            component: () => import('@/views/login')
        },
        {
            path: '/about',
            component: () => import('@/views/about'),
            meta: { requiresAuth: true }
        }
    ]
});

router.beforeEach((to, from, next) => {
    store.commit('updateLoadingStatus', { isLoading: true });
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.user.uid) {
            next({
                path: '/login'
                // query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

router.afterEach(to => {
    setTimeout(() => store.commit('updateLoadingStatus', { isLoading: false }), 60);
});

export default router;
