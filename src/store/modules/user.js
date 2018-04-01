import Vue from 'vue';
import { cookie } from 'vux';

const KEYS = ['roleId', 'userId', 'ptoken'];

const user = {
    state: {},
    getters: {
        user: state => state
    },
    actions: {
        login: ({ commit }, data) =>
            Vue.http.post('puser/tologin', data || {}).then(result => {
                commit('login', result.entry);
                return result;
            }),
        logout: ({ commit }) =>
            new Promise((resolve, reject) => {
                commit('logout');
                resolve();
            })
    },
    mutations: {
        login(state, data) {
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
        logout(state) {
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
