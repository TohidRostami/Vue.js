<script setup>
import { ref } from 'vue';
import { useProductStore } from '../stores/useProductStore';

const {addProduct,products} = useProductStore();


const title = ref('');
const price = ref('');
const category = ref('');
const desc = ref('');
const image = ref('');



const addNewProduct =() => {
    addProduct({
        id: products.length + 1,
        title: title.value,
        price: price.value,
        category: category.value,
        description: desc.value,
        image: image.value
    });
    title.value = '', price.value = '', category.value = '', desc.value = '', image.value = '';
}


</script>

<template>
<form @submit.prevent="addNewProduct">
    <input type="text" v-model="title" placeholder="Enter title"/>
    <input type="text" v-model="price" placeholder="Enter price"/>
    <input type="text" v-model="category" placeholder="Enter category"/>
    <input type="text" v-model="desc" placeholder="Enter desc"/>
    <input type="text" v-model="image" placeholder="Enter image"/>
    <button type="submit">Add Product</button>
</form>
</template>

<style scoped>
form {
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px 40px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border 0.3s ease-in-out;
}

input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

button {
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

</style>
