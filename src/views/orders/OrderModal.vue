<template>
    <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="orderModalLabel">Add Order</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import OrderForm from './OrderForm.vue';
  </script>
  
  <style scoped>
  .modal-lg {
    max-width: 100%;
    margin-top: 0;
  }
  </style>
  