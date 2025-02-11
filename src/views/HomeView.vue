<script setup>
import ProductList from '../components/ProductList.vue';
import {useProductStore} from '../stores/useProductStore';
import { onMounted } from 'vue';

const productStore = useProductStore();

const {products, loadProducts} = productStore;

onMounted(
    loadProducts
)
</script>

<template>
<ProductList :products="products"/>
</template>