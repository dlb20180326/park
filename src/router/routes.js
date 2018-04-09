export const routes = [
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    {
        path: '/',
        // meta: { requiresAuth: true },
        component: () => import('@/views/layout'),
        children: [
            {
                path: 'main1',
                component: () => import('@/views/main1')
            },
            {
                path: 'main2',
                component: () => import('@/views/main2')
            },
            {
                path: 'main3',
                component: () => import('@/views/main3')
            },
            {
                path: 'main4',
                component: () => import('@/views/main4')
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
                path: 'party/information',
                component: () => import('@/views/party/information')
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
                name: 'Obtain',
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
                path: 'active/activeDetail',
                component: () => import('@/views/active/activeDetail')
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
    }
];
