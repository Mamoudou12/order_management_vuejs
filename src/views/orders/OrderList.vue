<template>
    <div class="container mt-4">
      <h1>List of Orders</h1>
  
      <!-- Conteneur pour le bouton avec alignement à droite -->
      <div class="text-end mb-3">
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#orderModal"
        >
          <i class="fas fa-plus"></i> Add Order
        </button>
      </div>
  
      <!-- Table pour lister les commandes -->
      <table class="table table-striped table-hover table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer</th>
            <th scope="col">Delivery Address</th>
            <th scope="col">Track Number</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ order.customer }}</td>
            <td>{{ order.delivery_address }}</td>
            <td>{{ order.track_number }}</td>
            <td>{{ order.status }}</td>
            <td>
              <!-- Bouton Voir (œil) -->
              <button
                class="btn btn-link btn-sm"
                @click="selectOrder(order)"
                data-bs-toggle="modal"
                data-bs-target="#viewOrderModal"
                title="View Order"
              >
                <i class="fas fa-eye"></i>
              </button>
  
              <!-- Bouton Modifier -->
              <button
                class="btn btn-link btn-sm"
                @click="selectOrder(order)"
                data-bs-toggle="modal"
                data-bs-target="#editOrderModal"
                title="Edit Order"
              >
                <i class="fas fa-edit" style="color: green"></i>
              </button>
  
              <!-- Bouton Supprimer avec alerte -->
              <button
                class="btn btn-link btn-sm"
                @click="confirmDelete(order)"
                title="Delete Order"
              >
                <i class="fas fa-trash" style="color: red"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal pour ajouter une commande -->
      <OrderModal />
  
      <!-- Modal pour voir une commande -->
      <ViewOrderModal />
  
      <!-- Modal pour éditer une commande -->
      <EditOrderModal />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import OrderModal from "./OrderModal.vue";
  
  // Liste des commandes avec des données brutes incluant un champ "Customer"
  const orders = ref([
    {
      customer: "John Doe",
      delivery_address: "123 Elm Street",
      track_number: "TRACK123",
      status: "Shipped",
    },
    {
      customer: "Jane Smith",
      delivery_address: "456 Oak Avenue",
      track_number: "TRACK456",
      status: "Pending",
    },
    {
      customer: "Alice Johnson",
      delivery_address: "789 Pine Road",
      track_number: "TRACK789",
      status: "Delivered",
    },
  ]);
  
  // Fonction pour sélectionner une commande
  const selectOrder = (order) => {
    // Logique pour gérer la sélection d'une commande
    console.log("Selected Order:", order);
  };
  
  // Fonction pour confirmer la suppression d'une commande
  const confirmDelete = (order) => {
    if (confirm(`Are you sure you want to delete this order?`)) {
      // Logique pour supprimer la commande
      console.log("Deleted Order:", order);
    }
  };
  </script>
  
  <style scoped>
  table {
    font-size: 1rem;
    text-align: center;
  }
  </style>
  