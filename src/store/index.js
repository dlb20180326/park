import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {}
    },
    getters: {
        user: state => state.user
    },
    mutations: {
        user(state, value) {
            state.user = value;
        },
        logout(state) {
            Cookies.remove('uid');
            Cookies.remove('token');
            state.user = {};
        }
    },
    strict: process.env.NODE_ENV !== 'production'
});

store.registerModule('vux', {
    state: {
        isLoading: false
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading;
        }
    }
});

export default store;
