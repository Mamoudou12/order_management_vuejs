<!-- AddOrder.vue -->
<template>
    <h1 class="text-center">Create New Order</h1>
    <div class="container">
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
  