// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
// import VueRouter from 'vue-router';
import App from './App';
import router from './router';
// import './assets/dlbicon/iconfont.css';
// import components from './component.js';
import store from './store';
import * as utils from './utils';
/*引入componnents到vue*/
// for (let i in components) {
//     Vue.component(i, components[i]);
// }
//引入vux
import { AjaxPlugin, LoadingPlugin, ToastPlugin } from 'vux';
Vue.use(AjaxPlugin);
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
// 引入rem
// Vue.use(VueRouter);

//import FastClick from 'fastclick';
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
