<!-- AddOrder.vue -->
<template>
    <div class="container mt-4">
      <h2>Add New Order</h2>
      <OrderForm @submitOrder="handleAddOrder" />
    </div>
  </template>
  
  <script setup>
  import OrderForm from './OrderForm.vue';
  
  // Fonction pour ajouter la commande
  const handleAddOrder = (newOrder) => {
    console.log('New Order:', newOrder);
    // Logique pour sauvegarder la commande
  };
  </script>
  