import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", () => {
    const products = ref([])

    const loadProducts = (data) => {
        products.value.push(...data)
    }

    const addProduct = (product) => {
        products.value.push(product)
    }

    return {
        products,
        addProduct,
        loadProducts
    }
});