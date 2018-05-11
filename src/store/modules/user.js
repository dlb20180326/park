import Vue from 'vue';
import router from '@/router';
import { cookie } from 'vux';

const KEYS = ['roleId', 'userId', 'ptoken'];

const user = {
    state: {
        user: {},
        manage: {}
    },
    getters: {
        user: state => {
            return sessionStorage.userRoleId === '4' ? state.user : state.manage;
        }
    },
    actions: {
        userinfo: ({ commit }, data) => {
            const userId = cookie.get(sessionStorage.userRoleId === '4' ? 'userId' : 'manageId');
            if (userId) {
                return Vue.http.get('puser/queryById', {
                        params: Object.assign(data || {}, { userId })
                    })
                    .then(result => {
                        sessionStorage.userRoleId = result.entry.roleid;
                        commit(result.entry.roleid === 4 ? 'setUser' : 'setManage', result.entry);
                        return result;
                    });
            } else {
                return Promise.reject();
            }
        },
        login: ({ commit }, data) => Vue.http.post('puser/tologin', data),
        loginManage: ({ commit }, data) => Vue.http.post('puser/tologin', data),
        logout: ({ commit }) =>
            new Promise((resolve, reject) => {
                commit('clearUser');
                resolve();
            })
    },
    mutations: {
        setUser(state, data) {
            Object.keys(data).map(key => {
                state[key] = data[key];
            });
            state.user = data;
            // KEYS.forEach(key =>
            //     cookie.set(key, data[key], {
            //         // domain: 'example.com',
            //         path: '/',
            //         expires: new Date(new Date().setMonth(new Date().getMonth() + 1))
            //     })
            // );
        },
        setManage(state, data) {
            state.manage = data;
        },
        clearUser(state) {
            state.user = {};
            var roleId = cookie.get('roleId');
            Object.keys(state).map(key => delete state[key]);
            KEYS.forEach(key =>
                cookie.remove(key, {
                    // domain: 'example.com',
                    path: '/'
                })
            );
            //if(roleId == 4)
            //{
            router.push('/login');
            //}
            //else
            //{
            //    router.push('/loginManage');
            //}

        }
    }
};

export default user;