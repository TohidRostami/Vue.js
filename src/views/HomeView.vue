<script setup>
import {useProductStore} from '../stores/useProductStore';
import { watchEffect  } from 'vue';
import ProductItem from '../components/ProductItem.vue';

const productStore = useProductStore();

const {products,loadProducts} = productStore;

watchEffect(async () => {
  if (products.length === 0) {
    const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        loadProducts(data);
  }
});
</script>

<template> 
  <div>
        <h2>Product List</h2>
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<style scoped>
div {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
}

</style>