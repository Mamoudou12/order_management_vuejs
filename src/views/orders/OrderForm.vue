<template>
  <form @submit.prevent="submitOrder">
    <!-- Conteneur pour les boutons en haut à droite -->
    <div class="form-buttons">
      <button type="button" class="btn btn-secondary" @click="goHome">
        Orders List
      </button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>

    <!-- Conteneur pour l'alignement des informations de commande -->
    <div class="container">
      <!-- Section gauche (Date et Nom du client) -->
      <div class="left">
        <div class="col-md-12 mb-3">
          <label for="orderDate" class="form-label">Date</label>
          <input
            id="orderDate"
            type="date"
            v-model="order.date"
            class="form-control"
            required
          />
        </div>
        <div class="col-md-12 mb-3">
          <label for="customerName" class="form-label">Customer name</label>
          <input
            id="customerName"
            type="text"
            v-model="order.customer_name"
            class="form-control"
            required
          />
        </div>
      </div>
      <!-- Section droite (Adresse de livraison, numéro de suivi, statut) -->
      <div class="right">
        <div class="col-md-12 mb-3">
          <label for="deliveryAddress" class="form-label">Delivery Address</label>
          <input
            id="deliveryAddress"
            type="text"
            v-model="order.delivery_address"
            class="form-control"
            required
          />
        </div>
        <div class="col-md-12 mb-3">
          <label for="trackNumber" class="form-label">Track Number</label>
          <input
            id="trackNumber"
            type="text"
            v-model="order.track_number"
            class="form-control"
            required
          />
        </div>
        <div class="col-md-12 mb-3">
          <label for="status" class="form-label">Order Status</label>
          <select class="form-control" v-model="order.status" id="status">
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Section des détails de la commande dans un tableau -->
    <h5 class="mt-4">Order Details</h5>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detail, index) in orderDetails" :key="index">
          <td>
            <div class="select-container">
              <select class="form-control" v-model="detail.product_id" id="productSelect">
                <option value="" disabled selected>Select Product</option>
                <option value="Product A">Product A</option>
                <option value="Product B">Product B</option>
                <option value="Product C">Product C</option>
                <i class="fa-solid fa-chevron-down arrow-icon"></i>
              </select>
            </div>
          </td>
          <td>
            <input
              type="number"
              v-model="detail.quantity"
              class="form-control"
              placeholder="Quantity"
              required
            />
          </td>
          <td>
            <input
              type="number"
              step="0.01"
              v-model="detail.price"
              class="form-control"
              placeholder="Price"
              required
            />
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="removeDetail(index)"
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Ajouter un autre produit -->
    <button type="button" class="btn btn-success mt-3" @click="addDetail">
      Add New Detail
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Données de la commande (initialisation)
const order = ref({
  date: "",
  customer_name: "",
  delivery_address: "",
  track_number: "",
  status: "",
});

// Détails de la commande
const orderDetails = ref([{ product_id: "", quantity: 1, price: 0.0 }]);

// Fonction pour ajouter un nouveau détail de produit
const addDetail = () => {
  orderDetails.value.push({ product_id: "", quantity: 1, price: 0.0 });
};

// Fonction pour supprimer un détail
const removeDetail = (index) => {
  if (orderDetails.value.length > 1) {
    orderDetails.value.splice(index, 1);
  } else {
    alert("Vous devez avoir au moins une détail de commande.");
  }
};

// Fonction pour soumettre la commande
const submitOrder = () => {
  const newOrder = {
    ...order.value,
    details: orderDetails.value,
  };
  console.log("Order Submitted:", newOrder);
};

// Initialiser le routeur
const router = useRouter();

// Fonction pour retourner à la page d'accueil
const goHome = () => {
  router.push({ name: "OrderList" });
};
</script>

<style scoped>
/* Styles de la mise en page */
.container {
  display: flex;
  justify-content: space-between;
}

.left,
.right {
  flex: 1;
  margin-right: 20px;
}

/* Ajustement pour les petits écrans */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .left,
  .right {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

/* Styles pour les boutons en haut à droite */
.form-buttons {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-right: 33px;
}

.form-buttons .btn {
  margin-left: 10px;
}
</style>
