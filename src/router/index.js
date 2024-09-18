// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Customers from '../views/Customers.vue';
import Products from '../views/Products.vue';
import Orders from '../views/Orders.vue';

const routes = [
  { path: '/', redirect: '/customers' },
  { path: '/customers', component: Customers },
  { path: '/products', component: Products },
  { path: '/orders', component: Orders },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
