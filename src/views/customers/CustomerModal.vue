<template>
    <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="customerName" class="form-label">Name</label>
              <input
                type="text"
                id="customerName"
                class="form-control"
                v-model="customer.name"
                :readonly="readonly"
              />
            </div>
            <div class="mb-3">
              <label for="customerAddress" class="form-label">Address</label>
               <textarea
                type="text"
                id="customerAddress"
                class="form-control"
                v-model="customer.address"
                :readonly="readonly"
                ></textarea>
            </div>
            <div class="mb-3">
              <label for="customerEmail" class="form-label">Email</label>
              <input
                type="email"
                id="customerEmail"
                class="form-control"
                v-model="customer.email"
                :readonly="readonly"
              />
            </div>
            <div class="mb-3">
              <label for="customerPhone" class="form-label">Phone</label>
              <input
                type="text"
                id="customerPhone"
                class="form-control"
                v-model="customer.phone"
                :readonly="readonly"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  
            <!-- Affichage du bouton Confirm seulement si l'édition est active -->
            <button
              v-if="!readonly"
              type="button"
              class="btn btn-primary"
              @click="$emit('save', customer)"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    customer: Object,
    modalId: String,
    title: String,
    readonly: Boolean,
  });
  
  defineEmits(['save']);
  </script>
  