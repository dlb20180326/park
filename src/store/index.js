import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
    	info: {}
    },
    actions: {
    	setInfo ({ commit }, info) {
        	commit('setInfo', info);
        }
    },
    getters: {
    	info: state => state.info
    },
    mutations: {
    	setInfo (state, info) {
        	state.info = info;
        }
    },
    modules: {
        user
    },
    strict: process.env.NODE_ENV !== 'production'
});

export default store;
