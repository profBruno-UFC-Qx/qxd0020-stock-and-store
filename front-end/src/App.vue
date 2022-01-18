<script setup lang="ts">
import ProductCard from './components/ProductCard.vue';
import Stock from './components/Stock.vue';
import StockItem from './components/StockItem.vue';
import ListProduct from './components/ListProduct.vue';
import { useStore } from 'vuex';

const store = useStore()
</script>

<template>
    <div class="container px-4 px-lg-5 mt-5">
        <ListProduct>
            <ProductCard 
                v-for="product in store.state.products" 
                :key="product.id"
                :name="product.name" 
                :price="product.price" 
                :quantity="product.quantity"
                :discount="product.discount"
                :rating="product.rating"></ProductCard>
        </ListProduct>
        <Stock>
            <StockItem v-for="product in store.state.products"
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

