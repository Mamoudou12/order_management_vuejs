<template>
  <div class="container mt-4">
    <h1>List of Orders</h1>
    <div class="text-end mb-3">
      <!-- Bouton pour ajouter une nouvelle commande -->
      <router-link to="/orders/new">
        <button class="btn btn-primary">
          <i class="fas fa-plus"></i> Add New Order
        </button>
      </router-link>
    </div>

    <!-- Table des commandes -->
    <table class="table table-striped table-hover table-bordered mt-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Customer</th>
          <th>Delivery Address</th>
          <th>Track Number</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ formatDate(order.date) }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.delivery_address }}</td>
          <td>{{ order.track_number }}</td>
          <td>{{ order.status }}</td>
          <td class="text-center">
            <!-- Bouton Voir avec redirection vers la page de détails -->
            <router-link :to="`/orders/${index}`" class="btn btn-link btn-sm">
              <i class="fas fa-eye"></i>
            </router-link>

            <!-- Bouton Éditer avec redirection -->
            <router-link :to="`/orders/edit/${index}`" class="btn btn-link btn-sm" title="Edit Order">
              <i class="fas fa-edit" style="color: green"></i>
            </router-link>

            <!-- Bouton Supprimer -->
            <button class="btn btn-link btn-sm" @click="confirmDelete(order)">
              <i class="fas fa-trash" style="color: red"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Exemple de liste des commandes avec des détails
const orders = ref([
  { date: '2024-09-15', customer: "John Doe", delivery_address: "123 Elm Street", track_number: "TRACK123", status: "Shipped", details: [{ product_id: 'Product A', quantity: 2, price: 49.99 }, { product_id: 'Product B', quantity: 1, price: 29.99 }] },
  { date: '2024-09-16', customer: "Jane Smith", delivery_address: "456 Oak Avenue", track_number: "TRACK456", status: "Pending", details: [{ product_id: 'Product A', quantity: 3, price: 19.99 }] },
  { date: '2024-09-17', customer: "Alice Johnson", delivery_address: "789 Pine Road", track_number: "TRACK789", status: "Delivered", details: [{ product_id: 'Product C', quantity: 1, price: 99.99 }] },
  { date: '2024-09-18', customer: "Bob Anderson", delivery_address: "321 Cedar Lane", track_number: "TRACK654", status: "Processing", details: [{ product_id: 'Product A', quantity: 5, price: 9.99 }] },
]);

// Variable pour stocker la commande sélectionnée
const selectedOrder = ref(null);

// Fonction pour sélectionner une commande et ouvrir la modale
const selectOrder = (order) => {
  selectedOrder.value = { ...order }; // Crée une copie de l'objet pour éviter les modifications directes
};

// Fonction pour confirmer la suppression d'une commande
const confirmDelete = (order) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette commande?')) {
    const index = orders.value.indexOf(order);
    if (index > -1) {
      orders.value.splice(index, 1);
    }
  }
};


// Fonction pour formater la date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<style scoped>
table {
  font-size: 1rem;
  text-align: center;
}
</style>
