// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import CustomerList from '../views/customers/CustomerList.vue';
import ProductList from '../views/products/ProductList.vue';
import OrderList from '../views/orders/OrderList.vue';
import EditOrder from '../views/orders/EditOrder.vue';
import AddOrder from '../views/orders/AddOrder.vue';
import OrderDetails from '../views/orders/OrderDetails.vue';

const routes = [
  {
    path: '/',
    redirect: '/customers',
  },
  {
    path: '/customers',
    component: CustomerList,
    name: 'Customers',
  },
  {
    path: '/products',
    component: ProductList,
    name: 'Products',
  },
  {
    path: '/orders',
    component: OrderList,
    name: 'OrderList',
  },
  {
    path: '/orders/new',
    component: AddOrder,
    name: 'AddOrder',
  },
  {
    path: '/orders/edit/:id',
    component: EditOrder,
    name: 'EditOrder',
  },
  {
    path: '/orders/:id',
    name: 'OrderDetails',
    component: OrderDetails
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
