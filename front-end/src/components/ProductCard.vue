<script setup lang="ts">
import { computed } from "@vue/runtime-core";

const props = defineProps<{
    name: string,
    price: number,
    quantity: number,
    discount: number,
    rating: number
}>();
    
const sale = computed((): boolean =>  props.discount > 0);
        
const priceWithDiscount = computed((): string  => (props.price - (props.discount/100) * props.price).toFixed(2));


</script>

<template>
    <div class="col mb-5">
        <div class="card h-100">
            <div v-if="sale" class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">{{name}}</h5>
                    <!-- Product reviews-->
                    <div v-if="rating" class="d-flex justify-content-center small text-warning mb-2">
                        <div v-for="i in rating" class="bi-star-fill"></div>
                    </div>
                    <!-- Product price-->
                    <span v-if="sale" class="text-muted text-decoration-line-through">R${{price}}</span>
                    <span v-if="sale"> R${{priceWithDiscount}}</span>
                    <span v-else>R${{price}}</span>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <a v-if="quantity" class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
                    <a v-else class="btn btn-outline-danger mt-auto" href="#">Out of stock</a>
                </div>
            </div>
        </div>
    </div>  
</template>