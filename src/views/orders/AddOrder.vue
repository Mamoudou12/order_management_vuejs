<!-- AddOrder.vue -->
<template>
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
  