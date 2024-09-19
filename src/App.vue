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
              <router-link class="nav-link" to="/customers">
                <i class="bi bi-people-fill"></i>
                Customers
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">
                <i class="bi bi-box"></i>
                Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/orders"> <i class="bi bi-clipboard-data"></i> Orders </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
// No imports needed here, router is used in router-view
</script>

<style>
.navbar {
  margin-bottom: 20px;
}
</style>
