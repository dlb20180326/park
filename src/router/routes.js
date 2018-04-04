export const routes = [
    {
        path: '/',
        // meta: { requiresAuth: true },
        component: () => import('@/views/layout'),
        children: [
            {
                path: '',
                component: () => import('@/views/info')
            },
            {
                path: 'party',
                component: () => import('@/views/party')
            },
            {
                path: 'party/dues',
                component: () => import('@/views/party/dues')
            },
            {
                path: 'points',
                component: () => import('@/views/points')
            },
            {
                path: 'points/evaluate',
                component: () => import('@/views/points/evaluate')
            },
            {
                path: 'activity',
                component: () => import('@/views/activity')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login')
    }
];
