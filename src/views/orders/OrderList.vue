<template>
  <div class="container mt-4">
    <div class="text-end mb-3">
      <router-link to="/orders/new" class="btn btn-primary">
        <i class="fas fa-plus"></i> Add Order
      </router-link>
    </div>

    <!-- Table des commandes -->
    <table class="table table-striped table-hover table-bordered mt-3">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Delivery Address</th>
          <th>Track Number</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ order.customer }}</td>
          <td>{{ order.delivery_address }}</td>
          <td>{{ order.track_number }}</td>
          <td>{{ order.status }}</td>
          <td>
            <!-- Bouton Voir -->
            <button class="btn btn-link btn-sm" @click="selectOrder(index)">
              <i class="fas fa-eye"></i>
            </button>

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
import { useRouter } from 'vue-router';

const router = useRouter();

// Exemple de liste des commandes
const orders = ref([
  { customer: "John Doe", delivery_address: "123 Elm Street", track_number: "TRACK123", status: "Shipped" },
  { customer: "Jane Smith", delivery_address: "456 Oak Avenue", track_number: "TRACK456", status: "Pending" },
  { customer: "Alice Johnson", delivery_address: "789 Pine Road", track_number: "TRACK789", status: "Delivered" },
  { customer: "Bob Anderson", delivery_address: "321 Cedar Lane", track_number: "TRACK654", status: "Processing" },
]);

// Fonction pour rediriger vers les détails de la commande
const selectOrder = (index) => {
  router.push(`/orders/detail/${index}`);
};

// Fonction pour confirmer la suppression d'une commande
const confirmDelete = (order) => {
  if (confirm('Are you sure you want to delete this order?')) {
    const index = orders.value.indexOf(order);
    if (index > -1) {
      orders.value.splice(index, 1);
    }
  }
};
</script>

<style scoped>
table {
  font-size: 1rem;
  text-align: center;
}
</style>
