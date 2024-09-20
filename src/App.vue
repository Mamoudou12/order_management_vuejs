<!-- src/App.vue -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ focused: activeRoute === 'customers' }"
                to="/customers"
                @click="setActiveRoute('customers')"
              >
                <i class="fa-solid fa-users"></i>
                Customers
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ focused: activeRoute === 'products' }"
                to="/products"
                @click="setActiveRoute('products')"
              >
                <i class="fa-solid fa-basket-shopping"></i>
                Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ focused: activeRoute === 'orders' }"
                to="/orders"
                @click="setActiveRoute('orders')"
              >
                <i class="fa-solid fa-cart-arrow-down"></i>
                Orders
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeRoute = ref("");

const setActiveRoute = (route) => {
  activeRoute.value = route;
};
</script>

<style>
.navbar {
  margin-bottom: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar ul {
  margin-left: 110px;
}

.navbar-nav .nav-link {
  transition: background-color 0.3s ease, border-radius 0.3s ease,
    color 0.3s ease;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 1.1rem;
  color: #333;
}

.navbar-nav .nav-link:hover {
  background-color: #d4e6f1;
  color: #007bff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-nav .nav-link.focused {
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Ajout d'espacement autour des icônes */
.navbar-nav .nav-link i {
  margin-right: 8px;
  font-size: 1.2rem;
}
</style>
