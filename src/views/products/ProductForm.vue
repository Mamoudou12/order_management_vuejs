<template>
  <form @submit.prevent="submitForm">
    <div class="row">
      <!-- Input pour le nom du produit -->
      <div class="col-md-6 mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="form.name"
          :disabled="isEdit"
          required
        />
      </div>
      
      <!-- Autres champs -->
      <div class="col-md-6 mb-3">
        <label for="category" class="form-label">Category</label>
        <input type="text" class="form-control" id="category" v-model="form.category" required />
      </div>

      <div class="col-md-6 mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" id="price" v-model="form.price" required />
      </div>
      
      <div class="col-md-6 mb-3">
        <label for="stock" class="form-label">Stock Quantity</label>
        <input type="number" class="form-control" id="stock" v-model="form.stock" required />
      </div>

      <div class="col-md-6 mb-3">
        <label for="barcode" class="form-label">Barcode</label>
        <input type="text" class="form-control" id="barcode" v-model="form.barcode" required />
      </div>

      <div class="col-md-6 mb-3">
        <label for="status" class="form-label">Status</label>
        <select class="form-control" id="status" v-model="form.status" required>
          <option value="Available">Active</option>
          <option value="Out of Stock">Inactive</option>
        </select>
      </div>

      <div class="col-md-12 mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="description"
          v-model="form.description"
          rows="2"
          required
        ></textarea>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, watch } from 'vue';

const props = defineProps({
product: Object,
isEdit: Boolean,
});

const emit = defineEmits(['submit']);

const form = reactive({ ...props.product });

watch(() => props.product, (newProduct) => {
Object.assign(form, newProduct);
}, { immediate: true });

const submitForm = () => {
emit('submit', { ...form });
};
</script>

<style scoped>
.row {
margin: 0 -15px;
}

.col-md-6 {
padding: 0 15px;
}

.text-end {
text-align: right;
}
</style>
