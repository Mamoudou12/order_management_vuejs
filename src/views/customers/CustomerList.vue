<template>
  <div class="container mt-4">
    <h1>List of Customers</h1>

    <!-- Ajouter un client -->
    <button
      class="btn btn-primary mb-3"
      data-bs-toggle="modal"
      data-bs-target="#addCustomerModal"
      style="float: right"
    >
      <i class="fas fa-plus"></i> Add Customer
    </button>

    <!-- Modal pour ajouter un client -->
    <CustomerModal
      :customer="newCustomer"
      @save="addCustomer"
      modal-id="addCustomerModal"
      title="Add Customer"
      :readonly="false"
    />

    <!-- Table des clients -->
    <table class="table table-striped table-hover table-bordered mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <th scope="row">{{ customer.id }}</th>
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>
            <!-- Bouton Voir -->
            <button
              class="btn btn-link btn-sm"
              @click="selectCustomer(customer)"
              data-bs-toggle="modal"
              data-bs-target="#viewCustomerModal"
              title="View Customer"
            >
              <i class="fas fa-eye" style="color: blue"></i>
            </button>

            <!-- Bouton Modifier -->
            <button
              class="btn btn-link btn-sm"
              @click="selectCustomer(customer)"
              data-bs-toggle="modal"
              data-bs-target="#editCustomerModal"
              title="Edit Customer"
            >
              <i class="fas fa-edit" style="color: green"></i>
            </button>

            <!-- Bouton Supprimer -->
            <button
              class="btn btn-link btn-sm"
              @click="confirmDeleteCustomer(customer)"
              title="Delete Customer"
            >
              <i class="fas fa-trash" style="color: red"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal pour afficher les détails du client -->
    <div
      class="modal fade"
      id="viewCustomerModal"
      tabindex="-1"
      aria-labelledby="viewCustomerModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewCustomerModalLabel">
              Customer Details
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Name:</strong> {{ selectedCustomer.name }}</p>
            <p><strong>Address:</strong> {{ selectedCustomer.address }}</p>
            <p><strong>Email:</strong> {{ selectedCustomer.email }}</p>
            <p><strong>Phone:</strong> {{ selectedCustomer.phone }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour éditer un client -->
    <CustomerModal
      :customer="selectedCustomer"
      @save="updateCustomer"
      modal-id="editCustomerModal"
      title="Edit Customer"
      :readonly="false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CustomerModal from "./CustomerModal.vue";

const customers = ref([
  {
    id: 1,
    name: "John Doe",
    address: "123 Elm St",
    email: "john@example.com",
    phone: "555-1234",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Oak St",
    email: "jane@example.com",
    phone: "555-5678",
  },
]);

const newCustomer = ref({
  name: "",
  address: "",
  email: "",
  phone: "",
});

const selectedCustomer = ref({});

const addCustomer = (customer) => {
  if (customer.name && customer.address && customer.email && customer.phone) {
    customer.id = customers.value.length
      ? customers.value[customers.value.length - 1].id + 1
      : 1;
    customers.value.push(customer);
    newCustomer.value = { name: "", address: "", email: "", phone: "" };
    const modal = document.getElementById("addCustomerModal");
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.hide();
    }
  }
};

const selectCustomer = (customer) => {
  selectedCustomer.value = { ...customer };
};

const updateCustomer = (updatedCustomer) => {
  const index = customers.value.findIndex(
    (customer) => customer.id === updatedCustomer.id
  );
  if (index !== -1) customers.value[index] = updatedCustomer;
};

const confirmDeleteCustomer = (customer) => {
  const confirmed = window.confirm(
    `Êtes-vous sûr de vouloir supprimer ${customer.name}?`
  );
  if (confirmed) {
    customers.value = customers.value.filter((c) => c.id !== customer.id);
  }
};
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>
