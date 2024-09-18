<template>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" required />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" v-model="form.address" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" required />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" class="form-control" id="phone" v-model="form.phone" required />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEdit ? "Update" : "Add" }}</button>
    </form>
  </template>
  
  <script setup>
  import { reactive, watch } from "vue";
  
  const props = defineProps({
    customer: Object,
    isEdit: Boolean,
  });
  
  const emit = defineEmits(["submit"]);
  
  const form = reactive({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  
  watch(
    () => props.customer,
    (newCustomer) => {
      if (newCustomer) Object.assign(form, newCustomer);
    },
    { immediate: true }
  );
  
  const handleSubmit = () => {
    emit("submit", form);
  };
  </script>
  