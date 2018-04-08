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
                path: 'party/branch',
                component: () => import('@/views/party/branch')
            },
            {
                path: 'party/member',
                component: () => import('@/views/party/member')
            },
            {
                path: 'points',
                component: () => import('@/views/points')
            },
            {
                path: 'points/evaluation',
                component: () => import('@/views/points/evaluation')
            },
            {
                path: 'points/obtain',
                component: () => import('@/views/points/obtain')
            },
            {
                path: 'active',
                component: () => import('@/views/active')
            },
            {
                path: 'active/detail',
                component: () => import('@/views/active/detail')
            },
            {
                path: 'active/detailPack',
                component: () => import('@/views/active/detailPack')
            },
            {
                path: 'active/post',
                component: () => import('@/views/active/post')
            },
            {
                path: 'active/new',
                component: () => import('@/views/active/new')
            },
            {
                path: 'life',
                component: () => import('@/views/life')
            },
            {
                path: 'life/lifePack',
                component: () => import('@/views/life/lifePack')
            },
            {
                path: 'life/organize',
                component: () => import('@/views/life/organize')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login')
    }
];
