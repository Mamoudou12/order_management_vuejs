<template>
    <div class="container mt-4">
      <h1>Order Details</h1>
      <form @submit.prevent="submitOrder">
        <div class="form-buttons mb-3 text-end">
          <button type="button" class="btn btn-secondary" @click="goHome">
            Orders List
          </button>
        </div>
        <div class="row">
          <!-- Left Column -->
          <div class="col-md-6">
            <div class="mb-3">
              <label for="orderDate" class="form-label">Date</label>
              <input
                id="orderDate"
                type="date"
                v-model="order.date"
                class="form-control"
                disabled
                required
              />
            </div>
            <div class="mb-3">
              <label for="customerName" class="form-label">Customer name</label>
              <input
                id="customerName"
                type="text"
                v-model="order.customer_name"
                class="form-control"
                disabled
                required
              />
            </div>
          </div>
          <!-- Right Column -->
          <div class="col-md-6">
            <div class="mb-3">
              <label for="deliveryAddress" class="form-label">Delivery Address</label>
              <input
                id="deliveryAddress"
                type="text"
                v-model="order.delivery_address"
                class="form-control"
                disabled
                required
              />
            </div>
            <div class="mb-3">
              <label for="trackNumber" class="form-label">Track Number</label>
              <input
                id="trackNumber"
                type="text"
                v-model="order.track_number"
                class="form-control"
                disabled
                required
              />
            </div>
            <div class="mb-3">
              <label for="status" class="form-label">Order Status</label>
              <select
                class="form-control"
                v-model="order.status"
                id="status"
                disabled
              >
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        </div>
        <!-- Order Details Table -->
        <h2>Product information</h2>
        <div class="table-responsive mt-4">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(detail, index) in orderDetails" :key="index">
                <td>
                  <select
                    class="form-control"
                    v-model="detail.product_id"
                    id="productSelect"
                    disabled
                  >
                    <option value="" disabled selected>Select Product</option>
                    <option value="Product A">Product A</option>
                    <option value="Product B">Product B</option>
                    <option value="Product C">Product C</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    v-model="detail.quantity"
                    class="form-control"
                    placeholder="Quantity"
                    disabled
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
                    disabled
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const order = ref({
    date: "2024-09-20",
    customer_name: "John Doe",
    delivery_address: "123 Elm Street",
    track_number: "TRACK123",
    status: "Processing",
  });
  
  const orderDetails = ref([
    { product_id: "Product A", quantity: 2, price: 49.99 },
    { product_id: "Product B", quantity: 1, price: 19.99 },
  ]);
  
  const router = useRouter();
  
  const goHome = () => {
    router.push({ name: "OrderList" });
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-buttons {
    text-align: right;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }
  }
  </style>
  