<script setup>
    defineProps(['product']);
</script>

<template>
    <p>{{ product.id }} - {{ product.title}} - {{ product.category }} - ${{ product.price }}</p>
</template>

<style scoped>
p {
  background: #f8f9fa;
  padding: 12px;
  border-left: 5px solid #007bff;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p span {
  font-weight: bold;
  color: #28a745;
}
</style>
