<template>
    <div class="container mt-4">
      <h1>List of Customers</h1>
  
      <button
        class="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#addCustomerModal"
        style="float: right"
      >
        <i class="fas fa-plus"></i> Add Customer
      </button>
  
      <!-- Modale pour ajouter un client -->
      <CustomerModal
        :customer="newCustomer"
        @save="addCustomer"
        modal-id="addCustomerModal"
        title="Add Customer"
      />
  
      <table class="table mt-3">
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
              <!-- Bouton Voir (œil) -->
              <button
                class="btn btn-link btn-sm"
                @click="selectCustomer(customer)"
                data-bs-toggle="modal"
                data-bs-target="#viewCustomerModal"
                title="View Customer"
              >
                <i class="fas fa-eye"></i>
              </button>
  
              <!-- Bouton Modifier -->
              <button
                class="btn btn-link btn-sm"
                @click="selectCustomer(customer)"
                data-bs-toggle="modal"
                data-bs-target="#editCustomerModal"
                title="Edit Customer"
              >
                <i class="fas fa-edit"></i>
              </button>
  
              <!-- Bouton Supprimer -->
              <button
                class="btn btn-link btn-sm"
                @click="selectCustomer(customer)"
                data-bs-toggle="modal"
                data-bs-target="#deleteCustomerModal"
                title="Delete Customer"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modale pour afficher les détails du client -->
      <CustomerModal
        :customer="selectedCustomer"
        modal-id="viewCustomerModal"
        title="View Customer"
        readonly
      />
  
      <!-- Modale pour éditer un client -->
      <CustomerModal
        :customer="selectedCustomer"
        @save="updateCustomer"
        modal-id="editCustomerModal"
        title="Edit Customer"
      />
  
      <!-- Modale pour supprimer un client -->
      <CustomerModal
        :customer="selectedCustomer"
        @delete="deleteCustomer"
        modal-id="deleteCustomerModal"
        title="Delete Customer"
        isDelete
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import CustomerModal from "./CustomerModal.vue";
  
  // Liste des clients fictifs
  const customers = ref([
    { id: 1, name: "John Doe", address: "123 Elm St", email: "john@example.com", phone: "555-1234" },
    { id: 2, name: "Jane Smith", address: "456 Oak St", email: "jane@example.com", phone: "555-5678" },
  ]);
  
  // Nouveau client pour ajout
  const newCustomer = ref({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  
  // Client sélectionné pour vue, édition ou suppression
  const selectedCustomer = ref({});
  
  // Ajouter un client
  const addCustomer = (customer) => {
    customer.id = customers.value.length + 1;
    customers.value.push(customer);
  };
  
  // Sélectionner un client pour voir, éditer ou supprimer
  const selectCustomer = (customer) => {
    selectedCustomer.value = { ...customer };
  };
  
  // Mettre à jour un client
  const updateCustomer = (updatedCustomer) => {
    const index = customers.value.findIndex((customer) => customer.id === updatedCustomer.id);
    if (index !== -1) customers.value[index] = updatedCustomer;
  };
  
  // Supprimer un client
  const deleteCustomer = () => {
    customers.value = customers.value.filter((customer) => customer.id !== selectedCustomer.value.id);
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles si nécessaire */
  </style>
  