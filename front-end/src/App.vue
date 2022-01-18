<script setup lang="ts">
import ProductCard from './components/ProductCard.vue';
import Stock from './components/Stock.vue';
import StockItem from './components/StockItem.vue';
import ListProduct from './components/ListProduct.vue';
</script>

<script lang="ts">

import './assets/js/faker.min.js';

export default {
    data() {
        const productsArray = [];
        for (let i = 0; i < 4; i++) {
            productsArray.push({
                id: i + 1,
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: Number(faker.commerce.price()),
                discount: 0,
                quantity: 3,
                rating: Math.floor(Math.random() * 5)
            });
        }
        return {
            products: productsArray
        };
    },
    methods: {
        remove(id: number) {
            let index = 0;
            for (let product of this.products) {
              if (product.id === id) {
                break;
              }
              index = index + 1;
            }
            this.products.splice(index, 1);
        },
    },
   
}
</script>

<template>
    <div class="container px-4 px-lg-5 mt-5">
        <ListProduct>
            <ProductCard 
                v-for="product in products" 
                :key="product.id"
                :name="product.name" 
                :price="product.price" 
                :quantity="product.quantity"
                :discount="product.discount"
                :rating="product.rating"></ProductCard>
        </ListProduct>
        <Stock>
            <StockItem v-for="product in products"
                        @remove="remove"
                        :key="product.id"
                        :id="product.id"
                        :name="product.name"
                        :description="product.description"
                        v-model:quantity="product.quantity"
                        :price="product.price"
                        v-model:discount="product.discount"></StockItem>
        </Stock>
    </div>
</template>

