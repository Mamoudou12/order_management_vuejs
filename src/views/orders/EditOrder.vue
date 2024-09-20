<template>
  <h1 class="text-center">Edit Order</h1>
    <div class="container">
      <OrderForm :existingOrder="order" @submitOrder="handleSubmitOrder" />
      
    </div>
    
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import OrderForm from './OrderForm.vue';
  import { useRouter } from 'vue-router';
  
  // Identifiez si nous sommes en mode d'édition ou d'ajout
  const route = useRoute();
  const router = useRouter();
  const order = ref(null);
  const isEditMode = ref(false);
  
  // Fonction pour charger la commande (si en mode édition)
  onMounted(() => {
    const orderId = route.params.id;
  
    if (orderId) {
      isEditMode.value = true;
      // Remplacez cette partie par la logique pour récupérer la commande depuis une API ou la base de données
      order.value = {
        customer_name: 'John Doe',
        delivery_address: '123 Elm St',
        track_number: 'TRACK123',
        status: 'Shipped',
      };
    } else {
      isEditMode.value = false;
      order.value = {
        customer_name: '',
        delivery_address: '',
        track_number: '',
        status: '',
        details: [{ product_id: '', quantity: 1, price: 0.00 }],
      };
    }
  });
  
  // Fonction pour soumettre la commande (ajout ou modification)
  const handleSubmitOrder = (orderData) => {
    if (isEditMode.value) {
      console.log('Updated Order:', orderData);
      // Logique pour sauvegarder les modifications
    } else {
      console.log('New Order:', orderData);
      // Logique pour ajouter une nouvelle commande
    }
  
    // Redirection vers la liste des commandes après soumission
    router.push('/orders');
  };
  </script>
  