export const routes = [
    {
        path: '/',
        component: () => import('@/views/main')
        // meta: { requiresAuth: true }
    },
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    {
        path: '/about',
        component: () => import('@/views/about')
    }
];
