<template>
    <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <!-- Ajout de la classe modal-lg ou modal-xl pour élargir le modal -->
      <div class="modal-dialog modal-lg"> <!-- Vous pouvez utiliser modal-xl pour encore plus large -->
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Formulaire pour ajouter ou éditer un produit -->
            <ProductForm
              v-if="!isDelete && !isView"
              :product="product"
              :isEdit="isEdit"
              @submit="handleSave"
            />
            <!-- Affichage des détails du produit -->
            <div v-if="isView && !isDelete" class="product-details">
              <p><strong>Name:</strong> {{ product.name }}</p>
              <p><strong>Description:</strong> {{ product.description }}</p>
              <p><strong>Price:</strong> {{ product.price }}</p>
              <p><strong>Stock:</strong> {{ product.stock }}</p>
              <p><strong>Category:</strong> {{ product.category }}</p>
              <p><strong>Barcode:</strong> {{ product.barcode }}</p>
              <p><strong>Status:</strong> {{ product.status }}</p>
            </div>
            <!-- Confirmation de suppression -->
            <p v-if="isDelete">Are you sure you want to delete {{ product.name }}?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button
              v-if="!isDelete && !isView"
              type="button"
              class="btn btn-primary"
              @click="handleSave"
            >
              {{ isEdit ? 'Update' : 'Add' }}
            </button>
            <button
              v-if="isDelete"
              type="button"
              class="btn btn-danger"
              @click="handleDelete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import ProductForm from "./ProductForm.vue";
  
  const props = defineProps({
    modalId: String,
    title: String,
    product: Object,
    isEdit: Boolean,
    isView: Boolean, // Mode de visualisation
    isDelete: Boolean,
  });
  
  const emit = defineEmits(["save", "delete"]);
  
  const handleSave = () => {
    emit("save", props.product);
  };
  
  const handleDelete = () => {
    emit("delete");
  };
  </script>
  
  <style scoped>
  .product-details p {
    margin: 0.5rem 0;
  }
  </style>
  