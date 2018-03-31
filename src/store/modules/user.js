import { cookie } from 'vux';

const KEYS = ['uid', 'token'];

const user = {
    state: {},
    getters: {
        user: state => state
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
            KEYS.forEach(key =>
                cookie.remove(key, {
                    // domain: 'example.com',
                    path: '/'
                })
            );
            Object.keys(state).map(key => delete state[key]);
        }
    }
};

export default user;
