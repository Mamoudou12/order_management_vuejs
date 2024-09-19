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
                <i class="fa-solid fa-users"></i>
                Customers
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">
                <i class="fa-solid fa-basket-shopping"></i>
                Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/orders"> <i class="fa-solid fa-cart-arrow-down"></i> Orders </router-link>
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
import { onMounted } from 'vue';

onMounted(() => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      // Supprime la classe 'focused' de tous les liens
      navLinks.forEach((link) => link.classList.remove('focused'));
      // Ajoute la classe 'focused' au lien cliqué
      this.classList.add('focused');
    });
  });
});
</script>


<style>
.navbar {
  margin-bottom: 20px;
}

.navbar ul {
  margin-left: 110px;
}

.navbar-nav .nav-link {
  transition: background-color 0.3s ease, border-radius 0.3s ease;
  padding: 10px 15px; /* Pour donner plus de marge autour du texte */
  border-radius: 10px; /* Applique un arrondi sur les bords */
}

.navbar-nav .nav-link:hover {
  background-color: #d4e6f1; 
  color: white; 
  border-radius: 10px;
}


.navbar-nav .nav-link.focused {
  background-color: #007bff; 
  color: white;
  border-radius: 10px; 
}
</style>
