<template>
  <form @submit.prevent="submitOrder">
    <!-- Conteneur pour l'alignement des informations de commande -->
    <div class="container">
      <!-- Section gauche (Date et Nom du client) -->
      <div class="left">
        <div class="col-md-12 mb-3">
          <label for="orderDate" class="form-label">Date</label>
          <input type="date" v-model="order.date" class="form-control" required>
        </div>
        <div class="col-md-12 mb-3">
          <label for="customerName" class="form-label">Customer name</label>
          <input type="text" v-model="order.customer_name" class="form-control" required>
        </div>
      </div>
      <!-- Section droite (Adresse de livraison, numéro de suivi, statut) -->
      <div class="right">
        <div class="col-md-12 mb-3">
          <label for="deliveryAddress" class="form-label">Delivery Address</label>
          <input type="text" v-model="order.delivery_address" class="form-control" required>
        </div>
        <div class="col-md-12 mb-3">
          <label for="trackNumber" class="form-label">Track Number</label>
          <input type="text" v-model="order.track_number" class="form-control" required>
        </div>
        <div class="col-md-12 mb-3">
          <label for="status" class="form-label">Order Status</label>
          <select class="form-control" name="status" id="status">
            <option value="Processing">Processing</option>
            <option value="Processing">Shipped</option>
            <option value="Processing">Delivered</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Section des détails de la commande -->
    <h5 class="mt-4">Order Details</h5>
    <div v-for="(detail, index) in orderDetails" :key="index" class="mb-3">
      <div class="row g-3">
        <div class="col-md-4">
          <label for="product" class="form-label">Product</label>
          <input type="text" v-model="detail.product_id" class="form-control" placeholder="Enter Product ID" required>
        </div>
        <div class="col-md-3">
          <label for="quantity" class="form-label">Quantity</label>
          <input type="number" v-model="detail.quantity" class="form-control" placeholder="Quantity" required>
        </div>
        <div class="col-md-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" step="0.01" v-model="detail.price" class="form-control" placeholder="Price" required>
        </div>
        <div class="col-md-2 d-flex align-items-end">
          <button type="button" class="btn btn-danger" @click="removeDetail(index)">Remove</button>
        </div>
      </div>
    </div>

    <!-- Ajouter un autre produit -->
    <button type="button" class="btn btn-secondary mt-3" @click="addDetail">Add Another Product</button>

    <!-- Bouton pour soumettre -->
    <div class="d-grid gap-2 mt-4">
      <button type="submit" class="btn btn-primary btn-lg">Save Order</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

// Données de la commande (initialisation)
const order = ref({
  date: '',
  customer_name: '',
  delivery_address: '',
  track_number: '',
  status: '',
});

// Détails de la commande
const orderDetails = ref([
  { product_id: '', quantity: 1, price: 0.00 },
]);

// Fonction pour ajouter un nouveau détail de produit
const addDetail = () => {
  orderDetails.value.push({ product_id: '', quantity: 1, price: 0.00 });
};

// Fonction pour supprimer un détail
const removeDetail = (index) => {
  orderDetails.value.splice(index, 1);
};

// Fonction pour soumettre la commande
const submitOrder = () => {
  const newOrder = {
    ...order.value,
    details: orderDetails.value,
  };
  console.log('Order Submitted:', newOrder);
};
</script>

<style scoped>
/* Styles de la mise en page */
.container {
  display: flex;
  justify-content: space-between;
}

.left, .right {
  flex: 1;
  margin-right: 20px;
}

/* Ajustement pour les petits écrans */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .left, .right {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
