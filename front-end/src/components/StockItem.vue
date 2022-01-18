<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps<{
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    discount: number
}>();

const modelDiscount = computed({
    get() {
        return props.discount;
    }, 
    set(value) {
        store.dispatch('update', { 
            id: props.id,
            discount : value
        });
    }
});
        
const mQuantity = computed({
    get() {
        return props.quantity;
    }, 
    set(value) {
        store.dispatch('update', {
            id: props.id, 
            quantity: value}
        );
    }
});
</script>

<template>
    <tr>
        <td>{{id}}</td>
        <td>{{name}}</td>
        <td>{{description}}</td>
        <td><input type="number" min="0" step="1" max="1000" v-model="mQuantity"></td>
        <td>{{price}}</td>
        <td><input type="number" min="0" max="95" step="5" v-model="modelDiscount"></td>
        <td><button class="btn btn-danger" @click="store.dispatch('remove', id)">Delete</button></td>
    </tr>
</template>