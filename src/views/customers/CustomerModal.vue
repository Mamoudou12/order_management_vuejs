<template>
    <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <CustomerForm v-if="!isDelete" :customer="customer" :isEdit="isEdit" @submit="handleSave" />
            <p v-if="isDelete">Are you sure you want to delete {{ customer.name }}?</p>
          </div>
          <div class="modal-footer" v-if="isDelete">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="handleDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import CustomerForm from "./CustomerForm.vue";
  
  const props = defineProps({
    modalId: String,
    title: String,
    customer: Object,
    isEdit: Boolean,
    isDelete: Boolean,
  });
  
  const emit = defineEmits(["save", "delete"]);
  
  const handleSave = (customer) => {
    emit("save", customer);
  };
  
  const handleDelete = () => {
    emit("delete");
  };
  </script>
  