<script setup>
import ProductList from '../components/ProductList.vue';
import {useProductStore} from '../stores/useProductStore';
import { onMounted,watchEffect  } from 'vue';

const productStore = useProductStore();

const {products, loadProducts} = productStore;

watchEffect(() => {
  if (products.length === 0) {
    loadProducts();
  }
});
</script>

<template>
<ProductList :products="products"/>
</template>