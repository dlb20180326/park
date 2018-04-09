import Vue from 'vue';
import { cookie } from 'vux';

const KEYS = ['roleId', 'userId', 'ptoken'];

const user = {
    state: {},
    getters: {
        user: state => state
    },
    actions: {
        userinfo: ({ commit }, data) => {
            if (cookie.get('userId')) {
                return Vue.http
                    .get('puser/queryById', {
                        params: Object.assign(data || {}, {
                            userId: cookie.get('userId')
                        })
                    })
                    .then(result => {
                        commit('setUser', result.entry);
                        return result;
                    });
            } else {
                return Promise.reject();
            }
        },
        login: ({ commit }, data) => Vue.http.post('puser/tologin', data),
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
            // KEYS.forEach(key =>
            //     cookie.set(key, data[key], {
            //         // domain: 'example.com',
            //         path: '/',
            //         expires: new Date(new Date().setMonth(new Date().getMonth() + 1))
            //     })
            // );
        },
        clearUser(state) {
            Object.keys(state).map(key => delete state[key]);
            KEYS.forEach(key =>
                cookie.remove(key, {
                    // domain: 'example.com',
                    path: '/'
                })
            );
        }
    }
};

export default user;
