import { ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

export const useProductStore = defineStore("productStore", () => {
    const products = ref([])

    const loadProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        products.value.push(...data)
    }

    const addProduct = async (product) => {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify({
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
                category: product.category
            })
        }).then(res => res.json())
            .then(json => console.log(json))

        products.value.push(product)
    }

    return {
        products,
        addProduct,
        loadProducts
    }
});