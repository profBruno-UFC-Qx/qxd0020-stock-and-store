<script setup lang="ts">
import { computed } from "@vue/runtime-core";

    
    const props = defineProps<{
        id: number,
        name: string,
        description: string,
        price: number,
        quantity: number,
        discount: number
    }>();

    const emit = defineEmits(['update:quantity', 'update:discount', 'remove']);
     
    const modelDiscount = computed({
        get() {
            return props.discount;
        }, 
        set(value) {
            emit('update:discount', value);
        }
    });
            
    const mQuantity = computed({
        get() {
            return props.quantity;
        }, 
        set(value) {
            emit('update:quantity', value);
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
        <td><button class="btn btn-danger" @click="$emit('remove', id)">Delete</button></td>
    </tr>
</template>