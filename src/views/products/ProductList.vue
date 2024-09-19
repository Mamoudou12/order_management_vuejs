<template>
  <div class="container mt-4">
    <h1>List of Products</h1>

    <!-- Bouton pour ajouter un produit -->
    <button
      class="btn btn-primary mb-3"
      data-bs-toggle="modal"
      data-bs-target="#addProductModal"
      style="float: right"
    >
      <i class="fas fa-plus"></i> Add New Product
    </button>

    <!-- Table des produits -->
    <table class="table table-striped table-hover table-bordered mt-3">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Category</th>
          <th scope="col">Barcode</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.barcode }}</td>
          <td>{{ product.status }}</td>
          <td class="text-center">
            <!-- Bouton Voir (œil) -->
            <button
              class="btn btn-link btn-sm"
              @click="selectProduct(product)"
              data-bs-toggle="modal"
              data-bs-target="#viewProductModal"
              title="View Product"
            >
              <i class="fas fa-eye"></i>
            </button>

            <!-- Bouton Modifier -->
            <button
              class="btn btn-link btn-sm"
              @click="selectProduct(product)"
              data-bs-toggle="modal"
              data-bs-target="#editProductModal"
              title="Edit Product"
            >
              <i class="fas fa-edit" style="color: green"></i>
            </button>

            <!-- Bouton Supprimer avec alerte -->
            <button
              class="btn btn-link btn-sm"
              @click="confirmDelete(product)"
              title="Delete Product"
            >
              <i class="fas fa-trash" style="color: red"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modale pour ajouter un produit -->
    <ProductModal
      :product="newProduct"
      @save="addProduct"
      modal-id="addProductModal"
      title="Add Product"
    />

    <!-- Modale pour afficher les détails du produit -->
    <div
      class="modal fade"
      id="viewProductModal"
      tabindex="-1"
      aria-labelledby="viewProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewProductModalLabel">View Product</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <strong>Name:</strong> {{ selectedProduct.name }}
              </div>
              <div class="col-6">
                <strong>Description:</strong> {{ selectedProduct.description }}
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-6">
                <strong>Price:</strong> {{ selectedProduct.price }}
              </div>
              <div class="col-6">
                <strong>Stock:</strong> {{ selectedProduct.stock }}
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-6">
                <strong>Category:</strong> {{ selectedProduct.category }}
              </div>
              <div class="col-6">
                <strong>Barcode:</strong> {{ selectedProduct.barcode }}
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-6">
                <strong>Status:</strong> {{ selectedProduct.status }}
              </div>
            </div>
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

    <!-- Modale pour éditer un produit -->
    <ProductModal
      :product="selectedProduct"
      @save="updateProduct"
      modal-id="editProductModal"
      title="Edit Product"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductModal from './ProductModal.vue';

// Liste des produits fictifs
const products = ref([
  {
    id: 1,
    name: 'Product 001',
    description: 'Description of Product 1',
    price: 100.0,
    stock: 10,
    category: 'Category 1',
    barcode: '1234567890',
    status: 'Available',
  },
  {
    id: 2,
    name: 'Product 002',
    description: 'Description of Product 2',
    price: 150.0,
    stock: 5,
    category: 'Category 2',
    barcode: '0987654321',
    status: 'Unavailable',
  },
  {
    id: 2,
    name: 'Product 003',
    description: 'Description of Product 2',
    price: 250.0,
    stock: 10,
    category: 'Category 3',
    barcode: '0987654325',
    status: 'Available',
  },
]);


// Produit sélectionné pour voir, éditer ou supprimer
const selectedProduct = ref({});

// Ajouter un produit
const addProduct = (product) => {
  product.id = products.value.length + 1;
  products.value.push({ ...product });
  resetNewProduct();
  closeModal('addProductModal');
};

// Réinitialiser le formulaire de produit
const resetNewProduct = () => {
  newProduct.value = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    barcode: '',
    status: 'Available',
  };
};

// Sélectionner un produit pour voir, éditer ou supprimer
const selectProduct = (product) => {
  selectedProduct.value = { ...product };
};

// Mettre à jour un produit
const updateProduct = (updatedProduct) => {
  const index = products.value.findIndex((product) => product.id === updatedProduct.id);
  if (index !== -1) {
    products.value[index] = { ...updatedProduct };
    closeModal('editProductModal');
  }
};

// Supprimer un produit avec alerte
const confirmDelete = (product) => {
  if (window.confirm(`Êtes-vous sûr de vouloir supprimer "${product.name}" ?`)) {
    products.value = products.value.filter((p) => p.id !== product.id);
  }
};

// Fermer la modale après ajout ou modification
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal) {
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.hide();
  }
};
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>
