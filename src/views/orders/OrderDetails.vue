<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Order Details</h1>

    <!-- Informations générales sur la commande -->
    <div v-if="order" class="order-info">
      <div class="row g-3">
        <!-- Carte Informations Client -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title">Customer Information</h5>
              <p class="card-text"><strong>Name:</strong> {{ order.customer }}</p>
              <p class="card-text"><strong>Delivery Address:</strong> {{ order.delivery_address }}</p>
            </div>
          </div>
        </div>

        <!-- Carte Informations de Livraison -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title">Shipping Information</h5>
              <p class="card-text"><strong>Date:</strong> {{ formatDate(order.date) }}</p>
              <p class="card-text"><strong>Track Number:</strong> {{ order.track_number }}</p>
              <p class="card-text">
                <strong>Status:</strong> 
                <span :class="statusClass(order.status)">{{ order.status }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Détails de la commande dans un tableau -->
      <div class="order-items mt-5">
        <h5 class="mb-3">Order Items:</h5>
        <table class="table table-hover table-bordered shadow-sm">
          <thead class="table-light">
            <tr>
              <th>Product</th>
              <th class="text-center">Quantity</th>
              <th class="text-end">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order.details" :key="item.product_id" class="table-row-hover">
              <td>{{ item.product_id }}</td>
              <td class="text-center">{{ item.quantity }}</td>
              <td class="text-end">${{ item.price }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="2" class="text-end">Total</th>
              <th class="text-end">
                ${{ calculateTotal(order.details).toFixed(2) }}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Bouton pour retourner à la liste des commandes -->
      <div class="text-end mt-4">
        <router-link to="/orders">
          <button class="btn btn-primary btn-lg">
            <i class="fas fa-arrow-left"></i> Back to Order List
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const orders = [
  { date: '2024-09-15', customer: "John Doe", delivery_address: "123 Elm Street", track_number: "TRACK123", status: "Shipped", details: [{ product_id: 'Product A', quantity: 2, price: 49.99 }, { product_id: 'Product B', quantity: 1, price: 29.99 }] },
  { date: '2024-09-16', customer: "Jane Smith", delivery_address: "456 Oak Avenue", track_number: "TRACK456", status: "Pending", details: [{ product_id: 'Product A', quantity: 3, price: 19.99 }] },
  { date: '2024-09-17', customer: "Alice Johnson", delivery_address: "789 Pine Road", track_number: "TRACK789", status: "Delivered", details: [{ product_id: 'Product C', quantity: 1, price: 99.99 }] },
  { date: '2024-09-18', customer: "Bob Anderson", delivery_address: "321 Cedar Lane", track_number: "TRACK654", status: "Processing", details: [{ product_id: 'Product A', quantity: 5, price: 9.99 }] },
];

const order = ref(null);
const route = useRoute();

onMounted(() => {
  const id = route.params.id;
  order.value = orders[id];
});

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const calculateTotal = (details) => {
  return details.reduce((total, item) => total + item.price * item.quantity, 0);
};

const statusClass = (status) => {
  switch (status) {
    case 'Shipped':
      return 'text-success';
    case 'Pending':
      return 'text-warning';
    case 'Delivered':
      return 'text-primary';
    case 'Processing':
      return 'text-info';
    default:
      return 'text-secondary';
  }
};
</script>
<style scoped>
.container {
  margin-top: 20px;
}

h1 {
  font-size: 30px;
  color: #343a40;
}

.card {
  border-radius: 12px;
  background-color: #ffffff;
  border: none;
  transition: transform 0.2s; /* Ajout d'une transition pour l'effet de survol */
}

.card-body {
  padding: 20px;
}

.order-info {
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card:nth-child(odd) {
  background-color: #e9f7fa; /* Couleur de fond pour la carte client */
}

.card:nth-child(even) {
  background-color: #f9e9fa; /* Couleur de fond pour la carte de livraison */
}

.card-title {
  font-weight: bold;
  color: #007bff; /* Couleur des titres */
  margin-bottom: 15px;
}

.table {
  background-color: #fff;
  border-radius: 8px;
}

.table-row-hover:hover {
  background-color: #f8f9fa;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.text-center {
  text-align: center;
}

.text-end {
  text-align: right;
}

.order-info {
  margin-bottom: 20px; /* Espacement entre les cartes */
}

.card:hover {
  transform: scale(1.02); /* Légère augmentation de la taille au survol */
}

@media (max-width: 768px) {
  .order-info {
    padding: 15px;
  }

  .card-body {
    padding: 15px;
  }
}
</style>

