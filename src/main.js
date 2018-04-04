// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';

import App from './App';
import router from './router';

import store from './store';
import * as utils from './utils';

//引入vux
import { AjaxPlugin, LoadingPlugin, ToastPlugin } from 'vux';
Vue.use(AjaxPlugin);
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);

FastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    utils,
    components: { App },
    template: '<App/>'
});
