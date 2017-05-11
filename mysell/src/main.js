// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
import ratings from  './components/ratings/ratings.vue'
import sellers from  './components/sellers/sellers.vue'
import goods from  './components/goods/goods'
import './coomon/stylus/index.styl'
Vue.config.productionTip = true;
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/sellers',
  component: sellers
}];

const router = new VueRouter({
  /*激活时显示样式*/
  linkActiveClass: 'active',
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

