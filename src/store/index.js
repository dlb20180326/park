import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {}
    },
    getters: {
        user: state => state.user
    },
    mutations: {
        user: (state, value) => (state.user = value)
    },
    strict: process.env.NODE_ENV !== 'production'
});
