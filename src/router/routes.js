import store from '../store';

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
                path: '',
                beforeEnter: (to, from, next) =>
                    next({ path: /^\/$/.test(to.path) ? '/main' + store.getters.user.roleid : to.path })
            },
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
                name: 'Dues',
                component: () => import('@/views/party/dues')
            },
            {
                path: 'party/branch',
                component: () => import('@/views/party/branch')
            },
            {
                path: 'party/member/',
                name: 'member',
                component: () => import('@/views/party/member')
            },
            {
                path: 'party/information',
                name: 'information',
                component: () => import('@/views/party/information')
            },
            {
                path: 'party/partyDetail',
                name: 'pointDetail',
                component: () => import('@/views/party/partyDetail')
            },
            {
                path: 'party/partyPoint',
                name: 'partypointdetail',
                component: () => import('@/views/party/partyPointDetail')
            },
            {
                path: 'points',
                component: () => import('@/views/points')
            },
            {
                path: 'points/assess',
                component: () => import('@/views/points/assess')
            },
            {
                path: 'points/review',
                component: () => import('@/views/points/review')
            },
            {
                path: 'points/evaluation',
                component: () => import('@/views/points/evaluation')
            },
            {
                path: 'points/obtain/:userid/:year',
                name: 'Obtain',
                component: () => import('@/views/points/obtain')
            },
            {
                path: 'points/audit1/:partmentId/:name/:departmentId/:userId',
                name: 'Audit1',
                props:true,
                component: () => import('@/views/points/auditDetail1')
            },
	        {
	            path: 'points/audit/:partmentId/:name/:departmentId/:userId',
                name: 'Audit',
                props:true,
	            component: () => import('@/views/points/auditDetail')
	        },
            {
                path: 'points/pointDetail',
                component: () => import('@/views/points/pointDetail')
            },
            {
                path: 'points/addPoint/:projectId/:moduleId',
                name: 'addPoint',
                component: () => import('@/views/points/addPoint')
            },
            {
                path: 'points/pointEvaluate/:partmentId/:name/:departmentId/:userId',
                name: 'pointEvaluate',
                component: () => import('@/views/points/pointEvaluate')
            },
            {
                path: 'points/political/:moduleid',
                component: () => import('@/views/points/political')
            },
            {
                path: 'points/politicalSimple/:moduleid',
                component: () => import('@/views/points/politicalSimple')
            },
            {
                 path: 'points/lawAbiding',
                component: () => import('@/views/points/lawAbiding')
              },
             {
                 path: 'points/lawAbidingDetail',
                component: () => import('@/views/points/lawAbidingDetail')
                },
            {
                path: 'active',
                component: () => import('@/views/active')
            },
            {
                path: 'active/partyIndex',
                name:'Active',
                component: () => import('@/views/active/partyIndex')
            },
            {
                path: 'active/partyBranch',
                component: () => import('@/views/active/partyBranchIndex')
            },
            {
                path: 'active/partyActivity',
                component: () => import('@/views/active/partyActivity')
            },
            {
                path: 'active/activeMore',
                name: 'activeMore',
                component: () => import('@/views/active/activeMore')
            },
            {
                path: 'active/partyMoment',
                name:'partyMoment',
                component: () => import('@/views/active/partyMoment')
            },
            {
                path: 'active/detailPack/:studyid/:createUserid/:moduleid',
                name:'detailPack',
                component: () => import('@/views/active/detailPack')
            },
            {
                path: 'active/post/:activeId',
                name: 'activePost',
                component: () => import('@/views/active/post')
            },
            {
                path: 'active/new',
                name: 'activeNews',
                component: () => import('@/views/active/new')
            },
            {
                path: 'active/new2',
                component: () => import('@/views/active/new2')
            },
            {
                path: 'active/activeDetail',
                component: () => import('@/views/active/activeDetail')
            },
            {
                path: 'life',
                component: () => import('@/views/life')
            }
        ]
    }
];
