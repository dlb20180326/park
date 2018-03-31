import Vue from 'vue';
import { cookie, md5 } from 'vux';

const KEYS = ['uid', 'token'];

const user = {
    state: {},
    getters: {
        user: state => state
    },
    actions: {
        login: ({ commit }, { username, password }) =>
            Vue.http
                .post('auth/login', {
                    user: username,
                    passwd: md5(password).toUpperCase()
                })
                .then(result => {
                    commit('login', result.result);
                    return result;
                })
    },
    mutations: {
        login(state, data) {
            Object.keys(data).map(key => {
                state[key] = data[key];
            });
            KEYS.forEach(key =>
                cookie.set(key, data[key], {
                    // domain: 'example.com',
                    path: '/',
                    expires: new Date(new Date().setMonth(new Date().getMonth() + 1))
                })
            );
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
