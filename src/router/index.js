// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Customers from '../views/customers/CustomerList.vue';
import Products from '../views/products/ProductList.vue';
import Orders from '../views/orders/OrderList.vue';

const routes = [
  {
    path: '/',
    redirect: '/customers',
  },
  {
    path: '/customers',
    component: Customers,
    name: 'Customers',
  },
  {
    path: '/products',
    component: Products,
    name: 'Products',
  },
  {
    path: '/orders',
    component: Orders,
    name: 'Orders',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
