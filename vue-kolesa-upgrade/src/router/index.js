import Vue from 'vue';
import VueRouter from 'vue-router';
import Shop from '../views/Shop/Shop.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/getPoints',
    name: 'GetPoints',
    component: () => import(/* webpackChunkName: "getPoints" */ '../views/GetPoints/GetPoints.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
